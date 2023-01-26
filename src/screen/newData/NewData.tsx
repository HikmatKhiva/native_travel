import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {style} from './newDataStyle';
import {Button, Input} from '@rneui/base';
import {launchImageLibrary} from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import DatePicker from 'react-native-date-picker';
import Toast from 'react-native-toast-message';
import storage from '@react-native-firebase/storage';
const NewData = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [photo, setPhoto] = useState<any>(null);
  const [city, setCity] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const handleChoosePhoto = () => {
    const option = {
      noData: true,
    };
    launchImageLibrary(option, res => {
      if (res?.assets) {
        setPhoto(res?.assets[0]);
      }
    });
  };
  const uploadImage = async (uri: string, name: any, firebasePath: any) => {
    const imageRef = storage().ref(`${firebasePath}/${name}`);
    await imageRef.putFile(uri, {contentType: 'image/*'}).catch(error => {
      throw error;
    });
    const url = await imageRef.getDownloadURL();
    return url;
  };

  const addNewData = async () => {
    if (!city.length) {
      return Toast.show({type: 'error', text1: 'City is required'});
    }
    if (!desc.length) {
      return Toast.show({type: 'error', text1: 'Desc is required'});
    }
    if (!photo) {
      return Toast.show({type: 'error', text1: 'Image is required'});
    }
    try {
      setLoading(true);
      const {uri} = photo;
      const photoUrl = await uploadImage(uri, city, 'image');
      let id = Date.now();
      await firestore().collection('newData').doc(id.toString()).set({
        id: id,
        city: city,
        desc: desc,
        photoUrl: photoUrl,
      });
      setCity('');
      setDate(new Date());
      setDesc('');
      setLoading(false);
      Toast.show({
        type: 'success',
        text1: 'Your data has been added',
      });
    } catch (err: any) {
      Toast.show({type: 'error', text1: err?.message});
    }
  };
  return (
    <View>
      <Text style={style.title}>newData</Text>
      <View style={style.formContainer}>
        <Input
          maxLength={50}
          placeholder="City Name"
          onChangeText={newtText => setCity(newtText)}
          value={city}
        />
        <Input
          placeholder="Description"
          onChangeText={newText => setDesc(newText)}
          value={desc}
        />
        {/* {date && <Text>{date}</Text>} */}
        <DatePicker
          mode="date"
          modal
          open={open}
          date={date}
          onConfirm={newDate => {
            setOpen(false);
            setDate(newDate);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <View style={style.margin}>
          <Button
            style={style.button}
            title="Date Time"
            onPress={() => setOpen(true)}
          />
        </View>
        <View style={style.margin}>
          <Button title="Choose Photo" onPress={handleChoosePhoto} />
        </View>
        <View style={style.margin}>
          <Button
            disabled={loading}
            color={'green'}
            title="Save"
            onPress={addNewData}
          />
        </View>
      </View>
    </View>
  );
};
export default NewData;

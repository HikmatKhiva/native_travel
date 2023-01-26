import {View, FlatList, RefreshControl, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card} from '../../components/export';
import {styles} from './profileStyle';
import {Loading} from '../../components/export';
import firestore from '@react-native-firebase/firestore';
import {DataI} from '../../interfeys/interfeys';
const Profile = () => {
  const [data, setData] = useState();
  const [update, setUpdate] = useState<boolean>(false);
  useEffect(() => {
    setUpdate(true);
    let arr: [] = [];
    firestore()
      .collection('newData')
      .get()
      .then(res =>
        res.docs.forEach(doc => {
          if (doc.exists) {
            arr.push(doc.data() as DataI | any);
          }
        }),
      );
    setData(arr);
    setUpdate(false);
  }, []);
  const loadingFunc = () => {
    setUpdate(true);
    setTimeout(() => {
      setUpdate(false);
    }, 3000);
  };
  if (update) {
    return <Loading />;
  }
  if (!data) {
    return (
      <View>
        <Text>Salom </Text>
      </View>
    );
  }
  return (
    <View style={styles.center}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={update} onRefresh={loadingFunc} />
        }
        data={data}
        renderItem={({item}) => (
          <Card city={item.city} desc={item.desc} photoUrl={item.photoUrl} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Profile;

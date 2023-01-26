import React from 'react';
import {Text} from 'react-native';
import {styles} from './styleCard';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Card, Button} from '@rneui/themed';
import {DataI} from '../../interfeys/interfeys';
const CardItem = ({city, desc, photoUrl}: DataI) => {
  return (
    <Card containerStyle={styles.Card}>
      {/* <Button color={'#16a34a'} title="edit" containerStyle={styles.editBtn} /> */}
      <Card.Title>{city}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={styles.imageStyle}
        source={{
          uri: photoUrl,
        }}
      />
      <Text style={styles.marginB}>{desc}</Text>
      {/* <Text style={styles.marginB}>{createdDate}</Text> */}
      {/* <Button title="Share" /> */}
    </Card>
  );
};
export default CardItem;

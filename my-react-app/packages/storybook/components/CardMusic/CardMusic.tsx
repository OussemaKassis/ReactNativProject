import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

type CardMusicProps = {
  title: React.ReactNode;
  price: React.ReactNode;
  posterUrl: string,
  description?: React.ReactNode;
};

const CardMusic: React.FC<CardMusicProps> = (props) => {
  const { title, price, description, posterUrl } = props;
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{
          uri: posterUrl,
        }}
        style={{ height: 165, width: 165 }}
      ></Image>
      <View style={{flex : 1}}>
        <Text style={{ fontSize: 13, fontWeight: 700,  textAlign: "left", color: "white" }}>{title}</Text>
        <Text style={{ fontSize: 10, fontWeight: 500,  textAlign: "left", color: "white" }}>{description}</Text>
      </View>
    </View>
  );
};

export default CardMusic;

const styles = StyleSheet.create({});

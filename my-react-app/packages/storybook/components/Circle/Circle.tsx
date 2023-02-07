import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

type CircleProp = {
  borderRadius: number;
  image: string;
  icon: React.ReactNode;
};

const Circle: React.FC<CircleProp> = (props) => {
  const { icon, image } = props;
  return (
    <View style={{ width: 300, height: 300, backgroundColor: "#d73a63", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{
          uri: image,
        }}
        style={{ height: 120, width: 120 }}
      ></Image>
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({});

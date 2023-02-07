import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type CoverProp = {
  borderRadius: number;
  imageUrl: string;
};

const Cover: React.FC<CoverProp> = (props) => {
  const { borderRadius, imageUrl, width, height } = props;
  return (
    <View style={{ borderRadius: 20 }}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={{ height: 300, width: 300, borderRadius: 20, marginTop: 20 }}
      ></ImageBackground>
    </View>
  );
};

export default Cover;

const styles = StyleSheet.create({});

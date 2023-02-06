import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type StackProp = {
  borderRadius: number;
  imageUrl: string;
};

const Stack: React.FC<StackProp> = (props) => {
  const { borderRadius, imageUrl } = props;
  return (
    <View>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={{ height: 100, width: 100, borderRadius }}
      ></ImageBackground>
    </View>
  );
};

export default Stack;

const styles = StyleSheet.create({

});

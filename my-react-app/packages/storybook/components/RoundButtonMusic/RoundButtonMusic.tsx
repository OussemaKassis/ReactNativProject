import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';

type RoundButtonMusicProps = {
  backgroundColor: string;
  margin: number,
  position: string,
  transform: string,
  paddingLeft: number,
  left: number,
  top: number,
  icon: React.ReactNode;
  onClickButton: () => void;
  size?: number | 50;
};

const RoundButtonMusic: React.FC<RoundButtonMusicProps> = (props) => {
  const { backgroundColor, margin, position, left, transform, paddingLeft, top, icon, onClickButton, size } = props;

  const onPressButton = () => {
    onClickButton();
  };
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.roundButton,
          {
            backgroundColor,
            margin,
            position,
            paddingLeft,
            left,
            top,
            transform,
            height: size,
            width: size,
          },
        ]}
        onPress={onPressButton}
      >
        {icon}
      </TouchableOpacity>
    </View>
  );
};

export default RoundButtonMusic;

const styles = StyleSheet.create({
  roundButton: {
    borderRadius: 100,
    paddingLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

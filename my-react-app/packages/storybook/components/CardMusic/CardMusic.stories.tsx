import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import CardMusic from './CardMusic';
import { Button, Text, View } from 'react-native';
const CardMusicMeta: ComponentMeta<typeof CardMusic> = {
  title: 'CardMusic Component',
  component: CardMusic,
  argTypes: {},
  args: {
    title: <Text style={{ color: 'red' }}> test </Text>,
    price: <Text style={{ color: 'gray' }}> test </Text>,
    posterUrl; 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg',
  },
};
export default CardMusicMeta;

type CardMusicStory = ComponentStory<typeof CardMusic>;
export const Basic: CardMusicStory = (args) => <CardMusic {...args} />;
export const CardType2: CardMusicStory = (args) => <CardMusic {...args} />;

CardType2.args = {
  ...Basic.args,
  title: <Text style={{ color: 'black' }}> test </Text>,
  posterUrl; 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg',
  description: <Text style={{ color: 'black' }}> test </Text>,
  price: (
    <View>
      <Text style={{ color: 'black' }}> test </Text>
      <Button title="test" />
    </View>
  ),
};

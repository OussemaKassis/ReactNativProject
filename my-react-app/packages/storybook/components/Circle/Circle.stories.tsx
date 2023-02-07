import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import Circle from './Circle';
const CircleMeta: ComponentMeta<typeof Circle> = {
  title: 'Circle Component',
  component: Circle,
  argTypes: {},
  args: {
    image:
      'https://cdn.pixabay.com/photo/2022/01/28/17/28/headphones-6975223__340.png',
    borderRadius: 10,
    width: 100,
    height: 100,
  },
};
export default CircleMeta;

type CircleStory = ComponentStory<typeof Circle>;
export const Basic: CircleStory = (args) => <Circle {...args} />;

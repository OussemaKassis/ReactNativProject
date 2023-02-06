import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import Stack from './Stack'

export default {
  title: 'Stack',
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => (
  <Stack 
    {...args}
    routes = {[
      {
        path: '/',
        element: () => <div>Home</div>,
      },
    ]}
    navLinks={[
      {
        label: "test",
        path: "/",
      },
    ]}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "test story",
}

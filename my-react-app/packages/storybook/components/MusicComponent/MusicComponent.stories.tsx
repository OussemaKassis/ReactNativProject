import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import MusicComponent  from './MusicComponent'
const MusicComponentMeta: ComponentMeta<typeof MusicComponent> = {
    title: 'MusicComponent Component',
    component: MusicComponent,
    argTypes:{

    },
    args: {

    }
}
export default MusicComponentMeta;

type MusicComponentStory = ComponentStory<typeof MusicComponent>
export const Basic : MusicComponentStory = (args) => <MusicComponent {...args} />
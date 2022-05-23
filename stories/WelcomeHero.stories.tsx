import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import WelcomeHero from '@/components/WelcomeHero'

export default {
  title: 'Components/WelcomeHero',
  component: WelcomeHero,
  argTypes: {
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof WelcomeHero>

const Template: ComponentStory<typeof WelcomeHero> = (args) => <WelcomeHero {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'some title',
  text: 'some text',
}

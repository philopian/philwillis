import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Body from '@/components/Body'

export default {
  title: 'Components/Body',
  component: Body,
  argTypes: {
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof Body>

const Template: ComponentStory<typeof Body> = (args) => <Body {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}

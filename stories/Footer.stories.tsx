import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Footer from '@/components/Footer'

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {}

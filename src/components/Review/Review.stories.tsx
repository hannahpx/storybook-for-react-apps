import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Review } from './Review'

export default {
  title: 'Components/Review',
  component: Review,
  // define argTypes parameter on meta
  argTypes: {
    // set the arg name that you want to override
    rating: {
      // add custom control configuration
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
  },
} as ComponentMeta<typeof Review>

const Template: ComponentStory<typeof Review> = (args) => <Review {...args} />

export const Excellent = Template.bind({})
Excellent.args = {
  rating: 5,
}

export const VeryGood = Template.bind({})
VeryGood.args = {
  rating: 4.3,
}

export const Adequate = Template.bind({})
Adequate.args = {
  rating: 2.5,
}

export const VeryPoor = Template.bind({})
VeryPoor.args = {
  rating: 1,
}

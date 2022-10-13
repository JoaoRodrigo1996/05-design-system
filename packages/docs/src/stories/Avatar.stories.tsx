import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@rodrigo-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/JoaoRodrigo1996.png',
    alt: 'Rodrigo Mesquita'
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args:{
    src: undefined
  }
}

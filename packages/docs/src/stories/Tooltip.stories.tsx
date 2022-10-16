import { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@rodrigo-ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    children: '26 de Outubro disponível',
    text: '26'
  },
  argTypes: {}
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

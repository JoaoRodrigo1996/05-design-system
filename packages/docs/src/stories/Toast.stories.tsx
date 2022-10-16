import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@rodrigo-ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    text: 'Quarta-feira, 23 de Outubro às 16h'
  },
  argTypes: {}
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

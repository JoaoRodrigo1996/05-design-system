import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Text } from '../Text'
import {
  ToastAction,
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewPort,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  text: string
}

export function Toast(props: ToastProps) {
  return (
    <ToastContainer>
      <ToastRoot>
        <ToastTitle>
          <Text size="lg">{props.title}</Text>
          <ToastClose>
            <X weight="bold" />
          </ToastClose>
        </ToastTitle>
        <ToastDescription>
          <Text size="sm">{props.text}</Text>
        </ToastDescription>
        <ToastAction altText="" />
      </ToastRoot>

      <ToastViewPort />
    </ToastContainer>
  )
}

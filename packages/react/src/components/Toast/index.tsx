import { X } from 'phosphor-react'
import { ComponentProps, useEffect, useRef, useState } from 'react'
import { Button } from '../Button'
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
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <ToastContainer swipeDirection="right">
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        Agendar
      </Button>
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>
          <Text size="lg">{props.title}</Text>
          <ToastClose>
            <X weight="bold" />
          </ToastClose>
        </ToastTitle>
        <ToastDescription asChild>
          <Text size="sm">{props.text}</Text>
        </ToastDescription>
        <ToastAction altText="" />
      </ToastRoot>

      <ToastViewPort />
    </ToastContainer>
  )
}

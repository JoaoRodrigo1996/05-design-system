import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Provider, {})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  border: '2px solid $gray600',
  borderRadius: '$sm',
  padding: '$3 $5',

  display: 'flex',
  flexDirection: 'column',
})

export const ToastTitle = styled(Toast.Title, {
  marginBottom: 5,
  fontWeight: '$bold',
  color: '$gray100',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
})

export const ToastDescription = styled(Toast.Description, {
  margin: 0,
  color: '$gray200',
  lineHeight: 1.3,
})

export const ToastAction = styled(Toast.Action, {
  gridArea: 'action',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',

  svg: {
    color: '$gray100',
  },
})

export const ToastViewPort = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

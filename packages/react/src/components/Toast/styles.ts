import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

export const ToastContainer = styled(Toast.Provider, {})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 25px))` },
  to: { transform: `translateX(0)` },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + 25px))` },
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  border: '2px solid $gray600',
  borderRadius: '$sm',
  padding: '$3 $5',

  display: 'flex',
  flexDirection: 'column',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 200ms ease-out`,
    },

    '&[data-state="close"]': {
      animation: `${hide} 200ms ease-out`,
    },

    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },

    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },

    '&[data-state="end"]': {
      animation: `${swipeOut} 200ms ease-out`,
    },
  },
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

export const Button = styled('button', {})

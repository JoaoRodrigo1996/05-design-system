import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { styled, keyframes } from '../../styles'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const TooltipContainer = styled(TooltipPrimitive.Provider, {})

export const TooltipRoot = styled(TooltipPrimitive.Root, {})

export const TooltipTrigger = styled(TooltipPrimitive.Trigger, {
  backgroundColor: '$gray600',
  padding: '$3 $4',
  border: 'none',
  borderRadius: '$md',
  cursor: 'pointer',
})

export const TooltipPortal = styled(TooltipPrimitive.Portal, {})

export const TooltipContent = styled(TooltipPrimitive.Content, {
  backgroundColor: '$gray900',
  color: '$gray100',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  borderRadius: '$xs',
  padding: '$3 $4',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray900',
})

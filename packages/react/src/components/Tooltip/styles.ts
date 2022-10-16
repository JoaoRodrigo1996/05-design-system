import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { styled } from '../../styles'

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
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray900',
})

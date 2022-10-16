import { ComponentProps } from 'react'
import { Text } from '../Text'
import {
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
  TooltipArrow,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  children: string
  text: string
}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipRoot>
        <TooltipTrigger>
          <Text>{props.text}</Text>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={5}>
            <p>{props.children}</p>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipContainer>
  )
}

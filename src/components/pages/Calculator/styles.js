import styled from 'styled-components'

import { device } from '@/constants/devices'

export const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: row;
  }
`

export const CalculatorBlock = styled.div`
  width: 100%;

  @media ${device.tablet} { 
    width: 70%;
  }

`

export const HistoryBlock = styled.div`
  width: 100%;

  @media ${device.tablet} { 
    width: 30%;
  }
`

export const UndoButton = styled.button`
  color: ${props => props.theme.colors.font};
  width: auto;
  height: 40px;
  font-size: ${props => props.theme.fontSizes.normal};
  margin-bottom: ${props => props.theme.unit.single};
  margin-top: ${props => props.theme.unit.single};
  border-radius: ${props => props.theme.unit.single};
  border: 1px solid  ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.buttonBackground};

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.darkGray};
  }
`

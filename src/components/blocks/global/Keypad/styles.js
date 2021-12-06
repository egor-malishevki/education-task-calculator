import styled from 'styled-components'

export const Keypad = styled.div`
  padding-left: ${props => props.theme.unit.quadriple};
  padding-right: ${props => props.theme.unit.quadriple};
  padding-top: ${props => props.theme.unit.double};
  padding-bottom: ${props => props.theme.unit.double};
  
  display: grid;
  grid-gap: 1vw;
  align-self: center;
  justify-items: center;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(5, minmax(60px, 130px));
`

export const KeypadButton = styled.button`
  color: ${props => props.theme.colors.font};
  font-size: ${props => props.theme.fontSizes.weryBig};
  width: ${props => props.theme.unit.eight};
  height: ${props => props.theme.unit.eight};
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

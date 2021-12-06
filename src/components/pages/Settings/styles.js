import styled from 'styled-components'

export const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.extraBig};
`

export const SettingsBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const ClearHistory = styled.button`
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

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
`

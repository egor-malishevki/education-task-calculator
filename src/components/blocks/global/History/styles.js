import styled from 'styled-components'

export const History = styled.div`
  padding-left: ${props => props.theme.unit.quadriple};
  padding-right: ${props => props.theme.unit.quadriple};
  padding-bottom: ${props => props.theme.unit.double};
  border-left: 1px solid ${props => props.theme.colors.gray};
  height: 500px;
  overflow-y: scroll;
`

export const HistoryItem = styled.div`
  color: ${props => props.theme.colors.font};
  font-size: ${props => props.theme.fontSizes.big};
  margin-bottom: ${props => props.theme.unit.double};
`

export const HistoryTitle = styled.div`
  color: ${props => props.theme.colors.font};
  font-size: ${props => props.theme.fontSizes.big};
  text-align: center;
  margin-bottom: ${props => props.theme.unit.quadriple};
`

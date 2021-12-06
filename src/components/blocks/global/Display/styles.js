import styled from 'styled-components'

export default styled.div`
  color: ${props => props.theme.colors.font};
  font-size: ${props => props.theme.fontSizes.weryBig};
  padding-left: ${props => props.theme.unit.quadriple};
  padding-right: ${props => props.theme.unit.quadriple};
  padding-top: ${props => props.theme.unit.double};
  padding-bottom: ${props => props.theme.unit.double};
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  margin-right: ${props => props.theme.unit.double};

  display: flex;
  justify-content: flex-end;
`

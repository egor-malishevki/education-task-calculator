import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.backgroundDark};
  font-size: ${props => props.theme.fontSizes.weryBig};
  padding-left: ${props => props.theme.unit.quadriple};
  padding-right: ${props => props.theme.unit.quadriple};
  padding-top: ${props => props.theme.unit.double};
  padding-bottom: ${props => props.theme.unit.double};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  a {
    font-size: ${props => props.theme.fontSizes.big};
    text-decoration: none;
    color: ${props => props.theme.colors.gray};
    margin-left: ${props => props.theme.unit.double};
  }

  .is-active {
    text-decoration: none;
    color: ${props => props.theme.colors.fontDarkGray};
    border-bottom: 1px solid ${props => props.theme.colors.fontDarkGray};
  }
`

export const LinksBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

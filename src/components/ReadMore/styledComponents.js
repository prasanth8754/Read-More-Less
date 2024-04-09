import styled from 'styled-components'

// {BgCont, Heading, Img, Button,Cont}

export const BgCont = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`
export const Cont = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 992px) {
    width: 50%;
  }
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`
export const Heading = styled.h1`
  color: ${props => (props.para ? '#334155' : '#1e293b')};
  font-family: 'Roboto';
  font-size: ${props => (props.para ? '16px' : '25px')};
`
export const Img = styled.img`
  width: 100%;
  margin-top: 20px;
`
export const Button = styled.button`
  background-color: #1f81ff;
  border: 0px;
  width: 110px;
  height: 40px;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  border-radius: 8px;
  margin-top: 15px;
  align-self: flex-start;
  @media screen and (min-width: 768px) {
    align-self: center;
  }
`

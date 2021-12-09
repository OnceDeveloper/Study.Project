import React from 'react'
import styled from 'styled-components'

const CustomButton = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #949494;
  background-color: #fff;

  &:hover {
    text-decoration: underline;
  }
  &:active {
    border: 2px solid #787878;
    text-decoration: none;
  }
  ${props => {
    if (props.type === 'A' || props.type === 'B') {
      return `
      &:hover {
        background: #f5f5f5;
      }
      &:active{
        background: #cccccc;
      }
      `
    } else {
      return `
      background-color: #bdbdbd;
      &:hover {
        background: #a6a6a6;
      }
      &:active {
        background: #8a8a8a;
      }
      `
    }
  }};
`

const Button = ({ type, text, onClick = () => {} }) => (
  <CustomButton type={type} onClick={onClick}>
    {text}
  </CustomButton>
)

export default Button

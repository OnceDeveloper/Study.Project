import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import styled from 'styled-components'

const ContainerDiv = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: lightgray;
`
ReactDOM.render(
  <React.StrictMode>
    <ContainerDiv>
      <App />
    </ContainerDiv>
  </React.StrictMode>,
  document.getElementById('root')
)

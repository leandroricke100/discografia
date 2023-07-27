import styled from 'styled-components'
import Background from '../assets/background.png'

export const Container = styled.div`
  background-image: url(${Background});
  background-size: cover; /* Garante que a imagem de fundo cubra todo o container */
  background-position: center; /* Centraliza a imagem de fundo */
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerItems = styled.div`
  width: 800px;
  height: 800px;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.8);

  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-weight: 0;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffff;
    padding: 15px;
  }
`
export const ListMusic = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ContainerInput = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    border: none;
    border-radius: 20px;
    width: 620px;
  }

  ::placeholder {
    padding-left: 20px;
  }
`

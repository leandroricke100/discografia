import styled from 'styled-components'
import Background from '../assets/background.png'

export const ContainerBackground = styled.div`
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
  width: 80vw;
  height: 80vh;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.8);

  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 0;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffff;
  padding: 20px;
`

export const ListMusic = styled.div`
  display: flex;
  justify-content: column;
  margin-bottom: 150px;
`
export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0px 10px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  //justify-content: space-between;

  input {
    border: none;
    border-radius: 60px;
    width: 60vw;
    height: 4vh;
  }

  ::placeholder {
    padding-left: 20px;
  }
`
export const InfoAlbum = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: initial;
  width: 75vw;

  .infoMusic {
    display: flex;
    justify-content: flex-start;
    align-items: end;
  }
`

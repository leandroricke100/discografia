import { ContainerItems, Container, ListMusic, ContainerInput } from './styles'
import { Button } from '../Button/styles'
import api from '../services/api'
import { useState, useEffect } from 'react'
import formatTime from '../utils/formatTime'

import Logo from '../assets/logo.png'

function Home() {
  const [album, setAlbum] = useState()

  useEffect(() => {
    async function getAlbum() {
      const {
        data: { data },
      } = await api.get('/album?keyword=rei')
      setAlbum(data)
      console.log(data)
    }
    getAlbum()
  }, [])

  return (
    <>
      {album && (
        <Container>
          <ContainerItems>
            <div className="header">
              <img src={Logo} />
              <h1>Discografia</h1>
            </div>
            <div style={{ padding: '10px' }}>
              <p>Digite uma palavra chave</p>

              <ContainerInput>
                <input placeholder="Min" />
                <Button>Procurar</Button>
              </ContainerInput>

              <ListMusic>
                {album.map((x) => {
                  return (
                    <>
                      <div>
                        <h2>
                          {x.name}, {x.year}
                        </h2>
                      </div>
                      <p>Faixa</p>
                      {x.tracks.map((track) => {
                        return (
                          <div>
                            <p>{track.title}</p>
                            <p>{formatTime(track.duration)}</p>
                          </div>
                        )
                      })}
                    </>
                  )
                })}
              </ListMusic>
            </div>
          </ContainerItems>
        </Container>
      )}
    </>
  )
}

export default Home

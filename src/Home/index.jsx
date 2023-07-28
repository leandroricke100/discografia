import {
  ContainerItems,
  ContainerBackground,
  ListMusic,
  ContainerInput,
  Header,
  InfoAlbum,
} from './styles'
import { Button } from '../Button/styles'
import api from '../services/api'
import { useState, useEffect } from 'react'
import formatTime from '../utils/formatTime'

import Logo from '../assets/logo.png'

function Home() {
  const [albums, setAlbums] = useState()

  useEffect(() => {
    async function getAlbums() {
      const {
        data: { data },
      } = await api.get('/album?keyword=rei')
      setAlbums(data)
      console.log(data)
    }
    getAlbums()
  }, [])

  return (
    <>
      {albums && (
        <ContainerBackground>
          <ContainerItems>
            <Header>
              <img src={Logo} />
              <h1>Discografia</h1>
            </Header>

            <div style={{ padding: '20px', height: '100vh' }}>
              <p>Digite uma palavra chave</p>

              <ContainerInput>
                <input placeholder="Min" />
                <Button>Procurar</Button>
              </ContainerInput>

              <ListMusic>
                {albums.map((album) => {
                  return (
                    <div key={album.id}>
                      <h2>
                        {album.name}, {album.year}
                      </h2>

                      {album.tracks.map((track) => (
                        <InfoAlbum key={track.id}>
                          <div className="infoMusic">
                            <div>
                              <p>N°</p>
                              <p>{track.number}</p>
                            </div>
                            <div>
                              <p>Faixa</p>
                              <p>{track.title}</p>
                            </div>
                          </div>
                          <div>
                            <p>Duração</p>
                            <p>{formatTime(track.duration)}</p>
                          </div>
                        </InfoAlbum>
                      ))}
                    </div>
                  )
                })}
              </ListMusic>
            </div>
          </ContainerItems>
        </ContainerBackground>
      )}
    </>
  )
}

export default Home

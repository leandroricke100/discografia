import axios from 'axios'

const api = axios.create({
  baseURL: 'https://tiao.supliu.com.br/api/',
  headers: {
    Authorization: 'leandro_henrique_100@hotmail.com',
  },
})

export default api

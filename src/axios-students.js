import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dry-coast-58885.herokuapp.com/api',
  headers: {'Access-Control-Allow-Origin': '*'},
})

export default instance;
import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://chatter-mern.herokuapp.com',
});

export default instance;
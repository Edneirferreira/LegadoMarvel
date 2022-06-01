import axios from 'axios';
import md5 from 'md5';


const publicKey = 'b7f5166e20ce7b59db9a0d1ae05c4926';
const privateKey= 'ad4a16f933842cd72cc8fa826e6ad3d0e3dface0';

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const api = axios.create({
    baseURL: `http://gateway.marvel.com/v1/public/`,
    params: {
        ts: time,
        apikey: publicKey,
        hash,
    }
});

export default api;
import axios from 'axios';



const KEY = 'AIzaSyCGWswgZuDfg-mHAgrc7XFFtKxoUMZCwVM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        type: '',
        key: KEY
    }
})
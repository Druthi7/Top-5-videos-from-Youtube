import axios from 'axios';

const KEY = 'AIzaSyBInBeajgp4aTTuRJet0l-IlqMtsLlb53g';
//    AIzaSyDVfeUxsJzp8Vs0xnFGlhC2zrllcqbC4z

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});

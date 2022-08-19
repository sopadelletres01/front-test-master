import axios from 'axios';
let url = process.env.REACT_APP_SERVER_ADDRESS;
const httpConf = axios.create({
  baseURL: url,
  header: {
    'Content-Type': 'application/json',
  },
});
export default httpConf;

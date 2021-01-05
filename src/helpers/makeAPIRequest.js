import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

export default async endpoint => {
  try {
    return await axios({
      url: `${endpoint.url}`,
      adapter: jsonpAdapter,
      callbackParamName: 'c',
    }).json();
  } catch (e) {
    console.error(`Error fetching for ${endpoint.type}`, e);
  }
};

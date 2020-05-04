import axios from 'axios';
import {API_URL} from 'config';

export const albums = async (dispatch) => {
  try {
    const {data} = await axios({
      method: 'GET',
      url: `${API_URL}/albums`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(data);
    await dispatch({type: 'GET_ABUMS', payload: data});
  } catch (err) {
    console.log(err);
  }
};

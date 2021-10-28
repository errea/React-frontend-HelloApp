import axios from 'axios';

const FETCH_STARTED = 'hello-rails-react/app/javascript/redux/message/FETCH_STARTED';
const FETCH_SUCCEDED = 'hello-rails-react/app/javascript/redux/message/FETCH_SUCCEDED';
const FETCH_FAILED = 'hello-rails-react/app/javascript/redux/message/FETCH_FAILED';
const MESSAGES_PATH = 'https://shielded-waters-51364.herokuapp.com/api/v1/random-greeting';

const initialstate = {
  message: '...loading',
  loading: false,
};

export const getMessagesStarted = () => ({
  type: FETCH_STARTED,
});

export const getMessagesSuccess = (payload) => ({
  type: FETCH_SUCCEDED,
  payload,
});

export const getMessagesFailed = (payload) => ({
  type: FETCH_FAILED,
  payload,
});

export const fetchMessages = () => axios.get(MESSAGES_PATH);

export const getMessages = () => async (dispatch) => {
  dispatch(getMessagesStarted());
  const data = await fetchMessages();
  dispatch(getMessagesSuccess(data.data));
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCEDED:
      return {
        ...state, message: action.payload, loading: false,
      };
    default:
      return state;
  }
};

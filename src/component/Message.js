import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../redux/message/message';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messageReducer.message);

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  return (
    <div>
      Greeting:
      {' '}
      {message.title}
    </div>
  );
};

export default Greeting;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../redux/message/message';

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messageReducer.message);

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  return (
    <div>
      Message:
      {' '}
      {message.title}
    </div>
  );
};

export default Message;

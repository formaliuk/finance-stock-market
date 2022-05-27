import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateData } from '../redux/actions';
import { socket } from '../service/socket';

export const useInitSocketConnection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.emit('start');
    socket.on('ticker', (data) => {
      dispatch(updateData(data));
    });
  });
};

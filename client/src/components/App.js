import '../styles/App.css';
import React, { useEffect } from 'react';
import WatchList from './WatchList';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { updateData } from '../redux/store';

export const socket = io.connect('http://localhost:4000/');

function App() {
  const dispatch = useDispatch();

  function initiateConnection() {
    socket.emit('start');
    socket.on('ticker', (data) => {
      dispatch(updateData(data));
    });
  }

  useEffect(() => initiateConnection());

  return (
    <div className="App">
      <WatchList />
    </div>
  );
}

export default App;

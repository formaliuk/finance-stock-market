import { useState } from 'react';
import { socket } from '../service/socket';

export const useSetInterval = function() {
  const [intervalValue, setIntervalValue] = useState('')

  function intervalSubmitHandler() {
    if (intervalValue === '') {
        alert('Input cannot be empty')
    } else {
        socket.emit('change interval', intervalValue)
        setIntervalValue('')
    }
  }

function intervalChangeHandler(e) {
    const intervalValidation = /^[0-9]+$/;
    if (!intervalValidation.test(e.target.value)) {
        alert('Please enter the positive value')
    } else {
        setIntervalValue(e.target.value)
    }
  }

  return {
    intervalSubmitHandler, intervalChangeHandler, intervalValue
  }
}
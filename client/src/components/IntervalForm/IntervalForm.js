import React from 'react';
import { useSetInterval } from "../../hooks/useSetInterval";
import { usePreventDefault } from "../../hooks/usePreventDefault";
import './IntervalForm.css'

export const IntervalForm = () => {

  const { intervalSubmitHandler, intervalChangeHandler, intervalValue } = useSetInterval();
  const preventDefault = usePreventDefault();

  return (
    <form onSubmit={preventDefault}>
      <input
        onChange={intervalChangeHandler}
        type="text"
        placeholder="Enter seconds"
        value={intervalValue}
      />
      <button onClick={intervalSubmitHandler} className="submit-btn">
        Update
      </button>
    </form>
  );
};


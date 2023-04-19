import React, { useState } from 'react';
import { Expenseitem } from './expenseitem';
function Date() {
  const [date, setDate] = useState(new Date());

  function handleChange(event) {
    setDate(new Date(event.target.value));
  }

  return (
    <input type="date" value={date.toISOString().substr(0, 10)} onChange={handleChange} />
  );
}
export default Date;

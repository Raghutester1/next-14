import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
function Currency(props) {
    let [state,setState]=useState(0);
    const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(value);
  useEffect(()=>{
    setState(numberFormat(props.value));
  })
  

  return (
    <>{state}</>
  )
}

export default React.memo(Currency)
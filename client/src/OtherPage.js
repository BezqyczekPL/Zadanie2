import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Nazwa programu: MultiFab <br> </br>
      Dawid Nicpoń <br></br>
      Grupa 2.3 <br></br>
      <Link to="/">Wróć do pierwszej strony</Link>
    </div>
  );
};

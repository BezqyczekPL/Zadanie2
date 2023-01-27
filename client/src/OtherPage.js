import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <div> Nazwa programu: MultiFib </div>
      <div> Dawid Nicpoń </div>
      <div> Grupa 2.3 </div>
      <Link to="/">Wróć do pierwszej strony</Link>
    </div>
  );
};

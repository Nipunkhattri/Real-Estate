import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import ListBody from '../components/List/ListBody';

function Listpage(props) {
  let { data } = props;
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [])
  return (
    <>
      <Header />
      <ListBody data={data} />
    </>
  );
}

export default Listpage;
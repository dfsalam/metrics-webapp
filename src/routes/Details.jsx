import React from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';

const Details = () => {
  const { town } = useParams();
  return (
    <>
      <Detail town={town} />
    </>
  );
};

export default Details;

import React from 'react';
import Town from './Town';
import { useAppSelector } from '../redux/redux-hooks';

const TownContainer = () => {
  const { towns } = useAppSelector((state) => state.towns);

  return (
    <div>
      <h2>Towns</h2>
      {towns.map((item) => (
        <Town
          key={item.townId}
          townId={item.townId}
          townName={item.townName}
        />
      ))}

    </div>
  );
};

export default TownContainer;

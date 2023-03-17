import React from 'react';
import Town from './Town';
import { useAppSelector } from '../redux/redux-hooks';
import '../styles/TownContainer.css';

const TownContainer = () => {
  const { towns } = useAppSelector((state) => state.towns);

  return (
    <div>
      <h2 className="cntTitle">STATS BY TOWN</h2>
      <div className="cnt-body">
        {towns.map((item) => (
          <Town
            key={item.townId}
            townId={item.townId}
            townName={item.townName}
          />
        ))}
      </div>
    </div>
  );
};

export default TownContainer;

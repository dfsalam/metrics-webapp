import React from 'react';
import Town from './Town';
import { useAppSelector } from '../redux/redux-hooks';
import '../styles/TownContainer.css';

const TownContainer = () => {
  const { towns, townsSearch, searching } = useAppSelector((state) => state.towns);

  if (searching) {
    return (
      <div>
        <h2 className="cntTitle">STATS BY TOWN</h2>
        <div className="cnt-body">
          {townsSearch.map((item) => (
            <Town
              key={item.townId}
              townId={item.townId}
              townName={item.townName}
            />
          ))}
        </div>
      </div>
    );
  }

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

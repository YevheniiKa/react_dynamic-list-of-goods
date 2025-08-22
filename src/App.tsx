import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [isSelected, setIsSelected] = useState<Good[]>([]);
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    switch (selected) {
      case 'allGoods': {
        getAll().then(setIsSelected);
        break;
      }

      case '5first': {
        get5First().then(setIsSelected);
        break;
      }

      case 'allRed': {
        getRedGoods().then(setIsSelected);
        break;
      }
    }
  }, [selected]);

  return (
    <>
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          data-cy="all-button"
          onClick={() => setSelected('allGoods')}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => setSelected('5first')}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => {
            setSelected('allRed');
          }}
        >
          Load red goods
        </button>

        <GoodsList goods={isSelected} name={selected} />
      </div>
      ;
    </>
  );
};

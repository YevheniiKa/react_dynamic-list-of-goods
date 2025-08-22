import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
  name: string;
};

export const GoodsList: React.FC<Props> = ({ goods, name }) => (
  <ul style={name === 'allRed' ? { color: 'red' } : undefined}>
    {goods.map(good => (
      <li key={good.id} data-cy="good" style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithComma } from '../utils/format';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}{' '}
      <span>
        {sign}${numberWithComma(Math.abs(transaction.amount).toFixed(2))}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </li>
  );
};

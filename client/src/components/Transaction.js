import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithComma } from '../utils/format';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.createdAt.slice(0, 10).split('-').join('/')}
      <span>{transaction.text} </span>
      <span>
        {sign}${numberWithComma(Math.abs(transaction.amount).toFixed(2))}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction._id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </li>
  );
};

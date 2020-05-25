import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Modal } from './Modal';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export const GraphView = () => {
  const { transactions = [], getTransactions } = useContext(GlobalContext);
  const [show, toggleModal] = useState(false);

  useEffect(() => {
    getTransactions();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dataObj = {};
  const dataArr = [];
  transactions.forEach((tran) => {
    dataObj[tran.text] = dataObj[tran.text]
      ? dataObj[tran.text] + tran.amount
      : tran.amount;
  });
  Object.keys(dataObj).forEach((key) => {
    dataArr.push({ text: key, amount: dataObj[key] });
  });

  return (
    <>
      <button className="btn btn-charts" onClick={() => toggleModal(true)}>
        Show Charts
      </button>
      <Modal show={show} handleClose={() => toggleModal(false)}>
        <ResponsiveContainer width="100%" height={450}>
          <BarChart
            width={90}
            height={300}
            data={dataArr}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="text" />
            <YAxis dataKey="amount" />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="amount" fill="#8884d8" />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>
      </Modal>
    </>
  );
};

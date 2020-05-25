import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GraphView } from './components/GraphView';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <div className="flex-child infos">
          <Balance />
          <IncomeExpenses />
          <GraphView />
          <AddTransaction />
        </div>
        <div className="flex-child history">
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;

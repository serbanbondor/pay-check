import React from 'react';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider, isLoggedIn, hasAccount } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      {isLoggedIn ? null : hasAccount ? <Login /> : <Register />}
      <div className="container">
        <div className="flex-child infos">
          <Balance />
          <IncomeExpenses />
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

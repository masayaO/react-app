import React, { FC } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserItems from './containers/pages/UserItems';
import RegisterItem from './containers/pages/RegisterItem';
import Header from './containers/organisms/Header';

const App: FC = () => {
  const userId = '1';

  return (
    <>
      <div className="container">
        <Header userId={userId} />
        <Routes>
          <Route path="/" element={<UserItems userId={userId} />} />
          <Route path="/:userId/register" element={<RegisterItem />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

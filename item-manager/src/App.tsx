import React, { FC } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserItems from './containers/pages/UserItems';
import RegisterItem from './containers/pages/RegisterItem';
import PrivateRoute from './PrivateRoute';
import Login from './containers/pages/Login';
import Signup from './containers/pages/Signup';

const App: FC = () => {
  const userId = '1';

  return (
    <>
      <div className="container">
        <Routes>
          <PrivateRoute path="/" element={<UserItems userId={userId} />} />
          <PrivateRoute path="/:userId/register" element={<RegisterItem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

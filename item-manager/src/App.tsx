import React, { FC } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserItems from './containers/pages/UserItems';
import RegisterItem from './containers/pages/RegisterItem';
import PrivateRoute from './PrivateRoute';
import Login from './containers/pages/Login';
import Signup from './containers/pages/Signup';
import paths from './paths';

const App: FC = () => (
  <>
    <div className="container">
      <Routes>
        <PrivateRoute path={paths.home} element={<UserItems />} />
        <PrivateRoute path={paths.items} element={<RegisterItem />} />
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.signup} element={<Signup />} />
        <Route path="*" element={<Navigate to={paths.home} />} />
      </Routes>
    </div>
  </>
);

export default App;

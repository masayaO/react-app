import React, { FC } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserItems from './containers/pages/UserItems';
import RegisterItem from './containers/pages/RegisterItem';
import PrivateRoute from './PrivateRoute';
import Login from './containers/pages/Login';
import Signup from './containers/pages/Signup';
import Paths from './utils/paths';
import getPath from './utils/get-path';

const App: FC = () => (
  <>
    <div className="container">
      <Routes>
        <PrivateRoute
          path={getPath<typeof Paths.home>({ path: Paths.home })}
          element={<UserItems />}
        />
        <PrivateRoute
          path={getPath<typeof Paths.items>({ path: Paths.items })}
          element={<RegisterItem />}
        />
        <Route
          path={getPath<typeof Paths.login>({ path: Paths.login })}
          element={<Login />}
        />
        <Route
          path={getPath<typeof Paths.signup>({ path: Paths.signup })}
          element={<Signup />}
        />
        <Route
          path="*"
          element={
            <Navigate to={getPath<typeof Paths.home>({ path: Paths.home })} />
          }
        />
      </Routes>
    </div>
  </>
);

export default App;

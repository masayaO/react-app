import React, { FC, useContext } from 'react';
import { Route, RouteProps } from 'react-router';
import UserContext from './contexts';
import Login from './containers/pages/Login';

const PrivateRoute: FC<RouteProps> = ({ element, ...options }) => {
  const { user } = useContext(UserContext);
  const Element = user ? element : <Login />;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route element={Element} {...options} />;
};

export default PrivateRoute;

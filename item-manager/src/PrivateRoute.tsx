import React, { FC, useContext } from 'react';
import { Navigate, Route, RouteProps } from 'react-router';
import UserContext from './contexts';

const PrivateRoute: FC<RouteProps> = ({ element, ...options }) => {
  const { userId } = useContext(UserContext);
  const Element = userId ? element : <Navigate to="login" />;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...options} element={Element} />;
};

export default PrivateRoute;

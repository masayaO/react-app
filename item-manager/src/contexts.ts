import { createContext } from 'react';

type UserContextValue = {
  userId: string | null;
};

const UserContext = createContext<UserContextValue>({
  userId: null,
});

export default UserContext;

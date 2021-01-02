import { createContext } from 'react';
import { User } from './domains/models/user';

type UserContextValue = {
  user: User | null;
};

const UserContext = createContext<UserContextValue>({
  user: null,
});

export default UserContext;

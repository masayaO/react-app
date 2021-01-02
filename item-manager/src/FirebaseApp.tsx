import React, { FC, useEffect, useState } from 'react';
import UserContext from 'contexts';
import { User } from './domains/models/user';
import 'firebase/auth';
import 'firebase/firestore';
import { auth } from './firebase';

const FirebaseApp: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser({ userId: firebaseUser.uid });
      } else {
        setUser(null);
      }
    });
  });

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default FirebaseApp;

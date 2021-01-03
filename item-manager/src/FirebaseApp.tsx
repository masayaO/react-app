import React, { FC, useEffect, useState } from 'react';
import UserContext from 'contexts';
import 'firebase/auth';
import 'firebase/firestore';
import { auth } from './firebase';

const FirebaseApp: FC = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(
    () =>
      auth.onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
          setUserId(firebaseUser.uid);
        } else {
          setUserId(null);
        }
      }),
    [userId],
  );

  return (
    <UserContext.Provider value={{ userId }}>{children}</UserContext.Provider>
  );
};

export default FirebaseApp;

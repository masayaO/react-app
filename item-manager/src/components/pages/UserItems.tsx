import React, { FC, Suspense } from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import Spinner from '../molecules/Spinner';
import EnhancedItemList from '../../containers/organisms/ItemList';
import PageTitle from '../molecules/PageTitle';

const UserItems: FC<{ userId: string }> = ({ userId }) => (
  <>
    <PageTitle title="User Items" />
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <EnhancedItemList userId={userId} />
      </Suspense>
    </ErrorBoundary>
  </>
);

export default UserItems;

import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import CompleteButton from '../components/CompleteButton';

const ActivityPage = () => {
  const { activityName } = useParams();

  const ActivityComponent = React.lazy(() => import(`./activities/${activityName}`));

  return (
    <div className='page'>
      <Suspense fallback={<div>Loading...</div>}>
        <ActivityComponent />
      </Suspense>
      <CompleteButton/>
    </div>
  );
};

export default ActivityPage;

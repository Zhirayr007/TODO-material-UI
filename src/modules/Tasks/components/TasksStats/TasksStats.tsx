import React from 'react';
import { observer } from 'mobx-react';
import { CircularProgress } from '@mui/material';
import { TasksStoreInstance } from '../../store';
import { BoxStyle, SpanStyle, StatsError } from './TasksStats.style';

function TasksStatsProto() {
  const { isTasksLoading, tasksStats } = TasksStoreInstance;

  return (
    <BoxStyle>
      {tasksStats ? (
        <>
          <p>
            Total:
            {isTasksLoading ? (
              <CircularProgress size={15} />
            ) : (
              <SpanStyle variant="overline">{tasksStats.total}</SpanStyle>
            )}
          </p>
          <p>
            Important:
            {isTasksLoading ? (
              <CircularProgress size={15} />
            ) : (
              <SpanStyle variant="overline">{tasksStats.important}</SpanStyle>
            )}
          </p>
          <p>
            Done:{' '}
            {isTasksLoading ? (
              <CircularProgress size={15} />
            ) : (
              <SpanStyle variant="overline">{tasksStats.done}</SpanStyle>
            )}
          </p>
        </>
      ) : (
        <StatsError className="d-flex justify-content-center w-100">Stats is not available</StatsError>
      )}
    </BoxStyle>
  );
}

export const TasksStats = observer(TasksStatsProto);

// import React from 'react';
// import { observer } from 'mobx-react';
// import { TasksStoreInstance } from '../../store';
// import { Loader } from 'components/index';

// function TasksStatsProto() {
//   const { isTasksLoading, tasksStats } = TasksStoreInstance;

//   return (
//     <div className="d-flex w-100 justify-content-between">
//       {tasksStats ? (
//         <>
//           <p>
//             Total:
//             <Loader isLoading={isTasksLoading} variant="dot">
//               <span className="badge bg-secondary">{tasksStats.total}</span>
//             </Loader>
//           </p>
//           <p>
//             Important:
//             <Loader isLoading={isTasksLoading} variant="dot">
//               <span className="badge bg-secondary">{tasksStats.important}</span>
//             </Loader>
//           </p>
//           <p>
//             Done:
//             <Loader isLoading={isTasksLoading} variant="dot">
//               <span className="badge bg-secondary">{tasksStats.done}</span>
//             </Loader>
//           </p>
//         </>
//       ) : (
//         <p className="d-flex justify-content-center w-100">Stats is not available</p>
//       )}
//     </div>
//   );
// }

// export const TasksStats = observer(TasksStatsProto);

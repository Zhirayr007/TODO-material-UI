import React from 'react';
import { observer } from 'mobx-react';
import { CircularProgress } from '@mui/material';
import { Task } from '../Task';
import { TasksStoreInstance } from '../../store';
import { ElementStyle, ListStyle, Wrapper } from './TasksList.style';

function TasksListProto() {
  const { isTasksLoading, tasks, changeTaskImportance, deleteTask, changeTaskComplete } = TasksStoreInstance;

  return (
    <Wrapper>
      {isTasksLoading ? (
        <CircularProgress size={15} />
      ) : (
        <>
          {tasks?.length ? (
            <ListStyle component="ul">
              {tasks.map((task) => (
                <ElementStyle component="li" key={task.id}>
                  <Task
                    key={task.id}
                    task={task}
                    changeTaskImportance={changeTaskImportance}
                    deleteTask={deleteTask}
                    changeTaskComplete={changeTaskComplete}
                  />
                </ElementStyle>
              ))}
            </ListStyle>
          ) : (
            <p>Not found</p>
          )}
        </>
      )}

      {/* <Loader isLoading={isTasksLoading}>
        {tasks?.length ? (
          <ListStyle component="ul" className="list-group todo-list mb-3">
            {tasks.map((task) => (
              <ElementStyle component="li" key={task.id} className="list-group-item">
                <Task
                  key={task.id}
                  task={task}
                  changeTaskImportance={changeTaskImportance}
                  deleteTask={deleteTask}
                  changeTaskComplete={changeTaskComplete}
                />
              </ElementStyle>
            ))}
          </ListStyle>
        ) : (
          <p>Not found</p>
        )}
      </Loader> */}
    </Wrapper>
  );
}

export const TasksList = observer(TasksListProto);

// import React from 'react';
// import { observer } from 'mobx-react';
// import { Task } from '../Task';
// import { TasksStoreInstance } from '../../store';
// import { Loader } from 'components/index';
// import './TasksList.css';

// function TasksListProto() {
//   const { isTasksLoading, tasks, changeTaskImportance, deleteTask, changeTaskComplete } = TasksStoreInstance;

//   return (
//     <div className="tasks-wrapper d-flex align-items-center justify-content-center">
//       <Loader isLoading={isTasksLoading}>
//         {tasks?.length ? (
//           <ul className="list-group todo-list mb-3">
//             {tasks.map((task) => (
//               <li key={task.id} className="list-group-item">
//                 <Task
//                   key={task.id}
//                   task={task}
//                   changeTaskImportance={changeTaskImportance}
//                   deleteTask={deleteTask}
//                   changeTaskComplete={changeTaskComplete}
//                 />
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Not found</p>
//         )}
//       </Loader>
//     </div>
//   );
// }

// export const TasksList = observer(TasksListProto);

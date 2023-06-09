import { FILTER_TYPES } from 'constants/index';
import { TaskEntity, SearchFormEntity, TasksStatsEntity, TaskEntityAdd } from 'domains/index';
import { CreateTaskRequest, GetAllTasksQuery, GetAllTasksResponse, GetTaskResponse } from 'http/index';

export const mapToExternalParams = (params?: SearchFormEntity): GetAllTasksQuery | undefined => {
  if (!params) return undefined;

  const { searchValue, filterType } = params;
  let isCompleted = undefined;

  if (filterType === FILTER_TYPES.DONE) isCompleted = true;
  else if (filterType === FILTER_TYPES.ACTIVE) isCompleted = false;

  return {
    name_like: searchValue ?? undefined,
    isImportant: filterType === FILTER_TYPES.IMPORTANT ? true : undefined,
    isCompleted,
  };
};

export const mapToInternalTasks = (tasks: GetAllTasksResponse): TaskEntity[] => {
  const internalTasks: TaskEntity[] = [];
  // console.log('parametr');
  // console.log(tasks);
  tasks.forEach((task) => {
    if (task.id) {
      internalTasks.push({
        name: task.name || 'Неизвестно',
        id: String(task.id),
        info: task.info || 'Неизвестно',
        isImportant: task.isImportant || false,
        isDone: task.isCompleted || false,
      });
    }
  });
  // console.log('internalTasks');
  // console.log(internalTasks);

  return internalTasks;
};

export const getInternalInfo = (tasks: GetAllTasksResponse): TasksStatsEntity => {
  const total = tasks.length;
  const anotherStats = tasks.reduce(
    (acc, task) => {
      return {
        important: task.isImportant ? acc.important + 1 : acc.important,
        done: task.isCompleted ? acc.done + 1 : acc.done,
      };
    },
    {
      important: 0,
      done: 0,
    }
  );

  return {
    total,
    ...anotherStats,
  };
};

//Свое
export const mapToExternalTask = (newTask: TaskEntityAdd): CreateTaskRequest => {
  return {
    name: newTask.name,
    info: newTask.info,
    isImportant: newTask.isImportant,
  };
};

export const mapToInternalTaskEdit = (task: GetTaskResponse): TaskEntity => {
  return {
    id: String(task.id),
    name: task.name || 'Неизвестно',
    info: task.info || 'Неизвестно',
    isImportant: task.isImportant || false,
    isDone: task.isCompleted || false,
  };
};

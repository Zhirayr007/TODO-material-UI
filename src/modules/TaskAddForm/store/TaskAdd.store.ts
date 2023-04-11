import { action, computed, makeObservable, observable } from 'mobx';
import { TaskEntityAdd } from 'domains/index';
import { TaskAddAgentInstance } from 'http/agent/TaskAdd.agent';
import { mapToExternalTask } from 'helpers/mappers';
type PrivateFields = '_task';

export class TaskAddStore {
  constructor() {
    makeObservable<this, PrivateFields>(this, {
      _task: observable, //Задача
      task: computed,
      createTask: action,
    });
  }

  private _task: TaskEntityAdd = {
    name: '',
    info: '',
    isImportant: false,
  };

  get task(): TaskEntityAdd {
    return this._task;
  }
  createTask = async (newTask: TaskEntityAdd) => {
    const a = mapToExternalTask(newTask);
    await TaskAddAgentInstance.createTask(a);
    return true;
  };
}

export const TaskAddStoreInstance = new TaskAddStore();

import { action, computed, makeObservable, observable } from 'mobx';
import { TaskEntity } from 'domains/index';
import { TasksMock } from '__mocks__/index';
import { delay } from 'helpers/delay';
import { TaskEditAgentInstance } from 'http/agent/TaskEdit.agent';
import { mapToInternalTaskEdit } from 'helpers/mappers';
import { GetTaskResponse } from 'http/model';
type PrivateFields = '_task' | '_isTasksLoading';

export class TaskEditStore {
  constructor() {
    makeObservable<this, PrivateFields>(this, {
      _task: observable,
      _isTasksLoading: observable,
      task: computed,
      isTasksLoading: computed,
      loadTask: action,
      changeTask: action,
    });
  }
  private _isTasksLoading = false;

  get isTasksLoading(): boolean {
    return this._isTasksLoading;
  }

  private _task: TaskEntity = {
    id: '',
    name: '',
    info: '',
    isImportant: false,
    isDone: false,
  };

  get task(): TaskEntity {
    return this._task;
  }

  getTask = async (id: string) => {
    const res = await TaskEditAgentInstance.getTask(id);
    this._task = mapToInternalTaskEdit(res);
    return {
      task: mapToInternalTaskEdit(res),
    };
  };
  loadTask = async (id: any) => {
    this._isTasksLoading = true;
    await this.getTask(id);
    this._isTasksLoading = false;
  };

  changeTask = async (id: any, newData: TaskEntity) => {
    const editTask = {
      name: newData.name,
      info: newData.info,
      isImportant: newData.isImportant,
      isCompleted: newData.isDone,
    };
    await TaskEditAgentInstance.updateTask(id, editTask);
    return true;
  };
}

export const TaskEditStoreInstance = new TaskEditStore();

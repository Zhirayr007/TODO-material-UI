import React, { MouseEvent, useCallback } from 'react';
import { observer } from 'mobx-react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { StatusFilter } from '../StatusFilter';
import { TasksStoreInstance } from '../../store';
import { DEFAULT_SEARCH_FORM } from './SearchForm.constants';
import { FormStyle } from './SearchForm.style';
import { SearchInput } from 'components/index';
import { FiltersType, SearchFormEntity } from 'domains/index';
import './SearchForm.css';

function SearchFormProto() {
  const { isTasksLoading, updateTasks } = TasksStoreInstance;
  const { control, handleSubmit, setValue, reset } = useForm<SearchFormEntity>({
    defaultValues: DEFAULT_SEARCH_FORM,
  });

  const onSubmit = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    handleSubmit((form) => {
      updateTasks(form);
    })();
  };

  const onTasksTypeChange = useCallback((tasksType: FiltersType) => setValue('filterType', tasksType), []);

  const onSearchInputChange = (searchText: string) => setValue('searchValue', searchText);
  const onSearchInputReset = () => setValue('searchValue', '');

  return (
    <FormStyle component="form">
      <Controller
        control={control}
        name="searchValue"
        render={({ field }) => (
          <SearchInput
            disabled={isTasksLoading}
            value={field.value}
            onChange={onSearchInputChange}
            onReset={onSearchInputReset}
          />
        )}
      />
      <Controller
        control={control}
        name="filterType"
        render={({ field }) => (
          <StatusFilter disabled={isTasksLoading} onChange={onTasksTypeChange} tasksType={field.value} />
        )}
      />
      <Button
        variant="contained"
        disabled={isTasksLoading}
        type="submit"
        className="btn btn-primary"
        onClick={onSubmit}>
        Find
      </Button>
    </FormStyle>
  );
}

export const SearchForm = observer(SearchFormProto);

// import React, { MouseEvent, useCallback } from 'react';
// import { observer } from 'mobx-react';
// import { Controller, useForm } from 'react-hook-form';
// import { StatusFilter } from '../StatusFilter';
// import { TasksStoreInstance } from '../../store';
// import { DEFAULT_SEARCH_FORM } from './SearchForm.constants';
// import { SearchInput } from 'components/index';
// import { FiltersType, SearchFormEntity } from 'domains/index';
// import './SearchForm.css';

// function SearchFormProto() {
//   const { isTasksLoading, updateTasks } = TasksStoreInstance;
//   const { control, handleSubmit, setValue, reset } = useForm<SearchFormEntity>({
//     defaultValues: DEFAULT_SEARCH_FORM,
//   });

//   const onSubmit = (evt: MouseEvent<HTMLButtonElement>) => {
//     evt.preventDefault();
//     handleSubmit((form) => {
//       updateTasks(form);
//     })();
//   };

//   const onTasksTypeChange = useCallback((tasksType: FiltersType) => setValue('filterType', tasksType), []);

//   const onSearchInputChange = (searchText: string) => setValue('searchValue', searchText);
//   const onSearchInputReset = () => setValue('searchValue', '');

//   return (
//     <form className="search-form d-flex justify-content-between">
//       <Controller
//         control={control}
//         name="searchValue"
//         render={({ field }) => (
//           <SearchInput
//             disabled={isTasksLoading}
//             value={field.value}
//             onChange={onSearchInputChange}
//             onReset={onSearchInputReset}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="filterType"
//         render={({ field }) => (
//           <StatusFilter disabled={isTasksLoading} onChange={onTasksTypeChange} tasksType={field.value} />
//         )}
//       />
//       <button disabled={isTasksLoading} type="submit" className="btn btn-primary" onClick={onSubmit}>
//         Find
//       </button>
//     </form>
//   );
// }

// export const SearchForm = observer(SearchFormProto);

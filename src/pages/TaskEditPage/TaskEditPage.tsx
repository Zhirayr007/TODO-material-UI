import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { PageContainer } from 'components/index';
import { TaskEdit } from 'modules/index';
// import { TaskEntity } from 'domains/index';
export function TaskEditPage() {
  const { taskId } = useParams();

  return (
    <PageContainer>
      <Typography variant="h4" fontWeight={500} textAlign="center">
        TODO LIST | EDIT TASK {taskId}
      </Typography>
      <TaskEdit Id={taskId} />
    </PageContainer>
  );
}

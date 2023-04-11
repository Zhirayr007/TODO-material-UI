import React from 'react';
import { Typography } from '@mui/material';
import { TaskAdd } from 'modules/index';
import { PageContainer } from 'components/index';

export function TaskAddPage() {
  return (
    <PageContainer>
      <Typography variant="h4" fontWeight={500} textAlign="center">
        TODO LIST | ADD TASK
      </Typography>
      <TaskAdd />
    </PageContainer>
  );
}

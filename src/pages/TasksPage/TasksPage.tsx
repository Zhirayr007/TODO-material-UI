import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, styled } from '@mui/material';
import { PageContainer } from 'components/index';
import { Tasks } from 'modules/index';
import { PATH_LIST } from 'constants/index';

const StyleLink = styled(Link)({
  display: 'block',
  color: '#fff ',
  backgroundColor: '#6c757d',
  borderColor: '#6c757d',
  fontWeight: '400',
  lineHeight: '1.5',
  textAlign: 'center',
  textDecoration: ' none',
  verticalAlign: 'middle',
  cursor: 'pointer',
  userSelect: 'none',
  border: '1px solid transparent',
  padding: '0.375rem 0.75rem',
  fontSize: '1rem',
  borderRadius: '0.25rem',
  transition:
    'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
});

export function TasksPage() {
  return (
    <PageContainer>
      <Typography variant="h4" fontWeight={500}>
        TODO LIST
      </Typography>
      <Tasks />
      <StyleLink to={PATH_LIST.ADD}>Add task</StyleLink>
    </PageContainer>
  );
}

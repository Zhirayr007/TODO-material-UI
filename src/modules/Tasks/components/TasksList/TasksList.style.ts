import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)({
  minHeight: '400px',
  display: 'flex!important',
  alignItems: 'center!important',
  justifyContent: 'center!important',
});

export const ListStyle = styled(Box)({
  width: '100%',
  marginBottom: '1rem!important',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '0',
  borderRadius: '0.25rem',
});

export const ElementStyle = styled(Box)({
  position: 'relative',
  display: 'block',
  padding: '0.5rem 1rem',
  color: '#212529',
  textDecoration: 'none',
  backgroundColor: '#fff',
  border: '1px solid rgba(0,0,0,.125)',
});

import { Box, Typography, styled } from '@mui/material';

export const BoxStyle = styled(Box)({
  justifyContent: 'space-between!important',
  width: '100%!important',
  display: 'flex!important',
});

export const SpanStyle = styled(Typography)({
  backgroundColor: '#6c757d!important',
  display: 'inline-block',
  padding: '0.35em 0.65em',
  fontSize: '.75em',
  fontWeight: '700',
  lineHeight: '1',
  color: '#fff',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'baseline',
  borderRadius: '0.25rem',
});

export const StatsError = styled(Typography)({
  justifyContent: 'space-center!important',
  width: '100%!important',
  display: 'flex!important',
});

import Box from '@mui/material/Box';
import styled from 'styled-components';
import { selectCurrentUser } from '../AuthPage/authSlice';
import type { ReturnTypeFunc } from '../../app/types';
import { useAppSelector as useSelector } from '../../app/hooks';
import { MainContent } from './components/MainContent';
import { HeaderMenu } from './components/HeaderMenu';

const MainBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  background: '#eeeeee'
});

export const Home = (): ReturnTypeFunc => {
  const user = useSelector(selectCurrentUser);

  return (
    <MainBox>
      <HeaderMenu />
      <MainContent userRole={user?.role} />
    </MainBox>
  );
};

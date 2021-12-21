import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { ReturnTypeFunc } from '../../app/types';
import { HeaderMenu } from './components/HeaderMenu';

const MainBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  background: '#eeeeee'
});

const MainContent = styled(Box)({
  height: '100%',
  background: '#FFFFFF',
  padding: '20px',
  margin: '15px',
  borderRadius: '15px',
  boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.06)'
});

export const Layout = (): ReturnTypeFunc => (
  <MainBox>
    <HeaderMenu />
    <MainContent>
      <Outlet />
    </MainContent>
  </MainBox>
);
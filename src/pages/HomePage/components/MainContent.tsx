import Box from '@mui/material/Box';
import styled from 'styled-components';
import { DepositCalculator } from './DepositCalculator';
import { DepositApplications } from './DepositApplications';
import type { ReturnTypeFunc } from '../../../app/types';

type UserRole = string | undefined;

const ContentBox = styled(Box)({
  height: '100%',
  background: '#FFFFFF',
  padding: '20px',
  margin: '15px',
  borderRadius: '15px',
  boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.06)'
});

export const MainContent = ({ userRole }: { userRole: UserRole }): ReturnTypeFunc => (
  <ContentBox>
    {
      (userRole === 'admin')
        ? <DepositApplications />
        : <DepositCalculator />
    }
  </ContentBox>
);

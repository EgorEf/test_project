import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CustomLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecorationLine: 'none',
  color: blue[700]
});

export const NavigationLinkBack: FC = () => {
  const location = useLocation();
  const from = location.state?.pathname || '/';

  return (
    <CustomLink to={from} state={location}>
      <ArrowBackIcon fontSize="small" color="inherit" />
      <Typography variant="subtitle1" ml="3px">Назад</Typography>
    </CustomLink>
  );
};

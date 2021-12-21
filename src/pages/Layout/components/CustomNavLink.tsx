import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { ReturnTypeFunc } from '../../../app/types';

type PropType = {
  path: string,
  name: string
};

const CustomLink = styled(NavLink)({
  textDecorationLine: 'none',
  color: 'inherit',
  '&.active': {
    color: blue[700]
  }
});

export const CustomNavLink = ({ path, name }: PropType): ReturnTypeFunc => (
  <CustomLink to={path}>
    <Typography variant="button">{name}</Typography>
  </CustomLink>
);

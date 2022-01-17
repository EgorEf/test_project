import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

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

export const CustomNavLink: FC<PropType> = ({ path, name }) => (
  <CustomLink to={path}>
    <Typography variant="button">{name}</Typography>
  </CustomLink>
);

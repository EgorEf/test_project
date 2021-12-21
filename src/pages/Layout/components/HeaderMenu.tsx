import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../../images/Logo.png';
import { ReturnTypeFunc } from '../../../app/types';
import { selectCurrentUser, logOut } from '../../Auth/authSlice';
import { CustomNavLink } from './CustomNavLink';
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector
} from '../../../app/hooks';

type RouteObj = {
  path: string,
  name: string
};

type MappedObjType = {
  [key: string]: Array<RouteObj>
};

const pages: MappedObjType = {
  user: [
    { path: 'depositCalculator', name: 'Депозитный калькулятор' },
    { path: 'depositApplication', name: 'Депозитная заявка' }
  ],
  admin: [
    { path: 'depositList', name: 'Список депозитных заявок' }
  ]
};

export const HeaderMenu = (): ReturnTypeFunc => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOutClick = () => {
    dispatch(logOut());
  };

  const getLinksByRole = () => {
    const userRole = user?.role as string;
    const currentPages = pages[userRole];
    return currentPages.map(({ path, name }) => (
      <MenuItem onClick={handleClose} key={path}>
        <CustomNavLink path={path} name={name} />
      </MenuItem>
    ));
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
        >
          {getLinksByRole()}
        </Menu>
        <Avatar src={logo} alt="logo" sx={{ mr: '15px' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          New Test Bank
        </Typography>
        <Button color="inherit" onClick={handleLogOutClick}>Выход</Button>
      </Toolbar>
    </AppBar>
  );
};

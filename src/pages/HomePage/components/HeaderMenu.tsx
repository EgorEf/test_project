import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../../images/Logo.png';
import { ReturnTypeFunc } from '../../../app/types';

export const HeaderMenu = (): ReturnTypeFunc => (
  <AppBar position="static">
    <Toolbar>
      <Avatar src={logo} alt="logo" sx={{ mr: '15px' }} />
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        New Test Bank
      </Typography>
      <Button color="inherit">Выход</Button>
    </Toolbar>
  </AppBar>
);

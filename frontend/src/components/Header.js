import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import {Image} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      paddingLeft: '.5em',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.info.light, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.info.main, 0.40),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="primary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="inherit">
        <Toolbar>
        <img width='40px' alt="doc_on_demand_logo" src="data:image/png;base64,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" className={classes.large} />

          <Typography className={classes.title} variant="h6" noWrap>
            Doctor On Demand
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

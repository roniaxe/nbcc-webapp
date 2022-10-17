import { useEffect, useState } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import {
    Link as RouterLink, useLocation, useNavigate
} from 'react-router-dom';
import {
    Card, CardActionArea, CardMedia
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import Logo from '../../assets/NBCC_logo.jpg';
import { actions as generalActions } from '../../redux/general/slice';

const pages = ['Home', 'Galleries', 'Tournaments', 'Membership', 'About'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function AppBar({ sx }) {
    const themeMode = useSelector((state) => state.general.mode);
    const dispatch = useDispatch();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const navigate = useNavigate();
    const location = useLocation();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (event, index, pageName) => {
        setSelectedIndex(index);
        setAnchorElNav(null);
        if (pageName) {
            navigate(`/${pageName.toLocaleLowerCase()}`);
        }
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const { pathname } = location;

    const toggleThemeMode = () => dispatch(generalActions.toggleMode(themeMode === 'light' ? 'dark' : 'light'));

    useEffect(() => {
        const idxx = pages.findIndex((page) => pathname.includes(page.toLocaleLowerCase()));
        setSelectedIndex(idxx);
    }, [pathname]);

    return (
        <>
            <MuiAppBar sx={{ ...sx, mb: 2 }} position="static">
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={{
                            height: 100,
                        }}
                    >
                        <Card
                            sx={{
                                maxWidth: 80,
                                mr: 10,
                                display: { xs: 'none', md: 'flex' },
                                boxShadow: '3px 3px 9px cyan'
                            }}
                            onClick={() => setSelectedIndex(0)}
                        >
                            <CardActionArea component={RouterLink} to="/">
                                <CardMedia
                                    component="img"
                                    image={Logo}
                                    alt="NBCC logo"
                                />
                            </CardActionArea>
                        </Card>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page, idx) => (
                                    <MenuItem
                                        key={page}
                                        onClick={(e) => handleCloseNavMenu(e, idx, page)}
                                        selected={selectedIndex === idx}
                                    >
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'none',
                                md: 'flex',
                                '& .Mui-selected': {
                                    textDecoration: 'underline',
                                    textUnderlineOffset: '5px',
                                    borderRadius: '10px',
                                    '&:hover': { color: 'white' }
                                }
                            },
                            justifyContent: 'space-evenly'
                        }}
                        >
                            {pages.map((page, idx) => (
                                <MenuItem
                                    key={page}
                                    onClick={(e) => handleCloseNavMenu(e, idx, page)}
                                    selected={selectedIndex === idx}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        '&:hover': {
                                            backgroundColor: 'white',
                                            color: 'black',
                                            borderRadius: '10px'
                                        }
                                    }}
                                >
                                    {page}
                                </MenuItem>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                            <Tooltip title={`Switch to ${themeMode === 'dark' ? 'Light Mode' : 'Dark Mode'}`}>
                                <IconButton sx={{ ml: 1 }} onClick={toggleThemeMode} color="inherit">
                                    {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </MuiAppBar>
            {/* <Container maxWidth="xl" sx={{ pt: 5 }}><Outlet /></Container> */}

        </>
    );
}
export default AppBar;

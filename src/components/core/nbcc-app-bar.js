import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
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
    Link as RouterLink, Outlet, useLocation, useNavigate
} from 'react-router-dom';
import {
    Card, CardActionArea, CardMedia
} from '@mui/material';
import Logo from '../../assets/NBCC_logo.jpg';

const pages = ['Home', 'Galleries', 'Tournaments', 'About'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NbccAppBar() {
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
        navigate(`/${pageName.toLocaleLowerCase()}`);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const { pathname } = location;

    useEffect(() => {
        const idxx = pages.findIndex((page) => pathname.includes(page.toLocaleLowerCase()));
        setSelectedIndex(idxx);
    }, [pathname]);

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={{
                            height: 100,
                        }}
                    >
                        <Card sx={{ maxWidth: 180, mr: 10, display: { xs: 'none', md: 'flex' } }} onClick={() => setSelectedIndex(0)}>
                            <CardActionArea component={RouterLink} to="/">
                                <CardMedia
                                    component="img"
                                    height="80"
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
                                        onClick={(e) => handleCloseNavMenu(e, idx)}
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
                                    textUnderlineOffset: '5px'
                                },
                                '& .Mui-selected:hover': {
                                    color: 'white',
                                    textDecoration: 'underline',
                                    textUnderlineOffset: '5px'
                                },
                            }
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
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container maxWidth="xl" sx={{ pt: 5 }}><Outlet /></Container>

        </>
    );
}
export default NbccAppBar;

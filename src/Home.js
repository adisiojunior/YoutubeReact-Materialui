import React from 'react';


import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Box,
  Grid,
  Hidden,
  Switch,
} from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';


import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import SportsIcon from '@material-ui/icons/Sports';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import MovieIcon from '@material-ui/icons/Movie';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import PageviewIcon from '@material-ui/icons/Pageview';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 25,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: 'uppercase',
  },
}));

const videos = [
  {
    id: 1,
    title:
      'CAF?? ?? VIDA | Como o caf?? nos ajuda todos os dias',
    channel: 'Ad??sio Fialho Jr',
    views: '11 mi de visualiza????es',
    date: 'h?? 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.png',
  },
  {
    id: 2,
    title:
      'COMO MELHORAR SUA FAMILIA (FAMILIA + COMIDA + AMOR) | Dicas e Truques #02',
    channel: 'Ad??sio Fialho Jr',
    views: '957 mil visualiza????es',
    date: 'h?? 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb2.png',
  },
  {
    id: 3,
    title:
      'M??E NA PROGRAMA????O | Criando uma m??e programadora',
    channel: 'Ad??sio Fialho Jr',
    views: '106 mil visualiza????es',
    date: 'h?? 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb3.png',
  },
  {
    id: 4,
    title:
      'VIRADA S??O PAULO GAME | Criando uma virada game',
    channel: 'Ad??sio Fialho Jr',
    views: '5,6 mi de visualiza????es',
    date: 'h?? 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb4.png',
  },
  {
    id: 5,
    title:
      'EDITOR DE NEGOCIOS | Criando uma n??gocio com React.js e .NET Core #26',
    channel: 'Ad??sio Fialho Jr',
    views: '2,2 mi de visualiza????es',
    date: 'h?? 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb5.png',
  },
  {
    id: 6,
    title: 'COMO SE CUIDAR | Dicas e Truques #01',
    channel: 'Ad??sio Fialho Jr',
    views: '233 mil visualiza????es',
    date: 'h?? 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb6.png',
  },
  {
    id: 7,
    title:
      'DICAS DE COPYWRITING | Criando uma Rede Social com React.js e .NET Core #01',
    channel: 'Ad??sio Fialho Jr',
    views: '118 mil visualiza????es',
    date: 'h?? 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb7.png',
  },
  {
    id: 8,
    title:
      'PEQUENAS EMPRESAS E GRANDES NEGOCIOS| Criando um n??gocio',
    channel: 'Ad??sio Fialho Jr',
    views: '1,9 mi de visualiza????es',
    date: 'h?? 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb8.png',
  },
];

function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar color='inherit' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuIcon}
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <img
            src={
              theme.palette.type === 'dark'
                ? '/images/branco.png'
                : '/images/preto.png'
            }
            alt='logo'
            className={classes.logo}
          />
          <div className={classes.grow} />
          <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />
          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>
          <Button
            startIcon={<AccountCircle />}
            variant='outlined'
            color='secondary'
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      <Box display='flex'>
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'In??cio'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<Whatshot />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Em alta'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Inscri????es'}
                  />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideoLibrary />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Biblioteca'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <History />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Hist??rico'}
                  />
                </ListItem>
              </List>
              <Divider />
              <Box p={7}>
                <Typography variant='body2'>
                  Fa??a login para curtur v??deos, comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                  <Button
                    variant='outlined'
                    color='secondary'
                    startIcon={<AccountCircle />}
                  >
                    Fazer login
                  </Button>
                </Box>
              </Box>
              <Divider />
              <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                subheader={
                  <ListSubheader
                    component='div'
                    id='nested-list-subheader'
                    className={classes.subheader}
                  >
                    O Melhor do youtube
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <MusicVideoIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'M??sica'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <SportsIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Esportes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <SportsEsportsIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Jogos'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <MovieIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Filmes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <FiberNewIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Not??cias'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <LiveTvIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Ao vivo'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <ArtTrackIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Destaques'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <SlowMotionVideoIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Videos 360'}
                  />
                </ListItem>
              </List>
              <Divider />
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <PageviewIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Procurar mais'}
                />
              </ListItem>
              <Divider />
            </div>
          </Drawer>
        </Hidden>

        <Box p={8}>
          <Toolbar />
          <Typography
            variant='h5'
            color='textPrimary'
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} ??? ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
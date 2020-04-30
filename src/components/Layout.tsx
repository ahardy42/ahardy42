import React from 'react';
import Header from './Header';
import { useLocation, useHistory } from 'react-router-dom';
import Footer from './Footer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// icons
import HomeIcon from '@material-ui/icons/Home';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import { Typography } from '@material-ui/core';

// style
import { makeStyles } from '@material-ui/core/styles';

interface LayoutProps {
    headerVisible: boolean,
    backgroundImg: string,
    children: any
}

const useStyles = makeStyles({
    wrapper: {
        background: (props: {backgroundImg: string}) => `url(${props.backgroundImg}) no-repeat center center fixed`,
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    paper: {
        display: 'flex',
        width: '30vw'
    },
    drawerText: {
        margin: '2em',
        textAlign: 'center'
    },
    listItem: {
        marginBottom: '1em'
    }
})

export default function Layout({ headerVisible, children, ...props }: LayoutProps) {

    const [drawerOpen, setOpen] = React.useState<boolean>(false);

    const location = useLocation<any>();
    const history = useHistory<any>();
    const classes = useStyles(props);

    let title = 'Andy Hardy | ';
    let path = location.pathname.slice(1);

    // avoiding swipe issues with iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    const historyPush: (to: string) => void = to => {
        if (to === location.pathname) return;

        history.push(to);
    }

    return (
        <>
            <Header title={path ? title + path : title + 'Home'} openDrawer={() => setOpen(true)} />
            <SwipeableDrawer
                anchor='left'
                open={drawerOpen}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                PaperProps={{className: classes.paper}}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
            >
                <Typography className={classes.drawerText}>Where To?</Typography>
                <List component='nav' aria-label='navigation sidebar'>
                    <ListItem
                        button
                        onClick={() => historyPush('/')}
                        selected={location.pathname === '/'}
                        className={classes.listItem}
                    >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => historyPush('/contact')}
                        selected={location.pathname === '/contact'}
                        className={classes.listItem}
                    >
                        <ListItemIcon>
                            <AlternateEmailIcon />
                        </ListItemIcon>
                        <ListItemText primary='Contact' />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => historyPush('/projects')}
                        selected={location.pathname === '/projects'}
                        className={classes.listItem}
                    >
                        <ListItemIcon>
                            <LaptopMacIcon />
                        </ListItemIcon>
                        <ListItemText primary='Projects' />
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <div className={classes.wrapper} style={{backgroundSize: 'cover'}}>
                {children}
            </div>
            <Footer />
        </>
    )
}
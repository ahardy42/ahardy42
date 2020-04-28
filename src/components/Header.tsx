import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

interface HeaderProps {
    title: string,
    openDrawer: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
    offset: theme.mixins.toolbar
}))

export default function Header({ title, openDrawer }: HeaderProps) {

    const classes = useStyles();

    return(
        <>
            <AppBar position='fixed'>
                <Toolbar>
                    <IconButton edge='start' color='inherit' aria-label='menu' onClick={openDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h5' style={{fontWeight: 'bold'}}>{title}</Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}/>
        </>
    )
}
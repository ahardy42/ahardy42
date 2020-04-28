import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    offset: theme.mixins.toolbar,
    appBar: {
        top: 'auto',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export default function Footer() {

    const classes = useStyles();

    return (
        <>
            <div className={classes.offset}/>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <Typography>Andy Hardy | 2020</Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}
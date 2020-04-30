import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface IStyleProps {
    margins: {
        top?: number,
        right?: number,
        bottom?: number,
        left?: number
    },
    justify: 'flex-start' | 'flex-end' | 'center'
}

interface IContentWrapperProps extends IStyleProps {
    children: any
}

const useStyles = makeStyles({
    content: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: (props: IStyleProps) => `${props.justify}`,
        alignItems: 'center'
    },
    textWrapper: {
        width: '70vw',
        maxHeight: '60vh',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: '2em',
        margin: (props: IStyleProps) => `${props.margins.top || 0}vh ${props.margins.right || 0}vw ${props.margins.bottom || 0}vh ${props.margins.left || 0}vw`,
        clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0% 95%)',
        overflow: 'scroll'
    }
})

export default function ContentWrapper({ children, ...props }: IContentWrapperProps) {

    const classes = useStyles(props);

    return (
        <div className={classes.content}>
            <div className={classes.textWrapper}>
                {children}
            </div>
        </div>
    )
}
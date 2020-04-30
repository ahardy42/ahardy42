import React from 'react';
import Layout from '../components/Layout';
import background from '../images/background_home.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// assets
import profileImg from '../images/profile.jpg';

const useStyles = makeStyles({
    content: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    imgWrapper: {
        width: '15vw',
        height: '15vw',
        borderRadius: '15vw',
        border: '5px solid rgba(255, 255, 255, 0.7)',
        overflow: 'hidden',
        position: 'absolute',
        top: '30%',
        left: '20%',
        marginLeft: '-15vw',
        marginTop: '-15vw',
    },
    img: {
        height: 'auto',
        width: '100%',
        position: 'absolute',
        bottom: 0
    },
    textWrapper: {
        width: '70vw',
        maxHeight: '60vh',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: '2em',
        marginRight: '5vw',
        clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0% 95%)',
        overflow: 'scroll'
    },
    textContent: {
        
    }
})

export default function Home() {

    const classes = useStyles();

    return(
        <Layout headerVisible={true} backgroundImg={background}>
            <div className={classes.content}>
                <div className={classes.imgWrapper}>
                    <img className={classes.img} src={profileImg} alt='profile selfie' />
                </div>
                <div className={classes.textWrapper}>
                    {/* will be populated with CMS content */}
                    <Typography variant='body1' className={classes.textContent}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque lacinia eros non bibendum. Cras hendrerit dignissim dui, vitae varius mauris ullamcorper congue. Nunc eu nibh non turpis gravida lacinia. Suspendisse potenti. In lorem quam, euismod sed pretium in, malesuada non odio. Pellentesque quis pulvinar urna, nec ultricies enim. Vivamus purus orci, tincidunt id viverra id, lacinia ac tellus.
                    </Typography>
                    <br/>
                    <Typography variant='body1' className={classes.textContent}>
                        Quisque aliquam efficitur sem, id venenatis lorem facilisis id. Ut pretium feugiat nibh vitae congue. Nulla facilisi. Pellentesque vitae lorem non diam aliquet porta in at libero. Phasellus eu congue sem, eget blandit justo. Nullam vehicula nisi nulla, sed hendrerit quam finibus et. Ut pharetra metus lectus. Maecenas velit felis, iaculis id ex vitae, egestas posuere libero.
                    </Typography>
                    <br/>
                    <Typography variant='body1' className={classes.textContent}>
                        Etiam porta nisl enim, eget imperdiet ante blandit nec. Pellentesque eu vehicula lacus, vestibulum tempus dui. Quisque tincidunt, tortor id tincidunt ultrices, dui ex congue nibh, id sagittis velit magna vitae mauris. In dapibus odio ac aliquet facilisis. Morbi at nisi rhoncus, ornare purus vitae, finibus eros. Aliquam congue et metus a luctus. Sed ante est, bibendum id elit dapibus, rhoncus blandit metus. Proin finibus quam ut tellus fermentum, rhoncus fringilla felis rhoncus. Aliquam erat volutpat. Nam lobortis sed est sit amet aliquam. Vestibulum elementum metus non justo congue, tristique sagittis ante laoreet.
                    </Typography>
                </div>
            </div>
        </Layout>
    )
}
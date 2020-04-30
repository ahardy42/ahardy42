import React from 'react';
import Layout from '../components/Layout';
import { makeStyles } from '@material-ui/core/styles';
import ContentWrapper from '../components/ContentWrapper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { sendMail } from '../common/api';


// assets
import backgroundImg from '../images/background_contacts.jpg';

const useStyles = makeStyles({
    formWrapper: {
        width: '85%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto'
    },
    formBubble: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        width: '100%',
        padding: '1em',
        margin: '2em',
        borderRadius: '10px',
        backgroundColor: 'rgb(255, 255, 255)'
    },
    sentMessage: {
        margin: '2em 0'
    }
})

export default function Contact() {

    const [name, setName] = React.useState<string>('');
    const [nameHelper, setNameHelper] = React.useState<string>('');

    const [email, setEmail] = React.useState<string>('');
    const [emailHelper, setEmailHelper] = React.useState<string>('');

    const [message, setMessage] = React.useState<string>('');
    const [messageHelper, setMessageHelper] = React.useState<string>('');

    const [displaySentMessage, setDisplayMessage] = React.useState<string>('');

    const classes = useStyles();

    const testEmail: () => boolean = () => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

    const resetFormState: () => void = () => {
        setName('');
        setNameHelper('');
        setEmail('');
        setEmailHelper('');
        setMessage('');
        setMessageHelper('');
    }

    const handleSubmit: () => void = () => {

        // validation
        if (!name) {
            setNameHelper('Please Enter a Name');
            return;
        }

        if (!email || !testEmail()) {
            setEmailHelper('Please Enter a Valid Email Address');
            return;
        }

        if (!message) {
            setMessageHelper('Please Enter a Message');
            return;
        }

        sendMail(name, email, message)
            .then(response => {
                setDisplayMessage('Message Sent!');
                resetFormState();
            })
            .catch(err => {
                console.log(err);
                setDisplayMessage('Something went Wrong! Please Try Again Later...');
                resetFormState();
            })
    }

    const resetForm: () => void = () => {
        setDisplayMessage('');
    }

    React.useEffect(() => {
        if (name) {
            return setNameHelper('');
        }
    }, [name]);

    React.useEffect(() => {
        if (email) {
            return setEmailHelper('');
        }
    }, [email]);

    React.useEffect(() => {
        if (message) {
            return setMessageHelper('');
        }
    }, [message]);

    return (
        <Layout headerVisible={true} backgroundImg={backgroundImg}>
            <ContentWrapper justify='center' margins={{}}>
                <Typography align='center' variant='h6'>Contact Me!</Typography>

                <form className={classes.formWrapper}>
                    {displaySentMessage && (
                        <>
                            <Typography align='center' className={classes.sentMessage}>{displaySentMessage}</Typography>
                            <Button variant='contained' color='primary' onClick={resetForm}>Send Another One!</Button>
                        </>
                    )}
                    {!displaySentMessage && (
                        <>
                            <div className={classes.formBubble}>
                                <TextField
                                    required
                                    id='name-input'
                                    type='text'
                                    label='Enter Your Name'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    helperText={nameHelper}
                                    FormHelperTextProps={{ error: !!nameHelper }}
                                />
                                <TextField
                                    required
                                    id='email-input'
                                    label='Enter Your Email'
                                    type='email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    helperText={emailHelper}
                                    FormHelperTextProps={{ error: !!emailHelper }}
                                />
                            </div>
                            <div className={classes.formBubble}>
                                <TextField
                                    required
                                    id='comment-input'
                                    label='Enter a Message'
                                    type='text'
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    multiline
                                    rows={6}
                                    fullWidth
                                    helperText={messageHelper}
                                    FormHelperTextProps={{ error: !!messageHelper }}
                                />
                            </div>
                            <Button variant='contained' color='primary' startIcon={<SendIcon />} onClick={handleSubmit}>Send It!</Button>
                        </>
                    )}
                </form>
            </ContentWrapper>
        </Layout>
    )
}
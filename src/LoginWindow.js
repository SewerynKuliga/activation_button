import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/styles';

const Window = styled.div`
    position: relative;
    padding: 20px;
    display: block;
    margin-top: 5%;
    margin-right: 5%;

    width: 500px;
    height: 500px;
    float: right;
    border: 2px solid;
    color: black;
`

const Form = styled.form`
    margin-top: 7%;
`

const AccountCircle = withStyles({
    root: {
        fontSize: 300,
        marginLeft: 100,
    }
})(AccountCircleIcon);

const TextFields = styled.div`
    margin-top: 10%;
    background-color: rgba(255, 0, 0, 0.603);
    border-radius: 10px;
    width: auto;
`

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 234,

        },
    },
}));


function LoginWindow() {
    const classes = useStyles();

    return (
        <Window>
            <Form className={classes.root} noValidate autoComplete="off">
                <AccountCircle className="accountCircle" />

                <TextFields >
                    <TextField
                        label="Login"
                        id="outlined-size-small"
                        placeholder="Login"
                        variant="outlined"
                        size="medium"
                    />
                    <TextField
                        label="Password"
                        id="outlined-size-small"
                        placeholder="Password"
                        variant="outlined"
                        size="medium"
                    />
                </TextFields>
            </Form>
        </Window>
    )
}

export default LoginWindow;

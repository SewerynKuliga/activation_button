import "./ButtonToClick.css";
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = withStyles({
    root: {
        borderRadius: 199,
    }
})(Button);

function ButtonToClick() {

    function handleClick() {
        alert("praca w toku :D")
    }
    return (
        <div className="buttonToClick">
            <StyledButton
                variant="contained"
                color="secondary"
                onClick={handleClick}  
                className="button_styled"
            >
                <h1>Kliknij mnie :)</h1>
            </StyledButton>
        </div>
    )
}

export default ButtonToClick;

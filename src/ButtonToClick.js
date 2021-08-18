import "./ButtonToClick.css";
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const StyledButton = withStyles({
    root: {
        borderRadius: 199,
    }
})(Button);

function ButtonToClick() {
    let history = useHistory();

    function handleClick() {
        history.push('/pulpeciki');
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
};

export default ButtonToClick;

import "./ButtonToClick.css";
import Button from '@material-ui/core/Button';
import React from 'react';

function ButtonToClick() {

    function handleClick() {
        alert("praca w toku :D")
    }
    return (
        <div className="buttonToClick">
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClick}
            >
                <h1>Kliknij mnie :)</h1>
            </Button>
        </div>
    )
}

export default ButtonToClick;

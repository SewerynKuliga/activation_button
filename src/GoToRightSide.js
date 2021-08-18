import { useState, React } from 'react';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import styled from 'styled-components';
import { withStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './GoToRightSide.css';


const Fingerprint = styled.div`
    margin-top: 15%;
    margin-bottom: 10%;
`
const Text = styled.p`
    font-size: 20px;
    display: inline-block;
`
const ExpandMore = withStyles({
    root: {
        fontSize: 50,
    }
})(ExpandMoreIcon);

const Instruction = styled.nav`
    width: 800px;
    height: 400px;
    background-color: grey;
    border-radius: 30px;
    padding: 20px 50px 20px 50px;
`

const FingerprintIconBot = withStyles({
    root: {
        width: 200,
        height: 200,
        marginLeft: 40,
    }
})(FingerprintIcon);

function checkFingerprint(e) {
    console.log(e.keyCode)
};

function GoToRightSide() {
    const [clicked, setClicked] = useState(false);

    function yourChoice() {
        setClicked(!clicked)
    };

    return (
        <Fingerprint>

            <Text>
                Skoro zaznałeś lekkiego zmieszania, zapraszam cię na prawidłową już stronę.
            </Text>

            <ExpandMore 
                onClick={yourChoice}
                className="expandMoreIcon"
            />

            <Instruction
                className={clicked ? "hide" : "show"}
            >
                <h3>Instrukcja: </h3>
                <ol>
                    <li>Klinkij w ikonkę linii papilarnych na pod instrukcją (wyświetli się okno)</li> <br />
                    <li>Przyłóż palec do klawisza z literką "O" na klawiaturze i mocno przyciśnij, aby zeskanować twoje linie papilarne.</li> <br />
                    <li>Jeżeli jesteś znany systemowi zostaniesz przekierowany w odpowiednie miejsce.</li>
                </ol>

                <FingerprintIconBot
                    onKeyDown={checkFingerprint}
                    tabIndex="0"
                />
            </Instruction>
        </Fingerprint>
    )
}

export default GoToRightSide;

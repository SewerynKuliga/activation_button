import { useState, React } from 'react';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import styled from 'styled-components';
import { withStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './GoToRightSide.css';
import { useHistory } from 'react-router';
import Instruction from './Instruction';


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

const InstructionBox = styled.nav`
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
        marginLeft: 250,
    }
})(FingerprintIcon);

function GoToRightSide() {
    const [clicked, setClicked] = useState(false);
    const [press, setPress] = useState(false);
    let history = useHistory();

    function openMenu() {
        setClicked(!clicked)
    };

    function changeColor() {
        setPress(!press)
    };

    function checkFingerprint(e) {
        console.log(e.keyCode);

        if (e.keyCode === 79)
            history.push('/pulpeciki1');

    };

    return (
        <Fingerprint>
            <h1>Hej! Czekaj!</h1>
            <Text>
                Skoro zaznałeś lekkiego zmieszania, zapraszam cię na prawidłową już stronę.
            </Text>

            <ExpandMore
                onClick={openMenu}
                className="expandMoreIcon"
            />

            <InstructionBox
                className={clicked ? "show" : "hide"}
            >
                <Instruction />

                <FingerprintIconBot
                    onKeyDown={checkFingerprint}
                    tabIndex="0"
                    onClick={changeColor}
                    className={press ? "green" : "black"}
                />
            </InstructionBox>
        </Fingerprint>
    )
}

export default GoToRightSide;

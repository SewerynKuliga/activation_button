import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display: inline-block;

    width: 600px;
    height: auto;
`

const FirstWindow = styled.div`
    position: relative;
    padding: 30px;
    display: block;
    margin-top: 10%;
    margin-left: 10%;

    width: 500px;
    height: auto;

    border: 2px solid;
    color: white;
    font-size: 20px;
    filter: blur(2.5px);
`

const SecondWindow = styled.fieldset`
    position: relative;
    padding: 60px;
    display: block;
    margin-top: 9%;
    margin-left: 25%;

    width: 400px;
    height: auto;

    border: 2px solid;
    color: white;
    font-size: 20px;
    filter: blur(1px);
`

function Windows() {
    return (
        <Box>
            <FirstWindow>
                <b>Wszystko co jest tu napisane jest nieważne i tak naprawdę dopiero czytając kod
                    będziesz mógł sam to przeczytać i swierdzić, że jest to nieważne. Nie mniej jednak
                    musiałbyś przeczytać wszystko, żeby się przekonać, że dopiero na końcu tego zdania
                    nie znajdziesz nic - jak w poprzednich. <br />
                    Także bezpowrotnie zmarnowałeś kilkanaście sekund swojego życia. <br />
                    Pozdrawiam</b>
            </FirstWindow>

            <SecondWindow>
                <legend>AREA 51 - C.O.D.E.</legend>
                Kody tajnej bazy - Strefy 51: <br />
                <b>5923 859 4 2424 0575 98 18 2137 10540</b>
            </SecondWindow>
        </Box>
    )
}

export default Windows;

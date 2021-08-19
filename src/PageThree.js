import React from 'react';
import LoginWindow from './LoginWindow';
import './PageThree.css';
import Windows from './Windows';
import EndingText from './EndingText';
import styled from 'styled-components';

const Box = styled.div`
    min-width: 1340px;
    max-width: 2600px;
`

function PageThree() {
    return (
        <Box className="pageThree">
            <Windows />            {/* 2 wyskakujące okeinka - zamazane */}

            <LoginWindow />        {/* Okienko logowania */}
            <EndingText />         {/* Informacja  */}

        </Box>
    )
}

export default PageThree;

import React from 'react';
import ButtonToClick from './ButtonToClick';
import Person from './Person';
import styled from 'styled-components';

const Container = styled.div`
    display: block;
    position: relative;
    width: 450px;
    height: 530px;
    margin: 10% auto;
`

function PageOne() {
    return (
        <Container>

            <ButtonToClick />
            <Person />

        </Container>
    )
}

export default PageOne;

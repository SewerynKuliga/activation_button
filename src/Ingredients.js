import React from 'react'
import styled from 'styled-components'

const Header = styled.h3`
    display: inline;
`

const Portion = styled.h6`
    display: inline;
    margin-left: 15px;
`

function Ingredients() {
    return (
        <div>
            <Header>SKŁADNIKI</Header><Portion>/ 4 porcje</Portion>
        </div>
    )
}

export default Ingredients

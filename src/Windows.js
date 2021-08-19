import React from 'react';
import styled from 'styled-components'; 

const FirstWindow = styled.div`
    border: 2px solid;
    color: white;
`

const SecondWindow = styled.div`
    border: 2px solid;
    color: white;
`

const ThirdWindow = styled.div`
    border: 2px solid;
    color: white;
`

function Windows() {
    return (
        <div>
            {/* <FirstWindow>
                Wszystko co jest tu napisane jest nieważne i tak naprawdę dopiero czytając kod 
                będziesz mógł sam to przeczytać i swierdzić, że jest to nieważne :) 
            </FirstWindow>

            <SecondWindow>
                W tym okienku jednak muszę przeprosić za przeskakiwanie po stronach i te pierwsze klopsiki,
                ale byłem głodny zaczynając ten projekt.
            </SecondWindow>

            <ThirdWindow>
                Kody tajnej bazy Amerykanów Strefy 51:
                5923 859 4 2424 0575 98 18 2137 10540
            </ThirdWindow> */}
        </div>
    )
}

export default Windows

import React from 'react';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import styled from 'styled-components';

const Fingerprint = styled.div`
    margin-top: 15%;
    margin-bottom: 10%;
`

function GoToRightSide() {
    return (
        <Fingerprint>
            
            <p>
                A skoro zaznałeś lekkiego zmieszania, zapraszam cię na prawidłową już stronę.
            </p>
            
             <h3>Instrukcja: </h3>
              <p>  Przyłóż palec do klawisza z literką "O" na klawiaturze i mocno przyciśnij, aby zeskanować twoje linie papilarne. 
                Jeżeli jesteś znany systemowi zostaniesz przekierowany w odpowiednie miejsce.
            </p>
            <FingerprintIcon /> 

        </Fingerprint>
    )
}

export default GoToRightSide

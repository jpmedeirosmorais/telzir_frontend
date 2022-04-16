import { Colors } from 'common/styles';
import styled from 'styled-components';

export const Content = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 100vw;
    height: 100vh;
    background-color: ${Colors.dark.grey};
`;

export const FormFeeCalculator = styled.div`
    margin: 7rem auto 5rem auto;
    max-width: 70rem;
    display: flex;
    justify-content: space-evenly;
`;

export const ButtonContainer = styled.div`
    margin-bottom: 2rem;
`

export const Calc = styled.div`
    margin: 0 auto 0 auto;
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
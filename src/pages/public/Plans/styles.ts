import { Colors } from 'common/styles';
import styled from 'styled-components';

export const Content = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100vw;
    min-height: 100vh;
    background-color: ${Colors.dark.grey};
`;

export const FormFeeCalculator = styled.div`
    margin: 7rem auto 2.5rem auto;
    max-width: 55rem;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const ButtonContainer = styled.div`
    margin-bottom: 4rem;
`

export const Calc = styled.div`
    margin: 0 auto 0 auto;
    max-width: 70rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;
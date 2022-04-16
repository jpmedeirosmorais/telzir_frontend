import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 0.1rem solid #ccc;
    width: 5rem;
    padding: 0.5rem;

    :hover {
        border: 0.1rem solid #000;
        background-color: #fff;
        cursor: pointer;
    }
`;
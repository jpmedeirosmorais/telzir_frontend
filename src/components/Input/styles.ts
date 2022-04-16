import styled from "styled-components";

export const Content = styled.div`
  max-width: 20rem;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.8rem;
  font-weight: bold;
  color: #c7c132;
  text-align: center;
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;

  :focus {
    outline: none;
  }
`;

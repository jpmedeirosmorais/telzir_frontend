import { Colors } from "common/styles";
import styled from "styled-components";

export const Content = styled.div`
  max-width: 12.5rem;
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export const Label = styled.label`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${Colors.light.yellow};
  text-align: left;
  margin: 0 0 0.5rem 0.1rem;
`;

export const Input = styled.input`
  padding: 0.88rem 0.5rem;
  width: auto;

  /* Chrome, Safari, Edge, Opera */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  [type="number"] {
    -moz-appearance: textfield;
  }
  :focus {
    outline: none;
  }
`;

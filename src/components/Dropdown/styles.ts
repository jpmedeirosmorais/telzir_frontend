import styled from "styled-components";
import { Colors } from "common/styles";

export const Content = styled.div`

  select {
    transition: all 0.3s ease;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    border: none;
    padding: 1rem 0.5rem;
    background-color: ${Colors.light.blue2};
    min-width: 9.5rem;
    border-radius: 0.3rem;

    text-align: center;
    font-size: 1.5rem;
    color: ${Colors.dark.grey};
    font-weight: bold;
  }

  select:focus {
    outline: none;
  }

  select:hover {
    transition: all 0.3s ease;
    background-color: ${Colors.normal.white};
    color: ${Colors.normal.black};
    cursor: pointer;
  }

  option {
    text-align: center;
  }
`;

export const Label = styled.div`
  width: 9.5rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${Colors.normal.yellow}; ;
  text-align: center;
`;

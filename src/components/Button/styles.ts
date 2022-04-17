import { Colors } from "common/styles";
import styled from "styled-components";

export const Content = styled.div`
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 10rem;
  background-color: ${Colors.light.blue};
  border-radius: 0.3rem;
  padding: 1rem;

  font-size: 1.5rem;
  color: ${Colors.dark.grey};
  font-weight: bold;

  :hover {
    transition: all 0.3s ease;
    background-color: ${Colors.normal.white};
    color: ${Colors.normal.black};
    cursor: pointer;
  }
`;

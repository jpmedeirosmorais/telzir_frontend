import styled from "styled-components";
import { Colors } from "common/styles";

export const Content = styled.div`
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: ${Colors.light.yellow};
`;

export const Title = styled.div`
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: 5rem;
`;

export const Description = styled.div`
  color: ${Colors.dark.grey};
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  flex-wrap: nowrap;
  width: 80vw;
  background-color: ${Colors.light.yellow};
`;

export const Text = styled.div`
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;
`

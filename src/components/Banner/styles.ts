import styled from "styled-components";
import { Colors } from "common/styles";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${Colors.light.yellow};
`;

export const Title = styled.div`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 5rem;
  width: 100vw;
  background-color: ${Colors.light.yellow};
  color: ${Colors.dark.grey};
  padding: 1.5rem 5rem;
`;

export const Description = styled.div`
  color: ${Colors.light.yellow};
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  flex-wrap: nowrap;
`;

export const Text = styled.div`
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;
`;

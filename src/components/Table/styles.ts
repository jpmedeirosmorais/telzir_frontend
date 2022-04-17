import { Colors } from "common/styles";
import styled from "styled-components";

export const Content = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  max-width: 50rem;
  display: flex;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${Colors.dark.grey};
`;

export const Column = styled.div`
  background-color: ${Colors.light.yellow};
  border: 1px solid ${Colors.dark.grey};
`;

export const Line = styled.div`
  padding: 0.5rem 1rem;
`;

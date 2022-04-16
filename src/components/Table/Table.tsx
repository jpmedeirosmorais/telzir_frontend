import { TableProps } from "./interfaces";
import * as S from "./styles";

export const Table = ({ columns }: TableProps) => {
  return (
    <S.Content>
      {columns.map((column, index) => (
        <S.Column>
          <S.ColumnTitle key={index}>{column.title}</S.ColumnTitle>

          {column.lines.map((line, index) => (
            <S.Line key={index}>{line}</S.Line>
          ))}
        </S.Column>
      ))}
    </S.Content>
  );
};

import { TableProps } from "./interfaces";
import * as S from "./styles";

export const Table = ({ columns }: TableProps) => {
  return (
    <S.Content>
      {columns.map((column, index) => (
        <S.Column key={index}>
          <S.ColumnTitle >{column.title}</S.ColumnTitle>

          {column.lines.map((line, index) => (
            <S.Line key={index}>
              {line !== "0" ? "R$" + line.replace(".", ",") : "R$0,00"}
            </S.Line>
          ))}
        </S.Column>
      ))}
    </S.Content>
  );
};

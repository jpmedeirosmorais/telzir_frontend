import { ButtonProps } from "./interfaces";
import * as S from "./styles";

export const Button = ({ value, callback }: ButtonProps) => {
  return <S.Content onClick={callback}>{value}</S.Content>;
};

import { InputProps } from "./interfaces";

import * as S from "./styles";

export const Input = ({ placeholder, label, callback }: InputProps) => {
  return (
    <S.Content>
      <S.Label>{label}</S.Label>
      <S.Input
        placeholder={placeholder}
        onChange={(e) => callback && callback(e.target.value)}
        type="number"
        required={true}
        data-testid="input"
      />
    </S.Content>
  );
};

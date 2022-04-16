import * as S from "./styles";
import { DropdownProps } from "./interfaces";

export const Dropdown = ({ labelText, options, callback }: DropdownProps) => {
  return (
    <S.Content>
      <S.Label>{labelText}</S.Label>
      <select
        onChange={(e) => {
          callback && callback(e.target.value);
        }}
        data-testid="dropdown"
      >
        {options.map((option) => (
          <option key={option} value={option} data-testid={`option-${option}`}>
            {option}
          </option>
        ))}
      </select>
    </S.Content>
  );
};

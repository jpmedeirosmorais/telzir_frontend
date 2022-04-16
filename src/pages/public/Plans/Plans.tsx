import { useState } from "react";

import { Banner, Button, Dropdown, Input, Table } from "components";

import { usePlans } from "hooks";

import {
  generateDestinyDDD,
  propsDropdownOrigin,
  propsDropdownPlan,
} from "./utils";

import * as S from "./styles";

export const Plans = () => {
  const { getPlansFee, plansFee } = usePlans();
  const [origin, setOrigin] = useState<string>("");
  const [destiny, setDestiny] = useState<string>("");
  const [plan, setPlan] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");

  const columnsTeste = {
    columns: [
      {
        title: "Com plano",
        lines: [`${plansFee.withPlan}`],
      },
      {
        title: "Sem plano",
        lines: [`${plansFee.withoutPlan}`],
      },
    ],
  };

  return (
    <S.Content>
      <Banner />
      <S.FormFeeCalculator>
        <Dropdown {...propsDropdownOrigin} callback={setOrigin} />
        <Dropdown
          labelText="Destino"
          options={generateDestinyDDD(origin)}
          callback={setDestiny}
        />
        <Dropdown {...propsDropdownPlan} callback={setPlan} />
        <Input
          placeholder="Digite os minutos"
          label="Minutos"
          callback={setMinutes}
        />
        <Button
          value="Calcular"
          callback={() => {
            getPlansFee({
              plan: plan,
              minutes: minutes,
              originDDD: origin,
              destinyDDD: destiny,
            });
          }}
        />
      </S.FormFeeCalculator>

      {plansFee.withoutPlan !== undefined && <Table {...columnsTeste} />}
    </S.Content>
  );
};

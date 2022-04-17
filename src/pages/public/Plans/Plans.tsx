import { useEffect, useState } from "react";

import { Banner, Button, Dropdown, Input, Table } from "components";

import { usePlans } from "hooks";

import {
  generateDestinyDDD,
  propsDropdownOrigin,
  propsDropdownPlan,
  verifyFields,
} from "./utils";

import * as S from "./styles";

export const Plans = () => {
  const { getPlansFee, plansFee } = usePlans();
  const [origin, setOrigin] = useState<string>("");
  const [destiny, setDestiny] = useState<string>("");
  const [plan, setPlan] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [showTable, setShowTable] = useState(false);

  const columnsTeste = {
    columns: [
      {
        title: `Com o plano ${plan}`,
        lines: [`${plansFee.withPlan}`],
      },
      {
        title: `Sem o plano ${plan}`,
        lines: [`${plansFee.withoutPlan}`],
      },
    ],
  };

  useEffect(() => {
    setShowTable(false);
    console.log("teste");
  }, [origin, destiny, plan, minutes]);

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
      </S.FormFeeCalculator>

      <S.Calc>
        {verifyFields(origin, destiny, minutes, plan, () => {}) && (
          <S.ButtonContainer>
            <Button
              value="Calcular"
              callback={() => {
                getPlansFee({
                  plan: plan,
                  minutes: minutes,
                  originDDD: origin,
                  destinyDDD: destiny,
                });
                verifyFields(origin, destiny, minutes, plan, setShowTable);
              }}
            />
          </S.ButtonContainer>
        )}

        {showTable && <Table {...columnsTeste} />}
      </S.Calc>
    </S.Content>
  );
};

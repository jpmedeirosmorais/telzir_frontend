import * as S from "./styles";
import { Logo } from "common/images";

export const Banner = () => {
  return (
    <S.Content>
      <S.Title>
        Telzir
        <Logo />
      </S.Title>
      <S.Description>
        <S.Text>
          Bem vindo a Telzir! Conheça agora nossos novos planos de chamada a
          longa distância. Veja como você pode aproveitar todos os benefícios.
          Temos os planos FaleMais 30, FaleMais 60 e FaleMais 120. Faça a
          simulação agora mesmo inserindo os dados abaixo e veja qual plano se
          encaixa melhor ao seu perfil.
        </S.Text>
      </S.Description>
    </S.Content>
  );
};

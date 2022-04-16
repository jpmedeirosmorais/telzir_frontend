import { createContext, useCallback, useContext, useState } from "react";

import api from "services/api";

import {
  PlansContextProps,
  PlansProviderProps,
  BodyRequisition,
  PlansFee,
} from "./interfaces";

const PlansContext = createContext({} as PlansContextProps);

const PlansProvider = ({ children }: PlansProviderProps) => {
  const [plansFee, setPlansFee] = useState({} as PlansFee);

  const getPlansFee = useCallback(async (body: BodyRequisition) => {
    try {
      const response = await api.post("/calculate", body);
      setPlansFee(response.data);
    } catch (e) {
      alert("Preencha todos campos!" + e);
    }
  }, []);

  return (
    <PlansContext.Provider value={{ getPlansFee, plansFee }}>
      {children}
    </PlansContext.Provider>
  );
};
function usePlans() {
  const context = useContext(PlansContext);

  return context;
}

export { PlansProvider, usePlans };

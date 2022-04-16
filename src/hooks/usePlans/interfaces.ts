import { ReactElement } from "react";

export interface PlansProviderProps {
  children: ReactElement;
}

export interface PlansContextProps {
  getPlansFee: (body: any) => void;
  plansFee: PlansFee;
}

export interface BodyRequisition {
  origin: string;
  destiny: string;
  plan: string;
  minutes: string;
}

export interface PlansFee {
  withPlan: string;
  withoutPlan: string;
}
import { AppProviderProps } from "./interfaces";
import { PlansProvider } from "./usePlans";

export const AppProvider = ({ children }: AppProviderProps) => {
  return <PlansProvider>{children}</PlansProvider>;
};
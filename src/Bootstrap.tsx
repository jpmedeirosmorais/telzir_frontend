import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "hooks";

import GlobalStyles from "./common/styles/global";
import Public from "./routes/Public";

function Bootstrap() {
  return (
    <AppProvider>
      <>
        <BrowserRouter>
          <Public />
        </BrowserRouter>

        <GlobalStyles />
      </>
    </AppProvider>
  );
}

export default Bootstrap;

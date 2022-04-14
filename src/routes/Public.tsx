import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Plans } from "../pages/public";

function Public() {
  return (
      <Routes>
        <Route path="/" element={<Plans />} />
      </Routes>
  );
}

export default Public;
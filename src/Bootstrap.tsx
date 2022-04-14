import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './common/styles/global';
import Public from './routes/Public';

function Bootstrap() {
  return (
    <>
      <BrowserRouter>
        <Public />
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
}

export default Bootstrap;
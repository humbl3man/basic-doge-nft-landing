import { StrictMode } from 'react';
import { render } from 'react-dom';

import { Provider } from './state/context';
import App from './App';

// declare global {
//   interface Window {
//     ethereum: {
//       request<T>(params: { method: string }): Promise<T>;
//       on<T>(event: string, cb: (params: T) => void): void;
//       removeListener<T>(event: string, cb: (params: T) => void): void;
//       selectedAddress: string | undefined;
//     };
//   }
// }

render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

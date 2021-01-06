import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import FirebaseApp from './FirebaseApp';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
      useErrorBoundary: true,
    },
    mutations: {
      retry: 0,
      useErrorBoundary: true,
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <FirebaseApp>
        <App />
      </FirebaseApp>
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

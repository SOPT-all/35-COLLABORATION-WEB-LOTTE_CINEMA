import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/hooks/queryClient.ts";

import { Global, ThemeProvider } from '@emotion/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './styles/global.ts';
import theme from './styles/index.ts';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <App />
    </ThemeProvider>
   </QueryClientProvider>
  </StrictMode>
);

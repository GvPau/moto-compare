import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { trpc } from './utils/trpc';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchPage from './pages/Search';
import HomePage from './pages/Home';
import Clothes from "./pages/Clothes";

const queryClient = new QueryClient();
const theme = createTheme({
  palette: {
    primary: {
      main: '#6a11cb',
    },
    secondary: {
      main: '#2575fc',
    },
  },
});

const App: React.FC = () => {
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
          async headers() {
            return {};
          },
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="clothes" element={<Clothes />} />
            <Route path="clothes/:category" element={<Clothes />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default App;
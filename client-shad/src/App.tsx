import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { trpc } from './utils/trpc';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { ThemeProvider } from './components/theme-provider';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const queryClient = new QueryClient();

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
    <ThemeProvider>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} /> {/* Home Page Route */}
              <Route path="/dashboard" element={<Dashboard />} /> {/* Home Page Route */}
              <Route path="/login" element={<Login />} /> {/* Home Page Route */}
            </Routes>
          </Router>
        </QueryClientProvider>
      </trpc.Provider>
    </ThemeProvider>

  );
};

export default App;

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { trpc } from './utils/trpc';

import './App.css'
import { Button } from "@/components/ui/button"
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
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Button>Click me</Button>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App

import React from 'react';
import Router from '@/routes/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Router />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;

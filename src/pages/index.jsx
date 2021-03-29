import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Layout />
      </div>
    </ChakraProvider>
  );
}

export default App;

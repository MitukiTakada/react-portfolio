
import { useState } from 'react';
import './App.css';
import Header from './Layout/components/Header';
import PageLayout from './Layout/PageLayout';
import LoginContext from './LoginContext';
import Pages from './Pages';


function App() {
  return (
    <PageLayout>
        <Pages />
      </LoginContext.Provider>
    </PageLayout>
  );
}

export default App;

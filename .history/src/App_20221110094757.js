
import { useState } from 'react';
import './App.css';
import Header from './Layout/components/Header';
import PageLayout from './Layout/PageLayout';
import LoginContext from './LoginContext';
import Pages from './Pages';


function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <PageLayout>
      <LoginContext>
        <Pages />
      </LoginContext>
    </PageLayout>
  );
}

export default App;


import './App.css';
import Header from './Layout/components/Header';
import PageLayout from './Layout/PageLayout';
import LoginContext from './LoginContext';
import Pages from './Pages';


function App() {
  const [isLogin, setIs]
  return (
    <PageLayout>
      <LoginContext.Provider>
        <Pages />
      </LoginContext.Provider>
    </PageLayout>
  );
}

export default App;

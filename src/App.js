import { BrowserRouter } from "react-router-dom";

import MainLayout from "./pages/MainLayout";

import { GlobalProvider } from "./contexts/GlobalContext";

import useGlobalState from "./hooks/useGlobalState";

import './App.css';

const App = () => {
  const globalState = useGlobalState();

  return (
    <GlobalProvider value={globalState}>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App;

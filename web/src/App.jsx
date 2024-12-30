import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import { BrowserRouter,Router, Routes, Route } from "react-router-dom";
import { AppRoutes } from "./Routes/Routes";
function App() {
  return (
    <>
        <BrowserRouter>
      <Layout>
        
          <AppRoutes/>
        
      </Layout>
        </BrowserRouter>
    </>
  );
}

export default App;

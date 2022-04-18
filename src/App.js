import { BrowserRouter } from "react-router-dom";
import AppRoutes from "routes";

import NavigationBar from "components/NavigationBar";
import Footer from "components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <AppRoutes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

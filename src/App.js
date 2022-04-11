import { BrowserRouter } from "react-router-dom";
import AppRoutes from "routes";

import NavigationBar from "components/NavigationBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;

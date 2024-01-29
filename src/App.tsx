import { useLocation, useRoutes } from "react-router-dom";
import Home from "./sections/Home";
import Navbar from "./components/Navbar/navbar";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  const location = useLocation();

  return (
    <div className="main pt-[25px]">
      <Navbar />
      {location.state}
      {routes}
    </div>
  );
};

export default App;

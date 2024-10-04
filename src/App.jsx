import "./App.css";
import Optimus from "./pages/Optimus";
import Autobots from "./pages/Autobots";
import BumbleBee from "./pages/BumbleBee";
import Rachet from "./pages/Rachet";
import IronHide from "./pages/IronHide";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Jazz from "./pages/Jazz";

const router = createBrowserRouter([
  { path: "/", element: <Autobots /> },
  { path: "/optimus", element: <Optimus /> },
  { path: "/bumblebee", element: <BumbleBee /> },
  { path: "/rachet", element: <Rachet /> },
  { path: "/ironhide", element: <IronHide /> },
  { path: "/jazz", element: <Jazz /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

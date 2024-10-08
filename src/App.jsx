import "./App.css";
import React, { useEffect, useRef } from "react";
import Optimus from "./pages/Optimus";
import Autobots from "./pages/Autobots";
import BumbleBee from "./pages/BumbleBee";
import Rachet from "./pages/Rachet";
import IronHide from "./pages/IronHide";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Jazz from "./pages/Jazz";
import whative from "./assets/music/whativedone.mp3";
const router = createBrowserRouter([
  { path: "/", element: <Autobots /> },
  { path: "/optimus", element: <Optimus /> },
  { path: "/bumblebee", element: <BumbleBee /> },
  { path: "/rachet", element: <Rachet /> },
  { path: "/ironhide", element: <IronHide /> },
  { path: "/jazz", element: <Jazz /> },
]);

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
      // Remove event listeners after the first play
      window.removeEventListener("mousemove", playAudio);
      window.removeEventListener("keypress", playAudio);
      window.removeEventListener("click", playAudio);
    };

    // Add event listeners for mouse movement, keypress, and click
    window.addEventListener("mousemove", playAudio);
    window.addEventListener("keypress", playAudio);
    window.addEventListener("click", playAudio);

    return () => {
      // Cleanup event listeners on unmount
      window.removeEventListener("mousemove", playAudio);
      window.removeEventListener("keypress", playAudio);
      window.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src={whative} loop />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

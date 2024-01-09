import { Outlet } from "react-router-dom";
import "./App.css";
import Clock from "./component/Clock";
import Header from "./component/Header";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import Stopwatch from "./component/Stopwatch";
import Timer from "./component/Timer";

function App() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default App;

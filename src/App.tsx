import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HabitTracker from './pages/HabitTracker/Home';
import Home from './pages/Home';
import ComponentComposition from './pages/ComponentComposition';
import UseState from './pages/UseState';
import UseEffect from './pages/UseEffect';
import UseContext from './pages/UseContext';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>}></Route>
          <Route path='/flashcards' element={<HabitTracker/>}></Route>
          <Route path='/component-composition' element={<ComponentComposition/>}></Route>
          <Route path='/use-state' element={<UseState/>}></Route>
          <Route path='/use-effect' element={<UseEffect/>}></Route>
          <Route path='/use-context' element={<UseContext/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

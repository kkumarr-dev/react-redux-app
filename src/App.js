import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Name, NameView, Signup } from "./components";
import Counter from "./components/counter";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/name" element={<Name />} />
          <Route path="/nameview" element={<NameView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

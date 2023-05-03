import "./App.css";
import "@patternfly/react-core/dist/styles/base.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "@patternfly/react-core";
import Counter from "./components/Counter";
import Home from "./components/Home";
import Temperature from "./components/Temperature";
function App() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem to="/">Counter Page</BreadcrumbItem>
        <BreadcrumbItem to="/Home">Home Page</BreadcrumbItem>
        <BreadcrumbItem to="/Temperature">Temperature</BreadcrumbItem>
      </Breadcrumb>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter initialCount={0} />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Temperature" element={<Temperature />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

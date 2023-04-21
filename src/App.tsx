import "./App.css";
import "@patternfly/react-core/dist/styles/base.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import {
  Accordion,
  Breadcrumb,
  BreadcrumbItem,
  AccordionItem,
  AccordionContent,
  AccordionToggle,
} from "@patternfly/react-core";
import Counter from "./components/Counter";
import { Forms } from "./components/Forms";
import Home from "./components/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Breadcrumb>
          <BreadcrumbItem to="/">Counter Page</BreadcrumbItem>
          <BreadcrumbItem to="/Home">Home Page</BreadcrumbItem>
        </Breadcrumb>
        <Routes>
          <Route path="/" element={<Counter initialCount={0} />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

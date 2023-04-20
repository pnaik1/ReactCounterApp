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
          <BreadcrumbItem to="/">Section home</BreadcrumbItem>
          <BreadcrumbItem to="/Counter">Form</BreadcrumbItem>
          <BreadcrumbItem to="#">Section title</BreadcrumbItem>
          <BreadcrumbItem to="#" isActive>
            Section landing
          </BreadcrumbItem>
        </Breadcrumb>
        <Routes>
          <Route path="/" element={<Counter initialCount={0} />} />
          <Route path="/Counter" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

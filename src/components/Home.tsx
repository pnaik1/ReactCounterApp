import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionToggle,
} from "@patternfly/react-core";
import { useState } from "react";
import Counter from "./Counter";
import { Forms } from "./Forms";
const Home = () => {
  const [expanded, setExpanded] = useState("");
  const onToggle = (id: string) => {
    if (id === expanded) {
      setExpanded("");
    } else {
      setExpanded(id);
    }
  };
  return (
    <>
      <Accordion asDefinitionList>
        <AccordionItem>
          <AccordionToggle
            onClick={() => {
              onToggle("def-list-toggle1");
            }}
            isExpanded={expanded === "def-list-toggle1"}
            id="def-list-toggle1"
          >
            Description
          </AccordionToggle>
          <AccordionContent
            id="def-list-expand1"
            isHidden={expanded !== "def-list-toggle1"}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionToggle
            onClick={() => {
              onToggle("def-list-toggle2");
            }}
            isExpanded={expanded === "def-list-toggle2"}
            id="def-list-toggle2"
          >
            Form
          </AccordionToggle>
          <AccordionContent
            id="def-list-expand2"
            isHidden={expanded !== "def-list-toggle2"}
          >
            <Forms />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionToggle
            onClick={() => {
              onToggle("def-list-toggle3");
            }}
            isExpanded={expanded === "def-list-toggle3"}
            id="def-list-toggle3"
          >
            Title
          </AccordionToggle>
          <AccordionContent
            id="def-list-expand3"
            isHidden={expanded !== "def-list-toggle3"}
          >
            <p>
              Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue
              orci quis ultricies tempus.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
export default Home;

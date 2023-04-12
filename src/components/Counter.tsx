import {
  TextContent,
  Text,
  TextVariants,
  Button,
  ActionList,
  ActionListItem,
} from "@patternfly/react-core";
import { useState } from "react";
type propsValue = {
  initialCount: number;
};
const Counter = ({ initialCount }: propsValue) => {
  const [value, setValue] = useState<number>(initialCount);
  const onClickHandle = (direction: String) => {
    if (direction === "reset") {
      setValue(initialCount);
    } else {
      direction === "increment" ? setValue(value + 1) : setValue(value - 1);
    }
  };
  return (
    <TextContent>
      <Text component={TextVariants.h1}>Counter App</Text>
      <Text component={TextVariants.h2}>Counter: {value}</Text>
      <ActionList>
        <ActionListItem>
          <Button
            variant="primary"
            onClick={() => {
              onClickHandle("increment");
            }}
          >
            Increment (+1)
          </Button>
        </ActionListItem>
        <ActionListItem>
          <Button
            variant="warning"
            onClick={() => {
              onClickHandle("decrement");
            }}
          >
            Decrement (-1)
          </Button>
        </ActionListItem>
        <ActionListItem>
          <Button
            variant="danger"
            onClick={() => {
              onClickHandle("reset");
            }}
          >
            Reset
          </Button>
        </ActionListItem>
      </ActionList>
    </TextContent>
  );
};
export default Counter;

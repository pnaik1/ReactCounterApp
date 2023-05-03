import { useMemo, useState, useEffect, useCallback } from "react";
import React from "react";
import { TextInput, Text, TextVariants } from "@patternfly/react-core";
function Temperature() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  // convert Celsius to Fahrenheit using useMemo
  const convertedFahrenheit = useMemo(() => {
    return ((+celsius * 9) / 5 + 32).toFixed(2);
  }, [celsius]);

  // convert Fahrenheit to Celsius using useMemo
  const convertedCelsius = useMemo(() => {
    return (((+fahrenheit - 32) * 5) / 9).toFixed(2);
  }, [fahrenheit]);

  // update the Celsius input field when Fahrenheit changes
  useEffect(() => {
    setCelsius(+convertedCelsius);
  }, [convertedCelsius]);

  // update the Fahrenheit input field when Celsius changes
  useEffect(() => {
    setFahrenheit(+convertedFahrenheit);
  }, [convertedFahrenheit]);

  const handleCelsiusChange = useCallback((celsius: string) => {
    setCelsius(+celsius);
  }, []);

  const handleFahrenheitChange = useCallback((fahrenheit: string) => {
    setFahrenheit(+fahrenheit);
  }, []);
  return (
    <React.Fragment>
      <Text component={TextVariants.h1}>Celsius</Text>
      <TextInput
        isRequired
        type="text"
        id="grid-form-name-01"
        name="grid-form-name-01"
        aria-describedby="grid-form-name-01-helper"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <Text component={TextVariants.h1}>Fahrenheit</Text>
      <TextInput
        type="text"
        id="grid-form-name-02"
        name="grid-form-name-02"
        aria-describedby="grid-form-name-02-helper"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      ></TextInput>
    </React.Fragment>
  );
}

export default Temperature;

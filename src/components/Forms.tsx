import React from "react";
import { FormEvent } from "react";
import {
  Form,
  FormGroup,
  TextInput,
  InputGroup,
  CalendarMonth,
  Checkbox,
  DropdownToggle,
  Dropdown,
  Popover,
  TextContent,
  FormHelperText,
  ActionGroup,
  Text,
  AlertVariant,
  AlertGroup,
  Button,
  Alert,
  FormAlert,
  Radio,
  DropdownItem,
  AlertActionLink,
  TextVariants,
  ActionListItem,
  AlertActionCloseButton,
  ActionList,
} from "@patternfly/react-core";
import ExclamationCircleIcon from "@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon";
import OutlinedCalendarAltIcon from "@patternfly/react-icons/dist/esm/icons/outlined-calendar-alt-icon";
import OutlinedClockIcon from "@patternfly/react-icons/dist/esm/icons/outlined-clock-icon";
import HelpIcon from "@patternfly/react-icons/dist/esm/icons/help-icon";
type validate = "success" | "warning" | "error" | "default";
export const Forms: React.FunctionComponent = () => {
  const [validated, setValidated] = React.useState<validate>("error");
  const [name, setName] = React.useState("Enter your name");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [alerts, setAlerts] = React.useState<React.ReactNode[]>([]);
  const [isClicked, setIsClicked] = React.useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const [isTimeOpen, setIsTimeOpen] = React.useState(false);
  const [valueDate, setValueDate] = React.useState("MM-DD-YYYY");
  const [valueTime, setValueTime] = React.useState("HH:MM");
  const times = Array.from(new Array(10), (_, i) => i + 8);
  const defaultTime = "0:00";
  const dateFormat = (date: Date) =>
    date
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "-");

  const onToggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
    setIsTimeOpen(false);
  };

  const onToggleTime = (_value: boolean, _event: any) => {
    setIsTimeOpen(!isTimeOpen);
    setIsCalendarOpen(false);
  };

  const onSelectCalendar = (newValueDate: Date) => {
    const newValue = dateFormat(newValueDate);
    setValueDate(newValue);
    setIsCalendarOpen(!isCalendarOpen);
    // setting default time when it is not picked
    if (valueTime === "HH:MM") {
      setValueTime(defaultTime);
    }
  };

  const onSelectTime = (ev: any) => {
    setValueTime(ev.currentTarget.textContent);
    setIsTimeOpen(!isTimeOpen);
  };

  const timeOptions = times.map((time) => (
    <DropdownItem key={time} component="button" value={`${time}:00`}>
      {`${time}:00`}
    </DropdownItem>
  ));

  const calendar = (
    <CalendarMonth date={new Date(valueDate)} onChange={onSelectCalendar} />
  );

  const time = (
    <Dropdown
      onSelect={onSelectTime}
      toggle={
        <DropdownToggle
          aria-label="Toggle the time picker menu"
          toggleIndicator={null}
          onToggle={onToggleTime}
          style={{ padding: "6px 16px" }}
        >
          <OutlinedClockIcon />
        </DropdownToggle>
      }
      isOpen={isTimeOpen}
      dropdownItems={timeOptions}
    />
  );

  const calendarButton = (
    <Button
      variant="control"
      aria-label="Toggle the calendar"
      onClick={onToggleCalendar}
    >
      <OutlinedCalendarAltIcon />
    </Button>
  );

  const onSubmitHandle = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email && name && phone && valueDate && valueTime) {
      setIsClicked(!isClicked);

      setAlerts((prevAlerts) => {
        return [
          ...prevAlerts,
          <Alert
            variant={AlertVariant["success"]}
            title="form-details"
            actionClose={
              <AlertActionCloseButton
                variantLabel={`alert`}
                onClose={() => setAlerts([])}
              />
            }
          >
            The form is successfully added
          </Alert>,
        ];
      });
    }
  };

  const handleNameChange = (name: string) => {
    setName(name);
    if (name === " ") {
      setValidated("default");
    } else if (!isNaN(+name)) {
      setValidated("success");
    } else {
      setValidated("error");
    }
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  const handlePhoneChange = (phone: string) => {
    setPhone(phone);
  };

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormGroup
          label="Full name"
          isRequired
          helperText={
            <FormHelperText
              icon={<ExclamationCircleIcon />}
              isHidden={validated! === "default"}
            >
              Please enter your name
            </FormHelperText>
          }
          helperTextInvalid="Must be your name"
          helperTextInvalidIcon={<ExclamationCircleIcon />}
          fieldId="age-1"
          validated={validated}
          labelIcon={
            <Popover
              headerContent={
                <div>
                  The{" "}
                  <a
                    href="https://schema.org/name"
                    target="_blank"
                    rel="noreferrer"
                  >
                    name
                  </a>{" "}
                  of a{" "}
                  <a
                    href="https://schema.org/Person"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Person
                  </a>
                </div>
              }
              bodyContent={
                <div>
                  Often composed of{" "}
                  <a
                    href="https://schema.org/givenName"
                    target="_blank"
                    rel="noreferrer"
                  >
                    givenName
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://schema.org/familyName"
                    target="_blank"
                    rel="noreferrer"
                  >
                    familyName
                  </a>
                  .
                </div>
              }
            >
              <button
                type="button"
                aria-label="More info for name field"
                onClick={(e) => e.preventDefault()}
                aria-describedby="simple-form-name-01"
                className="pf-c-form__group-label-help"
              >
                <HelpIcon noVerticalAlign />
              </button>
            </Popover>
          }
        >
          <TextInput
            isRequired
            type="text"
            id="simple-form-name-01"
            name="simple-form-name-01"
            aria-describedby="simple-form-name-01-helper"
            value={name}
            validated={validated}
            onChange={handleNameChange}
          />
        </FormGroup>
        <FormGroup label="Email" isRequired fieldId="simple-form-email-01">
          <TextInput
            isRequired
            type="email"
            id="simple-form-email-01"
            name="simple-form-email-01"
            value={email}
            onChange={handleEmailChange}
          />
        </FormGroup>
        <FormGroup
          label="Phone number"
          isRequired
          fieldId="simple-form-phone-01"
        >
          <TextInput
            isRequired
            type="tel"
            id="simple-form-phone-01"
            name="simple-form-phone-01"
            placeholder="555-555-5555"
            value={phone}
            onChange={handlePhoneChange}
          />
        </FormGroup>
        <FormGroup
          role="group"
          isInline
          fieldId="basic-form-checkbox-group"
          label="How can we contact you?"
        >
          <Popover
            position="bottom"
            bodyContent={calendar}
            showClose={false}
            isVisible={isCalendarOpen}
            hasNoPadding
            hasAutoWidth
          >
            <InputGroup>
              <TextInput
                type="text"
                id="date-time"
                aria-label="date and time picker demo"
                value={valueDate + " " + valueTime}
              />
              {calendarButton}
              {time}
            </InputGroup>
          </Popover>
        </FormGroup>
        <ActionList>
          <ActionListItem>
            <Button variant="primary" type="submit" onClick={onSubmitHandle}>
              Submit
            </Button>
            <AlertGroup isToast isLiveRegion>
              {alerts}
            </AlertGroup>
          </ActionListItem>
          <ActionListItem>
            <Button variant="link">Cancel</Button>
          </ActionListItem>
        </ActionList>
      </Form>
      {isClicked && (
        <>
          <Alert
            variant="default"
            isInline
            title="The entered details are been displayed"
          />
          <TextContent>
            <Text component={TextVariants.p}>The Fullname is {name}</Text>
            <Text component={TextVariants.p}>The email is {email}</Text>
            <Text component={TextVariants.p}>The phone number is {phone}</Text>
            <Text component={TextVariants.p}>
              The Calendar date and month is {valueDate + " " + valueTime}
            </Text>
          </TextContent>
        </>
      )}
    </>
  );
};

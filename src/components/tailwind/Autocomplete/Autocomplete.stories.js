import React from "react";
import { storiesOf } from "@storybook/react";
import {
  Autocomplete,
  AutocompleteInput,
  AutocompleteList,
  AutocompletePopover,
  AutocompleteOption
} from "./Autocomplete";

const options = [
  { value: 0, name: "opt1" },
  { value: 1, name: "opt2" },
  { value: 3, name: "opt3" }
];
const optionsLong = [
  { value: 0, name: "opt1" },
  { value: 1, name: "opt2" },
  { value: 2, name: "opt3" },
  { value: 3, name: "opt4" },
  { value: 4, name: "opt5" },
  { value: 5, name: "opt6" },
  { value: 6, name: "opt7" },
  { value: 7, name: "opt8" },
  { value: 8, name: "opt9" },
  { value: 9, name: "opt10" },
  { value: 10, name: "opt11" },
  { value: 11, name: "opt12" },
  { value: 12, name: "opt13" },
  { value: 13, name: "opt14" },
  { value: 14, name: "opt15" },
  { value: 15, name: "opt16" },
  { value: 16, name: "opt17" },
  { value: 17, name: "opt18" },
  { value: 18, name: "opt19" },
  { value: 19, name: "opt20" },
  { value: 20, name: "opt21" },
  { value: 21, name: "opt22" }
];

const Decorator = storyFn => (
  <div style={{ maxWidth: 250 }}>
    {storyFn()}
    <p>This text should not get pushed down</p>
    <p>This text should not get pushed down</p>
    <p>This text should not get pushed down</p>
    <p>This text should not get pushed down</p>
    <p>This text should not get pushed down</p>
    <p>This text should not get pushed down</p>
    <p>This text should not get pushed down</p>
  </div>
);
const AutocompleteImplementation = ({
  options,
  size = "base",
  placeholder = "Search"
}) => {
  return (
    <Autocomplete size={size}>
      <AutocompleteInput placeholder={placeholder} />
      <AutocompletePopover>
        <AutocompleteList>
          {options.map(({ name, value }) => (
            <AutocompleteOption key={value} value={name} />
          ))}
        </AutocompleteList>
      </AutocompletePopover>
    </Autocomplete>
  );
};

storiesOf("Autocomplete-tailwind", module)
  .addDecorator(Decorator)
  .add("default", () => <AutocompleteImplementation options={options} />)
  .add("size variants", () => (
    <div>
      <div>
        <label>Small</label>
        <AutocompleteImplementation options={options} size="small" />
      </div>
      <div>
        <label>Base</label>
        <AutocompleteImplementation options={options} size="base" />
      </div>
      <div>
        <label>Large</label>
        <AutocompleteImplementation options={options} size="large" />
      </div>
    </div>
  ))
  .add("maxListOptions", () => (
    <AutocompleteImplementation options={optionsLong} />
  ));

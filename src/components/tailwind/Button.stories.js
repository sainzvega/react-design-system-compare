import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import "../../styles/tailwind.css";

storiesOf("Button || tailwind", module)
  .add("default", () => <Button>This is a Button</Button>)
  .add("text color", () => <Button color="red-500">This is a Button</Button>);
// .add("font size", () => <Button textSize="sm">This is a Button</Button>)

// .add("background color", () => <Button bg="red-700">This is a Button</Button>)
// .add("padding", () => <Button px="5">This is a Button</Button>)
// .add("rounded full", () => <Button rounded="full">This is a Button</Button>)
// .add("responsive props", () => (
//   <Button
//     rounded={{ all: "rounded", sm: "b-none", md: "full", lg: "r" }}
//     bg={{ all: "teal-600", sm: "green-600", md: "red-600", lg: "purple-600" }}
//   >
//     This is a Button
//   </Button>
// ))
// .add("custom className", () => (
//   <Button className="test-class">This is a Button</Button>
// ))
// .add("render optimization", () => {
//   const [val, setVal] = React.useState("");
//   return (
//     <>
//       <div>
//         <input value={val} onChange={e => setVal(e.target.value)} />
//       </div>
//       <div>
//         <Button>This is a Button</Button>
//         {/* NOTE: an issue with this because of the creation of new objects on every single render <Button
//     rounded={{ all: "rounded", sm: "b-none", md: "full", lg: "r" }}
//     bg={{ all: "teal-600", sm: "green-600", md: "red-600", lg: "purple-600" }}
//   >
//     This is a Button
//   </Button> */}
//       </div>
//     </>
//   );
// });

import * as R from "ramda";
import { useMemo } from "react";

//============================ Transforms ============================
// Helpers
const isNotNilAndTrue = R.complement(R.anyPass([R.isNil, R.equals(false)]));
const isNotEmpty = R.complement(R.isEmpty);
const filterNilAndFalse = R.pickBy(isNotNilAndTrue);

// Simple transforms
const bgTransform = bg => R.join("", ["bg-", bg]);
const colorTransform = color => R.join("", ["text-", color]);
const radiusTransform = size => R.join("", ["rounded-", size]);

// Aggregate Transforms
const spacingTransform = R.compose(
  R.compose(
    R.join(" "),
    R.map(R.join("-"))
  ),
  R.toPairs,
  filterNilAndFalse
);

// Responsive Transforms
const bgTransformResponsive = R.compose(
  R.join(" "),
  R.map(
    R.cond([
      [
        R.compose(
          R.equals("all"),
          R.head
        ),
        allArr => allArr[1]
      ],
      [R.T, R.join(":bg-")]
    ])
  ),
  R.toPairs
);

const radiusTransformResponsive = R.compose(
  R.join(" "),
  R.map(
    R.cond([
      [
        R.compose(
          R.equals("all"),
          R.head
        ),
        allArr => allArr[1]
      ],
      [R.T, R.join(":rounded-")]
    ])
  ),
  R.toPairs
);

// ============================ MAIN useTailwind hook ============================
// TODO: Make responsive
let count = 0;
export const useTailwind = props => {
  return useMemo(() => {
    console.log("Running usetailwind function", ++count);
    const {
      bg,
      color,
      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,
      rounded,
      className: otherClassName,
      ...restProps
    } = props;
    const className = [];

    if (bg) {
      if (typeof bg === "string") {
        className.push(bgTransform(bg));
      } else if (typeof rounded === "object") {
        className.push(bgTransformResponsive(bg));
      }
    }

    if (color) {
      className.push(colorTransform(color));
    }

    const paddings = spacingTransform({ p, px, py, pt, pr, pb, pl });
    if (isNotEmpty(paddings)) {
      className.push(paddings);
    }

    if (rounded) {
      if (typeof rounded === "string") {
        if (rounded === "rounded") className.push(rounded);
        else className.push(radiusTransform(rounded));
      } else if (typeof rounded === "object") {
        className.push(radiusTransformResponsive(rounded));
      }
    }

    const styles = className
      .join(" ")
      .concat(` ${otherClassName ? otherClassName : ""}`);

    return { className: styles, ...restProps };
  }, [props]); // this will never be memoized if props is the result of a spread
};

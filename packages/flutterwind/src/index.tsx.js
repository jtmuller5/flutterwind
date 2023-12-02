'use strict';

var jsxRuntime = require('react/jsx-runtime');

const flutterMainAxisAlignmentToTailwindJustify = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  spaceBetween: "justify-between",
  spaceAround: "justify-around",
  spaceEvenly: "justify-evenly"
};
const flutterCrossAxisAlignmentToTailwindItems = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  stretch: "items-stretch",
  baseline: "items-baseline"
};
const padding = {
  0: "p-0",
  1: "p-1",
  2: "p-2",
  3: "p-3",
  4: "p-4",
  5: "p-5",
  6: "p-6",
  7: "p-7",
  8: "p-8",
  9: "p-9",
  10: "p-10",
  11: "p-11",
  12: "p-12",
  14: "p-14",
  16: "p-16",
  20: "p-20",
  24: "p-24",
  28: "p-28",
  32: "p-32",
  36: "p-36",
  40: "p-40",
  44: "p-44",
  48: "p-48",
  52: "p-52",
  56: "p-56",
  60: "p-60",
  64: "p-64",
  72: "p-72",
  80: "p-80",
  96: "p-96"
};
const horizontalSpacing = {
  0: "space-x-0",
  1: "space-x-1",
  2: "space-x-2",
  3: "space-x-3",
  4: "space-x-4",
  5: "space-x-5",
  6: "space-x-6",
  7: "space-x-7",
  8: "space-x-8",
  9: "space-x-9",
  10: "space-x-10",
  11: "space-x-11",
  12: "space-x-12",
  14: "space-x-14",
  16: "space-x-16",
  20: "space-x-20",
  24: "space-x-24",
  28: "space-x-28",
  32: "space-x-32",
  36: "space-x-36",
  40: "space-x-40",
  44: "space-x-44",
  48: "space-x-48",
  52: "space-x-52",
  56: "space-x-56",
  60: "space-x-60",
  64: "space-x-64",
  72: "space-x-72",
  80: "space-x-80",
  96: "space-x-96"
};
const verticalSpacing = {
  0: "space-y-0",
  1: "space-y-1",
  2: "space-y-2",
  3: "space-y-3",
  4: "space-y-4",
  5: "space-y-5",
  6: "space-y-6",
  7: "space-y-7",
  8: "space-y-8",
  9: "space-y-9",
  10: "space-y-10",
  11: "space-y-11",
  12: "space-y-12",
  14: "space-y-14",
  16: "space-y-16",
  20: "space-y-20",
  24: "space-y-24",
  28: "space-y-28",
  32: "space-y-32",
  36: "space-y-36",
  40: "space-y-40",
  44: "space-y-44",
  48: "space-y-48",
  52: "space-y-52",
  56: "space-y-56",
  60: "space-y-60",
  64: "space-y-64",
  72: "space-y-72",
  80: "space-y-80",
  96: "space-y-96"
};
const FlutterConstants = {
  flutterMainAxisAlignmentToTailwindJustify,
  flutterCrossAxisAlignmentToTailwindItems,
  padding,
  horizontalSpacing,
  verticalSpacing
};

function Center({
  children,
  padding = 0,
  className = "",
  fullHeight = true
  // New prop to control full height
}) {
  let _padding = FlutterConstants.padding[padding];
  let fullHeightClass = fullHeight ? "h-full" : "";
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `flex justify-center items-center ${_padding} ${fullHeightClass} ${className}`, children });
}

function Column({
  children,
  spacer = 0,
  padding = 0,
  mainAxisAlignment = "start",
  // default: start
  crossAxisAlignment = "stretch",
  // default: stretch
  mainAxisSize = "max-h-full",
  // default: full height
  className = ""
}) {
  let _padding = FlutterConstants.padding[padding];
  let _spacing = FlutterConstants.verticalSpacing[spacer];
  let _crossAxisAlignment = FlutterConstants.flutterCrossAxisAlignmentToTailwindItems[crossAxisAlignment];
  let _mainAxisAlignment = FlutterConstants.flutterMainAxisAlignmentToTailwindJustify[mainAxisAlignment];
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: `flex flex-col ${_mainAxisAlignment} ${_crossAxisAlignment} ${_spacing} ${_padding} ${mainAxisSize} ${className}`,
      children
    }
  );
}

function Row({
  children,
  spacer = 0,
  padding = 0,
  mainAxisAlignment = "start",
  // default: start
  crossAxisAlignment = "stretch",
  // default: stretch
  mainAxisSize = "max-w-full",
  // default: full width
  className = ""
}) {
  let _padding = FlutterConstants.padding[padding];
  let _spacing = FlutterConstants.horizontalSpacing[spacer];
  let _crossAxisAlignment = FlutterConstants.flutterCrossAxisAlignmentToTailwindItems[crossAxisAlignment];
  let _mainAxisAlignment = FlutterConstants.flutterMainAxisAlignmentToTailwindJustify[mainAxisAlignment];
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: `flex ${_mainAxisAlignment} ${_crossAxisAlignment} ${_spacing} ${_padding} ${mainAxisSize} ${className}`,
      children
    }
  );
}

exports.Center = Center;
exports.Column = Column;
exports.Row = Row;
//# sourceMappingURL=index.tsx.js.map

import { FlutterConstants, DaisyConstants } from "./Constants";

export function Row({
  children,
  spacer = 0,
  padding = 0,
  mainAxisAlignment = "start", // default: start
  crossAxisAlignment = "stretch", // default: stretch
  mainAxisSize = "max-w-full", // default: full width
  className = "",
}: {
  children: React.ReactNode[] | React.ReactNode;
  spacer?: keyof typeof FlutterConstants.horizontalSpacing;
  padding?: keyof typeof FlutterConstants.padding;
  mainAxisAlignment?: keyof typeof FlutterConstants.flutterMainAxisAlignmentToTailwindJustify;
  crossAxisAlignment?: keyof typeof FlutterConstants.flutterCrossAxisAlignmentToTailwindItems;
  mainAxisSize?: string;
  className?: string;
}) {
  let _padding = FlutterConstants.padding[padding];
  let _spacing = FlutterConstants.horizontalSpacing[spacer];
  let _crossAxisAlignment =
    FlutterConstants.flutterCrossAxisAlignmentToTailwindItems[crossAxisAlignment];
  let _mainAxisAlignment =
    FlutterConstants.flutterMainAxisAlignmentToTailwindJustify[mainAxisAlignment];

  return (
    <div
      className={`flex ${_mainAxisAlignment} ${_crossAxisAlignment} ${_spacing} ${_padding} ${mainAxisSize} ${className}`}
    >
      {children}
    </div>
  );
}

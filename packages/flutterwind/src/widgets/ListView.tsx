import FlutterConstants from "./Constants.js";

export function ListView({
  children,
  padding = 0,
  scrollDirection = "vertical", // Can be "vertical" or "horizontal"
  className = "",
}: {
  children: React.ReactNode[] | React.ReactNode;
  padding?: keyof typeof FlutterConstants.padding;
  scrollDirection?: "vertical" | "horizontal";
  className?: string;
}) {
  let _padding = FlutterConstants.padding[padding];
  let overflowClass = scrollDirection === "horizontal" ? "overflow-x-auto" : "overflow-y-auto";

  return (
    <div
      className={`flex ${overflowClass} ${
        scrollDirection === "horizontal" ? "flex-row" : "flex-col"
      } ${_padding} ${className}`}
    >
      {children}
    </div>
  );
}

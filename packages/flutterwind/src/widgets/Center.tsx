import FlutterConstants from "./Constants.js";

export function Center({
  children,
  padding = 0,
  className = "",
  fullHeight = true, // New prop to control full height
}: {
  children: React.ReactNode;
  padding?: keyof typeof FlutterConstants.padding;
  className?: string;
  fullHeight?: boolean; // New prop to control full height
}) {
  let _padding = FlutterConstants.padding[padding];
  let fullHeightClass = fullHeight ? "h-full" : ""; // Class to make the div take full height

  return (
    <div className={`flex justify-center items-center ${_padding} ${fullHeightClass} ${className}`}>
      {children}
    </div>
  );
}

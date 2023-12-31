import React from "react";
import { FlutterConstants, DaisyConstants } from "./Constants";
import { AppBar, AppBarProps } from "./AppBar";

type AppBarComponent = React.ReactElement<AppBarProps, typeof AppBar>;


export function Scaffold({
  appBar,
  body,
  floatingActionButton,
  padding = 0,
  className = "",
}: {
  appBar?: AppBarComponent;
  body: React.ReactNode;
  floatingActionButton?: React.ReactNode;
  padding?: keyof typeof FlutterConstants.padding;
  className?: string;
}) {
  let _padding = FlutterConstants.padding[padding];

  return (
    <div className={`min-h-screen flex flex-col ${_padding} ${className}`}>
      {appBar && <header>{appBar}</header>}
      <main className="flex-1">{body}</main>
      {floatingActionButton && <div className="fixed bottom-4 right-4">{floatingActionButton}</div>}
    </div>
  );
}

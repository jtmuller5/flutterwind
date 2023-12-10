---
title: AppBar
description: A Material Design app bar.
---
A Material Design app bar.

# Usage

# Flutter API

| Property             | Description                                                                                           | Supported? |
|----------------------|-------------------------------------------------------------------------------------------------------|------------|
| `title`              | The primary widget displayed in the app bar.                                                          | ✅          |
| `leading`            | A widget to display before the `title`.                                                               | ✅          |
| `actions`            | A list of widgets to display after the `title`.                                                       | ✅          |
| `bottom`             | A widget to display at the bottom of the app bar.                                                     | ✅          |
| `elevation`          | The z-coordinate at which to place this app bar relative to its parent.                               | ❌          |
| `shape`              | The material's shape as well its shadow.                                                              | ❌          |
| `backgroundColor`    | The color to use for the app bar's material.                                                          | ❌          |
| `brightness`         | The brightness of the app bar's material.                                                             | ❌          |
| `iconTheme`          | The color, opacity, and size to use for app bar icons.                                                | ❌          |
| `actionsIconTheme`   | The color, opacity, and size to use for the icons that appear in the app bar's `actions`.             | ❌          |
| `textTheme`          | The typographic styles to use for text in the app bar.                                                | ❌          |
| `primary`            | Whether this app bar is being displayed at the top of the screen.                                     | ❌          |
| `centerTitle`        | Whether the title should be centered.                                                                 | ❌          |
| `excludeHeaderSemantics` | Whether the title should be wrapped with header [Semantics].                                      | ❌          |
| `titleSpacing`       | The spacing around `title` content on the horizontal axis.                                            | ❌          |
| `toolbarOpacity`     | How opaque the toolbar part of the app bar is.                                                        | ❌          |
| `bottomOpacity`      | How opaque the bottom part of the app bar is.                                                         | ❌          |
| `toolbarHeight`      | The height of the toolbar component of the [AppBar].                                                  | ❌          |
| `leadingWidth`       | Defines the width of `leading` widget.                                                                | ❌          |
| `automaticallyImplyLeading` | If true and `leading` is null, automatically try to deduce what the leading widget should be. | ❌          |

# Flutterwind Extras
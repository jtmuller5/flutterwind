import * as react_jsx_runtime from 'react/jsx-runtime';

declare const FlutterConstants: {
    flutterMainAxisAlignmentToTailwindJustify: {
        start: string;
        end: string;
        center: string;
        spaceBetween: string;
        spaceAround: string;
        spaceEvenly: string;
    };
    flutterCrossAxisAlignmentToTailwindItems: {
        start: string;
        end: string;
        center: string;
        stretch: string;
        baseline: string;
    };
    padding: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    horizontalSpacing: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    verticalSpacing: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
};

declare function Center({ children, padding, className, fullHeight, }: {
    children: React.ReactNode;
    padding?: keyof typeof FlutterConstants.padding;
    className?: string;
    fullHeight?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function Column({ children, spacer, padding, mainAxisAlignment, // default: start
crossAxisAlignment, // default: stretch
mainAxisSize, // default: full height
className, }: {
    children: React.ReactNode[] | React.ReactNode;
    spacer?: keyof typeof FlutterConstants.verticalSpacing;
    padding?: keyof typeof FlutterConstants.padding;
    mainAxisAlignment?: keyof typeof FlutterConstants.flutterMainAxisAlignmentToTailwindJustify;
    crossAxisAlignment?: keyof typeof FlutterConstants.flutterCrossAxisAlignmentToTailwindItems;
    mainAxisSize?: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;

declare function Row({ children, spacer, padding, mainAxisAlignment, // default: start
crossAxisAlignment, // default: stretch
mainAxisSize, // default: full width
className, }: {
    children: React.ReactNode[] | React.ReactNode;
    spacer?: keyof typeof FlutterConstants.horizontalSpacing;
    padding?: keyof typeof FlutterConstants.padding;
    mainAxisAlignment?: keyof typeof FlutterConstants.flutterMainAxisAlignmentToTailwindJustify;
    crossAxisAlignment?: keyof typeof FlutterConstants.flutterCrossAxisAlignmentToTailwindItems;
    mainAxisSize?: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;

export { Center, Column, Row };

declare module "*.module.scss" {

    interface IClassNames {
        [className: string]: string;
    }

    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
// declare module '*.svg'

declare module "*.svg" {
    import * as React from "react";

    const SVG: React.FunctionComponent<
        React.SVGProps<SVGSVGElement>
    >;

    export default SVG;
}

declare const __PLATFORM__: 'desktop' | 'mobile';


export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
    src: string;
    public: string;
}

export type BuildMode = "development" | "none" | "production";
export type BuildPlatform = "mobile" | "desktop";

export interface BuildOptions {
    mode?: BuildMode;
    port?: number;
    paths?: BuildPaths;
    analyzer?: boolean;
    platform?: BuildPlatform;
}
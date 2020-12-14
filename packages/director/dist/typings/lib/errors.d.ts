export declare class AppError extends Error {
    code: string;
    constructor(code: string);
}
export declare const INSTANCE_EXISTS = "INSTANCE_EXISTS";
export declare const INSTANCE_NOT_EXIST = "INSTANCE_NOT_EXIST";
export declare const RUN_EXISTS = "RUN_EXISTS";
export declare const RUN_NOT_EXIST = "RUN_NOT_EXISTS";
export declare const CLAIM_FAILED = "CLAIM_FAILED";
export declare const SCREENSHOT_URL_UPDATE_FAILED = "SCREENSHOT_URL_UPDATE_FAILED";
export declare const VIDEO_URL_UPDATE_FAILED = "VIDEO_URL_UPDATE_FAILED";
export declare const INSTANCE_RESULTS_UPDATE_FAILED = "INSTANCE_RESULTS_UPDATE_FAILED";

import { ScreenshotsDriver, InstanceResult, ScreenshotUploadInstruction, AssetUploadInstruction } from '@src/types';
export declare const getVideoUploadUrl: (instanceId: string, result: InstanceResult) => Promise<AssetUploadInstruction | null>;
export declare const getScreenshotsUploadUrls: (instanceId: string, result: InstanceResult) => Promise<ScreenshotUploadInstruction[]>;
export declare const driver: ScreenshotsDriver;

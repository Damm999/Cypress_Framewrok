import { InstanceResult } from '@src/types';
export declare const insertInstance: ({ runId, instanceId, spec }: {
    runId: string;
    instanceId: string;
    spec: string;
}) => Promise<void>;
export declare const getInstanceById: (instanceId: string) => Promise<any>;
export declare const setInstanceResults: (instanceId: string, results: InstanceResult) => Promise<void>;
export declare const setScreenshotUrl: (instanceId: string, screenshotId: string, screenshotURL: string) => Promise<void>;
export declare const setvideoUrl: (instanceId: string, videoUrl: string) => Promise<void>;

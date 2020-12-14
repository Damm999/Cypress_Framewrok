import { ExecutionDriver } from '@src/types';
export declare const createInstance: ({ runId, instanceId, spec }: {
    runId: string;
    instanceId: string;
    spec: string;
}) => Promise<void>;
export declare const setInstanceResults: (instanceId: string, results: import("../../../types").InstanceResult) => Promise<void>;
export declare const setScreenshotUrl: ExecutionDriver['setScreenshotUrl'];
export declare const setVideoUrl: ExecutionDriver['setVideoUrl'];

import { Run } from '@src/types';
export declare const getRunById: (id: string) => Promise<any>;
export declare const createRun: (run: Run) => Promise<{
    ok: number;
    n: number;
}>;
export declare const setSpecClaimed: (runId: string, instanceId: string) => Promise<void>;

import { CreateRunParameters, CreateRunResponse, Task } from '@src/types';
export declare const getById: (id: string) => Promise<any>;
export declare const createRun: (params: CreateRunParameters) => Promise<CreateRunResponse>;
export declare const getNextTask: (runId: string) => Promise<Task>;

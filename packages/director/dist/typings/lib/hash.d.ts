import { CreateRunParameters, PlatformData } from '@src/types';
export declare const generateRunIdHash: ({ ciBuildId, commit, projectId, specs }: CreateRunParameters) => string;
export declare const generateGroupId: (platform: PlatformData, ciBuildId: string) => string;
export declare const generateUUID: () => string;

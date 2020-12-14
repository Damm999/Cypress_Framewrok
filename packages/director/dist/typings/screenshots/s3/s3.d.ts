import { S3SignedUploadResult } from './types';
import { AssetUploadInstruction } from '@src/types';
interface GetUploadURLParams {
    key: string;
    ContentType?: string;
    Expires?: number;
}
export declare const getUploadUrl: ({ key, ContentType, Expires, }: GetUploadURLParams) => Promise<S3SignedUploadResult>;
export declare const getImageUploadUrl: (key: string) => Promise<AssetUploadInstruction>;
export declare const getVideoUploadUrl: (key: string) => Promise<AssetUploadInstruction>;
export {};

/**
 * Returns new object by deeply traversing the given "target" object
 * replacing each key by result of applying `fn` on the original key
 *
 * @param target object to traverse
 * @param fn function to produce new keys
 */
export declare function deepTraverseKeys(target: object, fn?: (key: string) => string): object;

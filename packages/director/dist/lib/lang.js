"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepTraverseKeys = deepTraverseKeys;

var _lodash = require("lodash");

var _util = require("util");

/**
 * Returns new object by deeply traversing the given "target" object
 * replacing each key by result of applying `fn` on the original key
 *
 * @param target object to traverse
 * @param fn function to produce new keys
 */
function deepTraverseKeys(target, fn = _lodash.identity) {
  if (!(0, _lodash.isPlainObject)(target)) {
    throw new Error('Non-plain object detected');
  }

  return (0, _lodash.mapValues)((0, _lodash.mapKeys)(target, (_, key) => fn(key)), value => {
    if ((0, _util.isArray)(value)) {
      return value.map(i => (0, _lodash.isObject)(i) ? deepTraverseKeys(i, fn) : i);
    }

    return (0, _lodash.isObject)(value) ? deepTraverseKeys(value, fn) : value;
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvbGFuZy50cyJdLCJuYW1lcyI6WyJkZWVwVHJhdmVyc2VLZXlzIiwidGFyZ2V0IiwiZm4iLCJpZGVudGl0eSIsIkVycm9yIiwiXyIsImtleSIsInZhbHVlIiwibWFwIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7O0FBT08sU0FBU0EsZ0JBQVQsQ0FDTEMsTUFESyxFQUVMQyxFQUEyQixHQUFHQyxnQkFGekIsRUFHRztBQUNSLE1BQUksQ0FBQywyQkFBY0YsTUFBZCxDQUFMLEVBQTRCO0FBQzFCLFVBQU0sSUFBSUcsS0FBSixDQUFVLDJCQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPLHVCQUNMLHFCQUFRSCxNQUFSLEVBQWdCLENBQUNJLENBQUQsRUFBU0MsR0FBVCxLQUF5QkosRUFBRSxDQUFDSSxHQUFELENBQTNDLENBREssRUFFSkMsS0FBRCxJQUFnQjtBQUNkLFFBQUksbUJBQVFBLEtBQVIsQ0FBSixFQUFvQjtBQUNsQixhQUFPQSxLQUFLLENBQUNDLEdBQU4sQ0FBVUMsQ0FBQyxJQUFLLHNCQUFTQSxDQUFULElBQWNULGdCQUFnQixDQUFDUyxDQUFELEVBQUlQLEVBQUosQ0FBOUIsR0FBd0NPLENBQXhELENBQVA7QUFDRDs7QUFDRCxXQUFPLHNCQUFTRixLQUFULElBQWtCUCxnQkFBZ0IsQ0FBQ08sS0FBRCxFQUFRTCxFQUFSLENBQWxDLEdBQWdESyxLQUF2RDtBQUNELEdBUEksQ0FBUDtBQVNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFwS2V5cywgbWFwVmFsdWVzLCBpc09iamVjdCwgaWRlbnRpdHksIGlzUGxhaW5PYmplY3QgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ3V0aWwnO1xuXG4vKipcbiAqIFJldHVybnMgbmV3IG9iamVjdCBieSBkZWVwbHkgdHJhdmVyc2luZyB0aGUgZ2l2ZW4gXCJ0YXJnZXRcIiBvYmplY3RcbiAqIHJlcGxhY2luZyBlYWNoIGtleSBieSByZXN1bHQgb2YgYXBwbHlpbmcgYGZuYCBvbiB0aGUgb3JpZ2luYWwga2V5XG4gKlxuICogQHBhcmFtIHRhcmdldCBvYmplY3QgdG8gdHJhdmVyc2VcbiAqIEBwYXJhbSBmbiBmdW5jdGlvbiB0byBwcm9kdWNlIG5ldyBrZXlzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwVHJhdmVyc2VLZXlzKFxuICB0YXJnZXQ6IG9iamVjdCxcbiAgZm46IChrZXk6IHN0cmluZykgPT4gc3RyaW5nID0gaWRlbnRpdHlcbik6IG9iamVjdCB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb24tcGxhaW4gb2JqZWN0IGRldGVjdGVkJyk7XG4gIH1cbiAgcmV0dXJuIG1hcFZhbHVlcyhcbiAgICBtYXBLZXlzKHRhcmdldCwgKF86IGFueSwga2V5OiBzdHJpbmcpID0+IGZuKGtleSkpLFxuICAgICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChpID0+IChpc09iamVjdChpKSA/IGRlZXBUcmF2ZXJzZUtleXMoaSwgZm4pIDogaSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSA/IGRlZXBUcmF2ZXJzZUtleXModmFsdWUsIGZuKSA6IHZhbHVlO1xuICAgIH1cbiAgKTtcbn1cbiJdfQ==
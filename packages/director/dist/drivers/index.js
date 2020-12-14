"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExecutionDriver = exports.getScreenshotsDriver = void 0;

var _config = require("../config");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const getScreenshotsDriver = async () => Promise.resolve(`${_config.SCREENSHOTS_DRIVER}`).then(s => _interopRequireWildcard(require(s))).then(module => module.driver);

exports.getScreenshotsDriver = getScreenshotsDriver;

const getExecutionDriver = async () => Promise.resolve(`${_config.EXECUTION_DRIVER}`).then(s => _interopRequireWildcard(require(s))).then(module => module.driver);

exports.getExecutionDriver = getExecutionDriver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcml2ZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbImdldFNjcmVlbnNob3RzRHJpdmVyIiwiU0NSRUVOU0hPVFNfRFJJVkVSIiwidGhlbiIsIm1vZHVsZSIsImRyaXZlciIsImdldEV4ZWN1dGlvbkRyaXZlciIsIkVYRUNVVElPTl9EUklWRVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7O0FBRU8sTUFBTUEsb0JBQW9CLEdBQUcsWUFDbEMsbUJBQU9DLDBCQUFQLG1EQUEyQkMsSUFBM0IsQ0FBZ0NDLE1BQU0sSUFBSUEsTUFBTSxDQUFDQyxNQUFqRCxDQURLOzs7O0FBR0EsTUFBTUMsa0JBQWtCLEdBQUcsWUFDaEMsbUJBQU9DLHdCQUFQLG1EQUF5QkosSUFBekIsQ0FBOEJDLE1BQU0sSUFBSUEsTUFBTSxDQUFDQyxNQUEvQyxDQURLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXhlY3V0aW9uRHJpdmVyIH0gZnJvbSAnQHNyYy90eXBlcyc7XG5pbXBvcnQgeyBFWEVDVVRJT05fRFJJVkVSLCBTQ1JFRU5TSE9UU19EUklWRVIgfSBmcm9tICdAc3JjL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBnZXRTY3JlZW5zaG90c0RyaXZlciA9IGFzeW5jICgpOiBQcm9taXNlPEV4ZWN1dGlvbkRyaXZlcj4gPT5cbiAgaW1wb3J0KFNDUkVFTlNIT1RTX0RSSVZFUikudGhlbihtb2R1bGUgPT4gbW9kdWxlLmRyaXZlcik7XG5cbmV4cG9ydCBjb25zdCBnZXRFeGVjdXRpb25Ecml2ZXIgPSBhc3luYyAoKTogUHJvbWlzZTxFeGVjdXRpb25Ecml2ZXI+ID0+XG4gIGltcG9ydChFWEVDVVRJT05fRFJJVkVSKS50aGVuKG1vZHVsZSA9PiBtb2R1bGUuZHJpdmVyKTtcbiJdfQ==
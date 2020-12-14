"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.driver = void 0;

var _mongo = require("../../lib/mongo");

var mongoRunController = _interopRequireWildcard(require("./runs/run.controller"));

var mongoInstanceController = _interopRequireWildcard(require("./instances/instance.controller"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const driver = {
  id: 'stateful-mongo',
  init: _mongo.init,
  createRun: mongoRunController.createRun,
  getNextTask: mongoRunController.getNextTask,
  setVideoUrl: mongoInstanceController.setVideoUrl,
  setScreenshotUrl: mongoInstanceController.setScreenshotUrl,
  setInstanceResults: mongoInstanceController.setInstanceResults
};
exports.driver = driver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGVjdXRpb24vbW9uZ28vZHJpdmVyLnRzIl0sIm5hbWVzIjpbImRyaXZlciIsImlkIiwiaW5pdCIsImNyZWF0ZVJ1biIsIm1vbmdvUnVuQ29udHJvbGxlciIsImdldE5leHRUYXNrIiwic2V0VmlkZW9VcmwiLCJtb25nb0luc3RhbmNlQ29udHJvbGxlciIsInNldFNjcmVlbnNob3RVcmwiLCJzZXRJbnN0YW5jZVJlc3VsdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7O0FBRU8sTUFBTUEsTUFBdUIsR0FBRztBQUNyQ0MsRUFBQUEsRUFBRSxFQUFFLGdCQURpQztBQUVyQ0MsRUFBQUEsSUFBSSxFQUFKQSxXQUZxQztBQUdyQ0MsRUFBQUEsU0FBUyxFQUFFQyxrQkFBa0IsQ0FBQ0QsU0FITztBQUlyQ0UsRUFBQUEsV0FBVyxFQUFFRCxrQkFBa0IsQ0FBQ0MsV0FKSztBQUtyQ0MsRUFBQUEsV0FBVyxFQUFFQyx1QkFBdUIsQ0FBQ0QsV0FMQTtBQU1yQ0UsRUFBQUEsZ0JBQWdCLEVBQUVELHVCQUF1QixDQUFDQyxnQkFOTDtBQU9yQ0MsRUFBQUEsa0JBQWtCLEVBQUVGLHVCQUF1QixDQUFDRTtBQVBQLENBQWhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdCB9IGZyb20gJ0BzcmMvbGliL21vbmdvJztcbmltcG9ydCB7IEV4ZWN1dGlvbkRyaXZlciB9IGZyb20gJ0BzcmMvdHlwZXMnO1xuaW1wb3J0ICogYXMgbW9uZ29SdW5Db250cm9sbGVyIGZyb20gJy4vcnVucy9ydW4uY29udHJvbGxlcic7XG5pbXBvcnQgKiBhcyBtb25nb0luc3RhbmNlQ29udHJvbGxlciBmcm9tICcuL2luc3RhbmNlcy9pbnN0YW5jZS5jb250cm9sbGVyJztcblxuZXhwb3J0IGNvbnN0IGRyaXZlcjogRXhlY3V0aW9uRHJpdmVyID0ge1xuICBpZDogJ3N0YXRlZnVsLW1vbmdvJyxcbiAgaW5pdCxcbiAgY3JlYXRlUnVuOiBtb25nb1J1bkNvbnRyb2xsZXIuY3JlYXRlUnVuLFxuICBnZXROZXh0VGFzazogbW9uZ29SdW5Db250cm9sbGVyLmdldE5leHRUYXNrLFxuICBzZXRWaWRlb1VybDogbW9uZ29JbnN0YW5jZUNvbnRyb2xsZXIuc2V0VmlkZW9VcmwsXG4gIHNldFNjcmVlbnNob3RVcmw6IG1vbmdvSW5zdGFuY2VDb250cm9sbGVyLnNldFNjcmVlbnNob3RVcmwsXG4gIHNldEluc3RhbmNlUmVzdWx0czogbW9uZ29JbnN0YW5jZUNvbnRyb2xsZXIuc2V0SW5zdGFuY2VSZXN1bHRzXG59O1xuIl19
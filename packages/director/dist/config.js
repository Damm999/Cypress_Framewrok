"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALLOWED_KEYS = exports.MONGODB_DATABASE = exports.MONGODB_URI = exports.SCREENSHOTS_DRIVER = exports.EXECUTION_DRIVER = exports.DASHBOARD_URL = exports.PORT = void 0;

require("dotenv/config");

const PORT = process.env.PORT || 1234;
exports.PORT = PORT;
const DASHBOARD_URL = process.env.DASHBOARD_URL || `http://localhost:8080`;
exports.DASHBOARD_URL = DASHBOARD_URL;
const EXECUTION_DRIVER = process.env.EXECUTION_DRIVER || '../execution/in-memory';
exports.EXECUTION_DRIVER = EXECUTION_DRIVER;
const SCREENSHOTS_DRIVER = process.env.SCREENSHOTS_DRIVER || '../screenshots/dummy.driver';
exports.SCREENSHOTS_DRIVER = SCREENSHOTS_DRIVER;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongo:27017';
exports.MONGODB_URI = MONGODB_URI;
const MONGODB_DATABASE = process.env.MONGODB_DATABASE || 'sorry-cypress';
exports.MONGODB_DATABASE = MONGODB_DATABASE;
const ALLOWED_KEYS = process.env.ALLOWED_KEYS ? process.env.ALLOWED_KEYS.split(',') : null;
exports.ALLOWED_KEYS = ALLOWED_KEYS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWcudHMiXSwibmFtZXMiOlsiUE9SVCIsInByb2Nlc3MiLCJlbnYiLCJEQVNIQk9BUkRfVVJMIiwiRVhFQ1VUSU9OX0RSSVZFUiIsIlNDUkVFTlNIT1RTX0RSSVZFUiIsIk1PTkdPREJfVVJJIiwiTU9OR09EQl9EQVRBQkFTRSIsIkFMTE9XRURfS0VZUyIsInNwbGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRU8sTUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixJQUFvQixJQUFqQzs7QUFFQSxNQUFNRyxhQUFhLEdBQ3hCRixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsYUFBWixJQUE4Qix1QkFEekI7O0FBR0EsTUFBTUMsZ0JBQWdCLEdBQzNCSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsZ0JBQVosSUFBZ0Msd0JBRDNCOztBQUdBLE1BQU1DLGtCQUFrQixHQUM3QkosT0FBTyxDQUFDQyxHQUFSLENBQVlHLGtCQUFaLElBQWtDLDZCQUQ3Qjs7QUFHQSxNQUFNQyxXQUFXLEdBQUdMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxXQUFaLElBQTJCLHVCQUEvQzs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBR04sT0FBTyxDQUFDQyxHQUFSLENBQVlLLGdCQUFaLElBQWdDLGVBQXpEOztBQUVBLE1BQU1DLFlBQXNCLEdBQUdQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTSxZQUFaLEdBQTJCUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU0sWUFBWixDQUF5QkMsS0FBekIsQ0FBK0IsR0FBL0IsQ0FBM0IsR0FBaUUsSUFBaEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2RvdGVudi9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMTIzNDtcblxuZXhwb3J0IGNvbnN0IERBU0hCT0FSRF9VUkwgPVxuICBwcm9jZXNzLmVudi5EQVNIQk9BUkRfVVJMIHx8IGBodHRwOi8vbG9jYWxob3N0OjgwODBgO1xuXG5leHBvcnQgY29uc3QgRVhFQ1VUSU9OX0RSSVZFUiA9XG4gIHByb2Nlc3MuZW52LkVYRUNVVElPTl9EUklWRVIgfHwgJy4uL2V4ZWN1dGlvbi9pbi1tZW1vcnknO1xuXG5leHBvcnQgY29uc3QgU0NSRUVOU0hPVFNfRFJJVkVSID1cbiAgcHJvY2Vzcy5lbnYuU0NSRUVOU0hPVFNfRFJJVkVSIHx8ICcuLi9zY3JlZW5zaG90cy9kdW1teS5kcml2ZXInO1xuXG5leHBvcnQgY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSB8fCAnbW9uZ29kYjovL21vbmdvOjI3MDE3JztcbmV4cG9ydCBjb25zdCBNT05HT0RCX0RBVEFCQVNFID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9EQVRBQkFTRSB8fCAnc29ycnktY3lwcmVzcyc7XG5cbmV4cG9ydCBjb25zdCBBTExPV0VEX0tFWVM6IHN0cmluZ1tdID0gcHJvY2Vzcy5lbnYuQUxMT1dFRF9LRVlTID8gcHJvY2Vzcy5lbnYuQUxMT1dFRF9LRVlTLnNwbGl0KCcsJykgOiBudWxsO1xuIl19
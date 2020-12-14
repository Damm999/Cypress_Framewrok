"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateUUID = exports.generateGroupId = exports.generateRunIdHash = void 0;

var _md = _interopRequireDefault(require("md5"));

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateRunIdHash = ({
  ciBuildId,
  commit,
  projectId,
  specs
}) => (0, _md.default)(ciBuildId + commit.sha + projectId + specs.join(' ')); // not sure how specific that should be


exports.generateRunIdHash = generateRunIdHash;

const generateGroupId = (platform, ciBuildId) => `${platform.osName}-${platform.osVersion}-${ciBuildId}`;

exports.generateGroupId = generateGroupId;

const generateUUID = () => (0, _v.default)();

exports.generateUUID = generateUUID;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvaGFzaC50cyJdLCJuYW1lcyI6WyJnZW5lcmF0ZVJ1bklkSGFzaCIsImNpQnVpbGRJZCIsImNvbW1pdCIsInByb2plY3RJZCIsInNwZWNzIiwic2hhIiwiam9pbiIsImdlbmVyYXRlR3JvdXBJZCIsInBsYXRmb3JtIiwib3NOYW1lIiwib3NWZXJzaW9uIiwiZ2VuZXJhdGVVVUlEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFHTyxNQUFNQSxpQkFBaUIsR0FBRyxDQUFDO0FBQ2hDQyxFQUFBQSxTQURnQztBQUVoQ0MsRUFBQUEsTUFGZ0M7QUFHaENDLEVBQUFBLFNBSGdDO0FBSWhDQyxFQUFBQTtBQUpnQyxDQUFELEtBTS9CLGlCQUFJSCxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0csR0FBbkIsR0FBeUJGLFNBQXpCLEdBQXFDQyxLQUFLLENBQUNFLElBQU4sQ0FBVyxHQUFYLENBQXpDLENBTkssQyxDQVFQOzs7OztBQUNPLE1BQU1DLGVBQWUsR0FBRyxDQUM3QkMsUUFENkIsRUFFN0JQLFNBRjZCLEtBR2pCLEdBQUVPLFFBQVEsQ0FBQ0MsTUFBTyxJQUFHRCxRQUFRLENBQUNFLFNBQVUsSUFBR1QsU0FBVSxFQUg1RDs7OztBQUtBLE1BQU1VLFlBQVksR0FBRyxNQUFNLGlCQUEzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZDUgZnJvbSAnbWQ1JztcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjQnO1xuaW1wb3J0IHsgQ3JlYXRlUnVuUGFyYW1ldGVycywgUGxhdGZvcm1EYXRhIH0gZnJvbSAnQHNyYy90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVJ1bklkSGFzaCA9ICh7XG4gIGNpQnVpbGRJZCxcbiAgY29tbWl0LFxuICBwcm9qZWN0SWQsXG4gIHNwZWNzXG59OiBDcmVhdGVSdW5QYXJhbWV0ZXJzKTogc3RyaW5nID0+XG4gIG1kNShjaUJ1aWxkSWQgKyBjb21taXQuc2hhICsgcHJvamVjdElkICsgc3BlY3Muam9pbignICcpKTtcblxuLy8gbm90IHN1cmUgaG93IHNwZWNpZmljIHRoYXQgc2hvdWxkIGJlXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVHcm91cElkID0gKFxuICBwbGF0Zm9ybTogUGxhdGZvcm1EYXRhLFxuICBjaUJ1aWxkSWQ6IHN0cmluZ1xuKTogc3RyaW5nID0+IGAke3BsYXRmb3JtLm9zTmFtZX0tJHtwbGF0Zm9ybS5vc1ZlcnNpb259LSR7Y2lCdWlsZElkfWA7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVVVSUQgPSAoKSA9PiB1dWlkKCk7XG4iXX0=
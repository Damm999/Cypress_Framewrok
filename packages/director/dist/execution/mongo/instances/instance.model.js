"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setvideoUrl = exports.setScreenshotUrl = exports.setInstanceResults = exports.getInstanceById = exports.insertInstance = void 0;

var _mongo = require("../../../lib/mongo");

var _errors = require("../../../lib/errors");

var _results = require("../../../lib/results");

const COLLECTION_NAME = 'instances';

const insertInstance = async ({
  runId,
  instanceId,
  spec
}) => {
  try {
    await (0, _mongo.getMongoDB)().collection(COLLECTION_NAME).insertOne({
      spec,
      runId,
      instanceId
    });
  } catch (error) {
    if (error.code && error.code === 11000) {
      throw new _errors.AppError(_errors.INSTANCE_EXISTS);
    }

    throw error;
  }
};

exports.insertInstance = insertInstance;

const getInstanceById = async instanceId => await (0, _mongo.getMongoDB)().collection(COLLECTION_NAME).findOne({
  instanceId
});

exports.getInstanceById = getInstanceById;

const setInstanceResults = async (instanceId, results) => {
  const {
    matchedCount,
    modifiedCount
  } = await (0, _mongo.getMongoDB)().collection(COLLECTION_NAME).updateOne({
    instanceId
  }, {
    $set: {
      results: (0, _results.getSanitizedMongoObject)(results)
    }
  });

  if (matchedCount && modifiedCount) {
    return;
  } else {
    throw new _errors.AppError(_errors.INSTANCE_RESULTS_UPDATE_FAILED);
  }
};

exports.setInstanceResults = setInstanceResults;

const setScreenshotUrl = async (instanceId, screenshotId, screenshotURL) => {
  const {
    matchedCount,
    modifiedCount
  } = await (0, _mongo.getMongoDB)().collection(COLLECTION_NAME).updateOne({
    instanceId
  }, {
    $set: {
      'results.screenshots.$[screenshot].screenshotURL': screenshotURL
    }
  }, {
    arrayFilters: [{
      'screenshot.screenshotId': screenshotId
    }]
  });

  if (matchedCount && modifiedCount) {
    return;
  } else {
    throw new _errors.AppError(_errors.SCREENSHOT_URL_UPDATE_FAILED);
  }
};

exports.setScreenshotUrl = setScreenshotUrl;

const setvideoUrl = async (instanceId, videoUrl) => {
  const {
    matchedCount,
    modifiedCount
  } = await (0, _mongo.getMongoDB)().collection(COLLECTION_NAME).updateOne({
    instanceId
  }, {
    $set: {
      'results.videoUrl': videoUrl
    }
  });

  if (matchedCount && modifiedCount) {
    return;
  } else {
    throw new _errors.AppError(_errors.VIDEO_URL_UPDATE_FAILED);
  }
};

exports.setvideoUrl = setvideoUrl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGVjdXRpb24vbW9uZ28vaW5zdGFuY2VzL2luc3RhbmNlLm1vZGVsLnRzIl0sIm5hbWVzIjpbIkNPTExFQ1RJT05fTkFNRSIsImluc2VydEluc3RhbmNlIiwicnVuSWQiLCJpbnN0YW5jZUlkIiwic3BlYyIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJlcnJvciIsImNvZGUiLCJBcHBFcnJvciIsIklOU1RBTkNFX0VYSVNUUyIsImdldEluc3RhbmNlQnlJZCIsImZpbmRPbmUiLCJzZXRJbnN0YW5jZVJlc3VsdHMiLCJyZXN1bHRzIiwibWF0Y2hlZENvdW50IiwibW9kaWZpZWRDb3VudCIsInVwZGF0ZU9uZSIsIiRzZXQiLCJJTlNUQU5DRV9SRVNVTFRTX1VQREFURV9GQUlMRUQiLCJzZXRTY3JlZW5zaG90VXJsIiwic2NyZWVuc2hvdElkIiwic2NyZWVuc2hvdFVSTCIsImFycmF5RmlsdGVycyIsIlNDUkVFTlNIT1RfVVJMX1VQREFURV9GQUlMRUQiLCJzZXR2aWRlb1VybCIsInZpZGVvVXJsIiwiVklERU9fVVJMX1VQREFURV9GQUlMRUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFPQTs7QUFFQSxNQUFNQSxlQUFlLEdBQUcsV0FBeEI7O0FBRU8sTUFBTUMsY0FBYyxHQUFHLE9BQU87QUFDbkNDLEVBQUFBLEtBRG1DO0FBRW5DQyxFQUFBQSxVQUZtQztBQUduQ0MsRUFBQUE7QUFIbUMsQ0FBUCxLQVF4QjtBQUNKLE1BQUk7QUFDRixVQUFNLHlCQUNIQyxVQURHLENBQ1FMLGVBRFIsRUFFSE0sU0FGRyxDQUVPO0FBQ1RGLE1BQUFBLElBRFM7QUFFVEYsTUFBQUEsS0FGUztBQUdUQyxNQUFBQTtBQUhTLEtBRlAsQ0FBTjtBQU9ELEdBUkQsQ0FRRSxPQUFPSSxLQUFQLEVBQWM7QUFDZCxRQUFJQSxLQUFLLENBQUNDLElBQU4sSUFBY0QsS0FBSyxDQUFDQyxJQUFOLEtBQWUsS0FBakMsRUFBd0M7QUFDdEMsWUFBTSxJQUFJQyxnQkFBSixDQUFhQyx1QkFBYixDQUFOO0FBQ0Q7O0FBQ0QsVUFBTUgsS0FBTjtBQUNEO0FBQ0YsQ0F2Qk07Ozs7QUF5QkEsTUFBTUksZUFBZSxHQUFHLE1BQU9SLFVBQVAsSUFDN0IsTUFBTSx5QkFDSEUsVUFERyxDQUNRTCxlQURSLEVBRUhZLE9BRkcsQ0FFSztBQUFFVCxFQUFBQTtBQUFGLENBRkwsQ0FERDs7OztBQUtBLE1BQU1VLGtCQUFrQixHQUFHLE9BQ2hDVixVQURnQyxFQUVoQ1csT0FGZ0MsS0FHN0I7QUFDSCxRQUFNO0FBQUVDLElBQUFBLFlBQUY7QUFBZ0JDLElBQUFBO0FBQWhCLE1BQWtDLE1BQU0seUJBQzNDWCxVQUQyQyxDQUNoQ0wsZUFEZ0MsRUFFM0NpQixTQUYyQyxDQUcxQztBQUNFZCxJQUFBQTtBQURGLEdBSDBDLEVBTTFDO0FBQ0VlLElBQUFBLElBQUksRUFBRTtBQUNKSixNQUFBQSxPQUFPLEVBQUUsc0NBQXdCQSxPQUF4QjtBQURMO0FBRFIsR0FOMEMsQ0FBOUM7O0FBYUEsTUFBSUMsWUFBWSxJQUFJQyxhQUFwQixFQUFtQztBQUNqQztBQUNELEdBRkQsTUFFTztBQUNMLFVBQU0sSUFBSVAsZ0JBQUosQ0FBYVUsc0NBQWIsQ0FBTjtBQUNEO0FBQ0YsQ0F0Qk07Ozs7QUF3QkEsTUFBTUMsZ0JBQWdCLEdBQUcsT0FDOUJqQixVQUQ4QixFQUU5QmtCLFlBRjhCLEVBRzlCQyxhQUg4QixLQUkzQjtBQUNILFFBQU07QUFBRVAsSUFBQUEsWUFBRjtBQUFnQkMsSUFBQUE7QUFBaEIsTUFBa0MsTUFBTSx5QkFDM0NYLFVBRDJDLENBQ2hDTCxlQURnQyxFQUUzQ2lCLFNBRjJDLENBRzFDO0FBQ0VkLElBQUFBO0FBREYsR0FIMEMsRUFNMUM7QUFDRWUsSUFBQUEsSUFBSSxFQUFFO0FBQ0oseURBQW1ESTtBQUQvQztBQURSLEdBTjBDLEVBVzFDO0FBQ0VDLElBQUFBLFlBQVksRUFBRSxDQUFDO0FBQUUsaUNBQTJCRjtBQUE3QixLQUFEO0FBRGhCLEdBWDBDLENBQTlDOztBQWdCQSxNQUFJTixZQUFZLElBQUlDLGFBQXBCLEVBQW1DO0FBQ2pDO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsVUFBTSxJQUFJUCxnQkFBSixDQUFhZSxvQ0FBYixDQUFOO0FBQ0Q7QUFDRixDQTFCTTs7OztBQTRCQSxNQUFNQyxXQUFXLEdBQUcsT0FBT3RCLFVBQVAsRUFBMkJ1QixRQUEzQixLQUFnRDtBQUN6RSxRQUFNO0FBQUVYLElBQUFBLFlBQUY7QUFBZ0JDLElBQUFBO0FBQWhCLE1BQWtDLE1BQU0seUJBQzNDWCxVQUQyQyxDQUNoQ0wsZUFEZ0MsRUFFM0NpQixTQUYyQyxDQUcxQztBQUNFZCxJQUFBQTtBQURGLEdBSDBDLEVBTTFDO0FBQ0VlLElBQUFBLElBQUksRUFBRTtBQUNKLDBCQUFvQlE7QUFEaEI7QUFEUixHQU4wQyxDQUE5Qzs7QUFhQSxNQUFJWCxZQUFZLElBQUlDLGFBQXBCLEVBQW1DO0FBQ2pDO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsVUFBTSxJQUFJUCxnQkFBSixDQUFha0IsK0JBQWIsQ0FBTjtBQUNEO0FBQ0YsQ0FuQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnN0YW5jZVJlc3VsdCB9IGZyb20gJ0BzcmMvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TW9uZ29EQiB9IGZyb20gJ0BzcmMvbGliL21vbmdvJztcbmltcG9ydCB7XG4gIEFwcEVycm9yLFxuICBJTlNUQU5DRV9FWElTVFMsXG4gIFZJREVPX1VSTF9VUERBVEVfRkFJTEVELFxuICBTQ1JFRU5TSE9UX1VSTF9VUERBVEVfRkFJTEVELFxuICBJTlNUQU5DRV9SRVNVTFRTX1VQREFURV9GQUlMRURcbn0gZnJvbSAnQHNyYy9saWIvZXJyb3JzJztcbmltcG9ydCB7IGdldFNhbml0aXplZE1vbmdvT2JqZWN0IH0gZnJvbSAnQHNyYy9saWIvcmVzdWx0cyc7XG5cbmNvbnN0IENPTExFQ1RJT05fTkFNRSA9ICdpbnN0YW5jZXMnO1xuXG5leHBvcnQgY29uc3QgaW5zZXJ0SW5zdGFuY2UgPSBhc3luYyAoe1xuICBydW5JZCxcbiAgaW5zdGFuY2VJZCxcbiAgc3BlY1xufToge1xuICBydW5JZDogc3RyaW5nO1xuICBpbnN0YW5jZUlkOiBzdHJpbmc7XG4gIHNwZWM6IHN0cmluZztcbn0pID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBnZXRNb25nb0RCKClcbiAgICAgIC5jb2xsZWN0aW9uKENPTExFQ1RJT05fTkFNRSlcbiAgICAgIC5pbnNlcnRPbmUoe1xuICAgICAgICBzcGVjLFxuICAgICAgICBydW5JZCxcbiAgICAgICAgaW5zdGFuY2VJZFxuICAgICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLmNvZGUgJiYgZXJyb3IuY29kZSA9PT0gMTEwMDApIHtcbiAgICAgIHRocm93IG5ldyBBcHBFcnJvcihJTlNUQU5DRV9FWElTVFMpO1xuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldEluc3RhbmNlQnlJZCA9IGFzeW5jIChpbnN0YW5jZUlkOiBzdHJpbmcpID0+XG4gIGF3YWl0IGdldE1vbmdvREIoKVxuICAgIC5jb2xsZWN0aW9uKENPTExFQ1RJT05fTkFNRSlcbiAgICAuZmluZE9uZSh7IGluc3RhbmNlSWQgfSk7XG5cbmV4cG9ydCBjb25zdCBzZXRJbnN0YW5jZVJlc3VsdHMgPSBhc3luYyAoXG4gIGluc3RhbmNlSWQ6IHN0cmluZyxcbiAgcmVzdWx0czogSW5zdGFuY2VSZXN1bHRcbikgPT4ge1xuICBjb25zdCB7IG1hdGNoZWRDb3VudCwgbW9kaWZpZWRDb3VudCB9ID0gYXdhaXQgZ2V0TW9uZ29EQigpXG4gICAgLmNvbGxlY3Rpb24oQ09MTEVDVElPTl9OQU1FKVxuICAgIC51cGRhdGVPbmUoXG4gICAgICB7XG4gICAgICAgIGluc3RhbmNlSWRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICRzZXQ6IHtcbiAgICAgICAgICByZXN1bHRzOiBnZXRTYW5pdGl6ZWRNb25nb09iamVjdChyZXN1bHRzKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICBpZiAobWF0Y2hlZENvdW50ICYmIG1vZGlmaWVkQ291bnQpIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEFwcEVycm9yKElOU1RBTkNFX1JFU1VMVFNfVVBEQVRFX0ZBSUxFRCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzZXRTY3JlZW5zaG90VXJsID0gYXN5bmMgKFxuICBpbnN0YW5jZUlkOiBzdHJpbmcsXG4gIHNjcmVlbnNob3RJZDogc3RyaW5nLFxuICBzY3JlZW5zaG90VVJMOiBzdHJpbmdcbikgPT4ge1xuICBjb25zdCB7IG1hdGNoZWRDb3VudCwgbW9kaWZpZWRDb3VudCB9ID0gYXdhaXQgZ2V0TW9uZ29EQigpXG4gICAgLmNvbGxlY3Rpb24oQ09MTEVDVElPTl9OQU1FKVxuICAgIC51cGRhdGVPbmUoXG4gICAgICB7XG4gICAgICAgIGluc3RhbmNlSWRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICRzZXQ6IHtcbiAgICAgICAgICAncmVzdWx0cy5zY3JlZW5zaG90cy4kW3NjcmVlbnNob3RdLnNjcmVlbnNob3RVUkwnOiBzY3JlZW5zaG90VVJMXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFycmF5RmlsdGVyczogW3sgJ3NjcmVlbnNob3Quc2NyZWVuc2hvdElkJzogc2NyZWVuc2hvdElkIH1dXG4gICAgICB9XG4gICAgKTtcblxuICBpZiAobWF0Y2hlZENvdW50ICYmIG1vZGlmaWVkQ291bnQpIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEFwcEVycm9yKFNDUkVFTlNIT1RfVVJMX1VQREFURV9GQUlMRUQpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0dmlkZW9VcmwgPSBhc3luYyAoaW5zdGFuY2VJZDogc3RyaW5nLCB2aWRlb1VybDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHsgbWF0Y2hlZENvdW50LCBtb2RpZmllZENvdW50IH0gPSBhd2FpdCBnZXRNb25nb0RCKClcbiAgICAuY29sbGVjdGlvbihDT0xMRUNUSU9OX05BTUUpXG4gICAgLnVwZGF0ZU9uZShcbiAgICAgIHtcbiAgICAgICAgaW5zdGFuY2VJZFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJHNldDoge1xuICAgICAgICAgICdyZXN1bHRzLnZpZGVvVXJsJzogdmlkZW9VcmxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgaWYgKG1hdGNoZWRDb3VudCAmJiBtb2RpZmllZENvdW50KSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBBcHBFcnJvcihWSURFT19VUkxfVVBEQVRFX0ZBSUxFRCk7XG4gIH1cbn07XG4iXX0=
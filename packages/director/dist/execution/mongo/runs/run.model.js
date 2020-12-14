"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSpecClaimed = exports.createRun = exports.getRunById = void 0;

var _mongo = require("../../../lib/mongo");

var _errors = require("../../../lib/errors");

var _results = require("../../../lib/results");

const getRunById = async id => await (0, _mongo.getMongoDB)().collection('runs').findOne({
  runId: id
});

exports.getRunById = getRunById;

const createRun = async run => {
  try {
    const {
      result
    } = await (0, _mongo.getMongoDB)().collection('runs').insertOne((0, _results.getSanitizedMongoObject)(run));
    return result;
  } catch (error) {
    if (error.code && error.code === 11000) {
      throw new _errors.AppError(_errors.RUN_EXISTS);
    }

    throw error;
  }
}; // atomic operation to avoid concurrency issues
// filter document prevents concurrent writes


exports.createRun = createRun;

const setSpecClaimed = async (runId, instanceId) => {
  const {
    matchedCount,
    modifiedCount
  } = await (0, _mongo.getMongoDB)().collection('runs').updateOne({
    runId,
    specs: {
      $elemMatch: {
        instanceId,
        claimed: false
      }
    }
  }, {
    $set: {
      'specs.$[spec].claimed': true
    }
  }, {
    arrayFilters: [{
      'spec.instanceId': instanceId
    }]
  });

  if (matchedCount && modifiedCount) {
    return;
  } else {
    throw new _errors.AppError(_errors.CLAIM_FAILED);
  }
};

exports.setSpecClaimed = setSpecClaimed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGVjdXRpb24vbW9uZ28vcnVucy9ydW4ubW9kZWwudHMiXSwibmFtZXMiOlsiZ2V0UnVuQnlJZCIsImlkIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJydW5JZCIsImNyZWF0ZVJ1biIsInJ1biIsInJlc3VsdCIsImluc2VydE9uZSIsImVycm9yIiwiY29kZSIsIkFwcEVycm9yIiwiUlVOX0VYSVNUUyIsInNldFNwZWNDbGFpbWVkIiwiaW5zdGFuY2VJZCIsIm1hdGNoZWRDb3VudCIsIm1vZGlmaWVkQ291bnQiLCJ1cGRhdGVPbmUiLCJzcGVjcyIsIiRlbGVtTWF0Y2giLCJjbGFpbWVkIiwiJHNldCIsImFycmF5RmlsdGVycyIsIkNMQUlNX0ZBSUxFRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUVPLE1BQU1BLFVBQVUsR0FBRyxNQUFPQyxFQUFQLElBQ3hCLE1BQU0seUJBQ0hDLFVBREcsQ0FDUSxNQURSLEVBRUhDLE9BRkcsQ0FFSztBQUFFQyxFQUFBQSxLQUFLLEVBQUVIO0FBQVQsQ0FGTCxDQUREOzs7O0FBS0EsTUFBTUksU0FBUyxHQUFHLE1BQU9DLEdBQVAsSUFBb0I7QUFDM0MsTUFBSTtBQUNGLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUFhLE1BQU0seUJBQ3RCTCxVQURzQixDQUNYLE1BRFcsRUFFdEJNLFNBRnNCLENBRVosc0NBQXdCRixHQUF4QixDQUZZLENBQXpCO0FBR0EsV0FBT0MsTUFBUDtBQUNELEdBTEQsQ0FLRSxPQUFPRSxLQUFQLEVBQWM7QUFDZCxRQUFJQSxLQUFLLENBQUNDLElBQU4sSUFBY0QsS0FBSyxDQUFDQyxJQUFOLEtBQWUsS0FBakMsRUFBd0M7QUFDdEMsWUFBTSxJQUFJQyxnQkFBSixDQUFhQyxrQkFBYixDQUFOO0FBQ0Q7O0FBQ0QsVUFBTUgsS0FBTjtBQUNEO0FBQ0YsQ0FaTSxDLENBY1A7QUFDQTs7Ozs7QUFDTyxNQUFNSSxjQUFjLEdBQUcsT0FBT1QsS0FBUCxFQUFzQlUsVUFBdEIsS0FBNkM7QUFDekUsUUFBTTtBQUFFQyxJQUFBQSxZQUFGO0FBQWdCQyxJQUFBQTtBQUFoQixNQUFrQyxNQUFNLHlCQUMzQ2QsVUFEMkMsQ0FDaEMsTUFEZ0MsRUFFM0NlLFNBRjJDLENBRzFDO0FBQ0ViLElBQUFBLEtBREY7QUFFRWMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLFVBQVUsRUFBRTtBQUNWTCxRQUFBQSxVQURVO0FBRVZNLFFBQUFBLE9BQU8sRUFBRTtBQUZDO0FBRFA7QUFGVCxHQUgwQyxFQVkxQztBQUNFQyxJQUFBQSxJQUFJLEVBQUU7QUFDSiwrQkFBeUI7QUFEckI7QUFEUixHQVowQyxFQWlCMUM7QUFDRUMsSUFBQUEsWUFBWSxFQUFFLENBQUM7QUFBRSx5QkFBbUJSO0FBQXJCLEtBQUQ7QUFEaEIsR0FqQjBDLENBQTlDOztBQXNCQSxNQUFJQyxZQUFZLElBQUlDLGFBQXBCLEVBQW1DO0FBQ2pDO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsVUFBTSxJQUFJTCxnQkFBSixDQUFhWSxvQkFBYixDQUFOO0FBQ0Q7QUFDRixDQTVCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJ1biB9IGZyb20gJ0BzcmMvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TW9uZ29EQiB9IGZyb20gJ0BzcmMvbGliL21vbmdvJztcbmltcG9ydCB7IEFwcEVycm9yLCBSVU5fRVhJU1RTLCBDTEFJTV9GQUlMRUQgfSBmcm9tICdAc3JjL2xpYi9lcnJvcnMnO1xuaW1wb3J0IHsgZ2V0U2FuaXRpemVkTW9uZ29PYmplY3QgfSBmcm9tICdAc3JjL2xpYi9yZXN1bHRzJztcblxuZXhwb3J0IGNvbnN0IGdldFJ1bkJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZykgPT5cbiAgYXdhaXQgZ2V0TW9uZ29EQigpXG4gICAgLmNvbGxlY3Rpb24oJ3J1bnMnKVxuICAgIC5maW5kT25lKHsgcnVuSWQ6IGlkIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUnVuID0gYXN5bmMgKHJ1bjogUnVuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IGdldE1vbmdvREIoKVxuICAgICAgLmNvbGxlY3Rpb24oJ3J1bnMnKVxuICAgICAgLmluc2VydE9uZShnZXRTYW5pdGl6ZWRNb25nb09iamVjdChydW4pKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5jb2RlICYmIGVycm9yLmNvZGUgPT09IDExMDAwKSB7XG4gICAgICB0aHJvdyBuZXcgQXBwRXJyb3IoUlVOX0VYSVNUUyk7XG4gICAgfVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG4vLyBhdG9taWMgb3BlcmF0aW9uIHRvIGF2b2lkIGNvbmN1cnJlbmN5IGlzc3Vlc1xuLy8gZmlsdGVyIGRvY3VtZW50IHByZXZlbnRzIGNvbmN1cnJlbnQgd3JpdGVzXG5leHBvcnQgY29uc3Qgc2V0U3BlY0NsYWltZWQgPSBhc3luYyAocnVuSWQ6IHN0cmluZywgaW5zdGFuY2VJZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHsgbWF0Y2hlZENvdW50LCBtb2RpZmllZENvdW50IH0gPSBhd2FpdCBnZXRNb25nb0RCKClcbiAgICAuY29sbGVjdGlvbigncnVucycpXG4gICAgLnVwZGF0ZU9uZShcbiAgICAgIHtcbiAgICAgICAgcnVuSWQsXG4gICAgICAgIHNwZWNzOiB7XG4gICAgICAgICAgJGVsZW1NYXRjaDoge1xuICAgICAgICAgICAgaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGNsYWltZWQ6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgJ3NwZWNzLiRbc3BlY10uY2xhaW1lZCc6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYXJyYXlGaWx0ZXJzOiBbeyAnc3BlYy5pbnN0YW5jZUlkJzogaW5zdGFuY2VJZCB9XVxuICAgICAgfVxuICAgICk7XG5cbiAgaWYgKG1hdGNoZWRDb3VudCAmJiBtb2RpZmllZENvdW50KSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBBcHBFcnJvcihDTEFJTV9GQUlMRUQpO1xuICB9XG59O1xuIl19
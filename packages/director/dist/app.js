"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _config = require("./config");

var _errors = require("./lib/errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
exports.app = app;

const isKeyAllowed = recordKey => _config.ALLOWED_KEYS ? _config.ALLOWED_KEYS.includes(recordKey) : true;

app.use(_bodyParser.default.json({
  limit: '50mb'
}));
app.get('/', (_, res) => res.redirect('https://github.com/agoldis/sorry-cypress'));
app.post('/runs', async (req, res) => {
  const {
    recordKey,
    ciBuildId
  } = req.body;
  console.log(`>> Machine is asking to join a run`, {
    recordKey,
    ciBuildId
  });

  if (!isKeyAllowed(recordKey)) {
    console.log(`<< Record key is not allowed`, {
      recordKey
    });
    return res.status(403).send(`Provided record key '${recordKey}' is not allowed`);
  }

  console.log(`>> Machine is joining a run`, {
    ciBuildId
  });
  const response = await app.get('executionDriver').createRun(req.body);
  console.log(`<< Responding to machine`, response);
  return res.json(response);
});
app.post('/runs/:runId/instances', async (req, res) => {
  const {
    groupId,
    machineId
  } = req.body;
  const {
    runId
  } = req.params;
  console.log(`>> Machine is requesting a new task`, {
    runId,
    machineId,
    groupId
  });

  try {
    const {
      instance,
      claimedInstances,
      totalInstances
    } = await app.get('executionDriver').getNextTask(runId);

    if (instance === null) {
      console.log(`<< All tasks claimed`, {
        runId,
        machineId
      });
      return res.json({
        spec: null,
        instanceId: null,
        claimedInstances,
        totalInstances
      });
    }

    console.log(`<< Sending new task to machine`, instance);
    return res.json({
      spec: instance.spec,
      instanceId: instance.instanceId,
      claimedInstances,
      totalInstances
    });
  } catch (error) {
    if (error.code && error.code === _errors.RUN_NOT_EXIST) {
      return res.sendStatus(404);
    }

    throw error;
  }
});
app.put('/instances/:instanceId', async (req, res) => {
  const {
    instanceId
  } = req.params;
  const result = req.body;
  const executionDriver = app.get('executionDriver');
  const screenshotsDriver = app.get('screenshotsDriver');
  console.log(`>> Received instance result`, {
    instanceId
  });
  await executionDriver.setInstanceResults(instanceId, result);
  const screenshotUploadUrls = await screenshotsDriver.getScreenshotsUploadUrls(instanceId, result);
  const videoUploadInstructions = await screenshotsDriver.getVideoUploadUrl(instanceId, result);

  if (screenshotUploadUrls.length > 0) {
    screenshotUploadUrls.forEach(screenshot => {
      executionDriver.setScreenshotUrl(instanceId, screenshot.screenshotId, screenshot.readUrl);
    });
  }

  if (videoUploadInstructions) {
    executionDriver.setVideoUrl({
      instanceId,
      videoUrl: videoUploadInstructions.readUrl
    });
  }

  console.log(`<< Sending assets upload URLs`, {
    instanceId,
    screenshotUploadUrls,
    videoUploadInstructions
  });
  const responsePayload = {
    screenshotUploadUrls
  };

  if (videoUploadInstructions) {
    responsePayload.videoUploadUrl = videoUploadInstructions.uploadUrl;
  }

  return res.json(responsePayload);
});
/*
4. PUT https://api.cypress.io/instances/<instanceId>/stdout
>> response 'OK'
*/

app.put('/instances/:instanceId/stdout', (req, res) => {
  const {
    instanceId
  } = req.params;
  console.log(`>> [not implemented] Received stdout for instance`, {
    instanceId
  });
  return res.sendStatus(200);
});
app.get('/ping', (_, res) => {
  res.send(`${Date.now()}: sorry-cypress-director is live`);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwibmFtZXMiOlsiYXBwIiwiaXNLZXlBbGxvd2VkIiwicmVjb3JkS2V5IiwiQUxMT1dFRF9LRVlTIiwiaW5jbHVkZXMiLCJ1c2UiLCJib2R5UGFyc2VyIiwianNvbiIsImxpbWl0IiwiZ2V0IiwiXyIsInJlcyIsInJlZGlyZWN0IiwicG9zdCIsInJlcSIsImNpQnVpbGRJZCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic2VuZCIsInJlc3BvbnNlIiwiY3JlYXRlUnVuIiwiZ3JvdXBJZCIsIm1hY2hpbmVJZCIsInJ1bklkIiwicGFyYW1zIiwiaW5zdGFuY2UiLCJjbGFpbWVkSW5zdGFuY2VzIiwidG90YWxJbnN0YW5jZXMiLCJnZXROZXh0VGFzayIsInNwZWMiLCJpbnN0YW5jZUlkIiwiZXJyb3IiLCJjb2RlIiwiUlVOX05PVF9FWElTVCIsInNlbmRTdGF0dXMiLCJwdXQiLCJyZXN1bHQiLCJleGVjdXRpb25Ecml2ZXIiLCJzY3JlZW5zaG90c0RyaXZlciIsInNldEluc3RhbmNlUmVzdWx0cyIsInNjcmVlbnNob3RVcGxvYWRVcmxzIiwiZ2V0U2NyZWVuc2hvdHNVcGxvYWRVcmxzIiwidmlkZW9VcGxvYWRJbnN0cnVjdGlvbnMiLCJnZXRWaWRlb1VwbG9hZFVybCIsImxlbmd0aCIsImZvckVhY2giLCJzY3JlZW5zaG90Iiwic2V0U2NyZWVuc2hvdFVybCIsInNjcmVlbnNob3RJZCIsInJlYWRVcmwiLCJzZXRWaWRlb1VybCIsInZpZGVvVXJsIiwicmVzcG9uc2VQYXlsb2FkIiwidmlkZW9VcGxvYWRVcmwiLCJ1cGxvYWRVcmwiLCJEYXRlIiwibm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBUUE7O0FBQ0E7Ozs7QUFHTyxNQUFNQSxHQUFHLEdBQUcsdUJBQVo7OztBQUVQLE1BQU1DLFlBQVksR0FBSUMsU0FBRCxJQUF1QkMsdUJBQWVBLHFCQUFhQyxRQUFiLENBQXNCRixTQUF0QixDQUFmLEdB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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQge1xuICBJbnN0YW5jZVJlc3VsdCxcbiAgU2NyZWVuc2hvdFVwbG9hZEluc3RydWN0aW9uLFxuICBBc3NldFVwbG9hZEluc3RydWN0aW9uLFxuICBFeGVjdXRpb25Ecml2ZXIsXG4gIFNjcmVlbnNob3RzRHJpdmVyXG59IGZyb20gJ0BzcmMvdHlwZXMnO1xuaW1wb3J0IHsgQUxMT1dFRF9LRVlTIH0gZnJvbSAnQHNyYy9jb25maWcnO1xuaW1wb3J0IHsgUlVOX05PVF9FWElTVCB9IGZyb20gJ0BzcmMvbGliL2Vycm9ycyc7XG5pbXBvcnQgeyBVcGRhdGVJbnN0YW5zZVJlc3BvbnNlIH0gZnJvbSAnLi90eXBlcy9yZXNwb25zZS50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmNvbnN0IGlzS2V5QWxsb3dlZCA9IChyZWNvcmRLZXk6IHN0cmluZykgPT4gQUxMT1dFRF9LRVlTID8gQUxMT1dFRF9LRVlTLmluY2x1ZGVzKHJlY29yZEtleSkgOiB0cnVlO1xuXG5hcHAudXNlKFxuICBib2R5UGFyc2VyLmpzb24oe1xuICAgIGxpbWl0OiAnNTBtYidcbiAgfSlcbik7XG5cbmFwcC5nZXQoJy8nLCAoXywgcmVzKSA9PlxuICByZXMucmVkaXJlY3QoJ2h0dHBzOi8vZ2l0aHViLmNvbS9hZ29sZGlzL3NvcnJ5LWN5cHJlc3MnKVxuKTtcblxuYXBwLnBvc3QoJy9ydW5zJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgcmVjb3JkS2V5LCBjaUJ1aWxkSWQgfSA9IHJlcS5ib2R5O1xuXG4gIGNvbnNvbGUubG9nKGA+PiBNYWNoaW5lIGlzIGFza2luZyB0byBqb2luIGEgcnVuYCwgeyByZWNvcmRLZXksIGNpQnVpbGRJZCB9KTtcblxuICBpZighaXNLZXlBbGxvd2VkKHJlY29yZEtleSkpIHtcbiAgICBjb25zb2xlLmxvZyhgPDwgUmVjb3JkIGtleSBpcyBub3QgYWxsb3dlZGAsIHsgcmVjb3JkS2V5IH0pXG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoYFByb3ZpZGVkIHJlY29yZCBrZXkgJyR7cmVjb3JkS2V5fScgaXMgbm90IGFsbG93ZWRgKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGA+PiBNYWNoaW5lIGlzIGpvaW5pbmcgYSBydW5gLCB7IGNpQnVpbGRJZCB9KTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwcC5nZXQoJ2V4ZWN1dGlvbkRyaXZlcicpLmNyZWF0ZVJ1bihyZXEuYm9keSk7XG5cbiAgY29uc29sZS5sb2coYDw8IFJlc3BvbmRpbmcgdG8gbWFjaGluZWAsIHJlc3BvbnNlKTtcbiAgcmV0dXJuIHJlcy5qc29uKHJlc3BvbnNlKTtcbn0pO1xuXG5hcHAucG9zdCgnL3J1bnMvOnJ1bklkL2luc3RhbmNlcycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IGdyb3VwSWQsIG1hY2hpbmVJZCB9ID0gcmVxLmJvZHk7XG4gIGNvbnN0IHsgcnVuSWQgfSA9IHJlcS5wYXJhbXM7XG5cbiAgY29uc29sZS5sb2coYD4+IE1hY2hpbmUgaXMgcmVxdWVzdGluZyBhIG5ldyB0YXNrYCwge1xuICAgIHJ1bklkLFxuICAgIG1hY2hpbmVJZCxcbiAgICBncm91cElkXG4gIH0pO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBpbnN0YW5jZSwgY2xhaW1lZEluc3RhbmNlcywgdG90YWxJbnN0YW5jZXMgfSA9IGF3YWl0IGFwcFxuICAgICAgLmdldCgnZXhlY3V0aW9uRHJpdmVyJylcbiAgICAgIC5nZXROZXh0VGFzayhydW5JZCk7XG4gICAgaWYgKGluc3RhbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zb2xlLmxvZyhgPDwgQWxsIHRhc2tzIGNsYWltZWRgLCB7IHJ1bklkLCBtYWNoaW5lSWQgfSk7XG4gICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICBzcGVjOiBudWxsLFxuICAgICAgICBpbnN0YW5jZUlkOiBudWxsLFxuICAgICAgICBjbGFpbWVkSW5zdGFuY2VzLFxuICAgICAgICB0b3RhbEluc3RhbmNlc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYDw8IFNlbmRpbmcgbmV3IHRhc2sgdG8gbWFjaGluZWAsIGluc3RhbmNlKTtcbiAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgc3BlYzogaW5zdGFuY2Uuc3BlYyxcbiAgICAgIGluc3RhbmNlSWQ6IGluc3RhbmNlLmluc3RhbmNlSWQsXG4gICAgICBjbGFpbWVkSW5zdGFuY2VzLFxuICAgICAgdG90YWxJbnN0YW5jZXNcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IuY29kZSAmJiBlcnJvci5jb2RlID09PSBSVU5fTk9UX0VYSVNUKSB7XG4gICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDA0KTtcbiAgICB9XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn0pO1xuXG5hcHAucHV0KFxuICAnL2luc3RhbmNlcy86aW5zdGFuY2VJZCcsXG4gIGFzeW5jIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgeyBpbnN0YW5jZUlkIH0gPSByZXEucGFyYW1zO1xuICAgIGNvbnN0IHJlc3VsdDogSW5zdGFuY2VSZXN1bHQgPSByZXEuYm9keTtcblxuICAgIGNvbnN0IGV4ZWN1dGlvbkRyaXZlcjogRXhlY3V0aW9uRHJpdmVyID0gYXBwLmdldCgnZXhlY3V0aW9uRHJpdmVyJyk7XG4gICAgY29uc3Qgc2NyZWVuc2hvdHNEcml2ZXI6IFNjcmVlbnNob3RzRHJpdmVyID0gYXBwLmdldCgnc2NyZWVuc2hvdHNEcml2ZXInKTtcblxuICAgIGNvbnNvbGUubG9nKGA+PiBSZWNlaXZlZCBpbnN0YW5jZSByZXN1bHRgLCB7IGluc3RhbmNlSWQgfSk7XG4gICAgYXdhaXQgZXhlY3V0aW9uRHJpdmVyLnNldEluc3RhbmNlUmVzdWx0cyhpbnN0YW5jZUlkLCByZXN1bHQpO1xuXG4gICAgY29uc3Qgc2NyZWVuc2hvdFVwbG9hZFVybHM6IFNjcmVlbnNob3RVcGxvYWRJbnN0cnVjdGlvbltdID0gYXdhaXQgc2NyZWVuc2hvdHNEcml2ZXIuZ2V0U2NyZWVuc2hvdHNVcGxvYWRVcmxzKFxuICAgICAgaW5zdGFuY2VJZCxcbiAgICAgIHJlc3VsdFxuICAgICk7XG5cbiAgICBjb25zdCB2aWRlb1VwbG9hZEluc3RydWN0aW9uczogQXNzZXRVcGxvYWRJbnN0cnVjdGlvbiB8IG51bGwgPSBhd2FpdCBzY3JlZW5zaG90c0RyaXZlci5nZXRWaWRlb1VwbG9hZFVybChcbiAgICAgIGluc3RhbmNlSWQsXG4gICAgICByZXN1bHRcbiAgICApO1xuXG4gICAgaWYgKHNjcmVlbnNob3RVcGxvYWRVcmxzLmxlbmd0aCA+IDApIHtcbiAgICAgIHNjcmVlbnNob3RVcGxvYWRVcmxzLmZvckVhY2goXG4gICAgICAgIChzY3JlZW5zaG90OiBTY3JlZW5zaG90VXBsb2FkSW5zdHJ1Y3Rpb24pID0+IHtcbiAgICAgICAgICBleGVjdXRpb25Ecml2ZXIuc2V0U2NyZWVuc2hvdFVybChcbiAgICAgICAgICAgIGluc3RhbmNlSWQsXG4gICAgICAgICAgICBzY3JlZW5zaG90LnNjcmVlbnNob3RJZCxcbiAgICAgICAgICAgIHNjcmVlbnNob3QucmVhZFVybFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHZpZGVvVXBsb2FkSW5zdHJ1Y3Rpb25zKSB7XG4gICAgICBleGVjdXRpb25Ecml2ZXIuc2V0VmlkZW9Vcmwoe1xuICAgICAgICBpbnN0YW5jZUlkLFxuICAgICAgICB2aWRlb1VybDogdmlkZW9VcGxvYWRJbnN0cnVjdGlvbnMucmVhZFVybFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYDw8IFNlbmRpbmcgYXNzZXRzIHVwbG9hZCBVUkxzYCwge1xuICAgICAgaW5zdGFuY2VJZCxcbiAgICAgIHNjcmVlbnNob3RVcGxvYWRVcmxzLFxuICAgICAgdmlkZW9VcGxvYWRJbnN0cnVjdGlvbnNcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlUGF5bG9hZDogVXBkYXRlSW5zdGFuc2VSZXNwb25zZSA9IHtcbiAgICAgIHNjcmVlbnNob3RVcGxvYWRVcmxzXG4gICAgfTtcbiAgICBpZiAodmlkZW9VcGxvYWRJbnN0cnVjdGlvbnMpIHtcbiAgICAgIHJlc3BvbnNlUGF5bG9hZC52aWRlb1VwbG9hZFVybCA9IHZpZGVvVXBsb2FkSW5zdHJ1Y3Rpb25zLnVwbG9hZFVybDtcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKHJlc3BvbnNlUGF5bG9hZCk7XG4gIH1cbik7XG5cbi8qXG40LiBQVVQgaHR0cHM6Ly9hcGkuY3lwcmVzcy5pby9pbnN0YW5jZXMvPGluc3RhbmNlSWQ+L3N0ZG91dFxuPj4gcmVzcG9uc2UgJ09LJ1xuKi9cbmFwcC5wdXQoJy9pbnN0YW5jZXMvOmluc3RhbmNlSWQvc3Rkb3V0JywgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgaW5zdGFuY2VJZCB9ID0gcmVxLnBhcmFtcztcbiAgY29uc29sZS5sb2coYD4+IFtub3QgaW1wbGVtZW50ZWRdIFJlY2VpdmVkIHN0ZG91dCBmb3IgaW5zdGFuY2VgLCB7XG4gICAgaW5zdGFuY2VJZFxuICB9KTtcbiAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDIwMCk7XG59KTtcblxuYXBwLmdldCgnL3BpbmcnLCAoXywgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKGAke0RhdGUubm93KCl9OiBzb3JyeS1jeXByZXNzLWRpcmVjdG9yIGlzIGxpdmVgKTtcbn0pO1xuIl19
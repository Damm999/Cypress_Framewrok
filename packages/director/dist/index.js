"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = require("./app");

var _drivers = require("./drivers");

var _config = require("./config");

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

async function main() {
  const executionDriver = await (0, _drivers.getExecutionDriver)();
  console.log(`Initializing "${executionDriver.id}" execution driver...`);
  await executionDriver.init();
  const screenshotsDriver = await (0, _drivers.getScreenshotsDriver)();
  console.log(`Initializing "${screenshotsDriver.id}" screenshots driver...`);
  await screenshotsDriver.init();

  _app.app.set('executionDriver', executionDriver);

  _app.app.set('screenshotsDriver', screenshotsDriver);

  _app.app.on('error', error => {
    throw error;
  });

  _app.app.listen(_config.PORT, () => {
    console.log(`Listening on ${_config.PORT}...`);
  });
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJtYWluIiwiZXhlY3V0aW9uRHJpdmVyIiwiY29uc29sZSIsImxvZyIsImlkIiwiaW5pdCIsInNjcmVlbnNob3RzRHJpdmVyIiwiYXBwIiwic2V0Iiwib24iLCJlcnJvciIsImxpc3RlbiIsIlBPUlQiLCJjYXRjaCIsInByb2Nlc3MiLCJleGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsZUFBZUEsSUFBZixHQUFzQjtBQUNwQixRQUFNQyxlQUFlLEdBQUcsTUFBTSxrQ0FBOUI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsaUJBQWdCRixlQUFlLENBQUNHLEVBQUcsdUJBQWhEO0FBQ0EsUUFBTUgsZUFBZSxDQUFDSSxJQUFoQixFQUFOO0FBRUEsUUFBTUMsaUJBQWlCLEdBQUcsTUFBTSxvQ0FBaEM7QUFDQUosRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsaUJBQWdCRyxpQkFBaUIsQ0FBQ0YsRUFBRyx5QkFBbEQ7QUFDQSxRQUFNRSxpQkFBaUIsQ0FBQ0QsSUFBbEIsRUFBTjs7QUFFQUUsV0FBSUMsR0FBSixDQUFRLGlCQUFSLEVBQTJCUCxlQUEzQjs7QUFDQU0sV0FBSUMsR0FBSixDQUFRLG1CQUFSLEVBQTZCRixpQkFBN0I7O0FBQ0FDLFdBQUlFLEVBQUosQ0FBTyxPQUFQLEVBQWdCQyxLQUFLLElBQUk7QUFDdkIsVUFBTUEsS0FBTjtBQUNELEdBRkQ7O0FBR0FILFdBQUlJLE1BQUosQ0FBV0MsWUFBWCxFQUFpQixNQUFNO0FBQ3JCVixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxnQkFBZVMsWUFBSyxLQUFqQztBQUNELEdBRkQ7QUFHRDs7QUFFRFosSUFBSSxHQUFHYSxLQUFQLENBQWFILEtBQUssSUFBSTtBQUNwQlIsRUFBQUEsT0FBTyxDQUFDUSxLQUFSLENBQWNBLEtBQWQ7QUFDQUksRUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsQ0FBYjtBQUNELENBSEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHAgfSBmcm9tICcuL2FwcCc7XG5pbXBvcnQgeyBnZXRFeGVjdXRpb25Ecml2ZXIsIGdldFNjcmVlbnNob3RzRHJpdmVyIH0gZnJvbSAnQHNyYy9kcml2ZXJzJztcbmltcG9ydCB7IFBPUlQgfSBmcm9tICcuL2NvbmZpZyc7XG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJztcblxuYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgZXhlY3V0aW9uRHJpdmVyID0gYXdhaXQgZ2V0RXhlY3V0aW9uRHJpdmVyKCk7XG4gIGNvbnNvbGUubG9nKGBJbml0aWFsaXppbmcgXCIke2V4ZWN1dGlvbkRyaXZlci5pZH1cIiBleGVjdXRpb24gZHJpdmVyLi4uYCk7XG4gIGF3YWl0IGV4ZWN1dGlvbkRyaXZlci5pbml0KCk7XG5cbiAgY29uc3Qgc2NyZWVuc2hvdHNEcml2ZXIgPSBhd2FpdCBnZXRTY3JlZW5zaG90c0RyaXZlcigpO1xuICBjb25zb2xlLmxvZyhgSW5pdGlhbGl6aW5nIFwiJHtzY3JlZW5zaG90c0RyaXZlci5pZH1cIiBzY3JlZW5zaG90cyBkcml2ZXIuLi5gKTtcbiAgYXdhaXQgc2NyZWVuc2hvdHNEcml2ZXIuaW5pdCgpO1xuXG4gIGFwcC5zZXQoJ2V4ZWN1dGlvbkRyaXZlcicsIGV4ZWN1dGlvbkRyaXZlcik7XG4gIGFwcC5zZXQoJ3NjcmVlbnNob3RzRHJpdmVyJywgc2NyZWVuc2hvdHNEcml2ZXIpO1xuICBhcHAub24oJ2Vycm9yJywgZXJyb3IgPT4ge1xuICAgIHRocm93IGVycm9yO1xuICB9KTtcbiAgYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiAke1BPUlR9Li4uYCk7XG4gIH0pO1xufVxuXG5tYWluKCkuY2F0Y2goZXJyb3IgPT4ge1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgcHJvY2Vzcy5leGl0KDEpO1xufSk7XG4iXX0=
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMongoDB = exports.init = void 0;

var _mongodb = _interopRequireDefault(require("mongodb"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let db;
let client;

const init = async () => {
  if (db && client) {
    return;
  }

  client = await _mongodb.default.connect(_config.MONGODB_URI, {
    useNewUrlParser: true
  });
  console.log('Successfully connected to MongoDB server');
  db = client.db(_config.MONGODB_DATABASE);
  db.collection('runs').createIndex({
    runId: 1
  }, {
    unique: true
  });
  db.collection('instances').createIndex({
    instanceId: 1
  }, {
    unique: true
  });
};

exports.init = init;

const getMongoDB = () => db;

exports.getMongoDB = getMongoDB;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvbW9uZ28udHMiXSwibmFtZXMiOlsiZGIiLCJjbGllbnQiLCJpbml0IiwibW9uZ29kYiIsImNvbm5lY3QiLCJNT05HT0RCX1VSSSIsInVzZU5ld1VybFBhcnNlciIsImNvbnNvbGUiLCJsb2ciLCJNT05HT0RCX0RBVEFCQVNFIiwiY29sbGVjdGlvbiIsImNyZWF0ZUluZGV4IiwicnVuSWQiLCJ1bmlxdWUiLCJpbnN0YW5jZUlkIiwiZ2V0TW9uZ29EQiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsSUFBSUEsRUFBSjtBQUNBLElBQUlDLE1BQUo7O0FBRU8sTUFBTUMsSUFBSSxHQUFHLFlBQVk7QUFDOUIsTUFBSUYsRUFBRSxJQUFJQyxNQUFWLEVBQWtCO0FBQ2hCO0FBQ0Q7O0FBRURBLEVBQUFBLE1BQU0sR0FBRyxNQUFNRSxpQkFBUUMsT0FBUixDQUFnQkMsbUJBQWhCLEVBQTZCO0FBQUVDLElBQUFBLGVBQWUsRUFBRTtBQUFuQixHQUE3QixDQUFmO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDBDQUFaO0FBRUFSLEVBQUFBLEVBQUUsR0FBR0MsTUFBTSxDQUFDRCxFQUFQLENBQVVTLHdCQUFWLENBQUw7QUFFQVQsRUFBQUEsRUFBRSxDQUFDVSxVQUFILENBQWMsTUFBZCxFQUFzQkMsV0FBdEIsQ0FBa0M7QUFBRUMsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBbEMsRUFBZ0Q7QUFBRUMsSUFBQUEsTUFBTSxFQUFFO0FBQVYsR0FBaEQ7QUFDQWIsRUFBQUEsRUFBRSxDQUFDVSxVQUFILENBQWMsV0FBZCxFQUEyQkMsV0FBM0IsQ0FBdUM7QUFBRUcsSUFBQUEsVUFBVSxFQUFFO0FBQWQsR0FBdkMsRUFBMEQ7QUFBRUQsSUFBQUEsTUFBTSxFQUFFO0FBQVYsR0FBMUQ7QUFDRCxDQVpNOzs7O0FBY0EsTUFBTUUsVUFBVSxHQUFHLE1BQU1mLEVBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvZGIgZnJvbSAnbW9uZ29kYic7XG5pbXBvcnQgeyBNT05HT0RCX1VSSSwgTU9OR09EQl9EQVRBQkFTRSB9IGZyb20gJ0BzcmMvY29uZmlnJztcblxubGV0IGRiOiBtb25nb2RiLkRiO1xubGV0IGNsaWVudDogbW9uZ29kYi5Nb25nb0NsaWVudDtcblxuZXhwb3J0IGNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XG4gIGlmIChkYiAmJiBjbGllbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjbGllbnQgPSBhd2FpdCBtb25nb2RiLmNvbm5lY3QoTU9OR09EQl9VUkksIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlIH0pO1xuICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZCB0byBNb25nb0RCIHNlcnZlcicpO1xuXG4gIGRiID0gY2xpZW50LmRiKE1PTkdPREJfREFUQUJBU0UpO1xuXG4gIGRiLmNvbGxlY3Rpb24oJ3J1bnMnKS5jcmVhdGVJbmRleCh7IHJ1bklkOiAxIH0sIHsgdW5pcXVlOiB0cnVlIH0pO1xuICBkYi5jb2xsZWN0aW9uKCdpbnN0YW5jZXMnKS5jcmVhdGVJbmRleCh7IGluc3RhbmNlSWQ6IDEgfSwgeyB1bmlxdWU6IHRydWUgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TW9uZ29EQiA9ICgpID0+IGRiO1xuIl19
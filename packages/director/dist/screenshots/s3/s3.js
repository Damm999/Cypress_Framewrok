"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVideoUploadUrl = exports.getImageUploadUrl = exports.getUploadUrl = void 0;

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _config = require("./config");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BUCKET_URL = `https://${_config.S3_BUCKET}.s3.amazonaws.com`;
const ImageContentType = 'image/png';
const VideoContentType = 'video/mp4';
const s3 = new _awsSdk.default.S3({
  region: _config.S3_REGION,
  signatureVersion: 'v4'
});

const getUploadUrl = async ({
  key,
  ContentType = ImageContentType,
  Expires = 60
}) => {
  const s3Params = {
    Bucket: _config.S3_BUCKET,
    Key: key,
    Expires,
    ContentType,
    ACL: _config.S3_ACL
  };
  return new Promise((resolve, reject) => {
    s3.getSignedUrl('putObject', s3Params, (error, uploadUrl) => {
      if (error) {
        return reject(error);
      }

      return resolve({
        readUrl: `${_config.S3_READ_URL_PREFIX || BUCKET_URL}/${key}`,
        uploadUrl
      });
    });
  });
};

exports.getUploadUrl = getUploadUrl;

const getImageUploadUrl = async key => getUploadUrl({
  key: `${(0, _utils.sanitizeS3KeyPrefix)(_config.S3_IMAGE_KEY_PREFIX)}${key}.png`
});

exports.getImageUploadUrl = getImageUploadUrl;

const getVideoUploadUrl = async key => getUploadUrl({
  key: `${(0, _utils.sanitizeS3KeyPrefix)(_config.S3_VIDEO_KEY_PREFIX)}${key}.mp4`,
  ContentType: VideoContentType,
  Expires: 90
});

exports.getVideoUploadUrl = getVideoUploadUrl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY3JlZW5zaG90cy9zMy9zMy50cyJdLCJuYW1lcyI6WyJCVUNLRVRfVVJMIiwiUzNfQlVDS0VUIiwiSW1hZ2VDb250ZW50VHlwZSIsIlZpZGVvQ29udGVudFR5cGUiLCJzMyIsImF3cyIsIlMzIiwicmVnaW9uIiwiUzNfUkVHSU9OIiwic2lnbmF0dXJlVmVyc2lvbiIsImdldFVwbG9hZFVybCIsImtleSIsIkNvbnRlbnRUeXBlIiwiRXhwaXJlcyIsInMzUGFyYW1zIiwiQnVja2V0IiwiS2V5IiwiQUNMIiwiUzNfQUNMIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXRTaWduZWRVcmwiLCJlcnJvciIsInVwbG9hZFVybCIsInJlYWRVcmwiLCJTM19SRUFEX1VSTF9QUkVGSVgiLCJnZXRJbWFnZVVwbG9hZFVybCIsIlMzX0lNQUdFX0tFWV9QUkVGSVgiLCJnZXRWaWRlb1VwbG9hZFVybCIsIlMzX1ZJREVPX0tFWV9QUkVGSVgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFVQTs7OztBQUVBLE1BQU1BLFVBQVUsR0FBSSxXQUFVQyxpQkFBVSxtQkFBeEM7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxXQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLFdBQXpCO0FBRUEsTUFBTUMsRUFBRSxHQUFHLElBQUlDLGdCQUFJQyxFQUFSLENBQVc7QUFDcEJDLEVBQUFBLE1BQU0sRUFBRUMsaUJBRFk7QUFFcEJDLEVBQUFBLGdCQUFnQixFQUFFO0FBRkUsQ0FBWCxDQUFYOztBQVdPLE1BQU1DLFlBQVksR0FBRyxPQUFPO0FBQ2pDQyxFQUFBQSxHQURpQztBQUVqQ0MsRUFBQUEsV0FBVyxHQUFHVixnQkFGbUI7QUFHakNXLEVBQUFBLE9BQU8sR0FBRztBQUh1QixDQUFQLEtBSTZCO0FBQ3ZELFFBQU1DLFFBQVEsR0FBRztBQUNmQyxJQUFBQSxNQUFNLEVBQUVkLGlCQURPO0FBRWZlLElBQUFBLEdBQUcsRUFBRUwsR0FGVTtBQUdmRSxJQUFBQSxPQUhlO0FBSWZELElBQUFBLFdBSmU7QUFLZkssSUFBQUEsR0FBRyxFQUFFQztBQUxVLEdBQWpCO0FBUUEsU0FBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3RDakIsSUFBQUEsRUFBRSxDQUFDa0IsWUFBSCxDQUNFLFdBREYsRUFFRVIsUUFGRixFQUdFLENBQUNTLEtBQUQsRUFBZUMsU0FBZixLQUFxQztBQUNuQyxVQUFJRCxLQUFKLEVBQVc7QUFDVCxlQUFPRixNQUFNLENBQUNFLEtBQUQsQ0FBYjtBQUNEOztBQUNELGFBQU9ILE9BQU8sQ0FBQztBQUNiSyxRQUFBQSxPQUFPLEVBQUcsR0FBRUMsOEJBQXNCMUIsVUFBVyxJQUFHVyxHQUFJLEVBRHZDO0FBRWJhLFFBQUFBO0FBRmEsT0FBRCxDQUFkO0FBSUQsS0FYSDtBQWFELEdBZE0sQ0FBUDtBQWVELENBNUJNOzs7O0FBOEJBLE1BQU1HLGlCQUFpQixHQUFHLE1BQy9CaEIsR0FEK0IsSUFHL0JELFlBQVksQ0FBQztBQUNYQyxFQUFBQSxHQUFHLEVBQUcsR0FBRSxnQ0FBb0JpQiwyQkFBcEIsQ0FBeUMsR0FBRWpCLEdBQUk7QUFENUMsQ0FBRCxDQUhQOzs7O0FBT0EsTUFBTWtCLGlCQUFpQixHQUFHLE1BQy9CbEIsR0FEK0IsSUFHL0JELFlBQVksQ0FBQztBQUNYQyxFQUFBQSxHQUFHLEVBQUcsR0FBRSxnQ0FBb0JtQiwyQkFBcEIsQ0FBeUMsR0FBRW5CLEdBQUksTUFENUM7QUFFWEMsRUFBQUEsV0FBVyxFQUFFVCxnQkFGRjtBQUdYVSxFQUFBQSxPQUFPLEVBQUU7QUFIRSxDQUFELENBSFAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXdzIGZyb20gJ2F3cy1zZGsnO1xuaW1wb3J0IHtcbiAgUzNfQlVDS0VULFxuICBTM19SRUdJT04sXG4gIFMzX0FDTCxcbiAgUzNfUkVBRF9VUkxfUFJFRklYLFxuICBTM19JTUFHRV9LRVlfUFJFRklYLFxuICBTM19WSURFT19LRVlfUFJFRklYLFxufSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBTM1NpZ25lZFVwbG9hZFJlc3VsdCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgQXNzZXRVcGxvYWRJbnN0cnVjdGlvbiB9IGZyb20gJ0BzcmMvdHlwZXMnO1xuaW1wb3J0IHsgc2FuaXRpemVTM0tleVByZWZpeCB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBCVUNLRVRfVVJMID0gYGh0dHBzOi8vJHtTM19CVUNLRVR9LnMzLmFtYXpvbmF3cy5jb21gO1xuY29uc3QgSW1hZ2VDb250ZW50VHlwZSA9ICdpbWFnZS9wbmcnO1xuY29uc3QgVmlkZW9Db250ZW50VHlwZSA9ICd2aWRlby9tcDQnO1xuXG5jb25zdCBzMyA9IG5ldyBhd3MuUzMoe1xuICByZWdpb246IFMzX1JFR0lPTixcbiAgc2lnbmF0dXJlVmVyc2lvbjogJ3Y0Jyxcbn0pO1xuXG5pbnRlcmZhY2UgR2V0VXBsb2FkVVJMUGFyYW1zIHtcbiAga2V5OiBzdHJpbmc7XG4gIENvbnRlbnRUeXBlPzogc3RyaW5nO1xuICBFeHBpcmVzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VXBsb2FkVXJsID0gYXN5bmMgKHtcbiAga2V5LFxuICBDb250ZW50VHlwZSA9IEltYWdlQ29udGVudFR5cGUsXG4gIEV4cGlyZXMgPSA2MCxcbn06IEdldFVwbG9hZFVSTFBhcmFtcyk6IFByb21pc2U8UzNTaWduZWRVcGxvYWRSZXN1bHQ+ID0+IHtcbiAgY29uc3QgczNQYXJhbXMgPSB7XG4gICAgQnVja2V0OiBTM19CVUNLRVQsXG4gICAgS2V5OiBrZXksXG4gICAgRXhwaXJlcyxcbiAgICBDb250ZW50VHlwZSxcbiAgICBBQ0w6IFMzX0FDTCxcbiAgfTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHMzLmdldFNpZ25lZFVybChcbiAgICAgICdwdXRPYmplY3QnLFxuICAgICAgczNQYXJhbXMsXG4gICAgICAoZXJyb3I6IEVycm9yLCB1cGxvYWRVcmw6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh7XG4gICAgICAgICAgcmVhZFVybDogYCR7UzNfUkVBRF9VUkxfUFJFRklYIHx8IEJVQ0tFVF9VUkx9LyR7a2V5fWAsXG4gICAgICAgICAgdXBsb2FkVXJsLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRJbWFnZVVwbG9hZFVybCA9IGFzeW5jIChcbiAga2V5OiBzdHJpbmdcbik6IFByb21pc2U8QXNzZXRVcGxvYWRJbnN0cnVjdGlvbj4gPT5cbiAgZ2V0VXBsb2FkVXJsKHtcbiAgICBrZXk6IGAke3Nhbml0aXplUzNLZXlQcmVmaXgoUzNfSU1BR0VfS0VZX1BSRUZJWCl9JHtrZXl9LnBuZ2AsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZ2V0VmlkZW9VcGxvYWRVcmwgPSBhc3luYyAoXG4gIGtleTogc3RyaW5nXG4pOiBQcm9taXNlPEFzc2V0VXBsb2FkSW5zdHJ1Y3Rpb24+ID0+XG4gIGdldFVwbG9hZFVybCh7XG4gICAga2V5OiBgJHtzYW5pdGl6ZVMzS2V5UHJlZml4KFMzX1ZJREVPX0tFWV9QUkVGSVgpfSR7a2V5fS5tcDRgLFxuICAgIENvbnRlbnRUeXBlOiBWaWRlb0NvbnRlbnRUeXBlLFxuICAgIEV4cGlyZXM6IDkwLFxuICB9KTtcbiJdfQ==
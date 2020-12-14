"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitizeS3KeyPrefix = void 0;

const sanitizeS3KeyPrefix = prefix => {
  if (!prefix) {
    return '';
  }

  if (typeof prefix !== 'string') {
    return '';
  }

  if (!prefix.trim()) {
    return '';
  }

  let sanitizedPrefix = prefix.trim().replace(/(\/\/+)/g, '/');

  if (sanitizedPrefix.startsWith('/')) {
    sanitizedPrefix = sanitizedPrefix.substring(1);
  }

  if (sanitizedPrefix.endsWith('/')) {
    return sanitizedPrefix;
  }

  return sanitizedPrefix + '/';
};

exports.sanitizeS3KeyPrefix = sanitizeS3KeyPrefix;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY3JlZW5zaG90cy9zMy91dGlscy50cyJdLCJuYW1lcyI6WyJzYW5pdGl6ZVMzS2V5UHJlZml4IiwicHJlZml4IiwidHJpbSIsInNhbml0aXplZFByZWZpeCIsInJlcGxhY2UiLCJzdGFydHNXaXRoIiwic3Vic3RyaW5nIiwiZW5kc1dpdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxtQkFBbUIsR0FBSUMsTUFBRCxJQUE0QjtBQUM3RCxNQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNYLFdBQU8sRUFBUDtBQUNEOztBQUVELE1BQUksT0FBT0EsTUFBUCxLQUFrQixRQUF0QixFQUFnQztBQUM5QixXQUFPLEVBQVA7QUFDRDs7QUFFRCxNQUFJLENBQUNBLE1BQU0sQ0FBQ0MsSUFBUCxFQUFMLEVBQW9CO0FBQ2xCLFdBQU8sRUFBUDtBQUNEOztBQUNELE1BQUlDLGVBQWUsR0FBR0YsTUFBTSxDQUFDQyxJQUFQLEdBQWNFLE9BQWQsQ0FBc0IsVUFBdEIsRUFBa0MsR0FBbEMsQ0FBdEI7O0FBRUEsTUFBSUQsZUFBZSxDQUFDRSxVQUFoQixDQUEyQixHQUEzQixDQUFKLEVBQXFDO0FBQ25DRixJQUFBQSxlQUFlLEdBQUdBLGVBQWUsQ0FBQ0csU0FBaEIsQ0FBMEIsQ0FBMUIsQ0FBbEI7QUFDRDs7QUFDRCxNQUFJSCxlQUFlLENBQUNJLFFBQWhCLENBQXlCLEdBQXpCLENBQUosRUFBbUM7QUFDakMsV0FBT0osZUFBUDtBQUNEOztBQUNELFNBQU9BLGVBQWUsR0FBRyxHQUF6QjtBQUNELENBckJNIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNhbml0aXplUzNLZXlQcmVmaXggPSAocHJlZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBpZiAoIXByZWZpeCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJlZml4ICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICghcHJlZml4LnRyaW0oKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBsZXQgc2FuaXRpemVkUHJlZml4ID0gcHJlZml4LnRyaW0oKS5yZXBsYWNlKC8oXFwvXFwvKykvZywgJy8nKTtcblxuICBpZiAoc2FuaXRpemVkUHJlZml4LnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHNhbml0aXplZFByZWZpeCA9IHNhbml0aXplZFByZWZpeC5zdWJzdHJpbmcoMSk7XG4gIH1cbiAgaWYgKHNhbml0aXplZFByZWZpeC5lbmRzV2l0aCgnLycpKSB7XG4gICAgcmV0dXJuIHNhbml0aXplZFByZWZpeDtcbiAgfVxuICByZXR1cm4gc2FuaXRpemVkUHJlZml4ICsgJy8nO1xufTtcbiJdfQ==
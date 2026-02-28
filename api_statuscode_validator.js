const status_code = 401;

switch (status_code) {
  case 200:
    console.log("Status Code: 200 - PASS - OK: Request successful");
    break;
  case 201:
    console.log("Status Code: 201 - PASS - Created: Resource created successfully");
    break;
  case 301:
    console.log("Status Code: 301 - WARNING - Moved Permanently: URL has changed");  // runs
    break;
  case 400:
    console.log("Status Code: 400 - FAIL - Bad Request: Check request payload");  // runs
    break;
  case 401:
    console.log("Status Code: 401 - FAIL - Unauthorized: Check auth token");  // runs
    break;
  case 403:
    console.log("Status Code: 403 - FAIL - Forbidden: Insufficient permissions");  // runs
    break;
  case 404:
    console.log("Status Code: 404 - FAIL - Not Found: Check endpoint URL");  // runs
    break;
  case 500:
    console.log("Status Code: 500 - FAIL - Internal Server Error: Backend issue");  // runs
    break;
  default:
    console.log("UNKNOWN - Unhandled status code");
}

console.log("Hello I have finished my code");
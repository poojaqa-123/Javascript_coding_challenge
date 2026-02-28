const env = "STAGING";

switch (env) {
    case "QA":
        console.log("ENVIRONMENT: QA");
        console.log("URL: https://qa-api.testingacademy.com");
        console.log("API Key: qa-xxxx");
        console.log("Timeout: 8000ms");
        console.log("Description: QA - QA environment");
        break;

    case "STAGING":
        console.log("ENVIRONMENT: STAGING");
        console.log("URL: https://staging-api.testingacademy.com");
        console.log("API Key: stg_key_xxxx-xxxx");
        console.log("Timeout: 8000ms");
        console.log("Description: Staging - Pre-production mirror");
        break;

    case "PRODUCTION":
        console.log("ENVIRONMENT: PRODUCTION");
        console.log("URL: https://production-api.testingacademy.com");
        console.log("API Key: prod_key_xxxx-xxxx");
        console.log("Timeout: 8000ms");
        console.log("Description: Production - Production environment");
        break;

    default:
        console.log("UNKNOWN ENVIRONMENT");
}

console.log("Hello I have finished my code");
MAX_ATTEMPTS = 5
let attempt = 0;

do {
    console.log("Attempt :", attempt + 1);
    // API call
    if (attempt < MAX_ATTEMPTS) {
        const randomValue = Math.random(); // 0.0 to 1.0
        if (randomValue > 0.6) { // 40% chance of success
            console.log("API call successful");
            break;
        } else {
            console.log("API call failed. Retrying...");
        }
    }
    else {
        console.log("Max attempts reached. Giving up.");
    }
    attempt++;


} while (attempt < MAX_ATTEMPTS);
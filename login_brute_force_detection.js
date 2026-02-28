const valid_credentials = {
    email: "admin@testingacademy.com",
    password: "Test@1234"
}
const attempts = ["wrong", "wrong", "wrong", "correct"]

for (let i = 0; i < attempts.length; i++) {
    if (attempts[i] === "wrong") {
        console.log(`Attempt ${i + 1}: ❌ FAILED - Strike ${i + 1}/3`);
    } else {
        console.log(`ACCOUNT LOCKED Attempt ${i + 1}: 🔒 ACCOUNT LOCKED - Rejected`);
    }
}
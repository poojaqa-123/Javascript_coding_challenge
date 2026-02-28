const testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]

let passCount = 0;
let failCount = 0;
let skipCount = 0;

for (let i = 0; i < testResults.length; i++) {
  if (testResults[i] === "pass") {
    passCount++;
  } else if (testResults[i] === "fail") {
    failCount++;
  } else if (testResults[i] === "skip") {
    skipCount++;
  }
}

console.log(`Total Pass: ${passCount}`);
console.log(`Total Fail: ${failCount}`);
console.log(`Total Skip: ${skipCount}`);
console.log("Rate: 62.50% VERDICT: Minor failures. Review before release.");
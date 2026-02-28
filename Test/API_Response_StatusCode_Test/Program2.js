const testResults = [
  "pass", "pass", "fail",
  "pass", "skip", "pass",
  "fail", "pass"
];

// Counters
let passCount = 0;
let failCount = 0;
let skipCount = 0;

// Count results using for loop
for (let i = 0; i < testResults.length; i++) {
  if (testResults[i] === "pass") {
    passCount++;
  } else if (testResults[i] === "fail") {
    failCount++;
  } else if (testResults[i] === "skip") {
    skipCount++;
  }
}

// Calculations
const totalTests = testResults.length;
const passRate = ((passCount / totalTests) * 100).toFixed(2);

// Verdict logic
let verdict;
if (failCount === 0) {
  verdict = "READY FOR RELEASE";
} else if (failCount <= 2) {
  verdict = "Minor failures. Review before release.";
} else {
  verdict = "BLOCK RELEASE";
}
console.log(`Total Tests : ${totalTests}`);
console.log(`Passed      : ${passCount}`);
console.log(`Failed      : ${failCount}`);
console.log(`Skipped     : ${skipCount}`);
console.log(`Pass Rate   : ${passRate}%`);
console.log(`VERDICT     : ${verdict}`);
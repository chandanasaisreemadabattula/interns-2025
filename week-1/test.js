function runTest1(solve) {
  const tests = [
    {
      input: { name: "Alice", score: 78 },
      output: "Alice passed with a score of 78",
    },
    {
      input: { name: "Bob", score: 12 },
      output: "Bob failed with a score of 12",
    },
    {
      input: { name: "Jake", score: 16 },
      output: "Jake passed with a score of 16",
    },
    {
      input: { name: "Paul", score: 50 },
      output: "Paul passed with a score of 50",
    },
  ];

  const results = tests.map((test, idx) => {
    const actual = solve(test.input.name, test.input.score);
    const outcome = actual === test.output ? "Passed" : "Failed";
    return {
      testNumber: idx + 1,
      status: outcome,
      actual,
      expected: test.output,
    };
  });

  // Create table HTML
  let tableHtml = '<table border="1" style="border-collapse:collapse;">';
  tableHtml +=
    "<tr><th>Test #</th><th>Status</th><th>Output</th><th>Expected</th></tr>";
  results.forEach((r) => {
    tableHtml += `<tr><td>${r.testNumber}</td><td class="${r.status}">${r.status}</td><td>${r.actual}</td><td>${r.expected}</td></tr>`;
  });
  tableHtml += "</table>";

  // Show in #output div
  document.getElementById("output1").innerHTML = tableHtml;
}

function runTest2(solve) {
  const tests = [
    {
      input: {
        name: "Alice",
        score: 78,
        template: "{{name}} {{outcome}} {{score}}",
      },
      output: "Alice passed 78",
    },
    {
      input: {
        name: "Bob",
        score: 12,
        template: "Student {{name}} has {{outcome}}",
      },
      output: "Student Bob has failed",
    },
    {
      input: {
        name: "Jake",
        score: 16,
        template: "{{name}} got {{score}} {{output}}",
      },
      output: "Jake got 16 {{output}}",
    },
    {
      input: {
        name: "Paul",
        score: 50,
        template: "{{score}} {{score}} {{score}}",
      },
      output: "50 50 50",
    },
  ];

  const results = tests.map((test, idx) => {
    const actual = solve(
      test.input.name,
      test.input.score,
      test.input.template
    );
    const outcome = actual === test.output ? "Passed" : "Failed";
    return {
      testNumber: idx + 1,
      status: outcome,
      actual,
      expected: test.output,
    };
  });

  // Create table HTML
  let tableHtml = '<table border="1" style="border-collapse:collapse;">';
  tableHtml +=
    "<tr><th>Test #</th><th>Status</th><th>Output</th><th>Expected</th></tr>";
  results.forEach((r) => {
    tableHtml += `<tr><td>${r.testNumber}</td><td class="${r.status}">${r.status}</td><td>${r.actual}</td><td>${r.expected}</td></tr>`;
  });
  tableHtml += "</table>";

  // Show in #output2 div
  document.getElementById("output2").innerHTML = tableHtml;
}

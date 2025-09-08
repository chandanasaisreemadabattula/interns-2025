# Week 1 Assignment

## Problem Statement

You are given two tasks to complete in JavaScript. Each task requires you to implement a function and verify its correctness using the provided test cases.

### Task 1: solution1(name, score)

- Implement the function `solution1` that takes an object with `name` and `score` properties.
- The function should return a string in the format:
  - "<name> passed with a score of <score>" if the score is 15 or above.
  - "<name> failed with a score of <score>" if the score is below 15.
- Run the tests by clicking the "Run Test 1" button. The results will be displayed in a table showing the test number, status, actual output, and expected output.
- Example:

  ```javascript
  solution1("Alice", 78);
  // Alice passed with a score of 78
  ```

### Task 2: solution2(input)

- Implement the function `solution2` that takes an object with `name`, `score`, and `template` properties.
- The function should replace placeholders in the template string:
  - `{{name}}` with the name
  - `{{score}}` with the score
  - `{{outcome}}` with "passed" if score >= 15, otherwise "failed"
- Run the tests by clicking the "Run Test 2" button. The results will be displayed in a similar table.
- Example:

  ```javascript
  solution1("Alice", 18, "{{name}} {{score}} {{outcome}}");
  // Alice 78 failed
  ```

## Instructions

1. **Fork** this repository to your own GitHub account.
2. **Create a new branch** named with your own name (e.g., `abhi`) from your fork.
3. Complete the functions in `index.js` as described above.
4. Use the buttons on the webpage to run the tests and check your solutions.
5. Review the test results to ensure your functions work as expected.
6. **Push** your changes to your branch on your fork.
7. **Raise a Pull Request (PR)** from your branch to the `origin` repository for review.

Good luck!

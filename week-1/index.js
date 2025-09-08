function solution1(name, score) {
  // your solution here
  if(score>15){
    return (`${name} passed with a score of ${score}`);
  }
  else{
    return (`${name} failed with a score of ${score}`);
  }
}

document
  .getElementById("run1")
  .addEventListener("click", () => runTest1(solution1));

function solution2(name, score, template) {
  // your solution here
  let outcome = score >= 15 ? "passed": "failed";
  return template
  .replace("{{name}}",name)
  .replace(/{{score}}/g,score)
  .replace("{{outcome}}",outcome);
}

document
  .getElementById("run2")
  .addEventListener("click", () => runTest2(solution2));

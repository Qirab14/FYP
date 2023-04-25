import React from "react";
import "./generalProblem.css";

function GeneralProblem() {
  return (
    <body>
      <header id="pyproblems">
        <h1>Python Problems</h1>
      </header>
      <div class="problem">
        <h2>Problem 1</h2>
        <p>Write a Python program to calculate the sum of two numbers.</p>
        <pre>
          <code>
            num1 = 5 num2 = 3 sum = num1 + num2 print("The sum of", num1, "and",
            num2, "is", sum)
          </code>
        </pre>
      </div>
      <div class="problem">
        <h2>Problem 2</h2>
        <p>Write a Python program to check if a number is even or odd.</p>
        <pre>
          <code>
            num = 7 if num % 2 == 0: print(num, "is even") else: print(num, "is
            odd")
          </code>
        </pre>
      </div>
      <div class="problem">
        <h2>Problem 3</h2>
        <p>Write a Python program to find the factorial of a number.</p>
        <pre>
          <code>
            num = 5 factorial = 1 for i in range(1, num+1): factorial *= i
            print("The factorial of", num, "is", factorial)
          </code>
        </pre>
      </div>
    </body>
  );
}

export default GeneralProblem;

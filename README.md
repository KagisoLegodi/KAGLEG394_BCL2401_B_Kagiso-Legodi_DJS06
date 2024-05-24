# Problem Summary

The original code had the following problems:

1. **Readability and Maintainability:** The original code had very little structure and was tightly coupled, making it hard to read and alter.
2. **Clarity of Output:** The console output was not clearly formatted, making it difficult to understand the results.
3. **Error Handling:** The original code did not account for edge cases, like empty prices in the products array or invalid array indexes.
4. **Efficiency:** Some parts of the original code could be written more efficiently, such as the check for names containing the letter "S". The original code split the string on the space character using `.split(' ')`, then checked the second element in the array for the presence of "S".

## Solutions and Resources

Here are the solutions to these problems, and the resources I used to learn them:

1. **Refactoring for Readability and Maintainability:**
    * **Solution:** I broke up the code into smaller functions, each of which performed a single task (e.g., `getValidPrices`). I wrote clear function and variable names and added comments wherever needed.
    * **Resource:** Read about Clean Code and related best practices.

2. **Clarity of Console Output:**
    * **Solution:** I reorganized the output into clear sections with headings for each. I also used `console.table` to print arrays and objects as tables, and I used `.toFixed()` to format the prices with two decimal places.
    * **Resource:** MDN on `console.table` and `.toFixed()`.

3. **Error Handling:**
    * **Solution:** I added code to handle edge cases related to product prices (if any price in the prices array was invalid) and array indexes (if `i` was less than 0 or greater than `products.length - 1`). If a price was invalid, the output would simply replace that price with "N/A".
    * **Resource:** General knowledge of JavaScript error handling and array manipulation.

4. **Code Efficiency:**
    * **Solution:** I simplified the check for names containing "S" by using the `includes` method directly on the string, thus avoiding the unnecessary string split.
    * **Resource:** MDN on string methods like `includes`.

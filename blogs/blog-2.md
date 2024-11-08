
# How to handle asynchronous operations `async/await` using async/await over callback/promise TypeScript.

Asynchronous operations, such as making API calls or reading files, are a common requirement in modern applications. `async/await` provides a more readable and concise way to handle these operations.

## 1. Callback Functions

Callbacks are functions that are passed as arguments to other functions and are executed once the asynchronous task completes. However, callbacks often lead to "callback hell"—a situation where callbacks are nested within other callbacks, making the code harder to read and maintain.

### Example with Callback:
```typescript
function fetchData(callback: (data: string) => void): void {
  setTimeout(() => {
    const data = "Data fetched successfully!";
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log(data);  // Output: Data fetched successfully!
});
```

While this code works, the code can quickly difficult to manage when there are multiple asynchronous operations.

## 2. Promises

Promises were introduced to avoid the losses of callbacks and to make handling asynchronous code more manageable. A `Promise` represents a value that might not be available yet but will be resolved at some point in the future.

### Example with Promise:
```typescript
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data fetched successfully!";
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);  // Output: Data fetched successfully!
  })
  .catch((error) => {
    console.log(error);
  });
```

Though this code is cleaner than callbacks, chaining multiple `.then()` calls can lead to complex and hard-to-read code.

## 3. `async/await`

`async/await` was introduced in ECMAScript 2017 (ES8) and simplifies working with asynchronous code by making it look and behave more like synchronous code. `async` is used to declare a function as asynchronous, and `await` pauses the function execution until the Promise is resolved.

### Example with `async/await`:
```typescript
async function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Data fetched successfully!";
      resolve(data);
    }, 1000);
  });
}

async function displayData(): Promise<void> {
  const data = await fetchData();
  console.log(data);  // Output: Data fetched successfully!
}

displayData();
```

With `async/await`, the code is easier to read, and it doesn't need to use `.then()` for chaining. The function `await fetchData()` pauses execution until the `fetchData` Promise is resolved, making the code flow more like synchronous code.

## Conclusion

- **Callbacks** work but can result in complex, nested code.
- **Promises** help improve readability over callbacks but can still result in chained `.then()` calls.
- **`async/await`** offers the cleanest solution, turning asynchronous code into something that looks and behaves like synchronous code, making it more readable and easier to maintain.

Using `async/await` in TypeScript provides better control over asynchronous operations, and it simplifies error handling with `try/catch` blocks, making it the easy to code for managing async tasks.

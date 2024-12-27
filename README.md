# Unhandled Promise Rejection in React Native Async State Update

This repository demonstrates a common React Native bug: attempting to access a state variable before it's been fully initialized after an asynchronous operation.  The `bug.js` file shows the problematic code, while `bugSolution.js` presents a corrected version.

## Problem
The issue arises from the asynchronous nature of fetching data. The component renders before the `fetch` request completes and `setData` is called, leading to an attempt to access `data.name` while `data` is still `null`. This causes an error, typically an `Unhandled Promise Rejection` or a `Cannot read properties of undefined (reading 'name')` error.

## Solution
The solution involves using optional chaining (`?.`) or a conditional rendering to gracefully handle the case where `data` is still `null`.  Conditional rendering prevents the attempt to access `data.name` until `data` is available.
    async function raceAsyncOperationWithTimeout(asyncOperation, timeoutMilliseconds) {
        // Create a Promise that resolves after the specified timeout
        const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Timeout exceeded'));
        }, timeoutMilliseconds);
        });
    
        try {
        // Use Promise.race to race between the async operation and the timeout
        const result = await Promise.race([asyncOperation(), timeoutPromise]);
    
        // Log the result if the async operation completes before the timeout
        console.log('Operation completed successfully:', result);
        } catch (error) {
        // Log a timeout message if the timeout occurs before the async operation completes
        console.log('Timeout exceeded:', error.message);
        }
    }
    
    // Example usage:
    async function exampleAsyncOperation() {
        // Simulate an asynchronous operation (e.g., fetching data)
        return new Promise(resolve => {
        setTimeout(() => {
            resolve('Async operation result');
        }, 2000); // Simulating a 2-second async operation
        });
    }
    
    // Set the timeout duration in milliseconds
    const timeoutDuration = 1500;
    
    // Call the function with the async operation and timeout duration
    raceAsyncOperationWithTimeout(exampleAsyncOperation, timeoutDuration);
    
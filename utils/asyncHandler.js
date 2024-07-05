// Middleware utility for handling asynchronous route handlers in Express applications
// This function wraps an asynchronous route handler and ensures that any uncaught
// promise rejections are passed to the next error-handling middleware.

export const asyncHandler = (fn) => (req, res, next) => {
    // Resolve the promise returned by the route handler and catch any errors
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
};

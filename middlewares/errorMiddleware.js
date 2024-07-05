// This middleware function captures any errors that occur during the request-response cycle
// and ensures that they are logged and sent back to the client in a consistent format.

export const errorMiddleware = (err, req, res, next) => {
    // Log the error stack to the console for debugging purposes
    console.error(err.stack);
    
    // Send a JSON response with a 500 status code and an error message the message should always be internal server error so that user never know what is happening on the server and which of our service is failing
    res.status(500).json({ message: 'Internal Server Error' });
};

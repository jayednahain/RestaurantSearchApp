import axios from "axios";

// export default axios.create({
//     baseURL:'https://dummyjson.com/', 
// }) 

const DummyJsonService = axios.create({
    baseURL: 'https://dummyjson.com/',
});

const handleResponseSuccess = (response) => {
    return response;
};

const handleResponseError = (error) => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            const statusCode = error.response.status;
            let errorMessage = `API Error (Status ${statusCode})`;

            if (statusCode === 404) {
                errorMessage = 'Resource not found.';
            } else if (statusCode >= 500) {
                errorMessage = 'Server error. Please try again later.';
            }
            error.message = errorMessage; // Overwrite the message property.
        } 

        else if (error.request) {
            error.message = 'Network error. Please check your internet connection.';
        } else {
            error.message = 'An unexpected error occurred.';
        }
    }
    return Promise.reject(error);
};


DummyJsonService.interceptors.response.use(
    handleResponseSuccess,
    handleResponseError
);
export default DummyJsonService;
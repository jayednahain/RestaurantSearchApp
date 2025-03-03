// import { createSuccessHandler } from "./handlerSuccess";
// import { createErrorHandler } from "./handlerError";

// export const attachInterceptors = (service, serviceName) => {
//     service.interceptors.response.use(
//         createSuccessHandler(),
//         createErrorHandler(serviceName)
//     );
// };

import { handleApiError } from "./apiErrorUtils";

export const attachInterceptors = (service, serviceName) => {
    service.interceptors.response.use(
        (response) => response,
        (error) => handleApiError(error, serviceName)
    );
};
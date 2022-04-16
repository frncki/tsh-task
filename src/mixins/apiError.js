const isApiError = true;

const apiError = {

    badRequest: (message) => ({ code: 400, isApiError, message }),

    notFound: (message) => ({ code: 404, isApiError, message }),

    internal: (message) => ({ code: 500, isApiError, message }),

}

export default apiError;

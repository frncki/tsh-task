const apiErrorHandler = (err, req, res, next) => {

    if (err.isApiError) {
        res.status(err.code).json(err.message);
        return;
    }

    res.status(500).json('something went wrong');
}

export default apiErrorHandler;

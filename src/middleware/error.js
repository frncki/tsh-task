const apiErrorHandler = (err, req, res, next) => {
    //console.error(err); // dev mode only
    if (err.isApiError) {
        res.status(err.code).send({ message: err.message });
        return;
    }

    res.status(500).json({ message: 'Something went wrong' });
}

export default apiErrorHandler;

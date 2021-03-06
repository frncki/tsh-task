const validate = ajvValidate => (req, res, next) => {
    const valid = ajvValidate(req.body);
    if (!valid) {
        const errors = ajvValidate.errors;
        return res.status(400).json(errors);
    }
    next();
}

export default validate;
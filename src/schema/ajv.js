import Ajv from "ajv";
const ajv = new Ajv({ allErrors: true });

module.exports = ajv;
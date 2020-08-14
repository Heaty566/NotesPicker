module.exports.Response = class {
        constructor(statusCode, data, msg) {
                this.statusCode = statusCode;
                this.data = data;
                this.msg = msg;
        }
};

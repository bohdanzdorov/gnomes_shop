module.exports = class ApiError extends Error {
    status;
    fails;
    
    constructor(status, message, fails=null){
        super(message);
        this.status = status;
        this.fails = fails;
    }
}

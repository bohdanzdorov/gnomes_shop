class AdminDTO{
    login
    password

    constructor(login = "", password = ""){
       this.login = login
       this.password = password
    }
};

module.exports = AdminDTO;
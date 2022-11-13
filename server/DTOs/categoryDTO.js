class CategoryDTO{
    name
    category_id

    constructor(name = "", category_id = -1){
       this.name = name
       this.category_id = category_id
    }
};

module.exports = CategoryDTO;
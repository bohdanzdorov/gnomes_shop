class ProductDTO{
    name
    product_id
    category_id
    price
    sale
    producer
    description
    sold_count
    photo
 
    constructor(name = "", product_id = -1, category_id = -1, price = -1, sale=-1, producer="", description="", sold_count=-1, photo = ""){
       this.name = name
       this.product_id = product_id
       this.category_id = category_id
       this.price = price
       this.sale = sale
       this.producer = producer
       this.description = description
       this.sold_count = sold_count
       this.photo = photo
    }
};

module.exports = ProductDTO;
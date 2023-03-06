/*
Imagin an online shopping center for shoes!
productsData is an array of objects! Each object is about one of our products. look at table below
and create this array!

_______________________________________________________________________
id  |    brand              |    price     |   availableCount | color
-----------------------------------------------------------------------
1   | Balance Sneaker Shoe  |  34.99       |     26       | darkBlue
-----------------------------------------------------------------------
2   | Nike Sneaker Shoe     |  43.99       |      4       | purple
----------------------------------------------------------------
3   | Nike Air Max Shoe     |  27.99       |      17      | purple
----------------------------------------------------------------
4   | Nike Air Force Shoe   |  17.99       |      12      | red
----------------------------------------------------------------
5   | Adidas Running Shoe   | 67.99        |      10      | black
----------------------------------------------------------------
6   | Nike Air Force Shoe   | 25.99        |       0      | green
----------------------------------------------------------------
7   | Nike Running Shoe     | 21.99        |       0      | black
----------------------------------------------------------------
8   | Nike Sneakers         | 70.99        |       1      | pink


Complete a function that take productsData as input, and return products id which are not available!

Complete a function that take productsData and a color as input, and returns products brands filtered by color!




*/
const productsData = [
    {
        id:1 ,
        brand:"Balance Sneaker Shoe" ,
        price:34.99 ,
        availableCount:26,
        color: "darkBlue",
        },
    {
        id:2 ,
        brand:"Nike Sneaker Shoe" ,
        price:43.99 ,
        availableCount:4,
        color: "purple",
    },
    {
        id:3 ,
        brand:"Nike Air Max Shoe" ,
        price:27.99 ,
        availableCount:17,
        color: "purple"
    },
    {
        id:4 ,
        brand:"Nike Air Force Shoe" ,
        price:17.99 ,
        availableCount:12,
        color: "red",
    },
    {
        id:5 ,
        brand:"Adidas Running Shoe" ,
        price:67.99 ,
        availableCount:10,
        color: "black",
    },
    {
        id:6 ,
        brand:"Nike Air Force Shoe" ,
        price:25.99 ,
        availableCount:0,
        color: "green",
    },
    {
        id:7 ,
        brand:"Nike Running Shoe" ,
        price:21.99 ,
        availableCount:0,
        color: "black",
    },
    {
        id:8 ,
        brand:"Nike Sneakers" ,
        price:70.99 ,
        availableCount:1,
        color: "pink",
    }
];

function notAvailableProducts(products){
    unavailables=[];
    products.forEach((product)=>{
        if(product.availableCount === 0){
            unavailables.push(product.id);
        }
    })
    return unavailables;
}

console.log(notAvailableProducts(productsData));

function filterByColor(products,selectedColor){
    filteredProducts=[];
    products.forEach((product)=>{
        if(product.color === selectedColor){
            filteredProducts.push(product.brand);
        }
    })
    return filteredProducts;
}

console.log(filterByColor(productsData,"purple"));
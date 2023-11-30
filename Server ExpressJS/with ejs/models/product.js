const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');

const dataPath = path.join(rootDir, 'data/prodData.json');

const getProductsFromFile = ()=>{
    return new Promise((resolve,reject) =>{
        fs.readFile(dataPath, 'utf-8', (err, readData) => {
            if (!readData) {
                resolve ([]);
                return;
            }
            resolve (JSON.parse(readData));
        });
    })
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getProductsFromFile()
        .then((products)=>{
            products.push(this);
            const stringifyData = JSON.stringify(products)
            fs.writeFile(dataPath, stringifyData, (err, data) => {
                return;
            });
        })
    }

    static fetchAll() {
       return getProductsFromFile();
    }
}
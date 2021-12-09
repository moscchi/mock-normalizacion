import faker from 'faker';

let data: any = [];
let title: String;
let price: Number;
let image: String;
let obj = {};

const fakerService = () => {
    for(let i = 0; i < 5; i++){
        title = faker.commerce.productName();
        price = Number(faker.commerce.price());
        image = faker.image.image();
        obj = {
            title,
            price,
            image
        }
        data.push(obj)
    }

    return data;
}

export {fakerService};
import axios from 'axios';

export const productDatas = async () => {
    const products = await axios.get('https://fakestoreapiserver.reactbd.com/products');
    return products;
};

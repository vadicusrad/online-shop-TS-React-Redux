interface IGetData {
    urlModificator?: string | number;
}

const baseUrl = 'https://fakestoreapi.com/products';

async function getData({ urlModificator }: IGetData) {
    return await fetch(`${baseUrl}/${urlModificator}`);
}

export default getData;

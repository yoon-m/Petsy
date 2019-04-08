export const fetchAllProducts = () => (
    $.ajax({
        method: 'GET',
        url: '/api/products'
    })
);

export const fetchProduct = id => (
    $.ajax({
        method: 'GET',
        url: `/api/products/${id}`,
    })
);

export const createProduct = product => (
    $.ajax({
        method: 'POST',
        url: 'api/products',
        data: { product }
    })
);

export const searchProducts = searchValue => (
    $.ajax({
        method: 'GET',
        url: '/api/products',
        data: { searchValue }
    })
);
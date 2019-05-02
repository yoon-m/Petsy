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

export const createProduct = product => {
    return $.ajax({
        method: 'POST',
        url: 'api/products',
        data: product,
        contentType: false,
        processData: false
    });
};

export const searchProducts = searchValue => (
    $.ajax({
        method: 'GET',
        url: '/api/products',
        data: { searchValue }
    })
);

export const deleteProduct = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/products/${id}`,
    })
);
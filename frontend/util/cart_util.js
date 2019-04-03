export const addItem = item => {
    return $.ajax({
        method: 'POST',
        url: '/api/cart_items',
        data: { item }
    });
};

export const removeItems = id => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/cart_items/${id}`
    });
};

export const fetchCart = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/cart_items',
    });
};
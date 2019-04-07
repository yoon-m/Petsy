export const addItem = cartItem => {
    return $.ajax({
        method: 'POST',
        url: '/api/cart_items',
        data: { cartItem }
    });
};

export const removeItem = id => {
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

export const updateItem = item => {
    return $.ajax({
        method: "patch",
        url: `api/cart_items/${item.id}`,
        data: { item }
    });
};

export const removeAllItems = itemIds => {
    itemIds.forEach(itemId => {
        return $.ajax({
            method: 'DELETE',
            url: `/api/cart_items/${itemId}`
        });
    });
};
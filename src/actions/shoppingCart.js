//Actions to add, remove and edit the files from the shopping cart

//ADD_PRODUCT
export const addProduct = (
    {
        id = '',
        description = '',
        category = '',
        price = 0,
        quantity = 1,
        pic ='http://support.yumpu.com/en/wp-content/themes/qaengine/img/default-thumbnail.jpg',
        total = 0
    } = {}
) => ({
    type: 'ADD_PRODUCT',
    product: {
        id,
        description,
        category,
        price,
        quantity,
        pic,
        total
    }
});

//REMOVE_PRODUCT
export const removeProduct = ({ id } = {} ) => ({
    type: 'REMOVE_PRODUCT',
    id
});

//EDIT_PRODUCT
export const editProduct = ({ quantity, id } = {} ) => ({
    type: 'EDIT_PRODUCT',
    quantity,
    id
});
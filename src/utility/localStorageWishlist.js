const getStoredDataWishlist = () => {
    const storedData = localStorage.getItem('wishlist-book');

    if (storedData) {
        return JSON.parse(storedData);
    }
    return [];
}

const setStoredDataWishlist = (bookId) => {

    const getStoredValue = getStoredDataWishlist();
    const exists = getStoredValue.find(id => id === bookId);

    if (!exists){
        getStoredValue.push(bookId);
        localStorage.setItem('wishlist-book', JSON.stringify(getStoredValue));
    }
}

export { getStoredDataWishlist, setStoredDataWishlist };
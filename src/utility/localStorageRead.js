const getStoredData = () => {
    const storedData = localStorage.getItem('read-book');

    if (storedData) {
        return JSON.parse(storedData);
    }
    return [];
}

const setStoredData = (bookId) => {
    const getStoredValue = getStoredData();
    const exists = getStoredValue.find(id => id === bookId);
    if (!exists){
        getStoredValue.push(bookId);
        localStorage.setItem('read-book', JSON.stringify(getStoredValue));
    }
}

export { getStoredData, setStoredData };
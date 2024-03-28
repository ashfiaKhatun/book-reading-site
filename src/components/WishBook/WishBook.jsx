import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredDataWishlist } from "../../utility/localStorageWishlist";
import WishBookList from "../WishBookList/WishBookList";

const WishBook = () => {

    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);
    
    useEffect( () => {
        const listedReadBook = getStoredDataWishlist();

        if(books.length>0){
            const listedId = [];

            for(const id of listedReadBook){
                const book = books.find(value => value.bookId === id);
                if(books){
                    listedId.push(book);
                }
            }
            setReadBooks(listedId);
        }


    }, [])


    return (
        <div>
            {
                readBooks.map(wishBookList => <WishBookList key={wishBookList.bookId} wishBookList={wishBookList}></WishBookList>)
            }
        </div>
    );
};

export default WishBook;
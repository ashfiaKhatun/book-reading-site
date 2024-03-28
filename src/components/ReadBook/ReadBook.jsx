import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../utility/localStorageRead";
import { useEffect, useState } from "react";
import ReadBookList from '../ReadBookList/ReadBookList';

const ReadBook = () => {

    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);
    
    useEffect( () => {
        const listedReadBook = getStoredData();

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
        <div className="px-2 lg:px-0">
            {
                readBooks.map(readBookList => <ReadBookList key={readBookList.bookId} readBookList={readBookList}></ReadBookList>)
            }
        </div>
    );
};

export default ReadBook;
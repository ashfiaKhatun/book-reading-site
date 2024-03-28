import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="mt-6 lg:mt-16">
            <h1 className="text-center text-2xl lg:text-4xl font-bold mb-6 lg:mb-12">Books</h1>
            <div className="grid lg:grid-cols-3 gap-4 lg:gap-8 my-6">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }

            </div>
        </div>
    );
};

export default Books;
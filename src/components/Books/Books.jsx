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
        <div className="mt-16">
            <h1 className="text-center text-4xl font-bold mb-12">Books</h1>
            <div className="grid grid-cols-3 gap-8">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }

            </div>
        </div>
    );
};

export default Books;
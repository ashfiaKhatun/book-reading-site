import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredData } from "../../utility/localStorageRead";
import ReadBookList from "../ReadBookList/ReadBookList";
import { useLoaderData } from "react-router-dom";
import { getStoredDataWishlist } from "../../utility/localStorageWishlist";
import WishBookList from "../WishBookList/WishBookList";


const ListedBooks = () => {

    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);

    const [sorting, setSorting] = useState([]);

    useEffect(() => {
        const listedReadBook = getStoredData();

        if (books.length > 0) {
            const listedId = [];

            for (const id of listedReadBook) {
                const book = books.find(value => value.bookId === id);
                if (books) {
                    listedId.push(book);
                }
            }
            setReadBooks(listedId);
            setSorting(listedId);
        }


    }, [])


    const handleSorting = (filter) => {
        if (filter === 'rating') {
            const sortedRating = readBooks.sort((a, b) => b.rating - a.rating);

            setSorting([...sortedRating])
        }
        else if (filter === 'pageNumber') {
            const sortedRating = readBooks.sort((a, b) => b.totalPages - a.totalPages);

            setSorting([...sortedRating])
        }
        else if (filter === 'publishYear') {
            const sortedRating = readBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);

            setSorting([...sortedRating])
        }
        else {
            setSorting([...readBooks])
        }
    }



    const [readWishlist, setReadWishlist] = useState([]);

    useEffect(() => {
        const listedReadBook = getStoredDataWishlist();

        if (books.length > 0) {
            const listedId = [];

            for (const id of listedReadBook) {
                const book = books.find(value => value.bookId === id);
                if (books) {
                    listedId.push(book);
                }
            }
            setReadWishlist(listedId);
        }


    }, [])




    return (
        <div className="max-w-6xl mx-auto px-2 lg:p-0">
            <h1 className="text-center text-2xl lg:text-4xl font-bold my-12 bg-[#131313] bg-opacity-5 max-w-6xl mx-auto rounded-xl py-4">Books</h1>

            <div className="text-center mb-8">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn lg:text-xl bg-[#23BE0A]  text-white">Sort By<RiArrowDropDownLine className="text-3xl lg:text-4xl " />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSorting('rating')}><a>Rating</a></li>
                        <li onClick={() => handleSorting('pageNumber')}><a>Number of Pages</a></li>
                        <li onClick={() => handleSorting('publishYear')}><a>Publish Year</a></li>
                    </ul>
                </div>

            </div>

            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read</Tab>
                        <Tab>Wishlist</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="px-2 lg:px-0">
                            {
                                sorting.map(readBookList => <ReadBookList key={readBookList.bookId} readBookList={readBookList}></ReadBookList>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            {
                                readWishlist.map(wishBookList => <WishBookList key={wishBookList.bookId} wishBookList={wishBookList}></WishBookList>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBooks;
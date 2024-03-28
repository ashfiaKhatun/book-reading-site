import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredData, setStoredData } from "../../utility/localStorageRead";
import { getStoredDataWishlist, setStoredDataWishlist } from "../../utility/localStorageWishlist";

const BookDetails = () => {

    const books = useLoaderData();
    const { bookId } = useParams();

    const book = books.find(data => data.bookId === parseInt(bookId));

    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    const bookIdInt = parseInt(bookId)

    // read option
    const handleRead = () => {
        const storedData = getStoredData();
        const findData = storedData.find(id => id === bookIdInt);
        if (findData) {
            toast('This book is already added to Reading List');
        }
        else {
            toast('This book is successfully added to Reading List')
        }

        setStoredData(bookIdInt);
    }


    // wishlist option
    const handleWishlist = () => {
        const getReadStoredValue = getStoredData();
        const readBookExists = getReadStoredValue.find(id => id === bookId);

        const storedData = getStoredDataWishlist();
        const findData = storedData.find(id => id === bookIdInt);
        
        if(readBookExists){
            toast('You have already read this book')
        }
        else {
            if (findData) {
                toast('This book is already added to Wishlist');
            }
            else {
                toast('This book is successfully added to Wishlist');
            }
        }

        setStoredDataWishlist(bookIdInt);
    }



    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <img src={image} className="lg:w-1/2 bg-base-200 py-6 lg:py-20 px-20 rounded-2xl" />
                    <div className="space-y-4">
                        <h1 className="text-2xl lg:text-4xl font-bold">{bookName}</h1>

                        <p className="text-lg lg:text-xl font-medium">By : {author}</p>

                        <hr className="border" />

                        <p className="text-lg lg:text-xl font-medium">{category}</p>

                        <hr className="border" />

                        <p><span className="font-bold">Review:</span> {review}</p>

                        <div className="space-x-2"><span className="font-bold">Tag</span>
                            {
                                tags.map((tag, idx) => <div key={idx} className="badge bg-[#23BE0A] text-[#23BE0A] font-medium p-3 bg-opacity-10">#{tag}</div>)
                            }
                        </div>

                        <hr className="border" />

                        <div className="flex justify-between lg:w-3/5">
                            <div className="space-y-2">
                                <p>Name of Pages: </p>
                                <p>Publisher: </p>
                                <p>Year of Publishing: </p>
                                <p>Rating: </p>
                            </div>
                            <div className="font-bold space-y-2">
                                <p>{totalPages}</p>
                                <p>{publisher}</p>
                                <p>{yearOfPublishing}</p>
                                <p>{rating}</p>
                            </div>
                        </div>

                        <div className="font-semibold text-lg">
                            <button onClick={handleRead} className="btn bg-base-100 mr-4 px-7">Read</button>
                            <button onClick={handleWishlist} className="btn text-white bg-[#50B1C9]">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;
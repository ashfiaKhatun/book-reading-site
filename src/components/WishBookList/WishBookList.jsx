import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";
import { Link } from "react-router-dom";

const WishBookList = ({wishBookList}) => {

    const {bookId, image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating} = wishBookList;
    console.log(wishBookList);

    return (
        <div>
            <div className="hero border rounded-lg lg:p-8 mb-8 flex lg:justify-start">
                <div className="hero-content lg:gap-12 flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg bg-base-200 py-6 lg:py-12 px-28 lg:px-12" />

                    <div className="space-y-4">
                        <h1 className="text-xl lg:text-2xl font-bold">{bookName}</h1>

                        <p className="font-semibold">By : {author}</p>

                        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6">
                            <div className="space-x-2"><span className="font-bold">Tag</span>
                                {
                                    tags.map((tag, idx) => <div key={idx} className="badge bg-[#23BE0A] text-[#23BE0A] font-medium p-3 bg-opacity-10">#{tag}</div>)
                                }
                            </div>

                            <p className="flex items-center text-gray-500"><IoLocationOutline className="mr-2" />Year of Publishing: {yearOfPublishing}</p>

                        </div>

                        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 text-gray-500">
                            <p className="flex items-center"><IoPeopleOutline className="mr-3 text-xl" />Publisher: {publisher}</p>
                            <p className="flex items-center"><LuFileSpreadsheet className="mr-3" />Page: {totalPages}</p>
                        </div>

                        <hr className="border" />

                        <div className="space-x-4">
                            <div className="badge bg-[#328EFF] text-[#328EFF] font-medium p-3 lg:p-6 bg-opacity-15">Category: {category}</div>

                            <div className="badge bg-[#FFAC33] text-[#FFAC33] font-medium p-3 lg:p-6 bg-opacity-15">Rating: {rating}</div>


                            <Link to={`/book/${bookId}`}><button className="btn bg-[#23BE0A] font-bold text-white rounded-full mt-4 lg:mt-0">View Details</button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishBookList;
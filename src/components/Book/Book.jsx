import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {

    const { bookName, image, tags, author, category, rating, bookId } = book;

    return (
        <Link to={`/book/${bookId}`}>
            <div className="card card-compact border p-6">
                <figure className="bg-base-200 rounded-2xl p-6"><img src={image} /></figure>
                <div className="card-body space-y-3">
                    <div className="space-x-2">
                        {
                            tags.map((tag, idx) => <div key={idx} className="badge bg-[#23BE0A] text-[#23BE0A] font-medium p-3 bg-opacity-10">{tag}</div>)
                        }
                    </div>
                    <h2 className="card-title text-2xl font-semibold">{bookName}</h2>
                    <p className="font-semibold">By: {author}</p>
                    <hr className="border-dashed" />
                    <div className="flex">
                        <p>{category}</p>
                        <p className="flex gap-2 justify-end items-center">{rating}</p>
                    </div>
                </div>
            </div>
        </Link>
        
    );
};

export default Book;
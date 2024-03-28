import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";


const ListedBooks = () => {

    const [tab, setTab] = useState(1);

    const handleTab = (idx) => {
        setTab(idx);
    }

    return (
        <div className="max-w-6xl mx-auto px-2 lg:p-0">
            <h1 className="text-center text-2xl lg:text-4xl font-bold my-12 bg-[#131313] bg-opacity-5 max-w-6xl mx-auto rounded-xl py-4">Books</h1>

            <div className="text-center mb-8">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn lg:text-xl bg-[#23BE0A]  text-white">Sort By<RiArrowDropDownLine className="text-3xl lg:text-4xl " />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>

            </div>

            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <a onClick={() => handleTab(1)} role="tab" className={tab === 1 ? 'tab tab-active' : 'tab'}><Link to='/listed-book/read-book'>Read Book</Link></a>

                    <a onClick={() => handleTab(2)} role="tab" className={tab === 2 ? 'tab tab-active' : 'tab'}><Link to='/listed-book/wish-book'>Wishlist</Link></a>
                </div>

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {

    const [tab, setTab] = useState(1);

    const handleTab = (idx) => {
        setTab(idx);
    }

    return (
        <div>
            <h1 className="text-center text-4xl font-bold mb-12">Books</h1>

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>

            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <a onClick={() => handleTab(1)} role="tab" className= {tab === 1 ? 'tab tab-active' : 'tab'}><Link to='/listed-book/read-book'>Read Book</Link></a>

                    <a onClick={() => handleTab(2)} role="tab" className= {tab === 2 ? 'tab tab-active' : 'tab'}><Link to='/listed-book/wish-book'>Wishlist</Link></a>
                </div>

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;
const ListedBooks = () => {
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
        </div>
    );
};

export default ListedBooks;
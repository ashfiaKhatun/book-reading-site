const WishBookList = ({wishBookList}) => {

    const {bookName} = wishBookList;
    console.log(wishBookList);

    return (
        <div>
            <p>{bookName}</p>
        </div>
    );
};

export default WishBookList;
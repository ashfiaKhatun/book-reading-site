const ReadBookList = ({readBookList}) => {

    const {bookName} = readBookList;

    return (
        <div>
            <p>{bookName}</p>
        </div>
    );
};

export default ReadBookList;
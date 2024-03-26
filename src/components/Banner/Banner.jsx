import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="mt-8">
            <div className="hero bg-base-200 rounded-3xl">
                <div className="hero-content flex-col lg:flex-row justify-between py-16 px-36">

                    <div className="w-1/2">
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        
                        <Link to='/listed-book'><button className="btn btn-primary mt-12">View The List</button></Link>
                    </div>
                    <img className="w-1/3" src="images/1.png" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
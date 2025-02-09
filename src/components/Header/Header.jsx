import { NavLink } from "react-router-dom";

const Header = () => {

    const list = <>
        <li className="mr-4"><NavLink to='/'>Home</NavLink></li>
        <li className="mr-4"><NavLink to='/listed-book'>Listed Books</NavLink></li>
        <li><NavLink to='/pages-to-read'>Pages To Read</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {list}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><span className="text-green-700 font-extrabold">Digital</span> Bookshelf</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {list}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn bg-[#23BE0A] px-2 lg:px-6 mr-1 lg:mr-4 font-bold text-white">Sign In</button>
                    <button className="btn bg-[#59C6D2] px-2 lg:px-6 font-bold text-white">Sign Up</button>

                </div>
            </div>
        </div>
    );
};

export default Header;
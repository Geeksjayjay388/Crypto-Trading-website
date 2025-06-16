

function Navbar(){

    return(
        <nav className="backdrop-blur flex p-7 px-10 justify-between text-white">
            <div><p className="text-3xl pt-2 font-bold font-sans">CryptoCap</p></div>
            <div>
                <ul className="flex pt-3 text-[18px] font-bold gap-15">
                    <li className="hover:text-green-300"><a href="">Home</a></li>
                    <li className="hover:text-green-300"><a href="">Businesses</a></li>
                    <li className="hover:text-green-300"><a href="">Trade</a></li>
                    <li className="hover:text-green-300"><a href="">Market</a></li>
                    <li className="hover:text-green-300"><a href="">Learn</a></li>
                </ul>
            </div>
           
            <div className="flex gap-4">
                <button className="bg-green-300 transition-transform transform hover:scale-110 active:scale-95 hover:shadow-lg rounded-xl font-bold text-black hover:text-white hover:bg-green-500 p-4"><a href="">Login</a></button>
                <button className="bg-green-300 rounded-xl font-bold transition-transform transform hover:scale-110 active:scale-95 hover:shadow-lg hover:text-white text-black hover:bg-green-500 p-4"><a href="">Sign in</a></button>
            </div>
        </nav>
    );

};
export default Navbar;
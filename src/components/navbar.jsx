import React from "react";

function Navbar(props){
    return (
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="#">
            <span className="title ml-3 text-3xl text-green-600">{props.title}</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 hover:scale-125" href="#">{props.a1}</a>
           {/* <a className="mr-5 hover:text-gray-900 hover:scale-125" to="/about">{props.a2}</a>*/}
          </nav>
        </div>
      </header>
    );
    
}

export default Navbar;
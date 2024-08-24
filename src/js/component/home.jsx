import React from "react";
import Card  from "./card.jsx";
import Jumbotrone from "./jumbotrone.jsx"
import Navbar from "./navbar.jsx"
import Footer from "./footer.jsx"

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div classname= "w-75 p-3">
				<div classname= "w-75 p-3">
			<Navbar/>
			</div>
			<Jumbotrone/>
			<Card/>
			
			
			
			
			<Footer/>

			</div>
			
		</div>
	);
};

export default Home;

import React from "react";
import Card from "./card.jsx";
import Jumbotrone from "./jumbotrone.jsx"
import Navbar from "./navbar.jsx"
import Footer from "./footer.jsx"

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>
			<div classname="w-75 p-3">
				<Navbar />
			</div>

			<div className="w-80 p-3">
				<Jumbotrone />
			</div>

			<div className="container text-center">
				<div className="row">
					<div className="col col-3">
						<Card/>
					</div>
					<div className="col col-3">
					<Card/>					</div>
					<div className="col col-3">
					<Card/> 
			
					</div>
					<div className="col col-3  mb-3">
					<Card/>




					</div>
				</div>
			</div>


			<div className="">

			<Footer />

			</div>



		</>
	);
};

export default Home;

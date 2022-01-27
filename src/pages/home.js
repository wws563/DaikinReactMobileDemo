import React from "react";
import {Link} from "react-router-dom"

function Home() {
  return (
	<div className="view">
		<h1>Home Page</h1>
		<Link to="/about">123</Link>
	</div>
  );
}

export default Home;

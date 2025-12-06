import React from "react";

import Titulo from "./Titulo";
import Input from "./Input";
import Button from "./Button";

//create your first component
const Home = () => {
	return (
		<div className="text-center">

            <Titulo/>
			<Input/>
		

		</div>
	);
};

export default Home;
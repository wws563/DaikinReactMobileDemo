import React from "react";
import Loading from '../components/Loading';
// import Fetch from "../scripts/api/main"
// 直接使用fetch，未封装，使用了useCallback

function TestFetch (props){

	const [response, setResponse] = React.useState(null);
	const fetchData = React.useCallback(async () => {
		const url = 'http://localhost:9000/testApi/findStudents';
		const options = {
			method: "post",
			//credentials: 'include',
			headers: {
				"Content-Type": "application/json;charset=UTF-8",
			},
			body: JSON.stringify({ name: "ye" }
			)
		}
		try {
			const res = await fetch(url, options);
			const json = await res.json();
			setResponse(json);
		} catch (err) {
			console.log(err)
		}
	},[]); 

	React.useEffect(() => {
		console.log('start post');
		fetchData();
	},[fetchData]);
	
	console.log('before check responce');
	if (!response) {
	  	return <Loading/>;
	}else{
		return (
			<div>
				{response.map(item=>item.name)}
			</div>
		);
	}	
  };


export default TestFetch;

import React from "react";
import api from "../scripts/api/main"
import Loading from '../components/Loading';
// 使用了封装好的api

function TestFetch (props){
	const [response, setResponse] = React.useState(null);	
	React.useEffect(() => {
		api.findStudent()
		.then(res=> res.json())
		.then(data=>{
			return setResponse(data)
		})
		.catch()
	},[]);
	
	if (!response) {
		return <Loading />;
	}
	return (
	  <div className="" style = {{width:'200px',height:'200px',backgroundColor:'#eeee3e'}}>
			{response.map(item=>item.name)}
	  </div>
	);
  };


export default TestFetch;

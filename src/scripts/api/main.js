/*
 * 封装接口
 */
//import React from "react";


//const url = ;
const CONST_OPTIONS = {
	method: "post",
	//credentials: 'include',
	headers: {
		"Content-Type": "application/json;charset=UTF-8",
	},
	body: JSON.stringify({ name: "ye" }
	)
}
function post(url, data) {
    return new Promise((resolve, reject) => {
        fetch(url,CONST_OPTIONS,data)
		.then(res=>{
			resolve(res)
		})
		.catch(err=>{
			reject(err)
		});
    })
}
const api = {
	findStudent:(data = null)=>{
		return post('http://localhost:9000/testApi/findStudents')
	}
}

export default api;
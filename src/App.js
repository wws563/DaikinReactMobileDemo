// import React, {useState} from "react";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  callAPI() {
    fetch("http://localhost:9000/testApi/findStudents", {
      method: "post",
      //credentials: 'include',
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({ name: "ye" }),
    })
      //.then(res => res.text()) // fetch的方法，text转换为字符串
      
      .then((res) => res.json()) // 常用应该为json，用于获取接口返回的对象
      .then((res) => {
        console.log(res);
        //this.setState({ apiResponse: res });
      });
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

// function App() {
//   // 声明一个新的叫做 “count” 的 state 变量
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         点击+1
//       </button>
//     </div>
//   );
// }

export default App;

// import logo from './auxiliary/logo.svg';
// import './auxiliary/App.css';
// 1:识别常规变量
const name = "ZZ";
// 2:原生js方法调用
const age = () => {
  return 18;
};
// 3:三元运算符

let flag = true;
function App() {
  return (
    <div className="App">
      <h1>你好，我叫{name}</h1>
      {age()}
      {flag ? "真" : "假"}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

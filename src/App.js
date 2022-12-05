import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/main";
import "./App.css";
import ClassCounter from "./components/ClassCounter/ClassCounter";
import UseStateDemo from "./components/ClassCounter/functionCounter/FunctionCounter";
function App() {
  return (
    <div className="App">
      <Header title="Online shopping portal"></Header>
      <div className="main-content">
        {/* <Main
          name="apple"
          description="It is a very healthy red colour fruit"
        ></Main>
        <Main
          name="mango"
          description="It is a very healthy yellow seasonal fruit"
        ></Main>
        <Main
          name="strawberry"
          description="It is a very healthy red colour tasty fruit"
        ></Main> */}
        {/* <ClassCounter></ClassCounter> */}
        <UseStateDemo></UseStateDemo>
      </div>
      <Footer title="this is a footer"></Footer>
    </div>
  );
}

export default App;

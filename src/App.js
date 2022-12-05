import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/main";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header title="Online shopping portal"></Header>
      <div className="main-content">
        <Main
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
        ></Main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

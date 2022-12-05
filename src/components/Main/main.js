import "./main.css";
function Main(props) {
  return (
    <div>
      <div className="dictionary">
        <b>
          <p>{props.name} </p>
        </b>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Main;

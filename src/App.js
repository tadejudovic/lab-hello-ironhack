import logo from './logo.svg';
import './App.css';

function Navbar() {
  return (
    <div className="navbar" >
      <img src="/images/ironhack-logo.svg"></img>
      <img src="/images/menu-top.svg"></img>
    </div>
  )
}


function TopHeader() {
  return (
    <div className="topheader" background="/images/react-logo.svg">
      <h1>Say Hello to React JS</h1>
      <p>You will learn how to use the most popular frontend library, and become super ninja developr. </p>
      <button>Awesome!</button>

    </div>

  )
}

function BottomPart() {
  return (
    <div class="fouroptions">
      <div className="box">
        <img src="images/icon1.png" width="100" height="100"></img>
        <h4>Declarative</h4>
        <p>React makes it painless to create interactive UIs</p>
      </div>
      <div className="box">

        <img src="images/icon2.png" width="100" height="100"></img>
        <h4>Components</h4>
        <p>Build encapsulated components that manager their state</p>
      </div>
      <div className="box">
        <img src="images/icon3.png" width="100" height="100" ></img>
        <h4>Single-Way</h4>
        <p>A set of immutable values are passed to the component's</p>
      </div>
      <div className="box">
        <img src="images/icon4.png" width="100" height="100"></img>
        <h4>JSX</h4>
        <p>Statistically-type designed to run on modern browsers</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>

        <TopHeader className="topheader"></TopHeader>

        <BottomPart></BottomPart>


      </header>

    </div>


  );
}

export default App;

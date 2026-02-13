import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Stationary Shop</h2>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="content">
        <h1>Milo Stationaries</h1>
        <p>Quality stationery products for all your needs.</p>
      </div>
    </>
  );
}

export default App;

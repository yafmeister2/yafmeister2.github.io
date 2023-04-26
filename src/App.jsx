import './App.css'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React Portfolio</h1>
      </header>
      <section className="App-section">
        <h2>About Me</h2>
        <p>
          I'm a React developer with a passion for creating modern and interactive web applications.
        </p>
      </section>
      <section className="App-section">
        <h2>Projects</h2>
        <div className="App-project">
          <h3>Project 1</h3>
          <p>A brief description of Project 1.</p>
        </div>
        <div className="App-project">
          <h3>Project 2</h3>
          <p>A brief description of Project 2.</p>
        </div>
      </section>
      <section className="App-section">
        <h2>Contact</h2>
        <p>Feel free to reach out to me at:</p>
        <p>Email: my.email@example.com</p>
      </section>
      <footer className="App-footer">
        <p>Thank you for visiting my portfolio!</p>
      </footer>
    </div>
  );
};

export default App;
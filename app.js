import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Welcome to My React Application</h1>
        <p>
          Build modern, responsive, and scalable web applications with React.js.
        </p>

        <button>Get Started</button>
      </header>

      <main>
        <section className="features">
          <h2>Our Features</h2>

          <div className="card-container">
            <div className="card">
              <h3>⚡ Fast Performance</h3>
              <p>
                Optimized React components provide a smooth user experience.
              </p>
            </div>

            <div className="card">
              <h3>📱 Responsive Design</h3>
              <p>
                Works seamlessly across desktop, tablet, and mobile devices.
              </p>
            </div>

            <div className="card">
              <h3>🔒 Secure</h3>
              <p>
                Built with modern security practices and scalable architecture.
              </p>
            </div>
          </div>
        </section>

        <section className="about">
          <h2>About Us</h2>
          <p>
            This is a sample React homepage demonstrating reusable components,
            clean layout, and responsive design.
          </p>
        </section>
      </main>

      <footer>
        <p>© 2026 My React App. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

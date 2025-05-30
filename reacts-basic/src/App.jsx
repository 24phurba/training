import "./App.css";
const Card = () => {
  return (
    <div class="shadow-3 p-2 rounded-sm">
      <p>
        <span class="star">★★★★★</span>
      </p>
      <p>
        With Nepalabs' Jira Automation, our team now focuses on what truly
        matters while repetitive tasks are handled seamlessly.
      </p>
      <p class="bold">Madhavi Solanki</p>
      <p>CEO - Founder, Cyphertree Technologies</p>
    </div>
  );
};

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}
export default App;

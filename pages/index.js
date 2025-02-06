import Navbar from './/api/NavBar.js';
import Counter from './/api/Counter.js';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Welcome to My React App!</h1>
      <Counter />
    </div>
  );
};
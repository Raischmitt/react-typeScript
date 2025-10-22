import Todos from './components/Todos';

import './App.css';

function App() {
  return (
    <div>
      <Todos items={['Learn React', 'Learn typescript']} />
    </div>
  );
}

export default App;

import React from 'react';
import { Modal } from './components/Modal';

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <h1>Welcome to the Interactive UI Toolkit</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal title="Hello World" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>This is an interactive modal!</p>
      </Modal>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import Form from './Components/Form';
import Card from './Components/Card';

function App() {
  const [formData, setFormData] = useState({ title: '', author: '' });
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (data) => {
    const { title, author } = data;

    // Validaciones
    if (title.length < 3 || title.startsWith(' ') || author.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setShowCard(false);
    } else {
      setError('');
      setShowCard(true);
      setFormData(data);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {showCard && <Card title={formData.title} author={formData.author} />}
    </div>
  );
}

export default App;
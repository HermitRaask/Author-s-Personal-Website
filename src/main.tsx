import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const TestPage = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <p>Если ты видишь это — всё заебись</p>
  </div>
);

createRoot(rootElement).render(
  <StrictMode>
    <TestPage />
  </StrictMode>
);

import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// No StrictMode: its dev-only mount/unmount/remount cycle tears down the
// FaultyTerminal's WebGL context on the same canvas, and the remount reuses
// that dead context, so the background layer silently renders nothing in dev.
// See src/components/effects/FaultyBackground.jsx.
createRoot(document.getElementById('root')).render(<App />)

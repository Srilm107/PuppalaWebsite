import { spawn } from 'child_process';

// Start backend
const backend = spawn('npx', ['tsx', 'server/index.ts'], {
  stdio: 'inherit',
  env: { ...process.env, NODE_ENV: 'development' }
});

// Start frontend
const frontend = spawn('npx', ['vite', '--port', '3000'], {
  stdio: 'inherit'
});

// Handle process cleanup
process.on('SIGINT', () => {
  backend.kill();
  frontend.kill();
  process.exit();
});
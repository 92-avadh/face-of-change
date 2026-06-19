const { execSync } = require('child_process');

if (process.env.OPEN_NEXT) {
  console.log('Inside OpenNext: Running standard next build...');
  execSync('next build', { stdio: 'inherit' });
} else {
  console.log('Running opennextjs-cloudflare build...');
  execSync('npx opennextjs-cloudflare build', { 
    stdio: 'inherit', 
    env: { ...process.env, OPEN_NEXT: 'true' } 
  });
}

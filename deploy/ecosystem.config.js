module.exports = {
  apps: [
    {
      name: 'evya-api',
      cwd: '/var/www/evya/apps/api',
      script: 'dist/main.js',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        PORT: 3100,
      },
    },
    {
      name: 'evya-web',
      cwd: '/var/www/evya/apps/web',
      script: 'node_modules/.bin/next',
      args: 'start -p 3101',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        PORT: 3101,
      },
    },
  ],
};

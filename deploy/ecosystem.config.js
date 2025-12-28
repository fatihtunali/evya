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
        DATABASE_URL: 'mysql://evya:Dlr235672.-Yt@localhost:3306/evya',
        JWT_SECRET: 'evya-super-secret-jwt-key-2024-production-secure',
        JWT_REFRESH_SECRET: 'evya-refresh-secret-key-2024-production-secure',
      },
    },
    {
      name: 'evya-web',
      cwd: '/var/www/evya/apps/web',
      script: 'node_modules/next/dist/bin/next',
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

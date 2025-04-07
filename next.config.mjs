/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/:path*', // ou '/api/:path*' si tu,k,;,; veux limiter aux API routes
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: 'https://www.appliq.fr' 
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET, POST, PUT, DELETE, OPTIONS'
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'Content-Type, Authorization, rsc'
            },
          ]
        }
      ];
    },
  };
  
  export default nextConfig;
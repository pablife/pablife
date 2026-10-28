/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // ISSO CORRIGE O ERRO DO CREATEROOT E DUPLA RENDERIZAÇÃO
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],

  // Cache para os arquivos pesados de /public (modelos 3D, áudio, imagens).
  // Antes era max-age=0: o navegador revalidava tudo a cada visita.
  // 1 dia de cache + 7 dias servindo do cache enquanto atualiza em segundo plano.
  // A antiga página de Mentorias virou Planos
  async redirects() {
    return [{ source: '/mentorias', destination: '/planos', permanent: true }]
  },

  async headers() {
    return [
      {
        source: '/:file*.(glb|mp3|png|jpg|jpeg|webp|svg)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
    ]
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Excluir el módulo ssh2 del empaquetado en el lado del servidor
      config.externals.push('ssh2')
    }

    return config
  },
  reactStrictMode: false,
}

export default nextConfig

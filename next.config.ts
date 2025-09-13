/** @type {import('next').NextConfig} */

const repositoryName = 'portfolio'; 

const nextConfig = {
  // 静的サイトとして出力するための設定
  output: 'export',

  // GitHub Pagesで正しく表示するための設定
  basePath: `/${repositoryName}`,
  assetPrefix: `/${repositoryName}/`,
  
  // 静的エクスポート時に画像最適化を無効にする設定
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
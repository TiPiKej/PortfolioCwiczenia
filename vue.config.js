module.exports = {
  pwa: {
    msTileColor: '#4DBA87',
    appleMobileWebAppStatusBarStyle: '#4DBA87'
  },
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/PortfolioCwiczenia/'
    : '/'
}
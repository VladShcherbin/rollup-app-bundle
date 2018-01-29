module.exports = {
  extends: 'airbnb',
  rules: {
    'comma-dangle': ['error', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    semi: ['error', 'never']
  },
  env: {
    browser: true
  }
}

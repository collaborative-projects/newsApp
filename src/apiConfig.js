let apiUrl
const apiUrls = {
  production: 'https://newsapi.org/v2/',
  development: 'https://newsapi.org/v2/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl

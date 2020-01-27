let apiUrl
const apiUrls = {
  production: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=268cf2921ac845a5980d0af7d8637770',
  development: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=268cf2921ac845a5980d0af7d8637770'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl

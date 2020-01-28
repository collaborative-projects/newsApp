import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
// import Button from 'react-bootstrap/Button'

const Articles = props => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios({
      url: apiUrl,
      method: 'GET'
    })
      .then(res =>
        setArticles(res.data.articles)
      )
      .then(() =>
        props.alert({ heading: 'Success', message: 'You got articles!', variant: 'success' })
      )
      .catch(() => props.alert({ heading: 'Unable to retrieve articles.', message: 'Sorry this isn\'t working', variant: 'success' }))
  }, [])

  const articlesJsx = articles.map(article => (
    <li key={article.title} className="list-group-item text-center">
      <h3>
        <img src={article.urlToImage} width="500rem" />
      </h3>
      {article.title}
    </li>
  ))

  return (
    <div>
      {console.log(articles)}
      {articlesJsx}
    </div>
  )
}

export default Articles

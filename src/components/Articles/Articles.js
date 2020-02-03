import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import apiKey from '../../apiKey'
// import { Row, Col, Container } from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom'

const Articles = props => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios({
      url: apiUrl + props.articleType + 'country=' + props.country + '&category=' + props.category + apiKey,
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

  const articleBox = {
    border: '1px solid black',
    textAlign: 'center'
  }

  const articlesJsx = articles.map(article => (
    <div style={articleBox} key={article.title}>
      <a target="blank" href={article.url}>
        <div className="text-center" style={{ fontSize: '24px', color: 'neon pink' }}>
          {article.title}
        </div>
        <img src={article.urlToImage} width="500rem"/>
      </a>
      <p style={{ textAlign: 'center' }}>
        {article.description}
      </p>
    </div>
  ))

  return (
    <div>
      {console.log(articles)}
      {articlesJsx}
    </div>
  )
}

export default Articles

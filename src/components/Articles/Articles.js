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
    padding: '3rem',
    textAlign: 'center'
  }

  const articlesJsx = articles.map(article => (
    <div style={articleBox} key={article.title}>
      <a target="blank" href={article.url}>
        <div className="text-center" style={{ fontSize: '24px', color: 'neon pink', marginBottom: '1rem' }}>
          {article.title}
          <img src={article.urlToImage} style={{ display: 'block', width: '100%', maxWidth: '100%' }}/>
        </div>
      </a>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        {article.description}
      </p>
    </div>
  ))

  return (
    <div style={{ width: '75%', margin: 'auto' }}>
      {articlesJsx[0]}
    </div>
  )
}

export default Articles

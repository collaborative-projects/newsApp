import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import apiKey from '../../apiKey'
// import Button from 'react-bootstrap/Button'
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

  const articlesJsx = articles.map(article => (
    <Fragment key={article.title}>
      <a target="blank" href={article.url}>
        <li className="list-group-item text-center">
          <h3>
            <img src={article.urlToImage} width="500rem" />
          </h3>
          {article.title}
        </li>
      </a>
      <p>
        {article.description}
      </p>
    </Fragment>
  ))

  return (
    <div>
      {console.log(articles)}
      {articlesJsx}
    </div>
  )
}

export default Articles

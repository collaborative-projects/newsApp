import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
// import Button from 'react-bootstrap/Button'

const Articles = props => {
  const [articles, seArticles] = useState([])

  useEffect(() => {
    axios({
      url: apiUrl,
      method: 'GET'
    })
      .then(res => seArticles(res.data.articles))
      .then(() => props.alert({ heading: 'Success', message: 'You got articles!', variant: 'success' }))
      .catch(() => props.alert({ heading: 'Unable to retrieve articles.', message: 'Sorry this isn\'t working', variant: 'success' }))
  }, [])

  const articlesJsx = articles.map(article => (
    <li key={article._id} className="list-group-item">
      {article.title}
    </li>
  ))

  return (
    <div>
      {articlesJsx}
    </div>
  )
}

export default Articles

import React, { useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Articles = props => {
  useEffect(() => {
    axios({
      url: apiUrl + '/',
      method: 'GET'
    })
      .then(response => {
        console.log('response', response)
      })
      .then(() => props.alert({ heading: 'Success', message: 'You got journal entries!', variant: 'success' }))
      .catch(() => props.alert({ heading: 'Not able to retrieve journal entries', message: 'Sorry this isn\'t working', variant: 'success' }))
  }, [])

  return (
    <button>Get Articles</button>
  )
}

export default Articles

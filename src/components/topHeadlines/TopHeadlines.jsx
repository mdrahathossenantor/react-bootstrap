import React, { useEffect, useState } from 'react'
import Header from '../header/Header'

const TopHeadlines = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-05-22&sortBy=publishedAt&apiKey=aa7f9de3cd6b4d258cf0014235a00ea1')
          .then(res => res.json())
          .then(data => {
            data = data.articles.slice(0, 20)
            setArticles(data)
          })
    }, [])

    return (
        <div>
            <h2>Total arcticles: {articles.length}</h2>
            {
                articles.map(article => <Header key={article.url} content={article}></Header>)
            }
        </div>
    )
}

export default TopHeadlines
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './header.css'

const Header = (props) => {
    const {title, author, description, publishedAt,} = props.content
    return (
        <Card className='news-container'>
            <Card.Header>News Details</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <p><small>{author}</small></p>
                <p><small>{publishedAt}</small></p>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Header
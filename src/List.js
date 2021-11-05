import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './App.css';
import goals from './goals';

const List = ({goals}) => {
    return (
        <>
        {goals.map((goal)=>{
            const { id, accomplish, description, deadline} = goal
            return(
<Card 
    key={id}
    bg="light"
    className='center-card' 
    style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{accomplish}</Card.Title>
    <Card.Text>
      {description}
      {deadline}
    </Card.Text>
    <Button variant="primary">Goal Completed</Button>
  </Card.Body>
</Card>
            )
        })}

        </>
    )
}

export default List;
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DetailsCard = ({ CardTitle, cardDescription }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuv1SkgaWFaCqUCzrpVmKjjlS44ib0xS-ETuDo4ydttITNS6snfyNTVuU&s" />
                <Card.Body>
                    <Card.Title>  {CardTitle}  </Card.Title>
                    <Card.Text>
                        {cardDescription}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}


export default DetailsCard

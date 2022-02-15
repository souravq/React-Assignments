import React,{useState} from 'react';
import {Navbar, Container, Card, Button, Row, Col} from 'react-bootstrap';
import './Postview.css';


const Postview=()=> {

  const [posts,setPost]=useState([]);
  React.useEffect(()=>{
    fetch('http://localhost:3004/user')
    .then(res=>res.json())
    .then(data=>setPost(data));


  },[]);

  return (
    <div className="site-container">
      <div className="page-header">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#" >Insta</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>Camera</Navbar.Text>
            </Navbar.Collapse>
          </Container>

        </Navbar>

      </div>
      <div className="post-container">
        {posts.map((post,idx)=>{
          return (
          
        <Container key={idx} style={{margin:"10px"}}>
        
          <Row>
            <Col md={{span:6,offset:3}}>
              <Card.Header style={{textAlign:"left"}}>
                <label className="text-left">
                  <strong>{post.name}</strong>
                <br></br>
                {post.location}

                </label>
              </Card.Header>
              <Card.Body className="text-center">
                <Card.Title>
                <img src={post.PostImage} className="img" />
                </Card.Title>
                <Card.Text>{post.description}</Card.Text>
                 <Button>{post.likes} Likes</Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                {new Date(post.date).toLocaleDateString()}
              </Card.Footer>
            </Col>
          </Row>
        </Container>
         )
        })}

      </div>
    </div>
  );
}

export default Postview;

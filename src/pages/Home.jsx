
import { Col, Container, Row ,ListGroup ,Button} from 'react-bootstrap'
import Ratio from 'react-bootstrap/Ratio';
import Header from '../components/Header'
import Meta from '../components/Meta'

const Home = () => {
  // page content
  const pageTitle = 'BillyBoard'
  const pageDescription = 'welcome to the Worlds first Web3 Billboard'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
      <div className='main-content'>
        <Container fluid>
          <Ratio aspectRatio="16x9">
          
            <iframe class="responsive-iframe" width="100%" height="auto" src="https://www.youtube.com/embed/BHACKCNDMW8?si=8gAshqAa78o4CFgq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Ratio>
        </Container>  
      </div>
      <Container className='my-3'fluid>
        <Row>
          <Col>
            <ListGroup as="ol">
              <div className='text-center my-1'> 
                Current Content
              </div>
              
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Content Bidder</div>
                  garr.eth
                </div>              
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Winning Bid Amount</div>
                  1256.1245 BBoB
                </div>              
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Displayed Since Block</div>
                  12354856
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          
          
          <Col>
            <ListGroup as="ol">
              <div className='text-center my-1'> 
                Active Auction
              </div>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Highest Bidder</div>
                  garr.eth
                </div>              
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Current Bid Amount</div>
                  3256.1245 BBoB
                </div>              
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Auction Ending Block</div>
                  12355542
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
         
          <Col>
            <div className='text-center my-1'> 
                  Your Turn !
            </div>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                Place a Bid
              </Button>
              <Button variant="secondary" size="lg">
                Create Your Own Board
              </Button>
            </div>
          </Col>

        </Row>
      </Container>
      

    </div>
  )
}

export default Home
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { HiArrowsRightLeftIcon } from './components/Icons'

import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'

function App () {
  const { fromLanguage, toLanguage, interchangeLanguages } = useStore()

  return (
    <Container fluid>
      <h1>Google translate</h1>

      <Row>
        <Col>
          <h2>From</h2>
          {fromLanguage}
        </Col>

        <Col>
          <Button
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <HiArrowsRightLeftIcon />
          </Button>
        </Col>

        <Col>
          <h2>To</h2>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App

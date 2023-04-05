import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { HiArrowsRightLeftIcon } from './components/Icons'

import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types'

function App () {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage } = useStore()

  return (
    <Container fluid>
      <h1>Google translate</h1>

      <Row>
        <Col>
          <LanguageSelector
            type={SectionType.from}
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          {fromLanguage}
        </Col>

        <Col>
          <Button
            variant='link'
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <HiArrowsRightLeftIcon />
          </Button>
        </Col>

        <Col>
          <LanguageSelector
            type={SectionType.to}
            value={toLanguage}
            onChange={setToLanguage}
          />
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App

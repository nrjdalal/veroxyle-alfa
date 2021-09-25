import Clients from 'components/index/Clients'
import DDM from 'components/index/DDM'
import Hero from 'components/index/Hero'
import { Container } from 'components/veroui/react'

const index = () => {
  return (
    <>
      <Hero />
      <Clients />
      <DDM />
      <Container>Hello</Container>
    </>
  )
}

export default index

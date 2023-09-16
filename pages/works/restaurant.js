import {
  Container,
  Badge,

  List,
  ListItem,

  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'

import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title=" Restaurant landing Page">
    <Container>
      <Title>
        Restaurant landing Page<Badge>2021</Badge>
      </Title>
      <P>Restaurant landing Page With Modern UI/UX Desgin</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html, Css</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/works/omni01.png" alt="Restaurant landing Page" />
      <WorkImage src="/images/works/omni02.png" alt="Restaurant landing Page" />
      <WorkImage src="/images/works/omni03.png" alt="Restaurant landing Page" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

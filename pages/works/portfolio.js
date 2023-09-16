import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Modern Portfolio">
    <Container>
      <Title>
        Modern Portfolio <Badge>2022</Badge>
      </Title>

      <P>Fullstack Responsive Portfolio Website to showcase my work.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.JS, BootStrap, Sanity</span>
        </ListItem>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://abdullah-portfolio0.netlify.app/">
            Modern Portfolio
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/works/port01.png" alt="Modern Portfolio" />
      <WorkImage src="/images/works/port02.png" alt="Modern Portfolio" />
      <WorkImage src="/images/works/port03.png" alt="Modern Portfolio" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

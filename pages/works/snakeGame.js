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
  <Layout title="Snake Game">
    <Container>
      <Title>
        Snake Game <Badge>2021</Badge>
      </Title>
      <P>Snake Game with html Canvas</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, Html Canvas</span>
        </ListItem>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://snake-game0.netlify.app/" target="_blank">
            Snake Game
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/works/snake01.png" alt="Snake Game" />
      <WorkImage src="/images/works/snake02.png" alt="Snake Game" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

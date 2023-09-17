import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Roling-Dice Game">
    <Container>
      <Title>
        Roling-Dice Game <Badge>2021</Badge>
      </Title>
      <P>A Simple fun Game with JavaScript you can play it with your friend.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>URL</Meta>
          <Link target="_blank" href="https://roling-dice.netlify.app/">
            Roling-Dice Game <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/dic0.png" alt="Roling-Dice" />
      <WorkImage src="/images/works/dice01.png" alt="Roling-Dice" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

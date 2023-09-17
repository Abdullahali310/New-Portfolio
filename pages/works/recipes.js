import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Recipes">
    <Container>
      <Title>
        Recipes <Badge>2021</Badge>
      </Title>
      <P>
        An application for the most famous food recipes around the world, with
        the ability to search for any food and display the preparation method.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows,iOS,Android, Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS</span>
        </ListItem>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://recipes-app0.netlify.app/" target="_blank">
            Recipes <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Recipe0.png" alt="Recipes " />
      <WorkImage src="/images/works/Recipe01.png" alt="Recipes " />
      <WorkImage src="/images/works/Recipe02.png" alt="Recipes " />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

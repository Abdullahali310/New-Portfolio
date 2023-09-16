import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Film Poster">
    <Container>
      <Title>
        Film Poster <Badge>2022</Badge>
      </Title>
      <P>Done with photoshop i create a file poster for practical purposes</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Behance</Meta>
          <span>
            <Link
              href="https://www.behance.net/abdullahramadan10"
              target="_blank"
            >
              https://www.behance.net/abdullahramadan10{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PhotoShop</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/poster.jpg" alt="poster" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

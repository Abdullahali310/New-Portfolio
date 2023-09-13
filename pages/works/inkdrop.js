import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="AI Image Generator">
    <Container>
      <Title>
        AI Image Generator <Badge>2023-</Badge>
      </Title>
      <P>AI Image Generator by using OpenAi API</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://openai-image-generator-ry05.onrender.com/">
            https://openai-image-generator-ry05.onrender.com/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Native JS, OpenAi API</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ai-image01.png" alt="Ai-Image" />
      <WorkImage src="/images/works/ai-image02.png" alt="Ai-Image" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

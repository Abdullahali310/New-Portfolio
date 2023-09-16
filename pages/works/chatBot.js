import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="AI Chat Bot">
    <Container>
      <Title>
        AI Chat Bot <Badge>2023</Badge>
      </Title>
      <P>
        This CodeGPT is the best AI-based web application that you can currently
        find on the internet.
      </P>
      <P>Based on ChatGpt API .</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows,iOS,Android, Linux</span>
        </ListItem>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://ai-chat-open-e523qtuk2-abdullahali310.vercel.app/">
            https://ai-chat-open-e523qtuk2-abdullahali310.vercel.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, OpenAI</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/works/chat0.png" alt="AI Chat Bot" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Image Editor">
    <Container>
      <Title>
        Image Editor<Badge>2023</Badge>
      </Title>
      <P>Simple Image editor using JavaScript</P>
      <UnorderedList my={4}>
        <ListItem>User can upload photos and edit it</ListItem>
        <ListItem>
          After finishing the edit user can save the edited pictuer
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows,iOS,Android,Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://image-editor-ar.netlify.app/">
            Image Editor <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Abdullahali310/Image-Editor">
            https://github.com/Abdullahali310/Image-Editor{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/edit01.png" alt="menkiki" />
      <WorkImage src="/images/works/edit02.png" alt="menkiki" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

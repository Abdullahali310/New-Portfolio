import {
  Container,
  Badge,
  Link,
  List,
  ListItem,

  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        Full Stack Mern Dashboard <Badge>2023</Badge>
      </Title>
      <P>
        fully functional full-stack MERN dashboard application with complete
        CRUD functionalities, authentication, pagination, sorting, filtering
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, NodeJS, MatrialUI, TypeScript,Google authentication
          </span>
        </ListItem>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="hhttps://mern-dashboard.netlify.app/">
            Full Stack Mern Dashboard <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/works/dash0.png" alt="dashbord" />
      <WorkImage src="/images/works/dash01.png" alt="dashbord" />
      <WorkImage src="/images/works/dash03.png" alt="dashbord" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

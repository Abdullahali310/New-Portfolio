import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/Work/ai-gen.png'
import thumbWalknote from '../public/images/works/Work/AiBot.png'
import thumbFourPainters from '../public/images/works/Work/dashbord.png'
import thumbMenkiki from '../public/images/works/Work/image-editor.png'
import thumbMargelo from '../public/images/works/Work/scary-move-poster.jpg'
import thumbModeTokyo from '../public/images/works/Work/de.png'
import thumbStyly from '../public/images/works/Work/dice.png'
import thumbPichu2 from '../public/images/works/Work/res.png'
import thumbFreeDBTagger from '../public/images/works/Work/snak.png'
import thumbAmembo from '../public/images/works/Work/portfolioN.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="inkdrop"
            title="AI Image Generator"
            thumbnail={thumbInkdrop}
          >
            AI Image Generator by using OpenAi API
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="AI Chat Bot"
            thumbnail={thumbWalknote}
          >
            This CodeGPT is the best AI-based web application that you can
            currently find on the internet.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="Full Stack Mern Dashboard"
            thumbnail={thumbFourPainters}
          >
            fully functional full-stack MERN dashboard application with complete
            CRUD functionalities, authentication, pagination, sorting, filtering
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="menkiki"
            thumbnail={thumbMenkiki}
            title="Image Editor"
          >
            Simple Image editor using JavaScript
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Simple Work
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="margelo"
            thumbnail={thumbMargelo}
            title="Film Poster"
          >
            film poster with photoshop
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="Recipes "
          >
            Delicious Meals Recipes App using ReactJS .
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="styly"
            thumbnail={thumbStyly}
            title="Roiling Dice Game"
          >
            Roiling Dice Game with JavaScript
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}></Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id="pichu2"
            thumbnail={thumbPichu2}
            title="Restaurant Project"
          >
            Modern UI/UX Project (HTML,CSS) only .
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="Snake Game"
          >
            Snak game using JavaScript , html .
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Portfolio">
            Modern Portfolio using ReactJS
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

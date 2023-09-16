import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/ai-gen.png'
import thumbWalknote from '../public/images/works/aibot.png'
import thumbFourPainters from '../public/images/works/dashbord.png'
import thumbMenkiki from '../public/images/works/image-editor.png'
import thumbMargelo from '../public/images/works/scary-move-poster.jpg'
import thumbModeTokyo from '../public/images/works/de.png'
import thumbStyly from '../public/images/works/dice.png'
import thumbPichu2 from '../public/images/works/res.png'
import thumbFreeDBTagger from '../public/images/works/snak.png'
import thumbAmembo from '../public/images/works/portfolioN.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="imageGenerator"
            title="AI Image Generator"
            thumbnail={thumbInkdrop}
          >
            AI Image Generator by using OpenAi API
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="chatBot"
            title="AI Chat Bot"
            thumbnail={thumbWalknote}
          >
            This CodeGPT is the best AI-based web application that you can
            currently find on the internet.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="mernDashboard"
            title="Full Stack Mern Dashboard"
            thumbnail={thumbFourPainters}
          >
            fully functional full-stack MERN dashboard application with complete
            CRUD functionalities, authentication, pagination, sorting, filtering
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="imageEditor"
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
            id="filmPoster"
            thumbnail={thumbMargelo}
            title="Film Poster"
          >
            film poster with photoshop
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="recipes"
            thumbnail={thumbModeTokyo}
            title="Recipes "
          >
            Delicious Meals Recipes App using ReactJS .
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="diceGame"
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
            id="restaurant"
            thumbnail={thumbPichu2}
            title="Restaurant Project"
          >
            Modern UI/UX Project (HTML,CSS) only .
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="snakeGame"
            thumbnail={thumbFreeDBTagger}
            title="Snake Game"
          >
            Snak game using JavaScript , html .
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="portfolio"
            thumbnail={thumbAmembo}
            title="Portfolio"
          >
            Modern Portfolio using ReactJS
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

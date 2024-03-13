import { Footer } from "./componets/Footer"
import { Header } from "./componets/Header"
import { Section } from "./componets/Section"
import { Section2 } from "./componets/Section2"
import { Section3 } from "./componets/Section3"

import { SectionImg } from './componets/SectionImg';
import { SectionNav } from "./componets/SectionNav"
import "./styles.css"
function App() {
  

  return (
    <>
      <Header />
      <main>

        <SectionImg/>
        <Section2 />
        <Section />
        <Section3 />
        <SectionNav/>
      </main>
      <Footer />
    </>
  )
}

export default App

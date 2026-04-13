import HeroSection from './HeroSection'
import AnalysisSection from './AnalysisSection'
import FeatureSection, { CrmSection } from './FeatureSection'
import {
  AIInsightsSection,
  PromptsSection,
  CoachingSection,
  FAQSection,
  FooterSection,
} from './RemainingBlocks'

function App() {
  return (
    <>
      <HeroSection />       {/* 1 */}
      <AnalysisSection />   {/* 2 */}
      <FeatureSection />    {/* 3, 4 */}
      <CrmSection />        {/* 5 */}
      <AIInsightsSection /> {/* 6 */}
      <CoachingSection />
      <FAQSection />
      <FooterSection />
    </>
  )
}

export default App

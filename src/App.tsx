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
      <HeroSection />
      <AnalysisSection />
      <FeatureSection />
      <CrmSection />
      <AIInsightsSection />
      <div className="md:hidden">
        <PromptsSection />
      </div>
      <CoachingSection />
      <FAQSection />
      <FooterSection />
    </>
  )
}

export default App

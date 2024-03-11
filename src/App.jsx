import DifferencesSection from './components/DifferencesSection'
import FeedbackSection from './components/FeedbackSection'
import Header from './components/Header'
import IntroSection from './components/IntroSection'
import TabsSection from './components/TabsSection'
import TeachingSection from './components/TeachingSection'
import { useState } from 'react'

export default function App() {
  const [tab, setTab] = useState('feedback')

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === 'feedback' && <FeedbackSection />}
      </main>
    </>
  )
}

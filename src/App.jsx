import DifferencesSection from './components/DifferencesSection'
import Header from './components/Header'
import IntroSection from './components/IntroSection'
import TeachingSection from './components/TeachingSection'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TeachingSection />
        <DifferencesSection />
      </main>
    </>
  )
}

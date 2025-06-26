import { FiltersSection, FruitCards } from '../../components'
import { GeneralInformation } from '../../components/generalInformation/GeneralInformation'

export const FruitsPage = () => {
  return (
    <div className='fruits-app'>
      <header className='fruits-app__header'>
        <h1>Season fruits</h1>
        <p>the most wondeful fruits</p>
      </header>

      <main className='fruits-app__main'>
        <section className='fruits-app__main__filtersAndCards'>
          <FiltersSection />
          <FruitCards />
        </section>
        <section className='fruits-app__main__general-information'>
          <GeneralInformation />
        </section>
      </main>
    </div>
  )
}

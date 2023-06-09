import React from 'react'
import Gallery from './Gallery';

const sharedGoals = () => {
  return (
    <div id='sharedgoals'>
      <section>
        <h3 className='text-header text-[2.2rem] mt-10 mb-3 font-light uppercase'>Delmålene</h3>
        <article>
            <p className='text-[1.1rem]'>FN's 17 Verdensmål er opdelt i 169 delmål. Delmålene er mere konkrete mål for, hvordan Verdensmålene skal opfyldes. For at måle på hvert delmål har FN formuleret en række indikatorer for de enkelte delmål.</p>
            <br />
            <p className='text-[1.1rem]'>Se eksempler på enkelte delmål her:</p>
        </article>
        <Gallery />
      </section>
    </div>
  )
}

export default sharedGoals

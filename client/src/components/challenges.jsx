import React from 'react'
import Sustainability from '../images/Image-Sustainability.jpg'
import LeaveNoOne from '../images/Image-Leave-No-One.jpg'
import Hunger from '../images/Image-Hunger.jpg'

const challenges = () => {
  return (
    <div id='challenges'>
      <section>
        <h3 className='text-header text-[2.2rem] mt-10 mb-6 font-light uppercase'>Udfordringer</h3>
        <p className='text-[1.1rem]'>Der er en lang række faktorer der har indvirkning på opfyldelsen af de mål, man gennem aftaler har forpligtiget sig til.</p>
        <article>
          <h3 className='text-header text-[1.7rem] font-light'>Vækst vs. bæredygtighed.</h3>
          <figure className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <figcaption>
              <p className='text-[1.1rem] italic'>En overordnet udfordring er, at der mangler et mere nuanceret syn på sammenhængen mellem vækst og bæredygtighed. Vægtning mellem økonomisk vækst og påvirkninger af miljø og samfund.</p>
              <br />
              <p className='text-[1.1rem] italic'>Opretholdes den nuværende globale, materielle vækst, øges presset på jordens ressourcer.</p>
              <br />
              <p className='text-[1.1rem] italic'>De livsunderstøttende økosystemer bliver i stigende grad overbelastet, og uligheden i verden vil blive større.</p>
            </figcaption>
              <img className='w-[100%]' src={Sustainability} alt="Sustainability" />
          </figure>
        </article>
        <article>
          <h3 className='text-header text-[1.7rem] font-light'>Leave no-one behind.</h3>
          <figure className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <figcaption>
              <p className='text-[1.1rem] italic'>I 2030-dagsordenen er inkluderet princippet om ”leave no one behind”. Princippet tilsiger, at alle lande skal opnå alle verdensmål, uden at nogen lades i stikken.</p>
              <br />
              <p className='text-[1.1rem] italic'>Arbejdet med verdensmålene skal begynde med, at de fattigste og mest marginaliserede adresseres først.</p>
              <br />
              <p className='text-[1.1rem] italic'>Dette er et vigtigt princip, hvortil også efterlevelsen af og respekten for menneskerettigheder er altafgørende.</p>
              <br />
              <p className='text-[1.1rem] italic'>Med andre ord: “Leave No-One behind”.</p>
            </figcaption>
              <img className='w-[100%]' src={LeaveNoOne} alt="Leave No One" />
          </figure>
        </article>
        <article>
          <h3 className='text-header text-[1.7rem] font-light'>Fattigdom og sult.</h3>
          <figure className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <figcaption>
              <p className='text-[1.1rem] italic'>Afskaffelsen af alle former for fattigdom er fortsat en af de største udfordringer for menneskeheden.</p>
              <br />
              <p className='text-[1.1rem] italic'>Mens antallet af mennesker, der lever i ekstrem fattigdom, er halveret - fra 1,9 milliarder i 1990 til 736 millioner i 2015 - kæmper alt for mange stadig med at få opfyldt deres mest basale menneskelige behov.</p>
              <br />
              <p className='text-[1.1rem] italic'>Verdensbanken definerer ”ekstrem fattigdom” som en personlig indkomst på under 1,9 dollars om dagen – dvs. cirka 13 kroner.</p>
            </figcaption>
              <img className='w-[100%]' src={Hunger} alt="Hunger" />
          </figure>
        </article>
      </section>
    </div>
  )
}

export default challenges

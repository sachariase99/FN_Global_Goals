import React from 'react'

const worldGoals = () => {
    return (
        <div>
            <section id='worldgoals'>
                <h3 className='text-header text-[2.2rem] mt-10 mb-3 font-light uppercase'>De 17 Verdensmål</h3>
                <article>
                    <p className='text-[1.1rem]'>På FN topmødet i New York i 2015 vedtog verdens stats- og regeringsledere en hidtil uset ambitiøs og samfundsforandrende udviklingsdagsorden, også kaldt 2030 dagsordenen.</p>
                    <br />
                    <p className='text-[1.1rem]'>Frem til 2030 skal denne dagsorden sætte kurs mod en mere bæredygtig udvikling for både mennesker og planeten, vi bor på.</p>
                </article>
                <section className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                    <article>
                        <h3 className='text-header text-[1.5rem] font-light'>Verdensmålene forpligter.</h3>
                        <p className='text-[0.9rem]'>Medlemslandende forpligter sig til helt at afskaffe fattigdom og sult i verden, sikre god uddannelse og sundhed til alle, reducere ulighed, fremme ligestilling, anstændige jobs, bæredygtig vækst og forbrug.</p>
                        <br />
                        <p className='text-[0.9rem]'>Den nye dagsorden anerkender således at social, økonomisk og miljømæssig udvikling, fred, sikkerhed og internationalt samarbejde er tæt forbundet, og at det kræver en integreret indsats at opnå holdbare udviklingsresultater.</p>
                    </article>
                    <article>
                        <h3 className='text-header text-[1.5rem] font-light'>Verdensmålene gælder alle.</h3>
                        <p className='text-[0.9rem]'>Målene gælder alle lande - både rige og fattige - dvs. de er universelle.</p>
                        <br />
                        <p className='text-[0.9rem]'>Udfordringer som social, økonomisk marginalisering, stigende ulighed, fødevareusikkerhed, ulig adgang til grundlæggende naturressourcer,og har regionale og globale konsekvenser.</p>
                        <br />
                        <p className='text-[0.9rem]'>Det er derfor afgørende at alle lande leverer og løfter opgaven i fællesskab.</p>
                    </article>
                </section>
            </section>
        </div>
    )
}

export default worldGoals

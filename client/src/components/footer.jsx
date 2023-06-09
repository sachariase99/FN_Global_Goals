import React from 'react'
import UN from '../images/Partner-UNDP-Full.png'
import verden from '../pdf/Bliver verden bedre_ Final small.pdf'
import spotlight from '../pdf/SPOTLIGHT-Rapport_Enkeltsider.pdf'

const footer = () => {
    return (
        <div>
            <footer className='bg-background p-4'>
                <div className='grid grid-2-cols max-w-[975px] m-auto'>
                    <div className='flex flex-col lg:flex-row'>
                        <div>
                            <h3 className='text-header text-[1.7rem] mt-10 mb-3 font-light uppercase'>Eksterne Links:</h3>
                            <ul className='text-white'>
                                <li><a target='_blank' rel="noreferrer" href="https://www.verdensmaalene.dk/">https://www.verdensmaalene.dk/</a></li>
                                <li><a target='_blank' rel="noreferrer" href="https://www.globalgoals.org/">https://www.globalgoals.org/</a></li>
                                <li><a target='_blank' rel="noreferrer" href="https://www.un.org/sustainabledevelopment/">https://www.un.org/sustainabledevelopment/</a></li>
                                <li><a target='_blank' rel="noreferrer" href="https://worldslargestlesson.globalgoals.org/">https://worldslargestlesson.globalgoals.org/</a></li>
                                <li><a target='_blank' rel="noreferrer" href="https://www.unenvironment.org/">https://www.unenvironment.org/</a></li>
                                <li><a target='_blank' rel="noreferrer" href="https://ve.dk/klimaberegner/">https://ve.dk/klimaberegner/</a></li>
                            </ul>
                        </div>
                        <div className='ml-[0px] lg:ml-[50px]'>
                            <h3 className='text-header text-[1.7rem] mt-10 mb-3 font-light uppercase'>Ressourcer:</h3>
                            <a target='_blank' rel="noreferrer" className='text-white' href={verden}>Bliver Verden Bedre (pdf)</a>
                            <a target='_blank' rel="noreferrer" className='text-white' href={spotlight}>Spotlight Rapport (pdf)</a>
                        </div>
                    </div>
                    <div>
                        <img src={UN} alt="UN" />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default footer
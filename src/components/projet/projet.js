import React from 'react';
import  portfolio  from '../../data/projet';



function Portfolio() {
 return (

    <section className='portfolio' id='portfolio'>
       <h2 className='title'>Projets</h2>
       <div className='portfolio__container' >
       {portfolio.map((competence, index ) => (
            <div className='portfolio__card' key={index}>
            <img className='portfolio__img' src= {competence.image} alt="" />
            <div className='portfolio__content'>
                <h3 className='portfolio__title'>{competence.name}</h3>
                <p className='portfolio__text'>{competence.text}</p>
                 <div className='portfolio__competences'>
                 {competence.competences.map((competence, i) => (
                  <span key={i}>{competence}</span>
                ))}
                 </div>
            </div>
          </div>

      ))}
       </div>
    </section>
  );
}

export default Portfolio;

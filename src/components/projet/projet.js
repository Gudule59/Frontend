import React from 'react';
import  portfolio  from '../../data/projet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Portfolio() {
  return (
    <section className='portfolio' id='portfolio'>
      <h2 className='title'>Projets</h2>
      <div className='portfolio__container'>
        {portfolio.map((competence, index) => (
          <div className='portfolio__card' key={index}>
            <img className='portfolio__img' src={competence.image} alt="" />
            <div className='portfolio__content'>
              <h3 className='portfolio__title'>{competence.name}</h3>
              <p className='portfolio__text'>{competence.text}</p>
              <div className='portfolio__competences'>
                {competence.competences.map((comp, i) => (
                  <span key={i}>{comp}</span>
                ))}
              </div>
              <a href={competence.code} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;



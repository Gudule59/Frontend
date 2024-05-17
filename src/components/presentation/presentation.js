import React from 'react'
import imagePortfolio from '../../images/image_portfolio.jpg'
import cv from '../../data/CARLIEZ_Fabien.pdf'


function Info() {
    return (
      <section className='info' id='about'>
        <div className='info__content'>
          <h2 className='title'>En quelques mots ...</h2>
          <div className='info__flex '>
          <div className='info__text'>
            <p className='info__subtitle'>
                Je suis Fabien, un <strong>développeur web</strong> spécialisé dans le <strong>front-end</strong>.
                 J'ai suivi une formation intensive de 6 mois chez OpenClassrooms en tant que <strong>Développeur web</strong>, 
                 ce qui m'a permis d'acquérir un diplôme de niveau Bac+2.
            </p>
            <p className='info__subtitle'>
                Depuis mon enfance, je suis passionné par l'<strong>informatique</strong>, et je souhaite aujourd'hui
                transformer cette passion en une carrière. Mon objectif est de continuer à développer mes compétences et
                 mes connaissances dans ce vaste univers qu'est l'<strong>informatique</strong>. 
            </p>
            <p className='info__subtitle'>
                N'hésitez pas à me contacter si vous êtes à la recherche d'un <strong>développeur web</strong> enthousiaste, motivé et curieux pour rejoindre 
                votre équipe ou collaborer sur un projet. Je suis impatient de contribuer à votre succès.
            </p>
            <div className='info__cv'> 
            <a href={cv} className='info__link' target="_blank" rel="noopener noreferrer">
                Téléchargez mon CV
            </a>
            </div>
           </div>
           <div className='info__image'> 
            <img src={imagePortfolio} alt="profil" />
          </div>
          </div>
        
        </div>
      </section>
    );
  }
  
  

export default Info
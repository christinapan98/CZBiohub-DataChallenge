import React from 'react';
import './App.css';
import tmuris from './img/tabulamurisimg.png';
import tmurissenis from './img/tabulamurissenis.png';
import mission from './img/missiondna.jpeg';
import biohub from './img/biohub.jpeg';
import logo from './img/logo.png';
import Footer from './components/Footer.js';
import PageSection from './components/PageSection.js';
import Project from './components/Project.js';
import experiment from './img/exp.png';

function App() {
  return (
    <div className="App">
      {/* header section here--------- */}
      <div className="App-header">
        <img src={logo} alt="biohub-logo"></img>
        <h3>the tabula muris initiative</h3>
        <h4>understanding our genome, one mouse at a time</h4>
      </div>

      <div className="App-body">
        <PageSection title="the mission" maintext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" type="Pagesection-normal">
            <img src={mission} alt="mission"></img>
        </PageSection>

        <hr></hr>

        {/* ---------------------------------------------------------------- */}

        <PageSection title="the projects" type="Pagesection-project">
          <Project title="Tabula Muris" naturelink="https://www.nature.com/articles/s41586-018-0590-4"
          text="Tabula Muris—also known as the Mouse Cell Atlas—is a library of single cell transcriptome data 
          covering over 100,000 cells from 20 organs. This library provides a comprehensive resource for studying gene expression across different cell types." 
          link="https://tabula-muris.ds.czbiohub.org/">
            <img src={tmuris} alt="muris"></img>
          </Project>
    
          <Project title="Tabula Muris Senis" naturelink="https://www.nature.com/articles/s41586-020-2496-1" 
          text="Tabula Muris Senis—also known as the Mouse Aging Cell Atlas—contains data from 23
          tissues and organs at varying points in the lifespan of the mouse. 
          This library provides insight into the molecular and cellular processes that occur with aging."
          link="https://tabula-muris-senis.ds.czbiohub.org/">
            <img src={tmurissenis} alt="murissenis"></img>
          </Project>
        </PageSection>

        <hr></hr>

        {/* -------------------------------------------------------- */}

        <PageSection title="the biohub" maintext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" type="Pagesection-normal">
          <img src={biohub} alt="biohub"></img>
        </PageSection>

        
      </div>
      <Footer>  

        </Footer>
      
    </div>
  );
}

export default App;

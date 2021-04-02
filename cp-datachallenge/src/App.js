import React, {Component} from 'react';
import './App.css';
import tmuris from './img/tabulamurisimg.png';
import tmurissenis from './img/tabulamurissenis.png';
import mission from './img/missiondna.jpeg';
import biohub from './img/biohub.jpeg';
import logo from './img/logo.png';
import logoblue from './img/logoblue.png';
import Footer from './components/Footer.js';
import PageSection from './components/PageSection.js';
import Project from './components/Project.js';

export class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      scrolledDown: false
    }
    this.scrollCheck = this.scrollCheck.bind(this);
    this.scrollUp = this.scrollUp.bind(this);
    this.trackMouseMove = this.trackMouseMove.bind(this);
    this.circleRef = React.createRef();
  }
  
  scrollCheck() {
    if (window.scrollY > 400) {
      console.log("here");
      this.setState({
        scrolledDown: true
      })
    } else {
      this.setState({
        scrolledDown: false
      })
    }
  }

  scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  trackMouseMove(e) {
      let xPos = e.clientX;
      let yPos = e.clientY;
      console.log(React.findDOMNode(this.refs.container));
      console.log("hi");
      
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollCheck, true);
    document.addEventListener('mousemove', this.trackMouseMove, true);
  }
  render() {
    let stickyClass = this.state.scrolledDown ? "App-sticky-logo" : "App-sticky-logo App-sticky-logo-hide";

    return (
      

      <div className="App">
        <div className="cursor-circle" ref={this.circleRef}></div>

        <div className={stickyClass} onClick={()=>this.scrollUp()}>
          <img src={logoblue} alt="biohub-logoblu" className="biohub-logo-blue"></img>
        </div>

        {/* header section here--------- */}
        <div className="App-header">
          <img src={logo} alt="biohub-logo"></img>
          <h3>the tabula muris initiative</h3>
          <h4>understanding our genome, one mouse at a time</h4>
        </div>

        <div className="App-body">
          <PageSection title="the mission" maintext="In the past decade, single-cell transcriptomics has revolutionized the scientific community by enabling breakthroughs in our ability to build cellular maps of tissues. By creating detailed compendiums of annotated Mus musculus cells, we at the Biohub aim to advance human understanding of biology and disease." type="Pagesection-normal">
              <img src={mission} alt="mission"></img>
          </PageSection>

          <hr></hr>

          {/* ---------------------------------------------------------------- */}

          <PageSection title="the projects" type="Pagesection-project">
            <Project title="Tabula Muris" naturelink="https://www.nature.com/articles/s41586-018-0590-4"
            text="Tabula Muris—also known as the Mouse Cell Atlas—is a comprehensive library of single cell transcriptome data, providing a rich resource for studying gene expression across different cell types." 
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

          <PageSection title="the biohub" maintext="In 2016, the Chan Zuckerberg initiative was launched with a bold vision: to cure, prevent or manage disease in our children’s lifetime.
          The Chan Zuckerberg Biohub was created to support that vision — by understanding the fundamental mechanisms underlying disease and developing new technologies to lead to actionable diagnostics and effective therapies." type="Pagesection-normal">
            <img src={biohub} alt="biohub"></img>
          </PageSection>

          
        </div>
        <Footer>  

          </Footer>
        
      </div>
    );
  }
}

export default App;

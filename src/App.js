import './App.css';
import pic from './fWeb7.png';
import logo from './HekmatLogoF2.svg';
import elham from './ElhamBook-th-800.jpg';
import fardo from './Fardoracle-tn-800.jpg';
import portfo from './portfolio-tn-800.jpg';
import wikitik from './wikitik-tn-800.jpg';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">

      <div className='BG-wrap'>
      <div className='BG-content'>

        <div>
          <img className="App-logo" alt="Hekmat's Logo" src={logo}/>
        </div>
        <span className='Menu'>
          <span className='Menu-item'><a href='#'>Intro</a></span>
          <span className='Menu-item'><a href='#'>Projects</a></span>
          <span className='Menu-item'><a href='#'>Experiences</a></span>
          <span className='Menu-item'><a href='#'>Contact</a></span>
        </span>

        <div className="Intro">
          <div className='Intro_content'>
            <div className='d-flex'>
              <div class="pt-5 ps-5 w-75 ms-auto flex-grow-1">
                <h2>Now In a Good Place You Are...</h2>
                <h3>Welcome, This is Farzad Hekmat.</h3>
                <h5>Feel free to Explore for what you may need.</h5>
              </div>

              <div class="ms-auto">
                <img className='Pic' src={pic} alt="My Portrait" ></img>
              </div>
          
            </div>

          </div>
          {/* <img className="Pic" alt="farzad's pic" src={pic}/> */}

        </div>

      </div>
      </div>


      <div className='Projects'>
        <h1 className='title'>Projects</h1>
        {/* <div className="P-list d-flex justify-content-evenly">
          <span className="P-item"></span>
          <span className="P-item"></span>
          <span className="P-item"></span>
          <span className="P-item"></span>
        </div> */}




        <div class="row row-cols-1 row-cols-md-2 g-5 justify-content-evenly w-75 m-auto">
  <div class="col">
    <div class="card">
      <img src={elham} class="card-img-top" alt="ElhamBook Publication"/>
      <div class="card-body">
        <h5 class="card-title">ElhamBook Publication</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={fardo} class="card-img-top" alt="Fardoracle"/>
      <div class="card-body">
        <h5 class="card-title">Fardoracle Website</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={portfo} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">My Portfolio</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={wikitik} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Wikitik Application</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>



      </div>
    
    </div>
  );
}

export default App;

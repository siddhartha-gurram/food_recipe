import React from 'react'
import foodRecipe from '../assets/foodRecipe.jpg'
import Navbar from '../components/Navbar'; // adjust the path as needed
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
         
         <section className='home'>
             <div className='left'>
                 <h1>Food Recipe</h1>
                 <h5>it is fj j jcjdbcje refjrb eifjweb rfbrbs bjbj erfeurfebfjfb sfurfefebh erfer j erj erfj erj er erj er ferghfer fher herh er vh erhv eh ehrher vher her her vh ehv ehr fehr fher f</h5>
                 <button>share your recipe here</button>
             </div>
             <div className='right'>
                 <img src={foodRecipe} width="490px" height="370px"/>
            </div>
        </section>
        <div className='bg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,224L26.7,224C53.3,224,107,224,160,186.7C213.3,149,267,75,320,80C373.3,85,427,171,480,213.3C533.3,256,587,256,640,261.3C693.3,267,747,277,800,245.3C853.3,213,907,139,960,122.7C1013.3,107,1067,149,1120,149.3C1173.3,149,1227,107,1280,74.7C1333.3,43,1387,21,1413,10.7L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
        </div>
        
    </>
  )
}
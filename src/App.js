import fcb  from './image/fcb.jpg';
import './App.css';
import Freekick from './video/Freekick.mp4';
function App() {
  return (
          <div>
            <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
              <h1 className="title">MESSI</h1>
              <img className="img1" src={fcb} />
            
              <img className="img2" src="/image/leomessi.jpg" />
            </div>
            <video width={320} height={240} controls>
              <source src={Freekick} type="video/mp4" />
            </video>
          </div>
        );
}
     
export default App;

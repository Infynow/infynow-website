
import '../src/Common.css';
import Navbar from '../src/Screens/Navbar/Index'
import Home from '../src/Screens/Home/index'
import HomeServe from './Screens/HomeServe/Index'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <div className='mainBackground'>
        <Navbar />
        <section style={{ height: '100%', width: '100%' }}>
          <Home />

        </section>

        <section id='one' style={{ height: '100%', width: '100%', }}>

          <HomeServe />
        </section>
      </div>
    </>
  );
}

export default App;

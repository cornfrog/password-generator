import './App.scss';
import Footer from './components/Footer';
import GeneratePassword from './components/GeneratePassword';
import TitleBar from './components/TitleBar';

const App = () => {

  return (
    <div className='homepage'>
      <TitleBar />
      <div className='content'>
        <div className='app-banner'>
          <p className='banner-title'>What is this site for?</p>
          <p className='banner-message'>
            I wanted to make a password manager so here it is.
            Just choose the type of hash you want and then
            your new password will be ready to go! 
            Just click to copy :)
          </p>
        </div>
        <GeneratePassword />
      </div>
      <Footer />
    </div>
  )
}

export default App;

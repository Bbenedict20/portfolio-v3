import './styles/App.css';
import Body from './Body';
import Nav from './Nav';

function App() {

  window.onscroll = () => {
    if (window.innerWidth > 840) {
      const navBar = document.querySelector('.navi');

      if (window.scrollY > 80) {
        navBar.classList.add('nav-bg');
      } else {
        navBar.classList.remove('nav-bg');
      }
    }
  }

  return (
    <div className="flex col ai-c">
      <Nav />
      <Body />
    </div>
  );
}

export default App;

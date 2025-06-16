import Navbar from './Components/Navbar';
import Container from './Components/Container';
import Activity from './Components/Activity';
import bg1 from './assets/bg.jpg';
function App() {
  return (
    <div className="relative w-full h-screen">
      {/* Fixed Background */}
      <div className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat" 
           style={{ backgroundImage: "url('https://4kwallpapers.com/images/wallpapers/outrun-neon-dark-background-purple-2560x1440-4523.jpg')" }}>
      </div>

      {/* Content */}
      <div className="relative z-10 bg-transparent">
        <Navbar />
        <Container />
        <Activity />
        
      </div>
    </div>
  );
}

export default App;

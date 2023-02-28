
import './App.css';
import { Camera } from './components/camera';
import { Result } from './components/result';
import { Upload } from './components/upload';

function App() {
  return (
    <div className="jv-page d-flex flex-column mx-auto text-center py-5 px-4">
      <h6 className="main-heading mb-4 text-white">What do you wanna create?</h6>
      <Camera/>
      {/* <Upload/>  */}
      {/* <Result/> */}
    </div>
  );
}

export default App;

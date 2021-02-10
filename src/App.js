import logo from './logo.svg';
import './App.css';
import Samplefetch from '../src/components/samplefetch/Samplefetch';
import RichTextEditor from '../src/components/richtexteditor/RichTextEditor';
import {connect } from 'react-redux';
import Home from './Home';
function App() {
  return (
    <div className="App">
     <Samplefetch/>
     <RichTextEditor/>
     <Home/>
    </div>
  );
}

export default App;

import './App.css';
import AuthProvider from './components/Context/AuthProvider';
function App(props) {
  return <>
    <AuthProvider>
      {props.children}
    </AuthProvider>
</>
}

export default App;

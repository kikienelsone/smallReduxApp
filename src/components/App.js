import Likes from "../Likes/Likes";
import './App.css';
import Title from "../Title/Title";
import Comments from "../Comments/Comments";
import Spin from "../Spin/Spin";
import {useSelector} from "react-redux";
import {appReducer} from "../redux/appReducer";



function App() {
    const error = useSelector(state => state.appReducer.error)
    console.log(error)
  return (
      <div className="App">
        <div className="wrap">
            <Spin/>
          <div className="card">
              {error &&(
                  <div className="error-message">
                      {error}
                  </div>
              )}
            <div className="card-image">
              <img src="https://img.freepik.com/free-photo/beautiful-shot-of-a-forest-with-tall-green-trees_181624-20615.jpg?size=626&ext=jpg&ga=GA1.2.1039566379.1645717468" alt="forest"/>
                <Title/>
                <Likes/>
            </div>
              <Comments/>

          </div>
        </div>
      </div>
  );
}

export default App;

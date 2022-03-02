import Likes from "../Likes/Likes";
import './App.css';
import Title from "../Title/Title";



function App() {
  return (
      <div className="App">
        <div className="wrap">
          <div className="card">
            <div className="card-image">
              <img src="https://img.freepik.com/free-photo/beautiful-shot-of-a-forest-with-tall-green-trees_181624-20615.jpg?size=626&ext=jpg&ga=GA1.2.1039566379.1645717468" alt="forest"/>
                <Title/>
                <Likes/>
            </div>

          </div>
        </div>
      </div>
  );
}

export default App;

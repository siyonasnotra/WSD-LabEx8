import "bulma/css/bulma.css";
import CardPage from "./CardPage";
import TrainingImage from "./images/training.png";
import YogaImage from "./images/yoga.png";
import NutritionImage from "./images/nutrition.png";
import './App.css';

function App() {
  return (
    <div>
      <section className="hero is-danger">
        <div className="hero-body">
          <p className="title">Gym Management Services</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <CardPage 
                title="Personal Training" 
                handler="@training" 
                image={TrainingImage}
                description="Get customized workout plans with one-on-one training."
              />
            </div>
            <div className="column is-4">
              <CardPage 
                title="Yoga Classes" 
                handler="@yoga" 
                image={YogaImage}
                description="Join group sessions and practice mindfulness with expert instructors."
              />
            </div>
            <div className="column is-4">
              <CardPage 
                title="Nutrition Plans" 
                handler="@nutrition" 
                image={NutritionImage}
                description="Personalized diet plans and health consultations for your fitness goals."
              />
            </div>
          </div>
        </section>
      </div>          
    </div>
  );
}

export default App;

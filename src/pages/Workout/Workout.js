import React from "react";
import { Component } from "react";
import WorkoutCardCollection from "../../components/WorkoutCardCollection/WorkoutCardCollection";
import WorkoutCard from "../../components/WorkoutCard/WorkoutCard";
import WorkoutForm from "../../components/WorkoutForm/WorkoutForm";
import StyledButton from "../../components/StyledButton/StyledButton";

class Workout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
      workoutType: "kettlebell",
      workoutDifficulty: "beginner",
      workoutNumber: 1,
      workoutGenerated: false,
      workoutLoading: "Submit"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("workout page");
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    this.setState({ workoutLoading: "Loading..." });
    fetch(
      `https://pk3atpe009.execute-api.us-east-1.amazonaws.com/dev/workouts/${this.state.workoutDifficulty}/${this.state.workoutType}/${this.state.workoutNumber}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ workouts: data, workoutGenerated: true });
      })
      .catch(console.log);
    event.preventDefault();
  }

  handleClick(event) {
    this.setState({ workoutGenerated: false, workoutLoading: "Submit" });
    event.preventDefault();
  }

  render() {
    let workoutCards = this.state.workouts.map(exercise => (
      <WorkoutCard
        key={exercise.id}
        cardTitle={exercise.title}
        cardWhatDescription={exercise.whatdescription}
        cardDoDescription={exercise.dodescription}
        cardImage={exercise.workimage}
      />
    ));

    workoutCards.sort(() => Math.random() - 0.5);

    return (
      <div>
        <br />
        {!this.state.workoutGenerated ? (
          <WorkoutForm
            onSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            data={this.state.workouts}
            buttonText={this.state.workoutLoading}
          />
        ) : (
          <div>
            <WorkoutCardCollection workoutCards={workoutCards} />
            <StyledButton
              buttonText="Generate another workout"
              onClick={this.handleClick}
              buttonMarginBottom="40px"
            />
          </div>
        )}
        <br />
      </div>
    );
  }
}

export default Workout;

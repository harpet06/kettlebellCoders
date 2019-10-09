import React from "react";
import { Component } from "react";
import WorkoutCardCollection from "../../components/WorkoutCardCollection/WorkoutCardCollection";
import WorkoutCard from "../../components/WorkoutCard/WorkoutCard";
import WorkoutForm from "../../components/WorkoutForm/WorkoutForm";
import workoutsData from "../../services/workouts";

class Workout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
      workoutType: "kettlebell",
      workoutDifficulty: "beginner",
      workoutNumber: 1,
      workoutGenerated: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("workout page");
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    fetch("https://pbvqwoee56.execute-api.us-east-1.amazonaws.com/dev/workouts")
      .then(res => res.json())
      .then(data => {
        this.setState({ workouts: data, workoutGenerated: true });
      })
      .catch(console.log);

    event.preventDefault();
  }

  render() {
    const workoutCards = this.state.workouts.map(exercise => (
      <WorkoutCard
        key={exercise.id}
        cardTitle={exercise.title}
        cardWhatDescription={exercise.whatDescription}
        cardDoDescription={exercise.doDescription}
        cardImage={exercise.image}
      />
    ));

    const filterWorkoutTypes = workoutType => {
      return "type";
    };

    const filterWorkoutDifficulty = workoutDifficulty => {
      return "difficult";
    };

    const filterWorkoutNumber = workoutNumber => {
      return "number";
    };

    const finalWorkoutCards = workoutCards => {
      return workoutCards
        .filterWorkoutTypes(this.state.workoutType)
        .filterWorkoutDifficulty(this.state.workoutDifficulty)
        .filterWorkoutNumber(this.state.workoutNumber);
    };

    return (
      <div>
        <h1> Workout page</h1>
        {!this.state.workoutGenerated ? (
          <WorkoutForm
            onSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            data={this.state}
          />
        ) : (
          <WorkoutCardCollection workoutCards={workoutCards} />
        )}
      </div>
    );
  }
}

export default Workout;

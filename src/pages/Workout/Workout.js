import React from "react";
import { Component } from "react";
import WorkoutCardCollection from "../../components/WorkoutCardCollection/WorkoutCardCollection";
import WorkoutCard from "../../components/WorkoutCard/WorkoutCard";
import workoutsData from "../../services/workouts";

class Workout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: workoutsData
    };
  }

  componentDidMount() {
    console.log("workout page");
  }

  render() {
    const workoutCards = this.state.workouts.map(exercise => (
      <WorkoutCard
        cardTitle={exercise.cardTitle}
        cardWhatDescription={exercise.cardWhatDescription}
        cardDoDescription={exercise.cardDoDescription}
        cardImage={exercise.cardImage}
      />
    ));

    return (
      <div>
        <h1> Workout page</h1>
        <WorkoutCardCollection workoutCards={workoutCards} />
      </div>
    );
  }
}

export default Workout;

import React from "react";
import classes from "./MealsAvailable.module.css";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";

const DUMMY_MEALS = [
  {
    id: 1,
    name: "Burger",
    description: "Burger with sruffed veeggies and cheese",
    price: "Rs " + 89,
  },
  {
    id: 2,
    name: "Burger",
    description: "Burger with sruffed veeggies and cheese",
    price: "Rs " + 89,
  },
  {
    id: 3,
    name: "Burger",
    description: "Burger with sruffed veeggies and cheese",
    price: "Rs " + 89,
  },
  {
    id: 4,
    name: "Burger",
    description: "Burger with sruffed veeggies and cheese",
    price: "Rs " + 89,
  },
];

function MealsAvailable() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealsItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default MealsAvailable;

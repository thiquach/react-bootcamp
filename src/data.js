const animals = [
  { name: "cat", sound: "meow", feedingNeed: { food: 2, water: 3 } },
  { name: "dog", sound: "woof", feedingNeed: { food: 2, water: 3 } },
];

function useAnimals(animal) {
  return [
    animal.name,
    function makeSound() {
      console.log(animal.sound);
    },
  ];
}
export default animals;
export { useAnimals };

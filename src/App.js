export default function App(){
	let name = "John Cena";

	let fruits = ["Apple", "Mango", "Banana", "Pineapple"];

	let wrestler = {
		"name" : "Big Show",
		weight : "400 pounds",
		height : "200 cm"
	}

	let pokemon = [
		{name : "Pikachu", type : "electric"},
		{name : "Charmander", type : "fire"},
		{name : "Squirtle", type : "water"},
		{name : "Bulbasaur", type : "grass"},
		{name : "Gengar", type : "ghost"}
	]

	return (
		<>
			<h2>Hello {name} !!!</h2>
			<h3>Welcome to React</h3>

			<h2>Fruits Name</h2>
			<ul>
				{
					fruits.map( (fruit) => {
						return <li>{fruit}</li>
					})
				}
			</ul>

			<h2>Big Show Profile</h2>
			<div>Name: {wrestler.name}</div>
			<div>Weight: {wrestler.weight}</div>
			<div>Height: {wrestler.height}</div>

			<h2>List of Pokemons</h2>
			<ul>
				{
					pokemon.map( (item) => {
						return <li>{item.name} - {item.type}</li>
					})
				}
			</ul>
		</>
	)
}

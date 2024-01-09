export default function (){
	let name = "John Cena";

	let fruits = ["Apple", "Mango", "Banana", "Pineapple"];

	fruits = ["Apple", "Mango", "Banana"];

	let wrestler = {
		"name" : "Big Show",
		weight : "400 pounds",
		height : "200 cm"
	};

	let pokemon = [
		{name : "Pikachu", type : "electric"},
		{name : "Charmander", type : "fire"},
		{name : "Squirtle", type : "water"},
		{name : "Bulbasaur", type : "grass"},
		{name : "Gengar", type : "ghost"}
	];

	const cricketers = ['sachin', 'ponting', 'dravid'];
	cricketers.push('kumble');


	return(
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

			<h2>List of Cricketers</h2>
			<ul>
				{
					cricketers.map( (item) => {
						return <li>{item}</li>
					})
				}
			</ul>
		</>
	)
}

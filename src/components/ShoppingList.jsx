import {plantList} from '../datas/plantList'

const categories = plantList.reduce(
	(acc, plant) =>
		acc.includes(plant.category) ? acc : acc.concat(plant.category),
	[]
)

function ShoppingList() {
    return (
        <div>
            <ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}>{plant.name}</li>
				))}
			</ul>
        </div>
    )
}

export default ShoppingList
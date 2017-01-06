// TODO


var Kale = () => (
    <div>Item 1 kale is rendering</div>
	);


var Cucumber = () => (
	<div>Item 2 cucumber is rendering</div>
	);

var GroceryList = () => (
     <ul>ITEMS
     	<Kale />
     	<Cucumber />     
     </ul>
	);


ReactDOM.render(<GroceryList />,document.getElementById("app"));
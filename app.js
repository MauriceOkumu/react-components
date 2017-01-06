// TODO

var groceries = ['kale', 'cucumber','mangoes','tomatoes', 'onions','cabbages','react']
var Kale = () => (
	<div>Item 1 kale is rendering</div>
	);


var Cucumber = () => (
	<div>Item 2 cucumber is rendering</div>
	);

class GroceryListItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
      done: false
    };

	}
	onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

	render(){
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      color:this.state.done ? 'blue' : 'red',

    };
		return (
			<div>

			<li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
			</div>
			)
	}
};

var GroceryList = (props) => (

	<ol>
	{props.item.map(item =>
		<GroceryListItem item={item} key={item}/>
		)}
	</ol>


	);



ReactDOM.render(<GroceryList item={groceries}  />,document.getElementById("app"));
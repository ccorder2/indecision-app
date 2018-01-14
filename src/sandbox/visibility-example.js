class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleClick = this.handleToggleClick.bind(this);
		this.state = {
			visibility: true
		};
	}
	handleToggleClick() {
		this.setState(prevState => {
			return { visibility: !prevState.visibility };
		});
	}
	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggleClick}>
					{this.state.visibility ? 'Hide details' : 'ShowDdtails'}
				</button>
				{this.state.visibility && (
					<div>
						<p> Hey. These are some details you can now see!</p>
					</div>
				)}
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey. These are some details you can now see!</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();

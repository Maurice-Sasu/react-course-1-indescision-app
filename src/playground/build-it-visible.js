
class VisibilityToggle extends React.Component {


    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            
            visibility: false
        };
    }


    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });

    }


    render(){
        return (
            <div>
                <h1>Visibility Toggler</h1>
                <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can see now</p>
                    </div>
                )}
            </div>
        );
    }

}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));





// let Visibility = false;

// const toggleVisibility = () => {
//     Visibility = !Visibility;
//     render();
// }

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggler</h1>
//             <button onClick={toggleVisibility}>
//             {Visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {Visibility && (
//                 <div>
//                     <p>Hey. These are some details you can see now</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(jsx, document.getElementById('app'));
// }

// render();








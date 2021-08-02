
// JSX - JavaScript XML

// var template = ( 
//     <div>
//         <h1>Does this change!?</h1>
//         <p>This is some info</p>
//         <ol>
//             <li>Item One</li>
//             <li>Item Two</li>
//             <li>Item Three</li>
//         </ol>
//     </div>
// );


// ---------------------------------
// --------> Exploring JSX <--------
// ---------------------------------

// Create a templateTwo var JSX Expresstion
// div
// h1 -> Maurice
// p  -> Age: 26
// p  -> Location: Accra
// Render templateTwo instead of template
// ....
// ....
// ....
// ....
// ....
// ....
// ....
// ....
// var templateTwo =(
//     <div>
//         <h1>Maurice Sasu Anani</h1>
//         <p>Age: 23</p>
//         <p>Location: Accra</p>
//     </div>
// );



// ==================================================
// ================> Conditional JSX <===============
// ==================================================


const app = {
    title: 'Indecision App',
    options: [],
    subtitle: 'Put your life in the hands of a computer',
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option){
        app.options.push(option);
        e.target.elements.option.value = ' ';
        render();
    }
};

const wipeAll = () => {
    app.options.length = 0;
    render();
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    console.log(randomNumber);
    alert(option)
}

const render = () => {
    const template = ( 
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>WHAT SHOULD I DO ?</button>
            <button onClick={wipeAll}>REMOVE ALL</button>
            
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
    
        </div>
    );

    ReactDOM.render(template,appRoot);
};

const appRoot = document.getElementById('app');

render();




// const user = {
//     name: 'Maurice Sasu Anani',
//     age: 20,
//     location: 'Accra'
// };

// function getLocation (location){
//     if (location){
//         return <p>Location: {location}</p>;
//     } 
// }

// const templateTwo =(
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );





class OldSyntax {
    constructor (){
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting(){
        return `hi. My name is ${this.name}.`;
    }
}
  
const oldsyntax = new OldSyntax();
const getGreeting = oldsyntax.getGreeting;
console.log(getGreeting());

//--------------------

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `hi. My name is ${this.name}.`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());



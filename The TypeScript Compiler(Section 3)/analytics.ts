const button = document.querySelector("Button")!; // El signo ! me sirve para afirmar que esto no es nulo

function cliclHandler(message: string){
    console.log('Clicked !' + message);
}

if (button){
    button.addEventListener('click', cliclHandler.bind(null,'wellcome'));
}

const map = new Map();

let logged;

function sendAnalytics(data: string) {
    console.log(data);
    logged= true;
}

sendAnalytics("The data");
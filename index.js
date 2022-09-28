const actions = Array.from(document.querySelectorAll('[data-action]'));

let counterJanice = localStorage.getItem('counterJanice') || 0
let counterMosquito = localStorage.getItem('counterMosquito') || 0

document.getElementById("counter-janice").textContent = counterJanice
document.getElementById("counter-mosquito").textContent = counterMosquito

actions.forEach(action => {
    action.addEventListener('click', () => {
        const type = action.dataset.action;

        switch (type) {
            case 'increase-janice':
                counterJanice++;
                break;
            case 'increase-mosquito':
                counterMosquito++;
                break;
            case 'decrease-janice':
                counterJanice--;
                break;
            case 'decrease-mosquito':
                counterMosquito--;
                break;
            case 'save':
                localStorage.setItem('counterJanice', counterJanice);
                localStorage.setItem('counterMosquito', counterMosquito);
                console.log("Janice " + counterJanice + " mosquitoes " + counterMosquito);
                break;
            case 'clear':
                localStorage.clear();
                counterJanice = 0;
                counterMosquito = 0;
        }

        document.getElementById("counter-janice").textContent = counterJanice;
        document.getElementById("counter-mosquito").textContent = counterMosquito;
    });
});
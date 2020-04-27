
function databas(){
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const work = document.getElementById("work");
    const money = document.getElementById("money");
    const drink = document.getElementById("drink");
    const atmosphere = document.getElementById("atmosphere");
    const mail = document.getElementById("mail");
    let working, drinking, fon;
    if(work.value == "") working = "i have money";
    else working=work.value;
    if (drink.value == "") drinking = 'not important';
    else drinking=drink.value;
    if (atmosphere.value == "") fon = 'not important';
    else fon=atmosphere.value;
    firebase.database().ref().push({
        name: name.value,
        age: age.value,
        work: working,
        money: money.value,
        drink: drinking,
        atmosphere: fon,
        mail: mail.value
    });
    alert('Спасибо! Данные успешно сохранены!');
}


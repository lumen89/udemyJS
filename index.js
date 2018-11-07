var money = prompt('Ваш бюджет на месяц?', '');
var data = prompt('Введите дату в формате YYYY-MM-DD', '');


var appData = {
    budget : money,         // бюджет
    timeData : data,        // данные времени
    expenses : {} , // объект с обязательными расходами
    optionalExpenses : {},  // объект с необязательными расходами
    income : [],            // массив данных с доп. доходом
    savings : false
};


    
    for (i = 0; i < 2; i++) {
    let mandatoryExpenditure = prompt("Введите обязательную статью расходов в этом месяце", ''),
        cost = prompt("Во сколько обойдется?", '');

        if ( (typeof(mandatoryExpenditure)) === 'string' && (typeof(mandatoryExpenditure)) != null && (typeof(cost)) != null 
        && mandatoryExpenditure != '' && cost != null && mandatoryExpenditure.length < 50) {
            appData.expenses[mandatoryExpenditure] = cost;
        }
        else {
            alert('Введите данные еще раз!');
            i--;
        }
    }

        //while (with out if)
    /* var i = 0;
    while (i < 2) {
        let mandatoryExpenditure = prompt("Введите обязательную статью расходов в этом месяце", ''),
        cost = prompt("Во сколько обойдется?", '');

        appData.expenses[mandatoryExpenditure] = cost;
        i++
    } */
    

        //do-while (with out if)
    /* var i = 0;
    do {
    let mandatoryExpenditure = prompt("Введите обязательную статью расходов в этом месяце", ''),
        cost = prompt("Во сколько обойдется?", '');

        appData.expenses[mandatoryExpenditure] = cost;
        i++
    }
    while (i < 2); */
    

appData.moneyPerDay = appData.budget / 30;        

alert('Ваш бюджет на 1 день: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('малоДенег');
}
else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('среднеДенег');
}
else if (appData.moneyPerDay > 2000) {
    console.log('многоДенег');
}
else {
    console.log('Что-то пошло не так...');
}
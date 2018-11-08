let money, data;

function start(){
    money = +prompt('Ваш бюджет на месяц?', '');
    data = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет на месяц?', '');
    }
}

start();


var appData = {
    budget : money,         // бюджет
    timeData : data,        // данные времени
    expenses : {} , // объект с обязательными расходами
    optionalExpenses : {},  // объект с необязательными расходами
    income : [],            // массив данных с доп. доходом
    savings : true
};


    function chooseExpenses() {
        for (i = 0; i < 2; i++) {
            let mandatoryExpenditure = prompt('Введите обязательную статью расходов в этом месяце', ''),
                cost = prompt('Во сколько обойдется?', '');
        
                if ( (typeof(mandatoryExpenditure)) === 'string' && (typeof(mandatoryExpenditure)) != null && (typeof(cost)) != null 
                && mandatoryExpenditure != '' && cost != null && mandatoryExpenditure.length < 50) {
                    appData.expenses[mandatoryExpenditure] = cost;
                }
                else {
                    alert('Введите данные еще раз!');
                    i--;
                }
            }
    }

    chooseExpenses();

    function chooseOptExpenses() {
        for (i = 0; i < 3; i ++) {
            let optionalExpenditure = prompt('Введите необязательную статью расходов в этом месяце', '');

            if ( (typeof(optionalExpenditure)) === 'string' && (typeof(optionalExpenditure)) != null 
            && optionalExpenditure != '' && optionalExpenditure.length < 50) {
                appData.optionalExpenses[i+1] = optionalExpenditure;
            }
            else {
                alert('Введите данные еще раз!');
                i--;
            }
            
        }
    }

    chooseOptExpenses();
   

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);        
    alert('Ваш бюджет на 1 день: ' + appData.moneyPerDay);
}    

detectDayBudget();


function detectLevel() {
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
}

detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Ваши сбережения?', ''),
            percent = +prompt('Под какой процент', '');

        appData.monthIncome = (save/100/12*percent).toFixed(2);
        alert('Месячная сумма накоплений:' + appData.monthIncome + ' руб.');
    }
}

checkSavings();
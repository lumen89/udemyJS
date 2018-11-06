var money = prompt('Ваш бюджет на месяц?', '');
var data = prompt('Введите дату в формате YYYY-MM-DD', '');


var appData = {
    budjet : money,         // бюджет
    timeData : data,        // данные времени
    expenses : {} , // объект с обязательными расходами
    optionalExpenses : {},  // объект с необязательными расходами
    income : [],            // массив данных с доп. доходом
    savings : false
};

let mandatoryExpenditure1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    cost1 = prompt("Во сколько обойдется?", ''),
	mandatoryExpenditure2 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	cost2 = prompt("Во сколько обойдется?", '');

appData.expenses.mandatoryExpenditure1 = cost1;
appData.expenses.mandatoryExpenditure2 = cost2;


alert('Ваш бюджет на 1 день: ' + money/30);

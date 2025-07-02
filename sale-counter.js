        function percentage(cash, per) {
            return cash/100*per;
        };
        let thisOrThat = +prompt('Виберіть: порахувати знижку на продукт (пишіть 1) або порахувати ціну на вагу (пишіть 2)')
        switch (thisOrThat) {
            case 1:
                function sumCalc() {
                    let price = +prompt('Впишіть ціну товару');
                    let sale = +prompt('Впишіть знижку у %');
                    return price - percentage(price,sale);
                };
                let finalPrice = sumCalc();
                document.write(
                    `<h2>Кінцева ціна: ${finalPrice} грн </h2>`
                );
                break;       
            case 2:
                function sumCalcKg() {
                    let price = +prompt('Впишіть ціну товару за кілограм');
                    let kilogram = +prompt('Впишіть вагу продукту у кілограмах (приклад: 1.111)');
                    return price * kilogram;
                };
                let finalPrice2 = sumCalcKg();
                document.write(
                    `<h2>Кінцева ціна: ${finalPrice2} грн </h2>`
                );
                break;
            case 1488:
                alert('hitler!☠💀')
                break;
            default: 
                alert("Ууупс, схоже ви ввели неправильну опцію. оновіть сторінку і коли з'явиться вікно з вибором опцію виберіть одну з перелічених 🤗")
        }



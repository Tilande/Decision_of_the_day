let numbers_int=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90]
let numbers_str=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
let periods = ['million', 'thousand', 'hundred']
let check1=false // Если слово есть в массиве numbers_str, то True, иначе False.
let check2=false // Если слово есть в массиве periods, то True, иначе False.

// let message = prompt('Enter a message ') //Вводим сообщение в консоли
let message = 'nine hundred ninety-nine thousand two hundred forty-six' //Используем переменную, если хотим получить результат здесь
let arr = message.split(' ');
let r='' 
let dw
let rt=''

for (let i = arr.length-1; i > -1; i--) {
    if (arr[i].indexOf('-')!=-1){
        dw=arr[i].split('-') // Разбиваем одно слово с дефисом на два, потому что у нас в словаре нет слов с дефисом.
        for (let i2 = 0; i2 < numbers_str.length; i2++){ // Ищем второе из двух полученных слов в массиве numbers_str. Начинаем поиск именно со второго слова, а не с первого, потому что мы записываем получаемое число справа налево.
            if (dw[1]==numbers_str[i2]){
                check1=true
                r=r+numbers_int[i2]
            }
        }
        if (check1==true){ // Если мы нашли второе из двух полученных слов в словаре numbers_str, то ищем первое, иначе сообщаем об ошибке.
            check1=false
            for (let i2 = 0; i2 < numbers_str.length; i2++){ // Ищем первое из двух полученных слов в массиве numbers_str.
                if (dw[0]==numbers_str[i2]){
                    check1=true
                    r=r+(numbers_int[i2]/10) // Делим на 10, потому что нам нужно значение не 20, 30, 40 и т.д., а 2, 3, 4 и т.д.
                }
            }
            if (check1==false) console.log('Проверьте правильность написания числа!')
        }
        else console.log('Проверьте правильность написания числа!')
    }
    else{ // Если слово без дефиса, то его поиска только в массиве numbers_str недостаточно, так как это слово может означать период, которые хранятся у нас в массиве periods.
        for (let i2 = 0; i2 < periods.length; i2++){
            if (arr[i]==periods[i2]) check2=true
        }
        if (check2==true){
            switch(arr[i]){
                case 'hundred':{
                    if (arr[i+1]!=='thousand'){
                        switch(r.length){
                            case 0:
                                r=r+'00'
                                break
                            case 1:
                                r=r+'0'
                                break
                        }
                    }
                    else r=r+'00'
                    break
                }
                case 'thousand':{
                    switch(r.length){
                        case 0:
                            r=r+'000'
                            break
                        case 1:
                            r=r+'00'
                            break
                        case 2:
                            r=r+'0'
                            break
                    }
                    break
                }
                case 'million':
                    r=r+'000000'
            }
            //n=0
            check2=false
        }
        else{
            for (let i2 = 0; i2 < numbers_str.length; i2++){
                if (arr[i]==numbers_str[i2]){
                    check1=true
                    if (numbers_int[i2]<10) r=r+numbers_int[i2]
                    else{
                        rt=''+numbers_int[i2]
                        r=r+rt.split("").reverse().join("")
                    }
                }
            }
            if ((check1==false)&&(arr[i]!='and')) console.log('Проверьте правильность написания числа!')
        }
    } 
}
console.log(r.split("").reverse().join(""))

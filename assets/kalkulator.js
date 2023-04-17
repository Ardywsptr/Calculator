/* membuat sebuah objek yang digunakan untuk tempat menyimpan data dan kondisi pd kalkulator
- calculator.displayNumber = angka yang muncul selalu diambil dri sini
- isWaitSecondNumber = kondisi dimana menuggu pengguna menentukan angka kedua dalam menentukan perhitungan*/
const calculator = {
    displayNumber : '0',
    operator : null,
    firstNumber : null,
    isWaitForSecondNumber : false,
}

//fungsi meg-update angka dan menghapus data pada kalkulator
function updateDisplay(){
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

function clearCalculator(){
    calculator.displayNumber = '0';
    calculator.operator = null ;
    calculator.firstNumber = null ;
    calculator.isWaitForSecondNumber = false ;
}

//fungsi untuk memasukan angka ke dalam nilai displayNumber
function inputDigit(digit){
    if(calculator.displayNumber === '0'){
        calculator.displayNumber = digit;
    }else{
        calculator.displayNumber += digit;
    }
}

//fungsi untuk tombol negative
function inverseNumber(){
    if(calculator.displayNumber === '0'){
        return;
    }
    calculator.displayNumber = calculator.displayNumber*-1;
}

//fungsi untuk tombol operator penjumlahan dan pengurangan
function handleOperator(operator){
    if(!calculator.isWaitForSecondNumber){
        calculator.operator = operator;
        calculator.isWaitForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
    
        //mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
        calculator.displayNumber = '0';
    }else{
        alert('operator sudah ditetapkan');
    }
}

//fungsi untuk tombol sama dengan
function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert('Anda belum menetapkan operator');
        return;
    }
    
    let result = 0;
    if (calculator.operator === '+') {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }
    
    //objek yang akan dikirimkan sebagai argumen fungsi puHistory()
    const history = {
        firstNumber: calculator.firstNumber,
        secondNumber: calculator.displayNumber,
        operator: calculator.operator,
        result: result
    }
    putHistory(history);
    calculator.displayNumber = result;
    renderHistory();
}

/*membuat variabel baru dengan nama buttons untuk menginisialisasikan nilai seluruh elemen button
dan memberikan event click pada tiap elemen nya menggunakan looping*/
const buttons = document.querySelectorAll('.button');
for (const button of buttons){
    button.addEventListener('click', function(event){
        //mendapatkan objek elemen yang di klik
        const target = event.target;

        //saat event target merupakan elemen class clear, kita akan panggil fungsi clearCalculator().
        if(target.classList.contains('clear')){
            clearCalculator();
            updateDisplay();
            return;
        }

        //saat event target merupakan elemen class negative, kita akan panggil fungsi inverseNumber().
        if(target.classList.contains('negative')){
            inverseNumber();
            updateDisplay();
            return;
        }

        //saat event target merupakan elemen class equals, kita akan panggil fungsi performCalculator().
        if(target.classList.contains('equals')){
            performCalculation();
            updateDisplay();
            return;
        }

        //saat event target merupakan elemen class operator, kita akan panggil fungsi handleOperator().
        if(target.classList.contains('operator')){
            handleOperator(target.innerText);
            return;
        }

        inputDigit(target.innerText);
        updateDisplay();
    });
}


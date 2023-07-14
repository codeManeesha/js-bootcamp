function calculate(){

    let amount = document.getElementById('Principal');
 
    let rate =document.getElementById("rate")
    let time =document.getElementById("time")

    let interest = (amount.value * (rate.value * 0.01)) / time.value;

    let total = ((amount.value / time.value) + interest)

    document.getElementById("result").innerText = "EMI : (₹)" + total
    
}
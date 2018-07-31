


form1.addEventListener("submit", function (event) {
    event.preventDefault();
    var num1 = document.form1.num1.value;
    var num2 = document.form1.num2.value;
    document.getElementById("answer1").innerHTML = Number(num1) + Number(num2);
})


form2.addEventListener("submit", function (event) {
    event.preventDefault();
    var num3 = document.form2.num3.value;
    var num4 = document.form2.num4.value;
    console.log(Number(num3) - Number(num4))
})


form3.addEventListener("submit", function (event) {
    event.preventDefault();
    var num5 = document.form3.num5.value;
    var num6 = document.form3.num6.value;
    console.log(Number(num5) * Number(num6))
})

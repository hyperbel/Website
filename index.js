function AlertTest(content) {
    alert(content);
}

var counter;


function IncreaseCounter(count) {
    counter = counter + count;
    document.getElementById("CounterDisplay").innerHTML = counter;
}
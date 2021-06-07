function AlertTest(content) {
    alert(content);
}

var counter = 0;

function IncreaseCounter(count) {
    counter = 0;
    counter = counter + count;
    document.getElementById("CounterDisplay").innerHTML = counter;
}
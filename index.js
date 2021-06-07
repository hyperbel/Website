function AlertTest(content) {
    alert(content);
}

var counter = 0;
document.getElementById("CounterDisplay").innerHTML = counter;

function IncreaseCounter(count) {
    
    counter = counter + count;
    document.getElementById("CounterDisplay").innerHTML = counter;
}
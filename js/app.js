let charities = [
    'The Food Bank',
    'Sports Central',
    'Hope Mission',
    'Homeless Foundation',
    'Children\'s Miracle Network'
];

var i = 0;

function charity(label) {
    let div = document.getElementById(i);
    let button = document.createElement('button');
    div.append(button);
    button.innerText = label[i];
    button.addEventListener('click', function() {
        i++;
        charity(label);
    }, {once: true});
}

charity(charities);




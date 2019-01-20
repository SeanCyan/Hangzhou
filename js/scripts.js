const modal = document.querySelector('.modal_container');
const input = document.querySelector('input');

document.querySelector('button').addEventListener('click', function() {
    if (input.value == '') {
        alert('Email address field is blank!');
        return
    } else {
    modal.style.display = "none";
    }
});

document.querySelector('.close').addEventListener('click', function() {
    modal.style.display = "none";
});
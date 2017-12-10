document.querySelector('.customStyleForm').addEventListener('click',function(e){
    if (e.target && e.target.matches('input')) {
        e.target.parentNode.classList.toggle('checked');
    }
    if (e.target && e.target.matches('.selectLabel')) {
        e.target.parentNode.classList.toggle('open');
    }
});

document.querySelector('.customStyleForm').addEventListener('input', function(e){
    if (e.target && e.target.matches('input.textInput')) {
        if (e.target.validity.valid) {
            e.target.parentNode.querySelector('.errorBox').innerHTML = '';
            e.target.parentNode.classList.remove('error');
        }
        else {
            e.target.parentNode.querySelector('.errorBox').innerHTML = "please enter a valid username";
            e.target.parentNode.classList.add('error');
        }        
      }
});
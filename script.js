document.querySelector('.checkboxHolder').addEventListener('click', function(event){
    // console.log(this)
    this.querySelector('input').checked ? this.classList.add('checked') : this.classList.remove('checked');
    // console.log(this.querySelector('input').checked)

})
function validate() {
    
    let input = document.getElementById('email');

    input.addEventListener('change', onChange);

    function onChange(event) {

        const regexValidation = /^[a-z]+@[a-z]+\.[a-z]+$/;
    
        if (regexValidation.test(event.target.value)) {
            event.target.classList.remove('error');
        }
        else {
            event.target.classList.add('error');
        }
        
    }

}

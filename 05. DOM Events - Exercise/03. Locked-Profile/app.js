function lockedProfile() {
    
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(button => button.addEventListener('click', toggle));

    function toggle(event) {
        let profile = event.target.parentElement;
        let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if(isActive) {
            let div = profile.querySelector('div');

            if(event.target.textContent == "Show more") {
                div.style.display = 'block';
                event.target.textContent = "Hide it";
            }
            else { //hide the profile
                div.style.display = 'none';
                event.target.textContent = "Show more";
            }
        }

    }

}
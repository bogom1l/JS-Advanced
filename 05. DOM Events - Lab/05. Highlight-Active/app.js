function focused() {
    
    let inputs = Array.from(document.getElementsByTagName('input')); // array of the four sections

    for (let input of inputs) { //adding events for each section
        input.addEventListener('focus', focusInput);
        input.addEventListener('blur', blurInput);
    }

    function focusInput(event) {
        event //the event that was triggered (clicked, hobered, focused, whatever...)
        .target // the triggered event's target  <->  in that case it's  <input type="text">
        .parentElement // <div>
        .classList // <div>'s class list
        .add('focused'); // 'focused' is already written class in the CSS
    }

    function blurInput(event) {
        event //the event that was triggered
        .target // <input type="text">
        .parentElement // <div>
        .classList // <div>'s class list
        .remove('focused'); // 'focused' is already written class in the CSS
    }
}
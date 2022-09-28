function attachGradientEvents() {
   
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMove);

    function onMove(event) {
        
        let offset = Math.floor(event.offsetX / event.target.clientWidth * 100);

        let result = document.getElementById('result');
        result.textContent = offset + '%';
    };

}
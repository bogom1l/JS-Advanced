function attachEventsListeners() {
    
    let buttonConvert = document.getElementById('convert');
    buttonConvert.addEventListener('click', onClick);

    let metricUnites = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function onClick(e) {
        let fromValue = document.getElementById('inputUnits').value; //string
        let toValue = document.getElementById('outputUnits').value; //string

        let inputDistance = Number(document.getElementById('inputDistance').value); //number
        let outputDistanceEl = document.getElementById('outputDistance'); //number

        let valueInMeters = inputDistance * metricUnites[fromValue];
        let convertedValue = valueInMeters / metricUnites[toValue];
        outputDistanceEl.value = convertedValue;
    }
}
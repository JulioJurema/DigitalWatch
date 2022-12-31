let horaFiltrada;
let minutoFiltrado;
let segundoFiltrado;

function time() {
    getHorarioDeBrasilia();
    const h = document.getElementById("hora");
    const m = document.getElementById("minuto");
    const s = document.getElementById("segundo");

    const Hora = horaFiltrada;
    const Minutos = minutoFiltrado;
    const Segundos = segundoFiltrado;

    h.innerHTML = Hora;
    m.innerHTML = Minutos;
    s.innerHTML = Segundos;

    setTimeout('time()', 500);
}

async function getHorarioDeBrasilia(){
    const URL = "http://worldtimeapi.org/api/timezone/america/bahia";
    fetch(URL).then(res => {
        res.json().then(data => {
            let horaCompleta = data.datetime.split("T", 2)[1];
            horaCompleta = horaCompleta.split(".", 2)[0];
            horaCompleta = horaCompleta.split(":", 3);
            horaFiltrada = horaCompleta[0];
            minutoFiltrado = horaCompleta[1];
            segundoFiltrado = horaCompleta[2];
        })
    }).catch(err =>{
        horaFiltrada = new Date().getHours();
        minutoFiltrado = new Date().getMinutes();
        segundoFiltrado = new Date().getSeconds();

        if(horaFiltrada<10){
            horaFiltrada = '0' + horaFiltrada;
        }else{
            horaFiltrada = horaFiltrada;
        }
        if(minutoFiltrado<10){
            minutoFiltrado = '0' + minutoFiltrado;
        }else{
            minutoFiltrado = minutoFiltrado;
        }
        if(segundoFiltrado<10){
            segundoFiltrado = '0' + segundoFiltrado;
        }else{
            segundoFiltrado = segundoFiltrado;
        }
    });
}
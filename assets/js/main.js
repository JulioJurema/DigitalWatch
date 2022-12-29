function time() {
    const h = document.getElementById("hora");
    const m = document.getElementById("minuto");
    const s = document.getElementById("segundo");

    const Hora = new Date().getHours();
    const Minutos = new Date().getMinutes();
    const Segundos = new Date().getSeconds();

    if(Hora<10){
        h.innerHTML = '0' + Hora;
    }else{
        h.innerHTML = Hora;
    }
    
    if(Minutos<10){
        m.innerHTML = '0' + Minutos;
    }else{
        m.innerHTML = Minutos;
    }

    if(Segundos<10){
        s.innerHTML = '0' + Segundos;
    }else{
        s.innerHTML = Segundos;
    }

    setTimeout('time()', 500);
}
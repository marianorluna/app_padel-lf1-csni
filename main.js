// Validación PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
}

// Permisos para notificaciones
//var button = document.getElementById("but-notif");
window.addEventListener('load', function(e) {
    Notification.requestPermission().then(function(result) {
        if(result === 'granted') {
            actualNotification();
        }
    });
});

// // Permisos para notificaciones
// var button = document.getElementById("but-notif");
// button.addEventListener('click', function(e) {
//     Notification.requestPermission().then(function(result) {
//         if(result === 'granted') {
//             actualNotification();
//         }
//     });
// });

// Notificaciones
var notif;
function actualNotification() {
    var notifTitle = "I Liga Femenina de Padel CSNI, bienvenid@!";
    var notifBody = "La aplicación está actualizada al día de hoy "+ hoyFecha();
    //var notifBody = "Has actualizado el sistema de notificaciones. A partir de ahora estarás al tanto de las últimas noticias.";
    var notifImg = './img/icon_64.png';
    var options = {
        body: notifBody,
        icon: notifImg
    }
    notif = new Notification(notifTitle, options);
    setTimeout(actualNotification, 28800000);
};

// ***********************************************
// ***********************************************
// Fecha de HOY
function hoyFecha(){
    function addZero(i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    }
    var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth()+1;
        var yyyy = hoy.getFullYear();
        
        dd = addZero(dd);
        mm = addZero(mm);

        return dd+'/'+mm+'/'+yyyy;
}

// ***********************************************
// ***********************************************

// PESTAÑAS
// Pestañas de Estadísticas: Grupos, Resultados y Posiciones

function openPest1(evt, pestName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pestName).style.display = "block";
    evt.currentTarget.className += " active";
};
document.getElementById("defaultOpen1").click();

// Pestañas de Resultados de los 6 Grupos
function openPest2(evt, pestName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pestName).style.display = "block";
    evt.currentTarget.className += " active";
};
document.getElementById("defaultOpen2").click();

// Pestañas de Información General y Noticias
function openPest3(evt, pestName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent3");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks3");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pestName).style.display = "block";
    evt.currentTarget.className += " active";
};
document.getElementById("defaultOpen3").click();

// Pestañas de Posiciones
function openPest4(evt, pestName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent4");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks4");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pestName).style.display = "block";
    evt.currentTarget.className += " active";
};
document.getElementById("defaultOpen4").click();

// Pestañas de Grupos de Finales
function openPest5(evt, pestName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent5");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks5");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pestName).style.display = "block";
    evt.currentTarget.className += " active";
};
document.getElementById("defaultOpen5").click();

// Pestañas Cuadros Finales Grupo General
function openPest6(evt, pestName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent6");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks6");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pestName).style.display = "block";
    evt.currentTarget.className += " active";
};
document.getElementById("defaultOpen6").click();

// Traducciones
let langESP = document.getElementById("t-esp");
let langENG = document.getElementById("t-eng");
let langCAT = document.getElementById("t-cat");

function tradESP() {
    ingresar();
    for(let i = 0; i < textosID.length; i++) {
        textosID[i].innerHTML = textosESP[i];
    }
};
function tradENG() {
    ingresar();
    for(let i = 0; i < textosID.length; i++) {
        textosID[i].innerHTML = textosENG[i];
    }
};
function tradCAT() {
    ingresar();
    for(let i = 0; i < textosID.length; i++) {
        textosID[i].innerHTML = textosCAT[i];
    }
};

// Menú de lenguajes
const world = document.querySelector('.world');
const lang = document.querySelector('.lang-opc');

world.addEventListener('click', ()=>{
    lang.classList.toggle("spread")
});

window.addEventListener('click', e =>{
    if(lang.classList.contains('spread') 
        && e.target != lang && e.target != world){
        console.log('cerrar')
        lang.classList.toggle("spread")
    }
});

// Portada principal
function ingresar() {
    div = document.getElementById('front-index');
    div.style.display = 'none';
};

// *********************************************
// *********************************************
// *********************************************
// Variables generales Fixture
let jugadores = new Array();
for(let i = 0; i<dataJugadores.length; i++) {
    jugadores.push (
        new Jugador (
            dataJugadores[i].id_j, dataJugadores[i].nom_j, dataJugadores[i].ape_j, dataJugadores[i].rank_j, dataJugadores[i].punt_j, dataJugadores[i].nivel_j)
    )
};
// Funciones de Fixtures
let jugadoresRanking = new Array();
let parejasJugRankA = new Array();
let idParejasA = new Array();
for(let i = 1; i<jugadores.length; i++) {
    if(i<10) {
        idParejasA.push("A0" + i);
    }
    else if(i>=10) {
        idParejasA.push("A" + i);
    }
};
let groups = ["A","B","C","D","E","F"];
let groupSubA = new Array();
let groupA = new Array();

function ordenarJugRank() {
    jugadoresRanking = jugadores;
    jugadoresRanking.sort(function compareNumbers(a,b) {
        if (a.rank_j > b.rank_j) {
            return 1;
        }
        if (a.rank_j < b.rank_j) {
            return -1;
        }
        return 0;
    });
    return jugadoresRanking;
};
function parejasRankingA() {
    ordenarJugRank();   //variable jugadoresRanking ordenada asc
    for(let i = 0; i<jugadoresRanking.length; i++)
        {
        if (i === 0 && jugadoresRanking[i].nivel_j === "A") {
            parejasJugRankA.push (
                new Pareja(
                    "",
                    jugadoresRanking[i].nom_j + " " + jugadoresRanking[i].ape_j,
                    jugadoresRanking[i+1].nom_j + " " + jugadoresRanking[i+1].ape_j
                )
            )
        }
        else if (i === 2 && jugadoresRanking[i].nivel_j === "A") {
            parejasJugRankA.push (
                new Pareja (
                    "",
                    (jugadoresRanking[i].nom_j + " " + jugadoresRanking[i].ape_j),
                    (jugadoresRanking[i+1].nom_j + " " + jugadoresRanking[i+1].ape_j)
                )
            )
        }
        else if (i % 2 === 0 && jugadoresRanking[i].nivel_j === "A") {
            parejasJugRankA.push (
                new Pareja (
                    "",
                    jugadoresRanking[i].nom_j + " " + jugadoresRanking[i].ape_j,
                    jugadoresRanking[i+1].nom_j + " " + jugadoresRanking[i+1].ape_j
                )
            )
        }
    for(let j = 0; j<parejasJugRankA.length; j++) {
        parejasJugRankA[j].id_p = idParejasA[j];
    }
    };
    return parejasJugRankA;
};
function groupLeaguesA() {
    for(let g=0; g<groups.length; g++) {
        groupSubA.push(groups[g]);
    }
    return groupSubA;
};
function parejasGrupoA() {
    if(groupSubA.length > 0) {
        for(let i = 0; i < 6; i++) {
            groupA.push( new Grupo("", new Array()) );
            groupA[0].par_g.push(parejasJugRankA[i]);
        }
        for(let i = 6; i < 12; i++) {
            groupA[1].par_g.push(parejasJugRankA[i]);
        }
        for(let i = 12; i < 17; i++) {
            groupA[2].par_g.push(parejasJugRankA[i]);
        }
        for(let i = 17; i < 22; i++) {
            groupA[3].par_g.push(parejasJugRankA[i]);
        }
        for(let i = 22; i < 28; i++) {
            groupA[4].par_g.push(parejasJugRankA[i]);
        }
        for(let i = 28; i < 34; i++) {
            groupA[5].par_g.push(parejasJugRankA[i]);
        }
        for(let j = 0; j < groupSubA.length; j++) {
            groupA[j].id_g = groupSubA[j];
        }
    }
    return groupA;
};
// IMPORTANTE PARA LOS CÁLCULOS!!!
window.addEventListener("load", groupLeaguesA() );      //carga variable: groupSubA
window.addEventListener("load", parejasRankingA() );    //carga variable: parejasJugRankA   
window.addEventListener("load", parejasGrupoA() );      //carga variable: groupA

// Programación de partidos
// Partido jugado por defecto
let gameDef = new Game(
    "P0", 
    new GameTeam("P00", 0, 0, 0), 
    new GameTeam("P00", 0, 0, 0)
    )
;
function gameJ(eG = gameDef) {
    let game = eG;
    if(game.team1.sets_t[0] != 0 || game.team2.sets_t[0] != 0) {
        for(let i = 0; i < 3; i++) {
            if(game.team1.sets_t[i] > game.team2.sets_t[i]) {
                game.team1.swin_t += 1;
            }
            else if(game.team1.sets_t[i] < game.team2.sets_t[i]) {
                game.team2.swin_t += 1;
            }
            else {
                game.play = false;
                //console.log("UN SET SIN DEFINIR");
            }
        }
    }
    else {
        game.play = false;
        //console.log("FALTAN INGRESAR DATOS");
    }
    if(game.team1.swin_t == 2) {
        game.play = true;
        game.team1.win_t = true;
        //console.log("GANÓ TEAM " + game.team1.id_t);
    }
    else if(game.team2.swin_t == 2) {
        game.play = true;
        game.team2.win_t = true;
        //console.log("GANÓ TEAM " + game.team2.id_t);
    }
    else {
        //console.log("NO SE HA JUGADO AÚN");
    }
};

// Partidos grupos
let gamesA1 = new Array();
let gamesA2 = new Array();
let gamesA3 = new Array();
let gamesA4 = new Array();
let gamesB1 = new Array();
let gamesB2 = new Array();

function gameSubA1() {
    if(groupA[0].par_g.length != 0) {
        for(let i = 0; i < groupA[0].par_g.length; i++) {
            for(let j = 0; j < groupA[0].par_g.length; j++) {
                if(groupA[0].par_g[i].id_p != groupA[0].par_g[j].id_p && groupA[0].par_g[i].id_p < groupA[0].par_g[j].id_p) {
                    gamesA1.push(new Game("", new GameTeam( groupA[0].par_g[i].id_p, 0, 0, 0 ),  new GameTeam( groupA[0].par_g[j].id_p, 0, 0, 0 ) ) );
                }
            }
        }
    }
    for(let i = 0; i < gamesA1.length; i++) {
        gamesA1[i].id_pj = "P" + (i+1);
        //se agregan los resultados desde el archivo data.js
        gamesA1[i].team1.sets_t[0] = resGamesA1[i].s1_t1;
        gamesA1[i].team2.sets_t[0] = resGamesA1[i].s1_t2;
        gamesA1[i].team1.sets_t[1] = resGamesA1[i].s2_t1;
        gamesA1[i].team2.sets_t[1] = resGamesA1[i].s2_t2;
        gamesA1[i].team1.sets_t[2] = resGamesA1[i].s3_t1;
        gamesA1[i].team2.sets_t[2] = resGamesA1[i].s3_t2;
        gamesA1[i].team1.gwin_t = resGamesA1[i].s1_t1 + resGamesA1[i].s2_t1 + resGamesA1[i].s3_t1;
        gamesA1[i].team2.gwin_t = resGamesA1[i].s1_t2 + resGamesA1[i].s2_t2 + resGamesA1[i].s3_t2;
        gameJ(gamesA1[i]);
    }
    return gamesA1;
};
function gameSubA2() {
    if(groupA[1].par_g.length != 0) {
        for(let i = 0; i < groupA[1].par_g.length; i++) {
            for(let j = 0; j < groupA[1].par_g.length; j++) {
                if(groupA[1].par_g[i].id_p != groupA[1].par_g[j].id_p && groupA[1].par_g[i].id_p < groupA[1].par_g[j].id_p) {
                    gamesA2.push(new Game("", new GameTeam( groupA[1].par_g[i].id_p, 0, 0, 0 ),  new GameTeam( groupA[1].par_g[j].id_p, 0, 0, 0 ) ) );
                }
            }
        }
    }
    for(let i = 0; i < gamesA2.length; i++) {
        gamesA2[i].id_pj = "P" + (i+1);
        //se agregan los resultados desde el archivo data.js
        gamesA2[i].team1.sets_t[0] = resGamesA2[i].s1_t1;
        gamesA2[i].team2.sets_t[0] = resGamesA2[i].s1_t2;
        gamesA2[i].team1.sets_t[1] = resGamesA2[i].s2_t1;
        gamesA2[i].team2.sets_t[1] = resGamesA2[i].s2_t2;
        gamesA2[i].team1.sets_t[2] = resGamesA2[i].s3_t1;
        gamesA2[i].team2.sets_t[2] = resGamesA2[i].s3_t2;
        gamesA2[i].team1.gwin_t = resGamesA2[i].s1_t1 + resGamesA2[i].s2_t1 + resGamesA2[i].s3_t1;
        gamesA2[i].team2.gwin_t = resGamesA2[i].s1_t2 + resGamesA2[i].s2_t2 + resGamesA2[i].s3_t2;
        gameJ(gamesA2[i]);
    }
    return gamesA2;
};
function gameSubA3() {
    if(groupA[2].par_g.length != 0) {
        for(let i = 0; i < groupA[2].par_g.length; i++) {
            for(let j = 0; j < groupA[2].par_g.length; j++) {
                if(groupA[2].par_g[i].id_p != groupA[2].par_g[j].id_p && groupA[2].par_g[i].id_p < groupA[2].par_g[j].id_p) {
                    gamesA3.push(new Game("", new GameTeam( groupA[2].par_g[i].id_p, 0, 0, 0 ),  new GameTeam( groupA[2].par_g[j].id_p, 0, 0, 0 ) ) );
                }
            }
        }
    }
    for(let i = 0; i < gamesA3.length; i++) {
        gamesA3[i].id_pj = "P" + (i+1);
        //se agregan los resultados desde el archivo data.js
        gamesA3[i].team1.sets_t[0] = resGamesA3[i].s1_t1;
        gamesA3[i].team2.sets_t[0] = resGamesA3[i].s1_t2;
        gamesA3[i].team1.sets_t[1] = resGamesA3[i].s2_t1;
        gamesA3[i].team2.sets_t[1] = resGamesA3[i].s2_t2;
        gamesA3[i].team1.sets_t[2] = resGamesA3[i].s3_t1;
        gamesA3[i].team2.sets_t[2] = resGamesA3[i].s3_t2;
        gamesA3[i].team1.gwin_t = resGamesA3[i].s1_t1 + resGamesA3[i].s2_t1 + resGamesA3[i].s3_t1;
        gamesA3[i].team2.gwin_t = resGamesA3[i].s1_t2 + resGamesA3[i].s2_t2 + resGamesA3[i].s3_t2;
        gameJ(gamesA3[i]);
    }
    return gamesA3;
};
function gameSubA4() {
    if(groupA[3].par_g.length != 0) {
        for(let i = 0; i < groupA[3].par_g.length; i++) {
            for(let j = 0; j < groupA[3].par_g.length; j++) {
                if(groupA[3].par_g[i].id_p != groupA[3].par_g[j].id_p && groupA[3].par_g[i].id_p < groupA[3].par_g[j].id_p) {
                    gamesA4.push(new Game("", new GameTeam( groupA[3].par_g[i].id_p, 0, 0, 0 ),  new GameTeam( groupA[3].par_g[j].id_p, 0, 0, 0 ) ) );
                }
            }
        }
    }
    for(let i = 0; i < gamesA4.length; i++) {
        gamesA4[i].id_pj = "P" + (i+1);
        //se agregan los resultados desde el archivo data.js
        gamesA4[i].team1.sets_t[0] = resGamesA4[i].s1_t1;
        gamesA4[i].team2.sets_t[0] = resGamesA4[i].s1_t2;
        gamesA4[i].team1.sets_t[1] = resGamesA4[i].s2_t1;
        gamesA4[i].team2.sets_t[1] = resGamesA4[i].s2_t2;
        gamesA4[i].team1.sets_t[2] = resGamesA4[i].s3_t1;
        gamesA4[i].team2.sets_t[2] = resGamesA4[i].s3_t2;
        gamesA4[i].team1.gwin_t = resGamesA4[i].s1_t1 + resGamesA4[i].s2_t1 + resGamesA4[i].s3_t1;
        gamesA4[i].team2.gwin_t = resGamesA4[i].s1_t2 + resGamesA4[i].s2_t2 + resGamesA4[i].s3_t2;
        gameJ(gamesA4[i]);
    }
    return gamesA4;
};
function gameSubB1() {
    if(groupA[4].par_g.length != 0) {
        for(let i = 0; i < groupA[4].par_g.length; i++) {
            for(let j = 0; j < groupA[4].par_g.length; j++) {
                if(groupA[4].par_g[i].id_p != groupA[4].par_g[j].id_p && groupA[4].par_g[i].id_p < groupA[4].par_g[j].id_p) {
                    gamesB1.push(new Game("", new GameTeam( groupA[4].par_g[i].id_p, 0, 0, 0 ),  new GameTeam( groupA[4].par_g[j].id_p, 0, 0, 0 ) ) );
                }
            }
        }
    }
    for(let i = 0; i < gamesB1.length; i++) {
        gamesB1[i].id_pj = "P" + (i+1);
        //se agregan los resultados desde el archivo data.js
        gamesB1[i].team1.sets_t[0] = resGamesB1[i].s1_t1;
        gamesB1[i].team2.sets_t[0] = resGamesB1[i].s1_t2;
        gamesB1[i].team1.sets_t[1] = resGamesB1[i].s2_t1;
        gamesB1[i].team2.sets_t[1] = resGamesB1[i].s2_t2;
        gamesB1[i].team1.sets_t[2] = resGamesB1[i].s3_t1;
        gamesB1[i].team2.sets_t[2] = resGamesB1[i].s3_t2;
        gamesB1[i].team1.gwin_t = resGamesB1[i].s1_t1 + resGamesB1[i].s2_t1 + resGamesB1[i].s3_t1;
        gamesB1[i].team2.gwin_t = resGamesB1[i].s1_t2 + resGamesB1[i].s2_t2 + resGamesB1[i].s3_t2;
        gameJ(gamesB1[i]);
    }
    return gamesB1;
};
function gameSubB2() {
    if(groupA[5].par_g.length != 0) {
        for(let i = 0; i < groupA[5].par_g.length; i++) {
            for(let j = 0; j < groupA[5].par_g.length; j++) {
                if(groupA[5].par_g[i].id_p != groupA[5].par_g[j].id_p && groupA[5].par_g[i].id_p < groupA[5].par_g[j].id_p) {
                    gamesB2.push(new Game("", new GameTeam( groupA[5].par_g[i].id_p, 0, 0, 0 ),  new GameTeam( groupA[5].par_g[j].id_p, 0, 0, 0 ) ) );
                }
            }
        }
    }
    for(let i = 0; i < gamesB2.length; i++) {
        gamesB2[i].id_pj = "P" + (i+1);
        //se agregan los resultados desde el archivo data.js
        gamesB2[i].team1.sets_t[0] = resGamesB2[i].s1_t1;
        gamesB2[i].team2.sets_t[0] = resGamesB2[i].s1_t2;
        gamesB2[i].team1.sets_t[1] = resGamesB2[i].s2_t1;
        gamesB2[i].team2.sets_t[1] = resGamesB2[i].s2_t2;
        gamesB2[i].team1.sets_t[2] = resGamesB2[i].s3_t1;
        gamesB2[i].team2.sets_t[2] = resGamesB2[i].s3_t2;
        gamesB2[i].team1.gwin_t = resGamesB2[i].s1_t1 + resGamesB2[i].s2_t1 + resGamesB2[i].s3_t1;
        gamesB2[i].team2.gwin_t = resGamesB2[i].s1_t2 + resGamesB2[i].s2_t2 + resGamesB2[i].s3_t2;
        gameJ(gamesB2[i]);
    }
    return gamesB2;
};

// IMPORTANTE PARA LOS CÁLCULOS!!!
window.addEventListener("load", gameSubA1() );      //carga variable: gamesA1 (15)
window.addEventListener("load", gameSubA2() );      //carga variable: gamesA2 (15)
window.addEventListener("load", gameSubA3() );      //carga variable: gamesA3 (10)
window.addEventListener("load", gameSubA4() );      //carga variable: gamesA4 (10)
window.addEventListener("load", gameSubB1() );      //carga variable: gamesB1 (15)
window.addEventListener("load", gameSubB2() );      //carga variable: gamesB2 (15)

// Puntaje para ranking ELO
let puntos = [
    {pj: 2},
    {pg: 10},
    {oct_p: 10},
    {oct_g: 50},
    {cto_p: 10},
    {cto_g: 100},
    {sem_p: 10},
    {sem_g: 200},
    {fin_p: 10},
    {fin_g: 500}
];

// Tablas de Posiciones
let tablePosA1 = new Array(6);
let tablePosA2 = new Array(6);
let tablePosA3 = new Array(5);
let tablePosA4 = new Array(5);
let tablePosB1 = new Array(6);
let tablePosB2 = new Array(6);

tablePosA1 = [
    new Position(1), 
    new Position(2), 
    new Position(3), 
    new Position(4), 
    new Position(5), 
    new Position(6)];
tablePosA2 = [
    new Position(1), 
    new Position(2), 
    new Position(3), 
    new Position(4), 
    new Position(5), 
    new Position(6)];
tablePosA3 = [
    new Position(1), 
    new Position(2), 
    new Position(3), 
    new Position(4), 
    new Position(5)];
tablePosA4 = [
    new Position(1), 
    new Position(2), 
    new Position(3), 
    new Position(4), 
    new Position(5)];
tablePosB1 = [
    new Position(1), 
    new Position(2), 
    new Position(3), 
    new Position(4), 
    new Position(5), 
    new Position(6)];
tablePosB2 = [
    new Position(1), 
    new Position(2), 
    new Position(3), 
    new Position(4), 
    new Position(5), 
    new Position(6)];

function posicGA1() {
    for(let i = 0; i < tablePosA1.length; i++) {
        tablePosA1[i].ord_po = (i + 1);
        tablePosA1[i].id_po = groupA[0].par_g[i].id_p;
    }
    return tablePosA1;
}
function posicGA2() {
    for(let i = 0; i < tablePosA2.length; i++) {
        tablePosA2[i].ord_po = (i + 1);
        tablePosA2[i].id_po = groupA[1].par_g[i].id_p;
    }
    return tablePosA2;
}
function posicGA3() {
    for(let i = 0; i < tablePosA3.length; i++) {
        tablePosA3[i].ord_po = (i + 1);
        tablePosA3[i].id_po = groupA[2].par_g[i].id_p;
    }
    return tablePosA3;
}
function posicGA4() {
    for(let i = 0; i < tablePosA4.length; i++) {
        tablePosA4[i].ord_po = (i + 1);
        tablePosA4[i].id_po = groupA[3].par_g[i].id_p;
    }
    return tablePosA4;
}
function posicGB1() {
    for(let i = 0; i < tablePosB1.length; i++) {
        tablePosB1[i].ord_po = (i + 1);
        tablePosB1[i].id_po = groupA[4].par_g[i].id_p;
    }
    return tablePosB1;
}
function posicGB2() {
    for(let i = 0; i < tablePosB2.length; i++) {
        tablePosB2[i].ord_po = (i + 1);
        tablePosB2[i].id_po = groupA[5].par_g[i].id_p;
    }
    return tablePosB2;
}

// IMPORTANTE PARA LOS CÁLCULOS!!!
window.addEventListener("load", posicGA1() );      //carga variable: tablePosA1
window.addEventListener("load", posicGA2() );      //carga variable: tablePosA2
window.addEventListener("load", posicGA3() );      //carga variable: tablePosA3
window.addEventListener("load", posicGA4() );      //carga variable: tablePosA4
window.addEventListener("load", posicGB1() );      //carga variable: tablePosB1
window.addEventListener("load", posicGB2() );      //carga variable: tablePosB2

function dataPosA1() {
    for(let j = 0; j < tablePosA1.length; j++) {
        for(let p = 0; p < gamesA1.length; p++) {
            if(gamesA1[p].play == true) {
                //suma los partidos jugados en la tabla de posiciones
                if(gamesA1[p].team1.id_t == groupA[0].par_g[j].id_p || gamesA1[p].team2.id_t == groupA[0].par_g[j].id_p) {
                    tablePosA1[j].pj_po++;
                }
                //suma los partidos ganados en la tabla de posiciones
                if( (gamesA1[p].team1.win_t == true && gamesA1[p].team1.id_t == tablePosA1[j].id_po) || (gamesA1[p].team2.win_t == true && gamesA1[p].team2.id_t == tablePosA1[j].id_po) ) {
                    tablePosA1[j].pg_po++;
                    //suma puntos por partido ganado a la tabla
                    tablePosA1[j].pts_po = tablePosA1[j].pts_po + puntos[1].pg;
                }
                //suma los partidos perdidos en la tabla de posiciones
                if( (gamesA1[p].team1.win_t == false && gamesA1[p].team1.id_t == tablePosA1[j].id_po) || (gamesA1[p].team2.win_t == false && gamesA1[p].team2.id_t == tablePosA1[j].id_po) ) {
                    tablePosA1[j].pp_po++;
                    //suma puntos por partido perdido a la tabla
                    tablePosA1[j].pts_po = tablePosA1[j].pts_po + puntos[0].pj;
                }
                //cantidad de sets y games en la tabla de posiciones
                if(gamesA1[p].team1.id_t == tablePosA1[j].id_po) {
                    //suma los set ganados
                    tablePosA1[j].sf_po = tablePosA1[j].sf_po + gamesA1[p].team1.swin_t;
                    //suma los set perdidos
                    tablePosA1[j].sc_po = tablePosA1[j].sc_po + gamesA1[p].team2.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesA1[p].team1.sets_t.length; s++) {
                        tablePosA1[j].gf_po = tablePosA1[j].gf_po + gamesA1[p].team1.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesA1[p].team1.sets_t.length; s++) {
                        tablePosA1[j].gc_po = tablePosA1[j].gc_po + gamesA1[p].team2.sets_t[s];
                    }
                }
                else if(gamesA1[p].team2.id_t == tablePosA1[j].id_po) {
                    //suma los set ganados
                    tablePosA1[j].sf_po = tablePosA1[j].sf_po + gamesA1[p].team2.swin_t;
                    //suma los set perdidos
                    tablePosA1[j].sc_po = tablePosA1[j].sc_po + gamesA1[p].team1.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesA1[p].team2.sets_t.length; s++) {
                        tablePosA1[j].gf_po = tablePosA1[j].gf_po + gamesA1[p].team2.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesA1[p].team2.sets_t.length; s++) {
                        tablePosA1[j].gc_po = tablePosA1[j].gc_po + gamesA1[p].team1.sets_t[s];
                    }
                }

            }
        }
        //suma la diferencia de sets en la tabla de posiciones
        tablePosA1[j].ds_po = tablePosA1[j].ds_po + tablePosA1[j].sf_po - tablePosA1[j].sc_po;
        //suma la diferencia de games en la tabla de posiciones
        tablePosA1[j].dg_po = tablePosA1[j].dg_po + tablePosA1[j].gf_po - tablePosA1[j].gc_po;
    }
    return tablePosA1;
}
function dataPosA2() {
    for(let j = 0; j < tablePosA2.length; j++) {
        for(let p = 0; p < gamesA2.length; p++) {
            if(gamesA2[p].play == true) {
                //suma los partidos jugados en la tabla de posiciones
                if(gamesA2[p].team1.id_t == groupA[1].par_g[j].id_p || gamesA2[p].team2.id_t == groupA[1].par_g[j].id_p) {
                    tablePosA2[j].pj_po++;
                }
                //suma los partidos ganados en la tabla de posiciones
                if( (gamesA2[p].team1.win_t == true && gamesA2[p].team1.id_t == tablePosA2[j].id_po) || (gamesA2[p].team2.win_t == true && gamesA2[p].team2.id_t == tablePosA2[j].id_po) ) {
                    tablePosA2[j].pg_po++;
                    //suma puntos por partido ganado a la tabla
                    tablePosA2[j].pts_po = tablePosA2[j].pts_po + puntos[1].pg;
                }
                //suma los partidos perdidos en la tabla de posiciones
                if( (gamesA2[p].team1.win_t == false && gamesA2[p].team1.id_t == tablePosA2[j].id_po) || (gamesA2[p].team2.win_t == false && gamesA2[p].team2.id_t == tablePosA2[j].id_po) ) {
                    tablePosA2[j].pp_po++;
                    //suma puntos por partido perdido a la tabla
                    tablePosA2[j].pts_po = tablePosA2[j].pts_po + puntos[0].pj;
                }
                //cantidad de sets y games en la tabla de posiciones
                if(gamesA2[p].team1.id_t == tablePosA2[j].id_po) {
                    //suma los set ganados
                    tablePosA2[j].sf_po = tablePosA2[j].sf_po + gamesA2[p].team1.swin_t;
                    //suma los set perdidos
                    tablePosA2[j].sc_po = tablePosA2[j].sc_po + gamesA2[p].team2.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesA2[p].team1.sets_t.length; s++) {
                        tablePosA2[j].gf_po = tablePosA2[j].gf_po + gamesA2[p].team1.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesA2[p].team1.sets_t.length; s++) {
                        tablePosA2[j].gc_po = tablePosA2[j].gc_po + gamesA2[p].team2.sets_t[s];
                    }
                }
                else if(gamesA2[p].team2.id_t == tablePosA2[j].id_po) {
                    //suma los set ganados
                    tablePosA2[j].sf_po = tablePosA2[j].sf_po + gamesA2[p].team2.swin_t;
                    //suma los set perdidos
                    tablePosA2[j].sc_po = tablePosA2[j].sc_po + gamesA2[p].team1.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesA2[p].team2.sets_t.length; s++) {
                        tablePosA2[j].gf_po = tablePosA2[j].gf_po + gamesA2[p].team2.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesA2[p].team2.sets_t.length; s++) {
                        tablePosA2[j].gc_po = tablePosA2[j].gc_po + gamesA2[p].team1.sets_t[s];
                    }
                }

            }
        }
        //suma la diferencia de sets en la tabla de posiciones
        tablePosA2[j].ds_po = tablePosA2[j].ds_po + tablePosA2[j].sf_po - tablePosA2[j].sc_po;
        //suma la diferencia de games en la tabla de posiciones
        tablePosA2[j].dg_po = tablePosA2[j].dg_po + tablePosA2[j].gf_po - tablePosA2[j].gc_po;
    }
    return tablePosA2;
}
function dataPosA3() {
    for(let j = 0; j < tablePosA3.length; j++) {
        for(let p = 0; p < gamesA3.length; p++) {
            if(gamesA3[p].play == true) {
                //suma los partidos jugados en la tabla de posiciones
                if(gamesA3[p].team1.id_t == groupA[2].par_g[j].id_p || gamesA3[p].team2.id_t == groupA[2].par_g[j].id_p) {
                    tablePosA3[j].pj_po++;
                }
                //suma los partidos ganados en la tabla de posiciones
                if( (gamesA3[p].team1.win_t == true && gamesA3[p].team1.id_t == tablePosA3[j].id_po) || (gamesA3[p].team2.win_t == true && gamesA3[p].team2.id_t == tablePosA3[j].id_po) ) {
                    tablePosA3[j].pg_po++;
                    //suma puntos por partido ganado a la tabla
                    tablePosA3[j].pts_po = tablePosA3[j].pts_po + puntos[1].pg;
                }
                //suma los partidos perdidos en la tabla de posiciones
                if( (gamesA3[p].team1.win_t == false && gamesA3[p].team1.id_t == tablePosA3[j].id_po) || (gamesA3[p].team2.win_t == false && gamesA3[p].team2.id_t == tablePosA3[j].id_po) ) {
                    tablePosA3[j].pp_po++;
                    //suma puntos por partido perdido a la tabla
                    tablePosA3[j].pts_po = tablePosA3[j].pts_po + puntos[0].pj;
                }
                //cantidad de sets y games en la tabla de posiciones
                if(gamesA3[p].team1.id_t == tablePosA3[j].id_po) {
                    //suma los set ganados
                    tablePosA3[j].sf_po = tablePosA3[j].sf_po + gamesA3[p].team1.swin_t;
                    //suma los set perdidos
                    tablePosA3[j].sc_po = tablePosA3[j].sc_po + gamesA3[p].team2.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesA3[p].team1.sets_t.length; s++) {
                        tablePosA3[j].gf_po = tablePosA3[j].gf_po + gamesA3[p].team1.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesA3[p].team1.sets_t.length; s++) {
                        tablePosA3[j].gc_po = tablePosA3[j].gc_po + gamesA3[p].team2.sets_t[s];
                    }
                }
                else if(gamesA3[p].team2.id_t == tablePosA3[j].id_po) {
                    //suma los set ganados
                    tablePosA3[j].sf_po = tablePosA3[j].sf_po + gamesA3[p].team2.swin_t;
                    //suma los set perdidos
                    tablePosA3[j].sc_po = tablePosA3[j].sc_po + gamesA3[p].team1.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesA3[p].team2.sets_t.length; s++) {
                        tablePosA3[j].gf_po = tablePosA3[j].gf_po + gamesA3[p].team2.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesA3[p].team2.sets_t.length; s++) {
                        tablePosA3[j].gc_po = tablePosA3[j].gc_po + gamesA3[p].team1.sets_t[s];
                    }
                }

            }
        }
        //suma la diferencia de sets en la tabla de posiciones
        tablePosA3[j].ds_po = tablePosA3[j].ds_po + tablePosA3[j].sf_po - tablePosA3[j].sc_po;
        //suma la diferencia de games en la tabla de posiciones
        tablePosA3[j].dg_po = tablePosA3[j].dg_po + tablePosA3[j].gf_po - tablePosA3[j].gc_po;
    }
    return tablePosA3;
}
function dataPosA4() {
    for(let j = 0; j < tablePosA4.length; j++) {
        for(let p = 0; p < gamesA4.length; p++) {
            if(gamesA4[p].play == true) {
                //suma los partidos jugados en la tabla de posiciones
                if(gamesA4[p].team1.id_t == groupA[3].par_g[j].id_p || gamesA4[p].team2.id_t == groupA[3].par_g[j].id_p) {
                    tablePosA4[j].pj_po++;
                }
                //suma los partidos ganados en la tabla de posiciones
                if( (gamesA4[p].team1.win_t == true && gamesA4[p].team1.id_t == tablePosA4[j].id_po) || (gamesA4[p].team2.win_t == true && gamesA4[p].team2.id_t == tablePosA4[j].id_po) ) {
                    tablePosA4[j].pg_po++;
                    //suma puntos por partido ganado a la tabla
                    tablePosA4[j].pts_po = tablePosA4[j].pts_po + puntos[1].pg;
                }
                //suma los partidos perdidos en la tabla de posiciones
                if( (gamesA4[p].team1.win_t == false && gamesA4[p].team1.id_t == tablePosA4[j].id_po) || (gamesA4[p].team2.win_t == false && gamesA4[p].team2.id_t == tablePosA4[j].id_po) ) {
                    tablePosA4[j].pp_po++;
                    //suma puntos por partido perdido a la tabla
                    tablePosA4[j].pts_po = tablePosA4[j].pts_po + puntos[0].pj;
                }
                //cantidad de sets y games en la tabla de posiciones
                if(gamesA4[p].team1.id_t == tablePosA4[j].id_po) {
                    //suma los set ganados
                    tablePosA4[j].sf_po = tablePosA4[j].sf_po + gamesA4[p].team1.swin_t;
                    //suma los set perdidos
                    tablePosA4[j].sc_po = tablePosA4[j].sc_po + gamesA4[p].team2.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesA4[p].team1.sets_t.length; s++) {
                        tablePosA4[j].gf_po = tablePosA4[j].gf_po + gamesA4[p].team1.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesA4[p].team1.sets_t.length; s++) {
                        tablePosA4[j].gc_po = tablePosA4[j].gc_po + gamesA4[p].team2.sets_t[s];
                    }
                }
                else if(gamesA4[p].team2.id_t == tablePosA4[j].id_po) {
                    //suma los set ganados
                    tablePosA4[j].sf_po = tablePosA4[j].sf_po + gamesA4[p].team2.swin_t;
                    //suma los set perdidos
                    tablePosA4[j].sc_po = tablePosA4[j].sc_po + gamesA4[p].team1.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesA4[p].team2.sets_t.length; s++) {
                        tablePosA4[j].gf_po = tablePosA4[j].gf_po + gamesA4[p].team2.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesA4[p].team2.sets_t.length; s++) {
                        tablePosA4[j].gc_po = tablePosA4[j].gc_po + gamesA4[p].team1.sets_t[s];
                    }
                }

            }
        }
        //suma la diferencia de sets en la tabla de posiciones
        tablePosA4[j].ds_po = tablePosA4[j].ds_po + tablePosA4[j].sf_po - tablePosA4[j].sc_po;
        //suma la diferencia de games en la tabla de posiciones
        tablePosA4[j].dg_po = tablePosA4[j].dg_po + tablePosA4[j].gf_po - tablePosA4[j].gc_po;
    }
    return tablePosA4;
}
function dataPosB1() {
    for(let j = 0; j < tablePosB1.length; j++) {
        for(let p = 0; p < gamesB1.length; p++) {
            if(gamesB1[p].play == true) {
                //suma los partidos jugados en la tabla de posiciones
                if(gamesB1[p].team1.id_t == groupA[4].par_g[j].id_p || gamesB1[p].team2.id_t == groupA[4].par_g[j].id_p) {
                    tablePosB1[j].pj_po++;
                }
                //suma los partidos ganados en la tabla de posiciones
                if( (gamesB1[p].team1.win_t == true && gamesB1[p].team1.id_t == tablePosB1[j].id_po) || (gamesB1[p].team2.win_t == true && gamesB1[p].team2.id_t == tablePosB1[j].id_po) ) {
                    tablePosB1[j].pg_po++;
                    //suma puntos por partido ganado a la tabla
                    tablePosB1[j].pts_po = tablePosB1[j].pts_po + puntos[1].pg;
                }
                //suma los partidos perdidos en la tabla de posiciones
                if( (gamesB1[p].team1.win_t == false && gamesB1[p].team1.id_t == tablePosB1[j].id_po) || (gamesB1[p].team2.win_t == false && gamesB1[p].team2.id_t == tablePosB1[j].id_po) ) {
                    tablePosB1[j].pp_po++;
                    //suma puntos por partido perdido a la tabla
                    tablePosB1[j].pts_po = tablePosB1[j].pts_po + puntos[0].pj;
                }
                //cantidad de sets y games en la tabla de posiciones
                if(gamesB1[p].team1.id_t == tablePosB1[j].id_po) {
                    //suma los set ganados
                    tablePosB1[j].sf_po = tablePosB1[j].sf_po + gamesB1[p].team1.swin_t;
                    //suma los set perdidos
                    tablePosB1[j].sc_po = tablePosB1[j].sc_po + gamesB1[p].team2.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesB1[p].team1.sets_t.length; s++) {
                        tablePosB1[j].gf_po = tablePosB1[j].gf_po + gamesB1[p].team1.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesB1[p].team1.sets_t.length; s++) {
                        tablePosB1[j].gc_po = tablePosB1[j].gc_po + gamesB1[p].team2.sets_t[s];
                    }
                }
                else if(gamesB1[p].team2.id_t == tablePosB1[j].id_po) {
                    //suma los set ganados
                    tablePosB1[j].sf_po = tablePosB1[j].sf_po + gamesB1[p].team2.swin_t;
                    //suma los set perdidos
                    tablePosB1[j].sc_po = tablePosB1[j].sc_po + gamesB1[p].team1.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesB1[p].team2.sets_t.length; s++) {
                        tablePosB1[j].gf_po = tablePosB1[j].gf_po + gamesB1[p].team2.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesB1[p].team2.sets_t.length; s++) {
                        tablePosB1[j].gc_po = tablePosB1[j].gc_po + gamesB1[p].team1.sets_t[s];
                    }
                }

            }
        }
        //suma la diferencia de sets en la tabla de posiciones
        tablePosB1[j].ds_po = tablePosB1[j].ds_po + tablePosB1[j].sf_po - tablePosB1[j].sc_po;
        //suma la diferencia de games en la tabla de posiciones
        tablePosB1[j].dg_po = tablePosB1[j].dg_po + tablePosB1[j].gf_po - tablePosB1[j].gc_po;
    }
    return tablePosB1;
}
function dataPosB2() {
    for(let j = 0; j < tablePosB2.length; j++) {
        for(let p = 0; p < gamesB2.length; p++) {
            if(gamesB2[p].play == true) {
                //suma los partidos jugados en la tabla de posiciones
                if(gamesB2[p].team1.id_t == groupA[5].par_g[j].id_p || gamesB2[p].team2.id_t == groupA[5].par_g[j].id_p) {
                    tablePosB2[j].pj_po++;
                }
                //suma los partidos ganados en la tabla de posiciones
                if( (gamesB2[p].team1.win_t == true && gamesB2[p].team1.id_t == tablePosB2[j].id_po) || (gamesB2[p].team2.win_t == true && gamesB2[p].team2.id_t == tablePosB2[j].id_po) ) {
                    tablePosB2[j].pg_po++;
                    //suma puntos por partido ganado a la tabla
                    tablePosB2[j].pts_po = tablePosB2[j].pts_po + puntos[1].pg;
                }
                //suma los partidos perdidos en la tabla de posiciones
                if( (gamesB2[p].team1.win_t == false && gamesB2[p].team1.id_t == tablePosB2[j].id_po) || (gamesB2[p].team2.win_t == false && gamesB2[p].team2.id_t == tablePosB2[j].id_po) ) {
                    tablePosB2[j].pp_po++;
                    //suma puntos por partido perdido a la tabla
                    tablePosB2[j].pts_po = tablePosB2[j].pts_po + puntos[0].pj;
                }
                //cantidad de sets y games en la tabla de posiciones
                if(gamesB2[p].team1.id_t == tablePosB2[j].id_po) {
                    //suma los set ganados
                    tablePosB2[j].sf_po = tablePosB2[j].sf_po + gamesB2[p].team1.swin_t;
                    //suma los set perdidos
                    tablePosB2[j].sc_po = tablePosB2[j].sc_po + gamesB2[p].team2.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesB2[p].team1.sets_t.length; s++) {
                        tablePosB2[j].gf_po = tablePosB2[j].gf_po + gamesB2[p].team1.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesB2[p].team1.sets_t.length; s++) {
                        tablePosB2[j].gc_po = tablePosB2[j].gc_po + gamesB2[p].team2.sets_t[s];
                    }
                }
                else if(gamesB2[p].team2.id_t == tablePosB2[j].id_po) {
                    //suma los set ganados
                    tablePosB2[j].sf_po = tablePosB2[j].sf_po + gamesB2[p].team2.swin_t;
                    //suma los set perdidos
                    tablePosB2[j].sc_po = tablePosB2[j].sc_po + gamesB2[p].team1.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesB2[p].team2.sets_t.length; s++) {
                        tablePosB2[j].gf_po = tablePosB2[j].gf_po + gamesB2[p].team2.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesB2[p].team2.sets_t.length; s++) {
                        tablePosB2[j].gc_po = tablePosB2[j].gc_po + gamesB2[p].team1.sets_t[s];
                    }
                }

            }
        }
        //suma la diferencia de sets en la tabla de posiciones
        tablePosB2[j].ds_po = tablePosB2[j].ds_po + tablePosB2[j].sf_po - tablePosB2[j].sc_po;
        //suma la diferencia de games en la tabla de posiciones
        tablePosB2[j].dg_po = tablePosB2[j].dg_po + tablePosB2[j].gf_po - tablePosB2[j].gc_po;
    }
    return tablePosB2;
}

function ordenTableA1() {
    let table = new Array();
    table = dataPosA1();
    //ordenamiento
    table.sort(function compareNumbers(a,b) {
        //orden puntos DES
        if (a.pts_po > b.pts_po) {
            return -1;
        }
        else if (a.pts_po < b.pts_po) {
            return 1;
        }
        else if (a.pts_po == b.pts_po) {
            //orden diferencia sets DES
            if (a.ds_po > b.ds_po) {
                return -1;
            }
            else if (a.ds_po < b.ds_po) {
                return 1;
            }
            else if (a.ds_po == b.ds_po) {
                //orden diferencia games DES
                if (a.dg_po > b.dg_po) {
                    return -1;
                }
                else if (a.dg_po < b.dg_po) {
                    return 1;
                }
                return 0;
            };
        };
    });
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < tablePosA1.length; i++) {
        for(let j = 0; j < groupA[0].par_g.length; j++) {
            if(tablePosA1[i].id_po == groupA[0].par_g[j].id_p) {
                tablePosA1[i].id_po = groupA[0].par_g[j].j1_p + "<br />" + groupA[0].par_g[j].j2_p;
            }
        }
    }
    //cambiar orden de posiciones nuevamente
    for(let i = 0; i < tablePosA1.length; i++) {
        tablePosA1[i].ord_po = (i+1);
    }
    tablePosA1 = table;
    return tablePosA1;
};
function ordenTableA2() {
    let table = new Array();
    table = dataPosA2();
    //ordenamiento
    table.sort(function compareNumbers(a,b) {
        //orden puntos DES
        if (a.pts_po > b.pts_po) {
            return -1;
        }
        else if (a.pts_po < b.pts_po) {
            return 1;
        }
        else if (a.pts_po == b.pts_po) {
            //orden diferencia sets DES
            if (a.ds_po > b.ds_po) {
                return -1;
            }
            else if (a.ds_po < b.ds_po) {
                return 1;
            }
            else if (a.ds_po == b.ds_po) {
                //orden diferencia games DES
                if (a.dg_po > b.dg_po) {
                    return -1;
                }
                else if (a.dg_po < b.dg_po) {
                    return 1;
                }
                return 0;
            };
        };
    });
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < tablePosA2.length; i++) {
        for(let j = 0; j < groupA[1].par_g.length; j++) {
            if(tablePosA2[i].id_po == groupA[1].par_g[j].id_p) {
                tablePosA2[i].id_po = groupA[1].par_g[j].j1_p + "<br />" + groupA[1].par_g[j].j2_p;
            }
        }
    }
    //cambiar orden de posiciones nuevamente
    for(let i = 0; i < tablePosA2.length; i++) {
        tablePosA2[i].ord_po = (i+1);
    }
    tablePosA2 = table;
    return tablePosA2;
};
function ordenTableA3() {
    let table = new Array();
    table = dataPosA3();
    //ordenamiento
    table.sort(function compareNumbers(a,b) {
        //orden puntos DES
        if (a.pts_po > b.pts_po) {
            return -1;
        }
        else if (a.pts_po < b.pts_po) {
            return 1;
        }
        else if (a.pts_po == b.pts_po) {
            //orden diferencia sets DES
            if (a.ds_po > b.ds_po) {
                return -1;
            }
            else if (a.ds_po < b.ds_po) {
                return 1;
            }
            else if (a.ds_po == b.ds_po) {
                //orden diferencia games DES
                if (a.dg_po > b.dg_po) {
                    return -1;
                }
                else if (a.dg_po < b.dg_po) {
                    return 1;
                }
                return 0;
            };
        };
    });
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < tablePosA3.length; i++) {
        for(let j = 0; j < groupA[2].par_g.length; j++) {
            if(tablePosA3[i].id_po == groupA[2].par_g[j].id_p) {
                tablePosA3[i].id_po = groupA[2].par_g[j].j1_p + "<br />" + groupA[2].par_g[j].j2_p;
            }
        }
    }
    //cambiar orden de posiciones nuevamente
    for(let i = 0; i < tablePosA3.length; i++) {
        tablePosA3[i].ord_po = (i+1);
    }
    tablePosA3 = table;
    return tablePosA3;
};
function ordenTableA4() {
    let table = new Array();
    table = dataPosA4();
    //ordenamiento
    table.sort(function compareNumbers(a,b) {
        //orden puntos DES
        if (a.pts_po > b.pts_po) {
            return -1;
        }
        else if (a.pts_po < b.pts_po) {
            return 1;
        }
        else if (a.pts_po == b.pts_po) {
            //orden diferencia sets DES
            if (a.ds_po > b.ds_po) {
                return -1;
            }
            else if (a.ds_po < b.ds_po) {
                return 1;
            }
            else if (a.ds_po == b.ds_po) {
                //orden diferencia games DES
                if (a.dg_po > b.dg_po) {
                    return -1;
                }
                else if (a.dg_po < b.dg_po) {
                    return 1;
                }
                return 0;
            };
        };
    });
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < tablePosA4.length; i++) {
        for(let j = 0; j < groupA[3].par_g.length; j++) {
            if(tablePosA4[i].id_po == groupA[3].par_g[j].id_p) {
                tablePosA4[i].id_po = groupA[3].par_g[j].j1_p + "<br />" + groupA[3].par_g[j].j2_p;
            }
        }
    }
    //cambiar orden de posiciones nuevamente
    for(let i = 0; i < tablePosA4.length; i++) {
        tablePosA4[i].ord_po = (i+1);
    }
    tablePosA4 = table;
    return tablePosA4;
};
function ordenTableB1() {
    let table = new Array();
    table = dataPosB1();
    //ordenamiento
    table.sort(function compareNumbers(a,b) {
        //orden puntos DES
        if (a.pts_po > b.pts_po) {
            return -1;
        }
        else if (a.pts_po < b.pts_po) {
            return 1;
        }
        else if (a.pts_po == b.pts_po) {
            //orden diferencia sets DES
            if (a.ds_po > b.ds_po) {
                return -1;
            }
            else if (a.ds_po < b.ds_po) {
                return 1;
            }
            else if (a.ds_po == b.ds_po) {
                //orden diferencia games DES
                if (a.dg_po > b.dg_po) {
                    return -1;
                }
                else if (a.dg_po < b.dg_po) {
                    return 1;
                }
                return 0;
            };
        };
    });
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < tablePosB1.length; i++) {
        for(let j = 0; j < groupA[4].par_g.length; j++) {
            if(tablePosB1[i].id_po == groupA[4].par_g[j].id_p) {
                tablePosB1[i].id_po = groupA[4].par_g[j].j1_p + "<br />" + groupA[4].par_g[j].j2_p;
            }
        }
    }
    //cambiar orden de posiciones nuevamente
    for(let i = 0; i < tablePosB1.length; i++) {
        tablePosB1[i].ord_po = (i+1);
    }
    tablePosB1 = table;
    return tablePosB1;
};
function ordenTableB2() {
    let table = new Array();
    table = dataPosB2();
    //ordenamiento
    table.sort(function compareNumbers(a,b) {
        //orden puntos DES
        if (a.pts_po > b.pts_po) {
            return -1;
        }
        else if (a.pts_po < b.pts_po) {
            return 1;
        }
        else if (a.pts_po == b.pts_po) {
            //orden diferencia sets DES
            if (a.ds_po > b.ds_po) {
                return -1;
            }
            else if (a.ds_po < b.ds_po) {
                return 1;
            }
            else if (a.ds_po == b.ds_po) {
                //orden diferencia games DES
                if (a.dg_po > b.dg_po) {
                    return -1;
                }
                else if (a.dg_po < b.dg_po) {
                    return 1;
                }
                return 0;
            };
        };
    });
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < tablePosB2.length; i++) {
        for(let j = 0; j < groupA[5].par_g.length; j++) {
            if(tablePosB2[i].id_po == groupA[5].par_g[j].id_p) {
                tablePosB2[i].id_po = groupA[5].par_g[j].j1_p + "<br />" + groupA[5].par_g[j].j2_p;
            }
        }
    }
    //cambiar orden de posiciones nuevamente
    for(let i = 0; i < tablePosB2.length; i++) {
        tablePosB2[i].ord_po = (i+1);
    }
    tablePosB2 = table;
    return tablePosB2;
};

// IMPORTANTE PARA LOS CÁLCULOS!!!
window.addEventListener("load", ordenTableA1() );      //carga variable: tablePosA1
window.addEventListener("load", ordenTableA2() );      //carga variable: tablePosA2
window.addEventListener("load", ordenTableA3() );      //carga variable: tablePosA3
window.addEventListener("load", ordenTableA4() );      //carga variable: tablePosA4
window.addEventListener("load", ordenTableB1() );      //carga variable: tablePosB1
window.addEventListener("load", ordenTableB2() );      //carga variable: tablePosB2

// *********************************************
//Incluir datos en HTML
let innerDataPosA1 = document.getElementsByClassName("posGruA1");
let innerDataPosA2 = document.getElementsByClassName("posGruA2");
let innerDataPosA3 = document.getElementsByClassName("posGruA3");
let innerDataPosA4 = document.getElementsByClassName("posGruA4");
let innerDataPosB1 = document.getElementsByClassName("posGruB1");
let innerDataPosB2 = document.getElementsByClassName("posGruB2");

//Cambiar encabezados
function includeHeadbPosA1() {
    innerDataPosA1[0].children[0].innerHTML = "Posiciones Grupo A";
    innerDataPosA1[0].children[1].innerHTML = "N°";
    innerDataPosA1[0].children[2].innerHTML = "Team";
    innerDataPosA1[0].children[3].innerHTML = "PJ";
    innerDataPosA1[0].children[4].innerHTML = "PG";
    innerDataPosA1[0].children[5].innerHTML = "PP";
    innerDataPosA1[0].children[6].innerHTML = "SG";
    innerDataPosA1[0].children[7].innerHTML = "DS";
    innerDataPosA1[0].children[8].innerHTML = "DG";
}
function includeHeadbPosA2() {
    innerDataPosA2[0].children[0].innerHTML = "Posiciones Grupo B";
    innerDataPosA2[0].children[1].innerHTML = "N°";
    innerDataPosA2[0].children[2].innerHTML = "Team";
    innerDataPosA2[0].children[3].innerHTML = "PJ";
    innerDataPosA2[0].children[4].innerHTML = "PG";
    innerDataPosA2[0].children[5].innerHTML = "PP";
    innerDataPosA2[0].children[6].innerHTML = "SG";
    innerDataPosA2[0].children[7].innerHTML = "DS";
    innerDataPosA2[0].children[8].innerHTML = "DG";
}
function includeHeadbPosA3() {
    innerDataPosA3[0].children[0].innerHTML = "Posiciones Grupo C";
    innerDataPosA3[0].children[1].innerHTML = "N°";
    innerDataPosA3[0].children[2].innerHTML = "Team";
    innerDataPosA3[0].children[3].innerHTML = "PJ";
    innerDataPosA3[0].children[4].innerHTML = "PG";
    innerDataPosA3[0].children[5].innerHTML = "PP";
    innerDataPosA3[0].children[6].innerHTML = "SG";
    innerDataPosA3[0].children[7].innerHTML = "DS";
    innerDataPosA3[0].children[8].innerHTML = "DG";
}
function includeHeadbPosA4() {
    innerDataPosA4[0].children[0].innerHTML = "Posiciones Grupo D";
    innerDataPosA4[0].children[1].innerHTML = "N°";
    innerDataPosA4[0].children[2].innerHTML = "Team";
    innerDataPosA4[0].children[3].innerHTML = "PJ";
    innerDataPosA4[0].children[4].innerHTML = "PG";
    innerDataPosA4[0].children[5].innerHTML = "PP";
    innerDataPosA4[0].children[6].innerHTML = "SG";
    innerDataPosA4[0].children[7].innerHTML = "DS";
    innerDataPosA4[0].children[8].innerHTML = "DG";
}
function includeHeadbPosB1() {
    innerDataPosB1[0].children[0].innerHTML = "Posiciones Grupo E";
    innerDataPosB1[0].children[1].innerHTML = "N°";
    innerDataPosB1[0].children[2].innerHTML = "Team";
    innerDataPosB1[0].children[3].innerHTML = "PJ";
    innerDataPosB1[0].children[4].innerHTML = "PG";
    innerDataPosB1[0].children[5].innerHTML = "PP";
    innerDataPosB1[0].children[6].innerHTML = "SG";
    innerDataPosB1[0].children[7].innerHTML = "DS";
    innerDataPosB1[0].children[8].innerHTML = "DG";
}
function includeHeadbPosB2() {
    innerDataPosB2[0].children[0].innerHTML = "Posiciones Grupo F";
    innerDataPosB2[0].children[1].innerHTML = "N°";
    innerDataPosB2[0].children[2].innerHTML = "Team";
    innerDataPosB2[0].children[3].innerHTML = "PJ";
    innerDataPosB2[0].children[4].innerHTML = "PG";
    innerDataPosB2[0].children[5].innerHTML = "PP";
    innerDataPosB2[0].children[6].innerHTML = "SG";
    innerDataPosB2[0].children[7].innerHTML = "DS";
    innerDataPosB2[0].children[8].innerHTML = "DG";
}

//Inlcuir los HTML de las tablas de posiciones
function includeDataPosA1() {
    //cambiar encabezados
    includeHeadbPosA1();
    //hacer los innerHTML en tabla
    for(let i = 0; i < tablePosA1.length; i++) {
        innerDataPosA1[0].children[(i+9)].innerHTML = tablePosA1[i].ord_po;
    };
    for(let i = 0; i < tablePosA1.length; i++) {
        innerDataPosA1[0].children[(i+15)].innerHTML = tablePosA1[i].id_po;
    };
    for(let i = 0; i < tablePosA1.length; i++) {
        innerDataPosA1[0].children[(i+21)].innerHTML = tablePosA1[i].pj_po;
    };
    for(let i = 0; i < tablePosA1.length; i++) {
        innerDataPosA1[0].children[(i+27)].innerHTML = tablePosA1[i].pg_po;
    };
    for(let i = 0; i < tablePosA1.length; i++) {
        innerDataPosA1[0].children[(i+33)].innerHTML = tablePosA1[i].pp_po;
    };
    for(let i = 0; i < tablePosA1.length; i++) {
        innerDataPosA1[0].children[(i+39)].innerHTML = tablePosA1[i].sf_po;
    };
    for(let i = 0; i < tablePosA1.length; i++) {
        innerDataPosA1[0].children[(i+45)].innerHTML = tablePosA1[i].ds_po;
    };
    for(let i = 0; i < tablePosA1.length; i++) {
        innerDataPosA1[0].children[(i+51)].innerHTML = tablePosA1[i].dg_po;
    };
}
function includeDataPosA2() {
    //cambiar encabezados
    includeHeadbPosA2();
    //hacer los innerHTML en tabla
    for(let i = 0; i < tablePosA2.length; i++) {
        innerDataPosA2[0].children[(i+9)].innerHTML = tablePosA2[i].ord_po;
    };
    for(let i = 0; i < tablePosA2.length; i++) {
        innerDataPosA2[0].children[(i+15)].innerHTML = tablePosA2[i].id_po;
    };
    for(let i = 0; i < tablePosA2.length; i++) {
        innerDataPosA2[0].children[(i+21)].innerHTML = tablePosA2[i].pj_po;
    };
    for(let i = 0; i < tablePosA2.length; i++) {
        innerDataPosA2[0].children[(i+27)].innerHTML = tablePosA2[i].pg_po;
    };
    for(let i = 0; i < tablePosA2.length; i++) {
        innerDataPosA2[0].children[(i+33)].innerHTML = tablePosA2[i].pp_po;
    };
    for(let i = 0; i < tablePosA2.length; i++) {
        innerDataPosA2[0].children[(i+39)].innerHTML = tablePosA2[i].sf_po;
    };
    for(let i = 0; i < tablePosA2.length; i++) {
        innerDataPosA2[0].children[(i+45)].innerHTML = tablePosA2[i].ds_po;
    };
    for(let i = 0; i < tablePosA2.length; i++) {
        innerDataPosA2[0].children[(i+51)].innerHTML = tablePosA2[i].dg_po;
    };
}
function includeDataPosA3() {
    //cambiar encabezados
    includeHeadbPosA3();
    //hacer los innerHTML en tabla
    for(let i = 0; i < tablePosA3.length; i++) {
        innerDataPosA3[0].children[(i+9)].innerHTML = tablePosA3[i].ord_po;
    };
    for(let i = 0; i < tablePosA3.length; i++) {
        innerDataPosA3[0].children[(i+14)].innerHTML = tablePosA3[i].id_po;
    };
    for(let i = 0; i < tablePosA3.length; i++) {
        innerDataPosA3[0].children[(i+19)].innerHTML = tablePosA3[i].pj_po;
    };
    for(let i = 0; i < tablePosA3.length; i++) {
        innerDataPosA3[0].children[(i+24)].innerHTML = tablePosA3[i].pg_po;
    };
    for(let i = 0; i < tablePosA3.length; i++) {
        innerDataPosA3[0].children[(i+29)].innerHTML = tablePosA3[i].pp_po;
    };
    for(let i = 0; i < tablePosA3.length; i++) {
        innerDataPosA3[0].children[(i+34)].innerHTML = tablePosA3[i].sf_po;
    };
    for(let i = 0; i < tablePosA3.length; i++) {
        innerDataPosA3[0].children[(i+39)].innerHTML = tablePosA3[i].ds_po;
    };
    for(let i = 0; i < tablePosA3.length; i++) {
        innerDataPosA3[0].children[(i+44)].innerHTML = tablePosA3[i].dg_po;
    };
}
function includeDataPosA4() {
    //cambiar encabezados
    includeHeadbPosA4();
    //hacer los innerHTML en tabla
    for(let i = 0; i < tablePosA4.length; i++) {
        innerDataPosA4[0].children[(i+9)].innerHTML = tablePosA4[i].ord_po;
    };
    for(let i = 0; i < tablePosA4.length; i++) {
        innerDataPosA4[0].children[(i+14)].innerHTML = tablePosA4[i].id_po;
    };
    for(let i = 0; i < tablePosA4.length; i++) {
        innerDataPosA4[0].children[(i+19)].innerHTML = tablePosA4[i].pj_po;
    };
    for(let i = 0; i < tablePosA4.length; i++) {
        innerDataPosA4[0].children[(i+24)].innerHTML = tablePosA4[i].pg_po;
    };
    for(let i = 0; i < tablePosA4.length; i++) {
        innerDataPosA4[0].children[(i+29)].innerHTML = tablePosA4[i].pp_po;
    };
    for(let i = 0; i < tablePosA4.length; i++) {
        innerDataPosA4[0].children[(i+34)].innerHTML = tablePosA4[i].sf_po;
    };
    for(let i = 0; i < tablePosA4.length; i++) {
        innerDataPosA4[0].children[(i+39)].innerHTML = tablePosA4[i].ds_po;
    };
    for(let i = 0; i < tablePosA4.length; i++) {
        innerDataPosA4[0].children[(i+44)].innerHTML = tablePosA4[i].dg_po;
    };
}
function includeDataPosB1() {
    //cambiar encabezados
    includeHeadbPosB1();
    //hacer los innerHTML en tabla
    for(let i = 0; i < tablePosB1.length; i++) {
        innerDataPosB1[0].children[(i+9)].innerHTML = tablePosB1[i].ord_po;
    };
    for(let i = 0; i < tablePosB1.length; i++) {
        innerDataPosB1[0].children[(i+15)].innerHTML = tablePosB1[i].id_po;
    };
    for(let i = 0; i < tablePosB1.length; i++) {
        innerDataPosB1[0].children[(i+21)].innerHTML = tablePosB1[i].pj_po;
    };
    for(let i = 0; i < tablePosB1.length; i++) {
        innerDataPosB1[0].children[(i+27)].innerHTML = tablePosB1[i].pg_po;
    };
    for(let i = 0; i < tablePosB1.length; i++) {
        innerDataPosB1[0].children[(i+33)].innerHTML = tablePosB1[i].pp_po;
    };
    for(let i = 0; i < tablePosB1.length; i++) {
        innerDataPosB1[0].children[(i+39)].innerHTML = tablePosB1[i].sf_po;
    };
    for(let i = 0; i < tablePosB1.length; i++) {
        innerDataPosB1[0].children[(i+45)].innerHTML = tablePosB1[i].ds_po;
    };
    for(let i = 0; i < tablePosB1.length; i++) {
        innerDataPosB1[0].children[(i+51)].innerHTML = tablePosB1[i].dg_po;
    };
}
function includeDataPosB2() {
    //cambiar encabezados
    includeHeadbPosB2();
    //hacer los innerHTML en tabla
    for(let i = 0; i < tablePosB2.length; i++) {
        innerDataPosB2[0].children[(i+9)].innerHTML = tablePosB2[i].ord_po;
    };
    for(let i = 0; i < tablePosB2.length; i++) {
        innerDataPosB2[0].children[(i+15)].innerHTML = tablePosB2[i].id_po;
    };
    for(let i = 0; i < tablePosB2.length; i++) {
        innerDataPosB2[0].children[(i+21)].innerHTML = tablePosB2[i].pj_po;
    };
    for(let i = 0; i < tablePosB2.length; i++) {
        innerDataPosB2[0].children[(i+27)].innerHTML = tablePosB2[i].pg_po;
    };
    for(let i = 0; i < tablePosB2.length; i++) {
        innerDataPosB2[0].children[(i+33)].innerHTML = tablePosB2[i].pp_po;
    };
    for(let i = 0; i < tablePosB2.length; i++) {
        innerDataPosB2[0].children[(i+39)].innerHTML = tablePosB2[i].sf_po;
    };
    for(let i = 0; i < tablePosB2.length; i++) {
        innerDataPosB2[0].children[(i+45)].innerHTML = tablePosB2[i].ds_po;
    };
    for(let i = 0; i < tablePosB2.length; i++) {
        innerDataPosB2[0].children[(i+51)].innerHTML = tablePosB2[i].dg_po;
    };
}

// IMPORTANTE PARA LOS CÁLCULOS!!!
window.addEventListener("load", includeDataPosA1() );      //inners en A1
window.addEventListener("load", includeDataPosA2() );      //inners en A2
window.addEventListener("load", includeDataPosA3() );      //inners en A3
window.addEventListener("load", includeDataPosA4() );      //inners en A4
window.addEventListener("load", includeDataPosB1() );      //inners en B1
window.addEventListener("load", includeDataPosB2() );      //inners en B2

//Incluir resultados en HTML
let innerResA1 = document.getElementsByClassName("resA1");
let innerResA2 = document.getElementsByClassName("resA2");
let innerResA3 = document.getElementsByClassName("resA3");
let innerResA4 = document.getElementsByClassName("resA4");
let innerResB1 = document.getElementsByClassName("resB1");
let innerResB2 = document.getElementsByClassName("resB2");

function includeResA1() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < gamesA1.length; j++) {
        innerResA1[0].children[j].children[1].innerHTML = gamesA1[j].team1.id_t;
        innerResA1[0].children[j].children[2].innerHTML = gamesA1[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerResA1[0].children.length; i++) {
        innerResA1[0].children[i].children[3].innerHTML = resGamesA1[i].s1_t1;
        innerResA1[0].children[i].children[4].innerHTML = resGamesA1[i].s1_t2;
        innerResA1[0].children[i].children[5].innerHTML = resGamesA1[i].s2_t1;
        innerResA1[0].children[i].children[6].innerHTML = resGamesA1[i].s2_t2;
        innerResA1[0].children[i].children[7].innerHTML = resGamesA1[i].s3_t1;
        innerResA1[0].children[i].children[8].innerHTML = resGamesA1[i].s3_t2;
    }
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < gamesA1.length; i++) {
        for(let j = 0; j < groupA[0].par_g.length; j++) {
            if(innerResA1[0].children[i].children[1].innerHTML == groupA[0].par_g[j].id_p) {
                innerResA1[0].children[i].children[1].innerHTML = groupA[0].par_g[j].j1_p + "<br />" + groupA[0].par_g[j].j2_p;
            }
            if(innerResA1[0].children[i].children[2].innerHTML == groupA[0].par_g[j].id_p) {
                innerResA1[0].children[i].children[2].innerHTML = groupA[0].par_g[j].j1_p + "<br />" + groupA[0].par_g[j].j2_p;
            }
        }
    }
};
function includeResA2() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < gamesA2.length; j++) {
        innerResA2[0].children[j].children[1].innerHTML = gamesA2[j].team1.id_t;
        innerResA2[0].children[j].children[2].innerHTML = gamesA2[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerResA2[0].children.length; i++) {
        innerResA2[0].children[i].children[3].innerHTML = resGamesA2[i].s1_t1;
        innerResA2[0].children[i].children[4].innerHTML = resGamesA2[i].s1_t2;
        innerResA2[0].children[i].children[5].innerHTML = resGamesA2[i].s2_t1;
        innerResA2[0].children[i].children[6].innerHTML = resGamesA2[i].s2_t2;
        innerResA2[0].children[i].children[7].innerHTML = resGamesA2[i].s3_t1;
        innerResA2[0].children[i].children[8].innerHTML = resGamesA2[i].s3_t2;
    }
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < gamesA2.length; i++) {
        for(let j = 0; j < groupA[1].par_g.length; j++) {
            if(innerResA2[0].children[i].children[1].innerHTML == groupA[1].par_g[j].id_p) {
                innerResA2[0].children[i].children[1].innerHTML = groupA[1].par_g[j].j1_p + "<br />" + groupA[1].par_g[j].j2_p;
            }
            if(innerResA2[0].children[i].children[2].innerHTML == groupA[1].par_g[j].id_p) {
                innerResA2[0].children[i].children[2].innerHTML = groupA[1].par_g[j].j1_p + "<br />" + groupA[1].par_g[j].j2_p;
            }
        }
    }
};
function includeResA3() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < gamesA3.length; j++) {
        innerResA3[0].children[j].children[1].innerHTML = gamesA3[j].team1.id_t;
        innerResA3[0].children[j].children[2].innerHTML = gamesA3[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerResA3[0].children.length; i++) {
        innerResA3[0].children[i].children[3].innerHTML = resGamesA3[i].s1_t1;
        innerResA3[0].children[i].children[4].innerHTML = resGamesA3[i].s1_t2;
        innerResA3[0].children[i].children[5].innerHTML = resGamesA3[i].s2_t1;
        innerResA3[0].children[i].children[6].innerHTML = resGamesA3[i].s2_t2;
        innerResA3[0].children[i].children[7].innerHTML = resGamesA3[i].s3_t1;
        innerResA3[0].children[i].children[8].innerHTML = resGamesA3[i].s3_t2;
    }
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < gamesA3.length; i++) {
        for(let j = 0; j < groupA[2].par_g.length; j++) {
            if(innerResA3[0].children[i].children[1].innerHTML == groupA[2].par_g[j].id_p) {
                innerResA3[0].children[i].children[1].innerHTML = groupA[2].par_g[j].j1_p + "<br />" + groupA[2].par_g[j].j2_p;
            }
            if(innerResA3[0].children[i].children[2].innerHTML == groupA[2].par_g[j].id_p) {
                innerResA3[0].children[i].children[2].innerHTML = groupA[2].par_g[j].j1_p + "<br />" + groupA[2].par_g[j].j2_p;
            }
        }
    }
};
function includeResA4() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < gamesA4.length; j++) {
        innerResA4[0].children[j].children[1].innerHTML = gamesA4[j].team1.id_t;
        innerResA4[0].children[j].children[2].innerHTML = gamesA4[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerResA4[0].children.length; i++) {
        innerResA4[0].children[i].children[3].innerHTML = resGamesA4[i].s1_t1;
        innerResA4[0].children[i].children[4].innerHTML = resGamesA4[i].s1_t2;
        innerResA4[0].children[i].children[5].innerHTML = resGamesA4[i].s2_t1;
        innerResA4[0].children[i].children[6].innerHTML = resGamesA4[i].s2_t2;
        innerResA4[0].children[i].children[7].innerHTML = resGamesA4[i].s3_t1;
        innerResA4[0].children[i].children[8].innerHTML = resGamesA4[i].s3_t2;
    }
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < gamesA4.length; i++) {
        for(let j = 0; j < groupA[3].par_g.length; j++) {
            if(innerResA4[0].children[i].children[1].innerHTML == groupA[3].par_g[j].id_p) {
                innerResA4[0].children[i].children[1].innerHTML = groupA[3].par_g[j].j1_p + "<br />" + groupA[3].par_g[j].j2_p;
            }
            if(innerResA4[0].children[i].children[2].innerHTML == groupA[3].par_g[j].id_p) {
                innerResA4[0].children[i].children[2].innerHTML = groupA[3].par_g[j].j1_p + "<br />" + groupA[3].par_g[j].j2_p;
            }
        }
    }
};
function includeResB1() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < gamesB1.length; j++) {
        innerResB1[0].children[j].children[1].innerHTML = gamesB1[j].team1.id_t;
        innerResB1[0].children[j].children[2].innerHTML = gamesB1[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerResB1[0].children.length; i++) {
        innerResB1[0].children[i].children[3].innerHTML = resGamesB1[i].s1_t1;
        innerResB1[0].children[i].children[4].innerHTML = resGamesB1[i].s1_t2;
        innerResB1[0].children[i].children[5].innerHTML = resGamesB1[i].s2_t1;
        innerResB1[0].children[i].children[6].innerHTML = resGamesB1[i].s2_t2;
        innerResB1[0].children[i].children[7].innerHTML = resGamesB1[i].s3_t1;
        innerResB1[0].children[i].children[8].innerHTML = resGamesB1[i].s3_t2;
    }
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < gamesB1.length; i++) {
        for(let j = 0; j < groupA[4].par_g.length; j++) {
            if(innerResB1[0].children[i].children[1].innerHTML == groupA[4].par_g[j].id_p) {
                innerResB1[0].children[i].children[1].innerHTML = groupA[4].par_g[j].j1_p + "<br />" + groupA[4].par_g[j].j2_p;
            }
            if(innerResB1[0].children[i].children[2].innerHTML == groupA[4].par_g[j].id_p) {
                innerResB1[0].children[i].children[2].innerHTML = groupA[4].par_g[j].j1_p + "<br />" + groupA[4].par_g[j].j2_p;
            }
        }
    }
};
function includeResB2() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < gamesB2.length; j++) {
        innerResB2[0].children[j].children[1].innerHTML = gamesB2[j].team1.id_t;
        innerResB2[0].children[j].children[2].innerHTML = gamesB2[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerResB2[0].children.length; i++) {
        innerResB2[0].children[i].children[3].innerHTML = resGamesB2[i].s1_t1;
        innerResB2[0].children[i].children[4].innerHTML = resGamesB2[i].s1_t2;
        innerResB2[0].children[i].children[5].innerHTML = resGamesB2[i].s2_t1;
        innerResB2[0].children[i].children[6].innerHTML = resGamesB2[i].s2_t2;
        innerResB2[0].children[i].children[7].innerHTML = resGamesB2[i].s3_t1;
        innerResB2[0].children[i].children[8].innerHTML = resGamesB2[i].s3_t2;
    }
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < gamesB2.length; i++) {
        for(let j = 0; j < groupA[5].par_g.length; j++) {
            if(innerResB2[0].children[i].children[1].innerHTML == groupA[5].par_g[j].id_p) {
                innerResB2[0].children[i].children[1].innerHTML = groupA[5].par_g[j].j1_p + "<br />" + groupA[5].par_g[j].j2_p;
            }
            if(innerResB2[0].children[i].children[2].innerHTML == groupA[5].par_g[j].id_p) {
                innerResB2[0].children[i].children[2].innerHTML = groupA[5].par_g[j].j1_p + "<br />" + groupA[5].par_g[j].j2_p;
            }
        }
    }
};

// IMPORTANTE PARA LOS CÁLCULOS!!!
window.addEventListener("load", includeResA1() );      //inners res A1
window.addEventListener("load", includeResA2() );      //inners res A2
window.addEventListener("load", includeResA3() );      //inners res A3
window.addEventListener("load", includeResA4() );      //inners res A4
window.addEventListener("load", includeResB1() );      //inners res B1
window.addEventListener("load", includeResB2() );      //inners res B2

// *********************************************
//Clasificación a los cuadros
let allTablesFinalA = [tablePosA1, tablePosA2, tablePosA3, tablePosA4, tablePosB1, tablePosB2];
let cantClasifPorGrupo = 2;
let cantMejTerceros = 4;
let mejoresTerceros = new Array(cantMejTerceros);
let clasificadosA = new Array();
let octavosFinalA = new Array();
let cuartosFinalA = new Array();
let semisFinalA = new Array();
let finalFinalA = new Array();
function obtenerClasifA() {
    let terceros = new Array;
    for(let i=0; i < allTablesFinalA.length; i++) {
        for(let j=0; j < cantClasifPorGrupo; j++) {
            clasificadosA.push( new Clasificado(
                groupSubA[i],
                allTablesFinalA[i][j].ord_po,
                allTablesFinalA[i][j].id_po,
                allTablesFinalA[i][j].pts_po,
                allTablesFinalA[i][j].elo_po
            ) );
        }
    }
    terceros = [tablePosA1[2], tablePosA2[2], tablePosA3[2], tablePosA4[2], tablePosB1[2], tablePosB2[2]];
    
    terceros.sort(function compareNumbers(a,b) {
        //orden puntos DES
        if (a.pts_po > b.pts_po) {
            return -1;
        }
        else if (a.pts_po < b.pts_po) {
            return 1;
        }
        else if (a.pts_po == b.pts_po) {
            //orden diferencia sets DES
            if (a.ds_po > b.ds_po) {
                return -1;
            }
            else if (a.ds_po < b.ds_po) {
                return 1;
            }
            else if (a.ds_po == b.ds_po) {
                //orden diferencia games DES
                if (a.dg_po > b.dg_po) {
                    return -1;
                }
                else if (a.dg_po < b.dg_po) {
                    return 1;
                }
                return 0;
            };
        };
    });
    mejoresTerceros[0] = terceros[1];
    mejoresTerceros[1] = terceros[0];
    mejoresTerceros[2] = terceros[3];
    mejoresTerceros[3] = terceros[2];
    for(let i=0; i < cantMejTerceros; i++) {
        clasificadosA.push( new Clasificado(
            "M3",
            mejoresTerceros[i].ord_po,
            mejoresTerceros[i].id_po,
            mejoresTerceros[i].pts_po,
            mejoresTerceros[i].elo_po
        ) );
    }
    return clasificadosA;
};
function octavosFA(g) {
    g = clasificadosA;
    let clasif = new Array();
    clasif[0] = g[0];
    clasif[1] = g[15];
    clasif[2] = g[5];
    clasif[3] = g[11];
    clasif[4] = g[4];
    clasif[5] = g[13];
    clasif[6] = g[1];
    clasif[7] = g[10];
    clasif[8] = g[2];
    clasif[9] = g[14];
    clasif[10] = g[7];
    clasif[11] = g[9];
    clasif[12] = g[6];
    clasif[13] = g[12];
    clasif[14] = g[3];
    clasif[15] = g[8];

    for(let i=0; i < clasif.length; i=i+2) {
        octavosFinalA.push(new Game("", new GameTeam( clasif[i].id_cl, 0, 0, 0 ),  new GameTeam( clasif[i+1].id_cl, 0, 0, 0 )));
    }
    for(let i = 0; i < clasif.length/2; i++) {
        octavosFinalA[i].id_pj = "8F" + (i+1);
        //se agregan los resultados desde el archivo data.js
        octavosFinalA[i].team1.sets_t[0] = res8FA[i].s1_t1;
        octavosFinalA[i].team2.sets_t[0] = res8FA[i].s1_t2;
        octavosFinalA[i].team1.sets_t[1] = res8FA[i].s2_t1;
        octavosFinalA[i].team2.sets_t[1] = res8FA[i].s2_t2;
        octavosFinalA[i].team1.sets_t[2] = res8FA[i].s3_t1;
        octavosFinalA[i].team2.sets_t[2] = res8FA[i].s3_t2;
        octavosFinalA[i].team1.gwin_t = res8FA[i].s1_t1 + res8FA[i].s2_t1 + res8FA[i].s3_t1;
        octavosFinalA[i].team2.gwin_t = res8FA[i].s1_t2 + res8FA[i].s2_t2 + res8FA[i].s3_t2;
        gameJ(octavosFinalA[i]);
    }

    return octavosFinalA;
};
function cuartosFA(oc) {
    oc = octavosFinalA;
    g = new Array;
    for(let i=0; i < octavosFinalA.length; i++) {
        if(oc[i].team1.win_t == true) {
            g.push( new GameTeam( oc[i].team1.id_t, 0, 0, 0 ));
        }
        else {
            g.push( new GameTeam( oc[i].team2.id_t, 0, 0, 0 ));
        }
    }
    for(let i=0; i < octavosFinalA.length; i=i+2) {
        cuartosFinalA.push(new Game("", g[i], g[i+1] ) );
    }
    for(let i = 0; i < octavosFinalA.length/2; i++) {
        cuartosFinalA[i].id_pj = "4F" + (i+1);
        //se agregan los resultados desde el archivo data.js
        cuartosFinalA[i].team1.sets_t[0] = res4FA[i].s1_t1;
        cuartosFinalA[i].team2.sets_t[0] = res4FA[i].s1_t2;
        cuartosFinalA[i].team1.sets_t[1] = res4FA[i].s2_t1;
        cuartosFinalA[i].team2.sets_t[1] = res4FA[i].s2_t2;
        cuartosFinalA[i].team1.sets_t[2] = res4FA[i].s3_t1;
        cuartosFinalA[i].team2.sets_t[2] = res4FA[i].s3_t2;
        cuartosFinalA[i].team1.gwin_t = res4FA[i].s1_t1 + res4FA[i].s2_t1 + res4FA[i].s3_t1;
        cuartosFinalA[i].team2.gwin_t = res4FA[i].s1_t2 + res4FA[i].s2_t2 + res4FA[i].s3_t2;
        gameJ(cuartosFinalA[i]);
    }
    return cuartosFinalA;
};
function semisFA(cf) {
    cf = cuartosFinalA;
    g = new Array;
    for(let i=0; i < cuartosFinalA.length; i++) {
        if(cf[i].team1.win_t == true) {
            g.push( new GameTeam( cf[i].team1.id_t, 0, 0, 0 ));
        }
        else {
            g.push( new GameTeam( cf[i].team2.id_t, 0, 0, 0 ));
        }
    }
    for(let i=0; i < cuartosFinalA.length; i=i+2) {
        semisFinalA.push(new Game("", g[i], g[i+1] ) );
    }
    for(let i = 0; i < cuartosFinalA.length/2; i++) {
        semisFinalA[i].id_pj = "2F" + (i+1);
        //se agregan los resultados desde el archivo data.js
        semisFinalA[i].team1.sets_t[0] = res2FA[i].s1_t1;
        semisFinalA[i].team2.sets_t[0] = res2FA[i].s1_t2;
        semisFinalA[i].team1.sets_t[1] = res2FA[i].s2_t1;
        semisFinalA[i].team2.sets_t[1] = res2FA[i].s2_t2;
        semisFinalA[i].team1.sets_t[2] = res2FA[i].s3_t1;
        semisFinalA[i].team2.sets_t[2] = res2FA[i].s3_t2;
        semisFinalA[i].team1.gwin_t = res2FA[i].s1_t1 + res2FA[i].s2_t1 + res2FA[i].s3_t1;
        semisFinalA[i].team2.gwin_t = res2FA[i].s1_t2 + res2FA[i].s2_t2 + res2FA[i].s3_t2;
        gameJ(semisFinalA[i]);
    }
    return semisFinalA;
};
function finalFA(f) {
    f = semisFinalA;
    g = new Array;
    for(let i=0; i < semisFinalA.length; i++) {
        if(f[i].team1.win_t == true) {
            g.push( new GameTeam( f[i].team1.id_t, 0, 0, 0 ));
        }
        else {
            g.push( new GameTeam( f[i].team2.id_t, 0, 0, 0 ));
        }
    }
    for(let i=0; i < semisFinalA.length; i=i+2) {
        finalFinalA.push(new Game("", g[i], g[i+1] ) );
    }
    for(let i = 0; i < semisFinalA.length/2; i++) {
        finalFinalA[i].id_pj = "2F" + (i+1);
        //se agregan los resultados desde el archivo data.js
        finalFinalA[i].team1.sets_t[0] = res1FA[i].s1_t1;
        finalFinalA[i].team2.sets_t[0] = res1FA[i].s1_t2;
        finalFinalA[i].team1.sets_t[1] = res1FA[i].s2_t1;
        finalFinalA[i].team2.sets_t[1] = res1FA[i].s2_t2;
        finalFinalA[i].team1.sets_t[2] = res1FA[i].s3_t1;
        finalFinalA[i].team2.sets_t[2] = res1FA[i].s3_t2;
        finalFinalA[i].team1.gwin_t = res1FA[i].s1_t1 + res1FA[i].s2_t1 + res1FA[i].s3_t1;
        finalFinalA[i].team2.gwin_t = res1FA[i].s1_t2 + res1FA[i].s2_t2 + res1FA[i].s3_t2;
        gameJ(finalFinalA[i]);
    }
    return finalFinalA;
};

// IMPORTANTE PARA LOS CÁLCULOS!!!
window.addEventListener("load", obtenerClasifA() );     //carga variable: clasificadosA
window.addEventListener("load", octavosFA() );          //carga variable: octavosFinalA
window.addEventListener("load", cuartosFA() );          //carga variable: cuartosFinalA
window.addEventListener("load", semisFA() );            //carga variable: semisFinalA
window.addEventListener("load", finalFA() );            //carga variable: finalFinalA

//Incluir resultados en HTML
let innerRes8A = document.getElementsByClassName("res8vosA");
let innerRes4A = document.getElementsByClassName("res4vosA");
let innerRes2A = document.getElementsByClassName("res2vosA");
let innerRes1A = document.getElementsByClassName("res1vosA");

function includeRes8A() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < octavosFinalA.length; j++) {
        innerRes8A[0].children[j].children[1].innerHTML = octavosFinalA[j].team1.id_t;
        innerRes8A[0].children[j].children[2].innerHTML = octavosFinalA[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerRes8A[0].children.length; i++) {
        innerRes8A[0].children[i].children[3].innerHTML = octavosFinalA[i].team1.sets_t[0];
        innerRes8A[0].children[i].children[4].innerHTML = octavosFinalA[i].team2.sets_t[0];
        innerRes8A[0].children[i].children[5].innerHTML = octavosFinalA[i].team1.sets_t[1];
        innerRes8A[0].children[i].children[6].innerHTML = octavosFinalA[i].team2.sets_t[1];
        innerRes8A[0].children[i].children[7].innerHTML = octavosFinalA[i].team1.sets_t[2];
        innerRes8A[0].children[i].children[8].innerHTML = octavosFinalA[i].team2.sets_t[2];
    }
};
function includeRes4A() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < cuartosFinalA.length; j++) {
        innerRes4A[0].children[j].children[1].innerHTML = cuartosFinalA[j].team1.id_t;
        innerRes4A[0].children[j].children[2].innerHTML = cuartosFinalA[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerRes4A[0].children.length; i++) {
        innerRes4A[0].children[i].children[3].innerHTML = cuartosFinalA[i].team1.sets_t[0];
        innerRes4A[0].children[i].children[4].innerHTML = cuartosFinalA[i].team2.sets_t[0];
        innerRes4A[0].children[i].children[5].innerHTML = cuartosFinalA[i].team1.sets_t[1];
        innerRes4A[0].children[i].children[6].innerHTML = cuartosFinalA[i].team2.sets_t[1];
        innerRes4A[0].children[i].children[7].innerHTML = cuartosFinalA[i].team1.sets_t[2];
        innerRes4A[0].children[i].children[8].innerHTML = cuartosFinalA[i].team2.sets_t[2];
    }
};
function includeRes2A() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < semisFinalA.length; j++) {
        innerRes2A[0].children[j].children[1].innerHTML = semisFinalA[j].team1.id_t;
        innerRes2A[0].children[j].children[2].innerHTML = semisFinalA[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerRes2A[0].children.length; i++) {
        innerRes2A[0].children[i].children[3].innerHTML = semisFinalA[i].team1.sets_t[0];
        innerRes2A[0].children[i].children[4].innerHTML = semisFinalA[i].team2.sets_t[0];
        innerRes2A[0].children[i].children[5].innerHTML = semisFinalA[i].team1.sets_t[1];
        innerRes2A[0].children[i].children[6].innerHTML = semisFinalA[i].team2.sets_t[1];
        innerRes2A[0].children[i].children[7].innerHTML = semisFinalA[i].team1.sets_t[2];
        innerRes2A[0].children[i].children[8].innerHTML = semisFinalA[i].team2.sets_t[2];
    }
};
function includeRes1A() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < finalFinalA.length; j++) {
        innerRes1A[0].children[j].children[1].innerHTML = finalFinalA[j].team1.id_t;
        innerRes1A[0].children[j].children[2].innerHTML = finalFinalA[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerRes1A[0].children.length; i++) {
        innerRes1A[0].children[i].children[3].innerHTML = finalFinalA[i].team1.sets_t[0];
        innerRes1A[0].children[i].children[4].innerHTML = finalFinalA[i].team2.sets_t[0];
        innerRes1A[0].children[i].children[5].innerHTML = finalFinalA[i].team1.sets_t[1];
        innerRes1A[0].children[i].children[6].innerHTML = finalFinalA[i].team2.sets_t[1];
        innerRes1A[0].children[i].children[7].innerHTML = finalFinalA[i].team1.sets_t[2];
        innerRes1A[0].children[i].children[8].innerHTML = finalFinalA[i].team2.sets_t[2];
    }
};

// Inserta texto con nombre de los campeones
let colocarTxtA = document.getElementById("finGa4");
let campeonA = document.createElement("div");
let trophyA = document.createElement("i");
let txtA = document.createElement("p");

function textFinalA() {
    campeonA.className = "parWin";
    trophyA.className = "fas fa-trophy";
    txtA.className = "txtWin";
    if(finalFinalA[0].play == true) {
        if(finalFinalA[0].team1.win_t == true) {
            colocarTxtA.appendChild(campeonA);
            campeonA.appendChild(trophyA);
            campeonA.appendChild(txtA);
            txtA.innerHTML = finalFinalA[0].team1.id_t;
        }
        else {
            colocarTxtA.appendChild(campeonA);
            campeonA.appendChild(trophyA);
            campeonA.appendChild(txtA);
            txtA.innerHTML = finalFinalA[0].team2.id_t;
        }
    };
};

// IMPORTANTE PARA LOS CÁLCULOS!!! Habilitar a medida que existan resultados!!
window.addEventListener("load", includeRes8A() );      //inners res 8vosA
window.addEventListener("load", includeRes4A() );      //inners res 4vosA
window.addEventListener("load", includeRes2A() );      //inners res 2vosA
window.addEventListener("load", includeRes1A() );      //inners res 1vosA
//window.addEventListener("load", textFinalA() );        //añade texto win A

// Resaltar los partidos JUGADOS
let playGreen = document.getElementsByClassName("res-ok");
let playCount = document.getElementsByClassName("partidoJ");
function colorPlayGreen() {
    for(let i=0; i<playCount.length; i++) {
        if(playCount[i].children[3].innerHTML != 0 || playCount[i].children[4].innerHTML != 0) {
            playCount[i].children[0].style.backgroundColor = "#fedcd3";
            playCount[i].children[0].style.color = "#666";
            playCount[i].children[0].style.fontWeight = "500";
            playCount[i].children[0].style.fontSize = "1rem";
            for(let j=3; j<9; j++) {
                playCount[i].children[j].style.color = "#666";
                playCount[i].children[j].style.fontWeight = "500";
                playCount[i].children[j].style.fontSize = "1.1rem";
            }
        }
    }
};
// IMPORTANTE PARA LOS CÁLCULOS!!!
window.addEventListener("load", colorPlayGreen() );      //resalta los partidos jugados


// Marquesina. Cambio de texto y atributo link (cambios en TRANSLATE)
let txtMarque = document.getElementById("text-news");
function cambiarMarque() {
    //txtMarque.href = "https://www.worldpadeltour.com/";
    //txtMarque.innerHTML = "WPT | Adeslas Madrid Open | Finales | Streaming LINK ==>";
    txtMarque.innerHTML = "CUADRO FINAL";
}
// IMPORTANTE PARA LOS CAMBIOS!!!
window.addEventListener("load", cambiarMarque() );      //cambia texto de marquesina

// *********************************************
// *********************************************
// *********************************************
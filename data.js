/**********************************************************
DATOS DE LAS JUGADORAS EN FORMATO JSON
La estructura es la siguiente:
    id_j    = número único identificador
    nom_j   = nombres del jugador
    ape_j   = apellidos del jugador
    rank_j  = ranking del club icaria (inicia con valor
              y luego se modifica dinámicamente)
    punt_j  = puntos obtenidos en base a los partidos
              (valor que se actualiza dinámicamente)
    nivel_j = letra que sirve para asignar grupo (A, B, C)
***********************************************************/
class Jugador
{
    constructor(id, n, a, k, j, l)
    {
        this.id_j = id;
        this.nom_j = n;
        this.ape_j = a;
        this.rank_j = k;
        this.punt_j = j;
        this.nivel_j = l;
        this.elo_j = 0;
        // this.imagen = new Image();
        // this.imagen.src = imagenes[this.id_j]
    }
};

class Pareja
{
    constructor(id, j1, j2)
    {
        this.id_p = id;
        this.j1_p = j1;
        this.j2_p = j2;
        this.punt_p = 0;
        this.elo_p = 0;
    }
};

class Grupo
{
    constructor(id, par)
    {
        this.id_g = id;
        this.par_g = par;
    }
};

class Game
{
    constructor(id, t1, t2)
    {
        this.id_pj = id;
        this.team1 = t1;
        this.team2 = t2;
        this.play = false;
    }
};

class GameTeam
{
    constructor(id, s1, s2, s3)
    {
        this.id_t = id; 
        this.sets_t = [s1, s2, s3];
        this.swin_t = 0;
        this.gwin_t = 0;
        this.win_t = false;
    }
};

class Position
{
    constructor(ord)
    {
        this.ord_po = ord;
        this.id_po = "";
        this.pj_po = 0;
        this.pg_po = 0;
        this.pp_po = 0;
        this.sf_po = 0;
        this.sc_po = 0;
        this.ds_po = 0;
        this.gf_po = 0;
        this.gc_po = 0;
        this.dg_po = 0;
        this.pts_po = 0;
        this.elo_po = 0;
    }
};

class Clasificado
{
    constructor(gr, pos, id, pts, elo)
    {
        this.gr_cl = gr;
        this.pos_cl = pos;
        this.id_cl = id;
        this.pts_cl = pts;
        this.elo_cl = elo;
    }
};

//****************************
//****************************
//Datos de todos los jugadores
let dataJugadores = [
    {   
        id_j: "ic001",
        nom_j: "Marta",
        ape_j: "Prat",
        rank_j: 1,
        punt_j: 0,
        nivel_j: "A"
    },
    {   
        id_j: "ic002",
        nom_j: "Anna",
        ape_j: "Porta",
        rank_j: 2,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic003",
        nom_j: "Paula",
        ape_j: "Arnaldo",
        rank_j: 3,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic004",
        nom_j: "Dolors",
        ape_j: "Rusinés",
        rank_j: 4,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic005",
        nom_j: "Lupe",
        ape_j: "Martín",
        rank_j: 5,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic006",
        nom_j: "Marta",
        ape_j: "Puig",
        rank_j: 6,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic007",
        nom_j: "Esther",
        ape_j: "Guixà",
        rank_j: 7,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic008",
        nom_j: "Eva",
        ape_j: "Mauri",
        rank_j: 8,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic009",
        nom_j: "Gemma",
        ape_j: "Vázquez",
        rank_j: 9,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic010",
        nom_j: "Eva",
        ape_j: "Teruel",
        rank_j: 10,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic011",
        nom_j: "Elisabeth",
        ape_j: "Jori",
        rank_j: 11,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic012",
        nom_j: "Mireia",
        ape_j: "Diaz",
        rank_j: 12,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic013",
        nom_j: "Sonia",
        ape_j: "Forcales",
        rank_j: 13,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic014",
        nom_j: "Iballa",
        ape_j: "Alvarez",
        rank_j: 14,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic015",
        nom_j: "Elena",
        ape_j: "Recasens",
        rank_j: 15,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic016",
        nom_j: "Eva",
        ape_j: "Sanchis",
        rank_j: 16,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic017",
        nom_j: "Rocío",
        ape_j: "Baró",
        rank_j: 17,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic018",
        nom_j: "Mònica",
        ape_j: "Pascual",
        rank_j: 18,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic019",
        nom_j: "Pili",
        ape_j: "Ortiz",
        rank_j: 19,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic020",
        nom_j: "Silvia",
        ape_j: "Navarro",
        rank_j: 20,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic021",
        nom_j: "Ana",
        ape_j: "Serrano",
        rank_j: 21,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic022",
        nom_j: "Julia",
        ape_j: "Oliveros",
        rank_j: 22,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic023",
        nom_j: "Esther",
        ape_j: "Morell",
        rank_j: 23,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic024",
        nom_j: "Marta",
        ape_j: "Mauri",
        rank_j: 24,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic025",
        nom_j: "Mar",
        ape_j: "Ferrera",
        rank_j: 25,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic026",
        nom_j: "Nuria",
        ape_j: "Pedrosa",
        rank_j: 26,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic027",
        nom_j: "Xenia",
        ape_j: "Roa",
        rank_j: 27,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic028",
        nom_j: "Maite",
        ape_j: "Borrega",
        rank_j: 28,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic029",
        nom_j: "Cecile",
        ape_j: "Chavoin",
        rank_j: 29,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic030",
        nom_j: "Elvira",
        ape_j: "Bosch",
        rank_j: 30,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic031",
        nom_j: "Montse",
        ape_j: "Cardona",
        rank_j: 31,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic032",
        nom_j: "Itziar",
        ape_j: "Escudero",
        rank_j: 32,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic033",
        nom_j: "Verlee",
        ape_j: "Lemstra",
        rank_j: 33,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic034",
        nom_j: "Meritxell",
        ape_j: "Armengol",
        rank_j: 34,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic035",
        nom_j: "Inma",
        ape_j: "Trullas",
        rank_j: 35,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic036",
        nom_j: "Masús",
        ape_j: "Carnero",
        rank_j: 36,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic037",
        nom_j: "Susana",
        ape_j: "Folch",
        rank_j: 37,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic038",
        nom_j: "Natalie",
        ape_j: "Karakoussi",
        rank_j: 38,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic039",
        nom_j: "Vanessa",
        ape_j: "Saura",
        rank_j: 39,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic040",
        nom_j: "Sílvia",
        ape_j: "Equisoain",
        rank_j: 40,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic041",
        nom_j: "Matilde",
        ape_j: "Ayesta",
        rank_j: 41,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic042",
        nom_j: "Senda",
        ape_j: "Rovira",
        rank_j: 42,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic043",
        nom_j: "Marta",
        ape_j: "Pursals",
        rank_j: 43,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic044",
        nom_j: "Noemí",
        ape_j: "Olona",
        rank_j: 44,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic045",
        nom_j: "Elvira",
        ape_j: "Andreu",
        rank_j: 45,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic046",
        nom_j: "Encarna",
        ape_j: "Maldonado",
        rank_j: 46,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic047",
        nom_j: "Marga",
        ape_j: "Garcia",
        rank_j: 47,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic048",
        nom_j: "Eva",
        ape_j: "Garachana",
        rank_j: 48,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic049",
        nom_j: "Laura",
        ape_j: "Broc",
        rank_j: 49,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic050",
        nom_j: "Laia",
        ape_j: "Cadenas",
        rank_j: 50,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic051",
        nom_j: "Catriona",
        ape_j: "Johnstone",
        rank_j: 51,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic052",
        nom_j: "Miriam",
        ape_j: "Serrano",
        rank_j: 52,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic053",
        nom_j: "Anna",
        ape_j: "Barnils",
        rank_j: 53,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic054",
        nom_j: "Clara",
        ape_j: "Bassols",
        rank_j: 54,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic055",
        nom_j: "Patricia",
        ape_j: "Lora",
        rank_j: 55,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic056",
        nom_j: "Gema",
        ape_j: "del Hoyo",
        rank_j: 56,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic057",
        nom_j: "Marta",
        ape_j: "Escartin",
        rank_j: 57,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic058",
        nom_j: "Susanna R",
        ape_j: "Riqué",
        rank_j: 58,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic059",
        nom_j: "Susana P",
        ape_j: "Peinado",
        rank_j: 59,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic060",
        nom_j: "Judit",
        ape_j: "Ibañez",
        rank_j: 60,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic061",
        nom_j: "Miriam",
        ape_j: "Sola",
        rank_j: 61,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic062",
        nom_j: "Martina",
        ape_j: "Weiss",
        rank_j: 62,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic063",
        nom_j: "Clara",
        ape_j: "Pla",
        rank_j: 63,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic064",
        nom_j: "Marisa",
        ape_j: "Martin",
        rank_j: 64,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic065",
        nom_j: "Yolanda",
        ape_j: "Gaset",
        rank_j: 65,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic066",
        nom_j: "Susana V",
        ape_j: "Vendrell",
        rank_j: 66,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic067",
        nom_j: "Helena",
        ape_j: "Bertrand",
        rank_j: 67,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic068",
        nom_j: "Montse",
        ape_j: "Armengou",
        rank_j: 68,
        punt_j: 0,
        nivel_j: "A"
    }
];
//****************************
//****************************
//RESULTADOS DE LOS GRUPOS
//Resultados Grupo A
let resGamesA1 = [
    {
        //Partido P1
        //Set1
        s1_t1: 6,
        s1_t2: 1,
        //Set2
        s2_t1: 6,
        s2_t2: 3,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P2
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P3
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P4
        //Set1
        s1_t1: 6,
        s1_t2: 2,
        //Set2
        s2_t1: 6,
        s2_t2: 3,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P5
        //Set1
        s1_t1: 6,
        s1_t2: 2,
        //Set2
        s2_t1: 6,
        s2_t2: 2,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P6
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P7
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P8
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P9
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P10
        //Set1
        s1_t1: 6,
        s1_t2: 2,
        //Set2
        s2_t1: 6,
        s2_t2: 1,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P11
        //Set1
        s1_t1: 6,
        s1_t2: 4,
        //Set2
        s2_t1: 4,
        s2_t2: 6,
        //Set3
        s3_t1: 5,
        s3_t2: 7
    },
    {
        //Partido P12
        //Set1
        s1_t1: 6,
        s1_t2: 2,
        //Set2
        s2_t1: 6,
        s2_t2: 3,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P13
        //Set1
        s1_t1: 3,
        s1_t2: 6,
        //Set2
        s2_t1: 2,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P14
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P15
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Resultados Grupo B
let resGamesA2 = [
    {
        //Partido P1
        //Set1
        s1_t1: 6,
        s1_t2: 4,
        //Set2
        s2_t1: 5,
        s2_t2: 7,
        //Set3
        s3_t1: 5,
        s3_t2: 3
    },
    {
        //Partido P2
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P3
        //Set1
        s1_t1: 2,
        s1_t2: 6,
        //Set2
        s2_t1: 3,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P4
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P5
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P6
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P7
        //Set1
        s1_t1: 6,
        s1_t2: 7,
        //Set2
        s2_t1: 7,
        s2_t2: 6,
        //Set3
        s3_t1: 2,
        s3_t2: 6
    },
    {
        //Partido P8
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P9
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P10
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P11
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P12
        //Set1
        s1_t1: 0,
        s1_t2: 6,
        //Set2
        s2_t1: 2,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P13
        //Set1
        s1_t1: 6,
        s1_t2: 2,
        //Set2
        s2_t1: 6,
        s2_t2: 1,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P14
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P15
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Resultados Grupo C
let resGamesA3 = [
    {
        //Partido P1
        //Set1
        s1_t1: 6,
        s1_t2: 3,
        //Set2
        s2_t1: 6,
        s2_t2: 4,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P2
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P3
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P4
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P5
        //Set1
        s1_t1: 3,
        s1_t2: 6,
        //Set2
        s2_t1: 6,
        s2_t2: 3,
        //Set3
        s3_t1: 7,
        s3_t2: 3
    },
    {
        //Partido P6
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P7
        //Set1
        s1_t1: 3,
        s1_t2: 6,
        //Set2
        s2_t1: 1,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P8
        //Set1
        s1_t1: 3,
        s1_t2: 6,
        //Set2
        s2_t1: 6,
        s2_t2: 4,
        //Set3
        s3_t1: 3,
        s3_t2: 7
    },
    {
        //Partido P9
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P10
        //Set1
        s1_t1: 0,
        s1_t2: 6,
        //Set2
        s2_t1: 3,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Resultados Grupo D
let resGamesA4 = [
    {
        //Partido P1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P2
        //Set1
        s1_t1: 2,
        s1_t2: 6,
        //Set2
        s2_t1: 6,
        s2_t2: 4,
        //Set3
        s3_t1: 2,
        s3_t2: 6
    },
    {
        //Partido P3
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P4
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P5
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P6
        //Set1
        s1_t1: 6,
        s1_t2: 4,
        //Set2
        s2_t1: 2,
        s2_t2: 6,
        //Set3
        s3_t1: 6,
        s3_t2: 4
    },
    {
        //Partido P7
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P8
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P9
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P10
        //Set1
        s1_t1: 1,
        s1_t2: 6,
        //Set2
        s2_t1: 1,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Resultados Grupo E
let resGamesB1 = [
    {
        //Partido P1
        //Set1
        s1_t1: 1,
        s1_t2: 6,
        //Set2
        s2_t1: 1,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P2
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P3
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P4
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P5
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P6
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P7
        //Set1
        s1_t1: 6,
        s1_t2: 2,
        //Set2
        s2_t1: 6,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P8
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P9
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P10
        //Set1
        s1_t1: 1,
        s1_t2: 6,
        //Set2
        s2_t1: 3,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P11
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P12
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P13
        //Set1
        s1_t1: 6,
        s1_t2: 3,
        //Set2
        s2_t1: 7,
        s2_t2: 5,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P14
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P15
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Resultados Grupo F
let resGamesB2 = [
    {
        //Partido P1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P2
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P3
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P4
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P5
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P6
        //Set1
        s1_t1: 6,
        s1_t2: 0,
        //Set2
        s2_t1: 6,
        s2_t2: 1,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P7
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P8
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P9
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P10
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P11
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P12
        //Set1
        s1_t1: 1,
        s1_t2: 6,
        //Set2
        s2_t1: 3,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P13
        //Set1
        s1_t1: 6,
        s1_t2: 3,
        //Set2
        s2_t1: 7,
        s2_t2: 5,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P14
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P15
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];

//****************************
//****************************
//FINALES GRUPO A
//Cuadros Finales - Octavos A
let res8FA = [
    {
        //8F1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F2
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F3
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F4
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F5
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F6
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F7
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F8
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Cuadros Finales - Cuartos A
let res4FA = [
    {
        //4F1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //4F2
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //4F3
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //4F4
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Cuadros Finales - Semifinal A
let res2FA = [
    {
        //SF1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //SF2
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Cuadros Finales - Final A
let res1FA = [
    {
        //F1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//****************************
//****************************

//Resultados de ejemplo GA1
// //Resultados Grupo A1
// let resGamesA1 = [
//     {
//         //Partido P1
//         //Set1
//         s1_t1: 6,
//         s1_t2: 4,
//         //Set2
//         s2_t1: 5,
//         s2_t2: 7,
//         //Set3
//         s3_t1: 7,
//         s3_t2: 6
//     },
//     {
//         //Partido P2
//         //Set1
//         s1_t1: 6,
//         s1_t2: 1,
//         //Set2
//         s2_t1: 6,
//         s2_t2: 2,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     },
//     {
//         //Partido P3
//         //Set1
//         s1_t1: 5,
//         s1_t2: 7,
//         //Set2
//         s2_t1: 4,
//         s2_t2: 6,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     },
//     {
//         //Partido P4
//         //Set1
//         s1_t1: 6,
//         s1_t2: 0,
//         //Set2
//         s2_t1: 5,
//         s2_t2: 7,
//         //Set3
//         s3_t1: 6,
//         s3_t2: 1
//     },
//     {
//         //Partido P5
//         //Set1
//         s1_t1: 7,
//         s1_t2: 6,
//         //Set2
//         s2_t1: 7,
//         s2_t2: 6,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     },
//     {
//         //Partido P6
//         //Set1
//         s1_t1: 3,
//         s1_t2: 6,
//         //Set2
//         s2_t1: 6,
//         s2_t2: 4,
//         //Set3
//         s3_t1: 7,
//         s3_t2: 6
//     },
//     {
//         //Partido P7
//         //Set1
//         s1_t1: 1,
//         s1_t2: 6,
//         //Set2
//         s2_t1: 1,
//         s2_t2: 6,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     },
//     {
//         //Partido P8
//         //Set1
//         s1_t1: 2,
//         s1_t2: 6,
//         //Set2
//         s2_t1: 6,
//         s2_t2: 4,
//         //Set3
//         s3_t1: 6,
//         s3_t2: 4
//     },
//     {
//         //Partido P9
//         //Set1
//         s1_t1: 3,
//         s1_t2: 6,
//         //Set2
//         s2_t1: 5,
//         s2_t2: 7,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     },
//     {
//         //Partido P10
//         //Set1
//         s1_t1: 5,
//         s1_t2: 7,
//         //Set2
//         s2_t1: 5,
//         s2_t2: 7,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     },
//     {
//         //Partido P11
//         //Set1
//         s1_t1: 6,
//         s1_t2: 3,
//         //Set2
//         s2_t1: 6,
//         s2_t2: 4,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     },
//     {
//         //Partido P12
//         //Set1
//         s1_t1: 7,
//         s1_t2: 6,
//         //Set2
//         s2_t1: 1,
//         s2_t2: 6,
//         //Set3
//         s3_t1: 7,
//         s3_t2: 6
//     },
//     {
//         //Partido P13
//         //Set1
//         s1_t1: 6,
//         s1_t2: 0,
//         //Set2
//         s2_t1: 6,
//         s2_t2: 4,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     },
//     {
//         //Partido P14
//         //Set1
//         s1_t1: 6,
//         s1_t2: 0,
//         //Set2
//         s2_t1: 4,
//         s2_t2: 6,
//         //Set3
//         s3_t1: 6,
//         s3_t2: 7
//     },
//     {
//         //Partido P15
//         //Set1
//         s1_t1: 6,
//         s1_t2: 3,
//         //Set2
//         s2_t1: 6,
//         s2_t2: 4,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     }
// ];
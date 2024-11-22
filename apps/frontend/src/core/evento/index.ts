import Evento from "./model/Evento";
import Convidado from "./model/Convidado";
import  complementarConvidado from "./functions/complementarConvidado";
import  complementarEvento from "./functions/complementarEvento";
import  criarConvidadoVazio from "./functions/complementarEvento";
import  criarEventoVazio from "./functions/complementarEvento";



export type { Evento, Convidado };

export {
    complementarConvidado,
    complementarEvento,
    criarConvidadoVazio,
    criarEventoVazio
}
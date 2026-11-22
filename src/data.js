// Sanasto: jokainen rivi = suomi|italia|espanja
window.CATS = [
{id:"perus",ico:"👋",name:"Perusfraasit",d:`hei / moi|ciao|hola
hyvää huomenta / päivää|buongiorno|buenos días
hyvää iltaa (n. klo 16 alkaen)|buonasera|buenas tardes / noches
hyvää yötä|buonanotte|buenas noches
näkemiin|arrivederci|adiós
nähdään pian|a presto|hasta pronto
nähdään huomenna|a domani|hasta mañana
kiitos|grazie|gracias
kiitos paljon|grazie mille|muchas gracias
ole hyvä (vastaus kiitokseen)|prego|de nada
olkaa hyvä (ojentaessa)|ecco / prego|aquí tiene
ole kiltti / pyydän|per favore|por favor
anteeksi (huomion saaminen)|scusi|disculpe
anteeksi (pahoittelu)|mi scusi / mi dispiace|perdón / lo siento
kyllä|sì|sí
ei|no|no
ehkä|forse|quizás
selvä / ok|va bene / d'accordo|vale / de acuerdo
mitä kuuluu? (kohtelias)|come sta?|¿cómo está?
mitä kuuluu? (tuttava)|come stai?|¿cómo estás?
hyvää, kiitos|bene, grazie|bien, gracias
entä Teille?|e Lei?|¿y usted?
hauska tavata|piacere|mucho gusto
nimeni on…|mi chiamo…|me llamo…
mikä on nimenne?|come si chiama?|¿cómo se llama?
olen suomalainen|sono finlandese|soy finlandés
en ymmärrä|non capisco|no entiendo
ymmärrän|capisco|entiendo
puhutteko englantia?|parla inglese?|¿habla inglés?
puhun vähän italiaa|parlo un po' d'italiano|hablo un poco de italiano
puhun espanjaa|parlo spagnolo|hablo español
voitteko toistaa?|può ripetere?|¿puede repetir?
hitaammin, kiitos|più piano, per favore|más despacio, por favor
mitä tämä tarkoittaa?|cosa significa?|¿qué significa?
miten sanotaan…?|come si dice…?|¿cómo se dice…?
en tiedä|non lo so|no lo sé
ei se mitään|non fa niente / non c'è problema|no pasa nada
hetkinen|un attimo / un momento|un momento
tervetuloa|benvenuto|bienvenido
hyvää päivänjatkoa|buona giornata|que tenga buen día
hyvää illanjatkoa|buona serata|buenas noches / que lo pase bien
hyvää ruokahalua|buon appetito|buen provecho
kippis!|salute! / cin cin!|¡salud!
onnea!|auguri! / in bocca al lupo|¡suerte!
kaikki hyvin?|tutto bene?|¿todo bien?
kaikki hyvin|tutto a posto|todo bien`},

{id:"pikku",ico:"🔗",name:"Pikkusanat",d:`ja|e|y
tai|o|o
mutta|ma|pero
myös|anche|también
ei myöskään|neanche|tampoco
että|che|que
koska|perché|porque
jos|se|si
kun (ajallisesti)|quando|cuando
sillä aikaa kun / kun taas|mentre|mientras
siis / joten|quindi / allora|entonces / así que
vaikka|anche se|aunque
kuitenkin|però / comunque|sin embargo
kuten / niin kuin|come|como
vain|solo|solo
jo|già|ya
vielä / yhä|ancora|todavía
ei vielä|non ancora|todavía no
aina|sempre|siempre
ei koskaan|mai / non… mai|nunca
usein|spesso|a menudo
joskus|a volte|a veces
nyt|adesso / ora|ahora
heti|subito|enseguida
myöhemmin|più tardi|más tarde
sitten / jälkeen|poi / dopo|luego / después
ennen|prima|antes
täällä|qui / qua|aquí
siellä|lì / là|allí
paljon|molto|mucho
vähän|poco / un po'|poco / un poco
liian|troppo|demasiado
tarpeeksi|abbastanza|bastante
enemmän|più|más
vähemmän|meno|menos
hyvin / erittäin|molto|muy
parempi / paremmin|migliore / meglio|mejor
kaikki|tutto / tutti|todo / todos
jotain|qualcosa|algo
joku|qualcuno|alguien
ei mitään|niente|nada
ei kukaan|nessuno|nadie
toinen / muu|altro|otro
sama|stesso|mismo
tämä|questo / questa|este / esta
tuo|quello / quella|ese / aquel
kanssa|con|con
ilman|senza|sin
-lle / -an / -ssa (kaupunki)|a|a
-n (omistus) / -sta|di|de
-sta / -lta / -lla (luona)|da|de / desde
-ssa / -an (maa, tila)|in|en
päällä|su / sopra|sobre / encima
alla|sotto|debajo
vieressä|accanto a|al lado de
lähellä|vicino a|cerca de
kaukana|lontano da|lejos de
välissä|tra / fra|entre
läpi / kautta|per / attraverso|por
varten / jotta|per|para
noin|circa|más o menos
esimerkiksi|per esempio|por ejemplo`},

{id:"kys",ico:"❓",name:"Kysymyssanat",d:`mikä? / mitä?|che cosa? / cosa?|¿qué?
kuka?|chi?|¿quién?
missä?|dove?|¿dónde?
missä on…?|dov'è…?|¿dónde está…?
mistä?|da dove?|¿de dónde?
milloin?|quando?|¿cuándo?
mihin aikaan?|a che ora?|¿a qué hora?
miksi?|perché?|¿por qué?
miten? / kuinka?|come?|¿cómo?
kuinka paljon?|quanto?|¿cuánto?
kuinka monta?|quanti? / quante?|¿cuántos?
kumpi? / mikä niistä?|quale?|¿cuál?
paljonko kello on?|che ore sono?|¿qué hora es?
paljonko se maksaa?|quanto costa?|¿cuánto cuesta?
onko (täällä)…?|c'è…?|¿hay…?
onko teillä…?|avete…?|¿tienen…?
voinko…?|posso…?|¿puedo…?
voitteko auttaa?|può aiutarmi?|¿puede ayudarme?`},

{id:"pron",ico:"🙋",name:"Pronominit",d:`minä|io|yo
sinä|tu|tú
hän (mies)|lui|él
hän (nainen)|lei|ella
Te (kohtelias)|Lei|usted
me|noi|nosotros
te|voi|vosotros
he|loro|ellos
minun|mio / mia|mi
sinun|tuo / tua|tu
hänen / Teidän|suo / sua|su
meidän|nostro / nostra|nuestro
heidän|loro|su
minulle / minua|mi|me
sinulle / sinua|ti|te
hänelle / Teille|gli / le|le`},

{id:"verb",ico:"🏃",name:"Verbit",d:`olla|essere (io sono)|ser / estar
olla jollakin / omistaa|avere (io ho)|tener / haber
mennä|andare (vado)|ir
tulla|venire (vengo)|venir
tehdä|fare (faccio)|hacer
haluta|volere (voglio)|querer
haluaisin|vorrei|quisiera / me gustaría
voida|potere (posso)|poder
täytyä|dovere (devo)|deber / tener que
tietää|sapere (so)|saber
tuntea (ihminen, paikka)|conoscere (conosco)|conocer
puhua|parlare (parlo)|hablar
sanoa|dire (dico)|decir
kysyä / pyytää|chiedere (chiedo)|preguntar / pedir
vastata|rispondere|responder
ymmärtää|capire (capisco)|entender
nähdä|vedere (vedo)|ver
katsoa|guardare (guardo)|mirar
kuulla / tuntea|sentire (sento)|oír / sentir
syödä|mangiare (mangio)|comer
juoda|bere (bevo)|beber
nukkua|dormire (dormo)|dormir
ostaa|comprare (compro)|comprar
maksaa (suorittaa maksu)|pagare (pago)|pagar
maksaa (hinta)|costare (costa)|costar
ottaa|prendere (prendo)|tomar / coger
antaa|dare (do)|dar
tuoda / viedä|portare (porto)|traer / llevar
löytää|trovare (trovo)|encontrar
etsiä|cercare (cerco)|buscar
odottaa|aspettare (aspetto)|esperar
lähteä|partire (parto)|salir / partir
saapua|arrivare (arrivo)|llegar
palata|tornare (torno)|volver
nousta (kyytiin) / mennä ylös|salire (salgo)|subir
jäädä pois / mennä alas|scendere (scendo)|bajar
avata|aprire (apro)|abrir
sulkea|chiudere (chiudo)|cerrar
aloittaa|cominciare / iniziare|empezar
lopettaa|finire (finisco)|terminar
työskennellä|lavorare (lavoro)|trabajar
auttaa|aiutare (aiuto)|ayudar
tarvita|avere bisogno di (ho bisogno di)|necesitar
pitää jostain|piacere (mi piace)|gustar (me gusta)
asua|abitare / vivere|vivir
kirjoittaa|scrivere|escribir
lukea|leggere|leer
käyttää|usare|usar
toimia (laite)|funzionare (funziona)|funcionar
varata|prenotare|reservar
vaihtaa|cambiare|cambiar
kävellä|camminare|caminar
ajaa (autoa)|guidare|conducir
ajatella|pensare (penso)|pensar
muistaa|ricordare|recordar
unohtaa|dimenticare|olvidar
näyttää (jollekin)|mostrare / far vedere|mostrar / enseñar
lähettää|mandare / inviare|enviar
soittaa (puhelu)|chiamare / telefonare|llamar
istua|sedersi (mi siedo)|sentarse
pysähtyä|fermarsi (mi fermo)|parar / detenerse
tarkistaa|controllare|comprobar / revisar
korjata|riparare / sistemare|reparar / arreglar
kokeilla / testata|provare|probar`},

{id:"adj",ico:"✨",name:"Adjektiivit & olotilat",d:`hyvä|buono|bueno
huono|cattivo|malo
iso|grande|grande
pieni|piccolo|pequeño
uusi|nuovo|nuevo
vanha|vecchio|viejo
kuuma|caldo|caliente
kylmä|freddo|frío
halpa|economico|barato
kallis|caro|caro
helppo|facile|fácil
vaikea|difficile|difícil
nopea|veloce|rápido
hidas|lento|lento
aikaisin|presto|temprano
myöhään|tardi|tarde
myöhässä|in ritardo|con retraso
auki|aperto|abierto
kiinni|chiuso|cerrado
vapaa|libero|libre
varattu|occupato|ocupado
täynnä|pieno|lleno
tyhjä|vuoto|vacío
kaunis|bello|bonito / hermoso
puhdas|pulito|limpio
likainen|sporco|sucio
oikealla|a destra|a la derecha
vasemmalla|a sinistra|a la izquierda
oikein / oikea|giusto|correcto
väärin / väärä|sbagliato|equivocado
pitkä|lungo|largo
lyhyt|corto|corto
pitkä (ihminen) / korkea|alto|alto
matala / lyhyt (ihminen)|basso|bajo
leveä|largo|ancho
kapea|stretto|estrecho
valmis|pronto|listo
tärkeä|importante|importante
mahdollinen|possibile|posible
väsynyt|stanco|cansado
olen nälkäinen|ho fame|tengo hambre
olen janoinen|ho sete|tengo sed
minulla on kiire|ho fretta|tengo prisa
minulla on kylmä|ho freddo|tengo frío
minulla on kuuma|ho caldo|tengo calor
herkullinen|buonissimo / delizioso|delicioso
tulinen|piccante|picante
makea|dolce|dulce
suolainen|salato|salado
hapan|acido|ácido / agrio`},

{id:"vari",ico:"🎨",name:"Värit",d:`väri|colore|color
punainen|rosso|rojo
sininen|blu|azul
vaaleansininen|azzurro|celeste
vihreä|verde|verde
keltainen|giallo|amarillo
musta|nero|negro
valkoinen|bianco|blanco
harmaa|grigio|gris
ruskea|marrone|marrón
oranssi|arancione|naranja
violetti|viola|morado
vaaleanpunainen|rosa|rosa
vaalea|chiaro|claro
tumma|scuro|oscuro
kulta|oro|oro
hopea|argento|plata`},

{id:"num",ico:"🔢",name:"Numerot",d:`0|zero|cero
1|uno|uno
2|due|dos
3|tre|tres
4|quattro|cuatro
5|cinque|cinco
6|sei|seis
7|sette|siete
8|otto|ocho
9|nove|nueve
10|dieci|diez
11|undici|once
12|dodici|doce
13|tredici|trece
14|quattordici|catorce
15|quindici|quince
16|sedici|dieciséis
17|diciassette|diecisiete
18|diciotto|dieciocho
19|diciannove|diecinueve
20|venti|veinte
21|ventuno|veintiuno
22|ventidue|veintidós
23|ventitré|veintitrés
28|ventotto|veintiocho
30|trenta|treinta
40|quaranta|cuarenta
50|cinquanta|cincuenta
60|sessanta|sesenta
70|settanta|setenta
80|ottanta|ochenta
90|novanta|noventa
100|cento|cien
150|centocinquanta|ciento cincuenta
200|duecento|doscientos
500|cinquecento|quinientos
1000|mille|mil
2000|duemila|dos mil
miljoona|un milione|un millón
ensimmäinen|primo|primero
toinen|secondo|segundo
kolmas|terzo|tercero
puoli / puolikas|mezzo / metà|medio / mitad
kerran|una volta|una vez
kahdesti|due volte|dos veces`},

{id:"aika",ico:"🕒",name:"Aika & päivät",d:`päivä|giorno|día
viikko|settimana|semana
kuukausi|mese|mes
vuosi|anno|año
tunti|ora|hora
minuutti|minuto|minuto
tänään|oggi|hoy
huomenna|domani|mañana
eilen|ieri|ayer
ylihuomenna|dopodomani|pasado mañana
aamu|mattina|mañana
iltapäivä|pomeriggio|tarde
ilta|sera|noche / tarde
yö|notte|noche
keskipäivä|mezzogiorno|mediodía
keskiyö|mezzanotte|medianoche
tänä aamuna|stamattina|esta mañana
tänä iltana|stasera|esta noche
maanantai|lunedì|lunes
tiistai|martedì|martes
keskiviikko|mercoledì|miércoles
torstai|giovedì|jueves
perjantai|venerdì|viernes
lauantai|sabato|sábado
sunnuntai|domenica|domingo
viikonloppu|fine settimana|fin de semana
tammikuu|gennaio|enero
helmikuu|febbraio|febrero
maaliskuu|marzo|marzo
huhtikuu|aprile|abril
toukokuu|maggio|mayo
kesäkuu|giugno|junio
heinäkuu|luglio|julio
elokuu|agosto|agosto
syyskuu|settembre|septiembre
lokakuu|ottobre|octubre
marraskuu|novembre|noviembre
joulukuu|dicembre|diciembre
kello on kolme|sono le tre|son las tres
kello on yksi|è l'una|es la una
puoli neljä (3.30)|le tre e mezza|las tres y media
varttia yli kolme|le tre e un quarto|las tres y cuarto
varttia vaille neljä|le quattro meno un quarto|las cuatro menos cuarto
kello kahdeksalta|alle otto|a las ocho
viiden minuutin päästä|tra cinque minuti|dentro de cinco minutos
ensi viikolla|la settimana prossima|la semana que viene
viime viikolla|la settimana scorsa|la semana pasada`},

{id:"juna",ico:"🚆",name:"Juna & julkiset",d:`juna|treno|tren
rautatieasema|stazione|estación de tren
päärautatieasema|stazione centrale|estación central
laituri / raide|binario|andén / vía
lippu|biglietto|billete
lipputoimisto|biglietteria|taquilla
lippuautomaatti|biglietteria automatica|máquina de billetes
menolippu|solo andata|solo ida
meno-paluu|andata e ritorno|ida y vuelta
1. / 2. luokka|prima / seconda classe|primera / segunda clase
istumapaikka|posto|asiento
paikkavaraus|prenotazione|reserva
vaunu|carrozza|vagón / coche
lähtö / lähtevät|partenza / partenze|salida / salidas
saapuminen / saapuvat|arrivo / arrivi|llegada / llegadas
aikataulu|orario|horario
myöhässä|in ritardo|con retraso
peruttu|cancellato / soppresso|cancelado
vaihtoyhteys|coincidenza|enlace / transbordo
vaihtaa junaa|cambiare treno|cambiar de tren
suora juna|treno diretto|tren directo
suurnopeusjuna|Frecciarossa / Italo (alta velocità)|AVE (alta velocidad)
paikallisjuna|treno regionale|tren regional / cercanías
leimata lippu|convalidare il biglietto|validar el billete
leimauslaite|obliteratrice / validatrice|máquina validadora
konduktööri|controllore / capotreno|revisor
lakko|sciopero|huelga
odotushuone|sala d'attesa|sala de espera
matkatavarasäilytys|deposito bagagli|consigna
sisäänkäynti|entrata / ingresso|entrada
uloskäynti|uscita|salida
bussi|autobus|autobús
pysäkki|fermata|parada
metro|metropolitana / metro|metro
raitiovaunu|tram|tranvía
seuraava pysäkki|prossima fermata|próxima parada
yksi lippu Milanoon, kiitos|un biglietto per Milano, per favore|un billete para Milán, por favor
miltä raiteelta juna lähtee?|da quale binario parte il treno?|¿de qué andén sale el tren?
meneekö tämä juna…?|questo treno va a…?|¿este tren va a…?
onko tämä paikka vapaa?|è libero questo posto?|¿está libre este asiento?
tämä on minun paikkani|questo è il mio posto|este es mi asiento
missä jään pois?|dove devo scendere?|¿dónde tengo que bajar?`},

{id:"taksi",ico:"🚕",name:"Taksi & auto",d:`taksi|taxi|taxi
taksitolppa|posteggio dei taxi|parada de taxis
voitteko tilata taksin?|può chiamarmi un taxi?|¿puede llamarme un taxi?
tähän osoitteeseen, kiitos|a questo indirizzo, per favore|a esta dirección, por favor
osoite|indirizzo|dirección
lentokentälle, kiitos|all'aeroporto, per favore|al aeropuerto, por favor
paljonko keskustaan maksaa?|quanto costa per il centro?|¿cuánto cuesta al centro?
kauanko kestää?|quanto ci vuole?|¿cuánto se tarda?
pysähtykää tähän|si fermi qui, per favore|pare aquí, por favor
suoraan eteenpäin|sempre dritto|todo recto
kääntykää oikealle|giri a destra|gire a la derecha
kääntykää vasemmalle|giri a sinistra|gire a la izquierda
voinko maksaa kortilla?|posso pagare con la carta?|¿puedo pagar con tarjeta?
kuitti, kiitos|la ricevuta, per favore|el recibo, por favor
pitäkää vaihtorahat|tenga il resto|quédese con el cambio
taksamittari|tassametro|taxímetro
ruuhka|traffico|atasco / tráfico
vuokra-auto|auto a noleggio|coche de alquiler
bensiini|benzina|gasolina
diesel|gasolio|gasóleo
pysäköinti|parcheggio|aparcamiento
rajoitettu liikennealue (sakot!)|ZTL – zona a traffico limitato|zona de tráfico restringido`},

{id:"lento",ico:"✈️",name:"Lentokenttä",d:`lentokenttä|aeroporto|aeropuerto
lento|volo|vuelo
portti|gate / uscita|puerta de embarque
turvatarkastus|controllo di sicurezza|control de seguridad
passi|passaporto|pasaporte
henkilökortti|carta d'identità|documento de identidad
matkalaukku|valigia|maleta
matkatavarat|bagaglio|equipaje
käsimatkatavara|bagaglio a mano|equipaje de mano
matkatavaroiden nouto|ritiro bagagli|recogida de equipajes
lähtöselvitys|check-in|facturación
tarkastuskortti|carta d'imbarco|tarjeta de embarque
laukkuni ei tullut|la mia valigia non è arrivata|mi maleta no ha llegado
tulli|dogana|aduana
myöhässä oleva lento|volo in ritardo|vuelo retrasado`},

{id:"hotel",ico:"🏨",name:"Hotelli",d:`hotelli|albergo / hotel|hotel
vastaanotto|reception|recepción
minulla on varaus|ho una prenotazione|tengo una reserva
nimellä…|a nome di…|a nombre de…
huone|camera|habitación
yhden hengen huone|camera singola|habitación individual
kahden hengen huone|camera doppia|habitación doble
kolmeksi yöksi|per tre notti|para tres noches
avain|chiave|llave
avainkortti|tessera / scheda|tarjeta
kerros|piano|planta / piso
pohjakerros|piano terra|planta baja
hissi|ascensore|ascensor
portaat|scale|escaleras
aamiainen|colazione|desayuno
sisältyykö aamiainen?|la colazione è inclusa?|¿el desayuno está incluido?
mihin aikaan on aamiainen?|a che ora è la colazione?|¿a qué hora es el desayuno?
uloskirjautuminen|check-out|salida
mikä on wifin salasana?|qual è la password del wifi?|¿cuál es la contraseña del wifi?
kylpyhuone|bagno|baño
suihku|doccia|ducha
pyyhe|asciugamano|toalla
saippua|sapone|jabón
WC-paperi|carta igienica|papel higiénico
tyyny|cuscino|almohada
peitto|coperta|manta
ilmastointi|aria condizionata|aire acondicionado
lämmitys|riscaldamento|calefacción
…ei toimi|…non funziona|…no funciona
lämmin vesi|acqua calda|agua caliente
pistorasia|presa|enchufe
laturi|caricabatterie|cargador
voinko jättää laukun tänne?|posso lasciare qui la valigia?|¿puedo dejar aquí la maleta?
herätys|sveglia|despertador
siivous|pulizia della camera|limpieza
älä häiritse|non disturbare|no molestar
turistivero|tassa di soggiorno|tasa turística
lasku (maksu)|conto|cuenta
lasku (yritykselle, ALV)|fattura|factura
tarvitsen laskun yrityksen nimiin|mi serve la fattura intestata all'azienda|necesito factura a nombre de la empresa
kuitti|ricevuta / scontrino|recibo / ticket`},

{id:"rav",ico:"🍝",name:"Ravintola",d:`ravintola|ristorante|restaurante
rento ravintola|trattoria / osteria|casa de comidas
kahvila-baari|bar|bar / cafetería
pöytä kahdelle|un tavolo per due|una mesa para dos
onko vapaata pöytää?|avete un tavolo libero?|¿tienen una mesa libre?
ruokalista|menù|carta / menú
viinilista|carta dei vini|carta de vinos
päivän annos|piatto del giorno|plato del día
alkuruoka|antipasto|entrante
1. ruokalaji (pasta, risotto)|primo|primer plato
2. ruokalaji (liha, kala)|secondo|segundo plato
lisuke|contorno|guarnición
jälkiruoka|dolce|postre
haluaisin…|vorrei…|quisiera…
otan tämän|prendo questo|tomo esto
mitä suosittelette?|cosa mi consiglia?|¿qué me recomienda?
olen kasvissyöjä|sono vegetariano|soy vegetariano
olen allerginen…lle|sono allergico a…|soy alérgico a…
ilman…|senza…|sin…
lasku, kiitos|il conto, per favore|la cuenta, por favor
kattamismaksu|coperto|cubierto
palvelumaksu|servizio|servicio
juomaraha|mancia|propina
tarjoilija|cameriere|camarero
lautanen / annos|piatto|plato
lasi|bicchiere|vaso
haarukka|forchetta|tenedor
veitsi|coltello|cuchillo
lusikka|cucchiaio|cuchara
lautasliina|tovagliolo|servilleta
lounas|pranzo|almuerzo / comida
illallinen|cena|cena
aperitiivi|aperitivo|aperitivo
oli herkullista|era buonissimo|estaba buenísimo
voimmeko maksaa erikseen?|possiamo pagare separatamente?|¿podemos pagar por separado?`},

{id:"ruoka",ico:"🧀",name:"Ruoka-aineet",d:`leipä|pane|pan
voi|burro|mantequilla
juusto|formaggio|queso
keitetty kinkku|prosciutto cotto|jamón york
ilmakuivattu kinkku|prosciutto crudo|jamón serrano
liha|carne|carne
naudanliha|manzo|ternera / vaca
vasikka|vitello|ternera
sianliha|maiale|cerdo
kana|pollo|pollo
kala|pesce|pescado
äyriäiset|frutti di mare|marisco
katkaravut|gamberi|gambas
simpukat|cozze / vongole|mejillones / almejas
kalmari|calamari|calamares
tonnikala|tonno|atún
lohi|salmone|salmón
muna / munat|uovo / uova|huevo / huevos
riisi|riso|arroz
pasta|pasta|pasta
peruna|patata|patata
ranskalaiset|patatine fritte|patatas fritas
salaatti|insalata|ensalada
keitto|zuppa / minestra|sopa
vihannekset|verdure|verduras
tomaatti|pomodoro|tomate
sipuli|cipolla|cebolla
valkosipuli|aglio|ajo
sienet|funghi|setas / champiñones
munakoiso|melanzane|berenjena
kesäkurpitsa|zucchine|calabacín
paprika|peperoni|pimiento
pavut|fagioli|alubias / judías
oliivit|olive|aceitunas
oliiviöljy|olio d'oliva|aceite de oliva
etikka|aceto|vinagre
suola|sale|sal
pippuri|pepe|pimienta
sokeri|zucchero|azúcar
hedelmät|frutta|fruta
omena|mela|manzana
appelsiini|arancia|naranja
sitruuna|limone|limón
banaani|banana|plátano
mansikka|fragola|fresa
jäätelö|gelato|helado
kakku|torta|tarta / pastel
croissant (aamiainen)|cornetto / brioche|cruasán
grillattu|alla griglia|a la plancha
uunissa paistettu|al forno|al horno
friteerattu|fritto|frito
raaka|crudo|crudo
kypsä / keitetty|cotto / bollito|cocido
raaka / medium / kypsä (pihvi)|al sangue / media cottura / ben cotto|poco hecho / al punto / muy hecho`},

{id:"juoma",ico:"☕",name:"Juomat & kahvi",d:`vesi|acqua|agua
hiilihapollinen vesi|acqua frizzante|agua con gas
hiilihapoton vesi|acqua naturale|agua sin gas
hanavesi|acqua del rubinetto|agua del grifo
kahvi (= espresso)|un caffè|un café solo
espresso maitotilkalla|caffè macchiato|cortado
cappuccino (yleensä vain aamulla)|cappuccino|capuchino
maitokahvi|caffè latte|café con leche
maito (⚠ latte = maito!)|latte|leche
laimennettu kahvi|caffè americano|americano
koffeiiniton|decaffeinato / deca|descafeinado
tee|tè|té
mehu|succo|zumo
tuorepuristettu appelsiinimehu|spremuta d'arancia|zumo de naranja natural
olut|birra|cerveza
hanaolut|birra alla spina|cerveza de barril
pieni / iso olut|birra piccola / media|caña / jarra
viini|vino|vino
punaviini|vino rosso|vino tinto
valkoviini|vino bianco|vino blanco
talon viini|vino della casa|vino de la casa
pullo|bottiglia|botella
lasillinen|un bicchiere|una copa / un vaso
jää|ghiaccio|hielo
alkoholiton|analcolico|sin alcohol`},

{id:"kauppa",ico:"🛒",name:"Kauppa & raha",d:`kauppa|negozio|tienda
ruokakauppa|supermercato / alimentari|supermercado
apteekki|farmacia|farmacia
tupakkakauppa (myy bussilippuja!)|tabaccheria (T-kyltti)|estanco
raha|soldi|dinero
käteinen|contanti|efectivo
kortti|carta|tarjeta
pankkiautomaatti|bancomat|cajero automático
hinta|prezzo|precio
alennus|sconto|descuento
kuitti|scontrino|ticket / recibo
kassa|cassa|caja
pussi / kassi|sacchetto / busta|bolsa
voinko auttaa?|posso aiutarla?|¿puedo ayudarle?
katselen vain|sto solo guardando|solo estoy mirando
koko|taglia|talla
onko isompaa?|c'è una taglia più grande?|¿hay una talla más grande?
aukioloajat|orario di apertura|horario
sentti|centesimo|céntimo
se on liian kallis|è troppo caro|es demasiado caro`},

{id:"kaup",ico:"🗺️",name:"Kaupungilla",d:`kaupunki|città|ciudad
keskusta|centro|centro
katu|via / strada|calle
aukio|piazza|plaza
silta|ponte|puente
kirkko|chiesa|iglesia
tuomiokirkko|duomo / cattedrale|catedral
museo|museo|museo
puisto|parco|parque
ranta|spiaggia|playa
kartta|mappa / cartina|mapa
kulma|angolo|esquina
liikennevalot|semaforo|semáforo
risteys|incrocio|cruce
pohjoinen / etelä|nord / sud|norte / sur
itä / länsi|est / ovest|este / oeste
edessä|davanti|delante
takana|dietro|detrás
vastapäätä|di fronte|enfrente
ylös / alas|su / giù|arriba / abajo
onko se kaukana?|è lontano?|¿está lejos?
kävellen|a piedi|a pie / andando
WC|bagno / toilette|baño / aseo
miehet / naiset|uomini / donne|caballeros / señoras
pankki|banca|banco
posti|ufficio postale|correos
poliisi|polizia / carabinieri|policía
sairaala|ospedale|hospital`},

{id:"tyo",ico:"🛠️",name:"Työmatka & tekniikka",d:`työmatka|viaggio di lavoro|viaje de trabajo
olen täällä töissä|sono qui per lavoro|estoy aquí por trabajo
yritys|azienda / ditta|empresa
tehdas|stabilimento / fabbrica|fábrica / planta
asiakas|cliente|cliente
kollega|collega|colega
kokous|riunione|reunión
tapaaminen|appuntamento|cita
minulla on tapaaminen herra…n kanssa|ho un appuntamento con il signor…|tengo una cita con el señor…
käyntikortti|biglietto da visita|tarjeta de visita
portti / vastaanotto (tehdas)|portineria|portería / recepción
vierailijakortti|pass visitatori / badge|tarjeta de visitante
turvakengät|scarpe antinfortunistiche|calzado de seguridad
huomioliivi|gilet ad alta visibilità|chaleco reflectante
kypärä|casco|casco
testi / koe|prova / test|prueba
ohjelmisto|software|software
laitteisto|hardware|hardware
kaapeli|cavo|cable
liitin|connettore|conector
virransyöttö|alimentazione|alimentación
kytkeä päälle|accendere|encender
kytkeä pois|spegnere|apagar
käynnistää uudelleen|riavviare|reiniciar
vika|guasto|avería
virhe|errore|error
ongelma|problema|problema
ratkaisu|soluzione|solución
nyt se toimii|adesso funziona|ahora funciona
kaiutin|altoparlante|altavoz
mikrofoni|microfono|micrófono
näyttö|schermo / display|pantalla
ääni|audio / suono|sonido / audio
äänenvoimakkuus|volume|volumen
kuulutus|annuncio|anuncio / megafonía
takaisinkytkentä (kierto)|ritorno / effetto Larsen|acople / realimentación
junavaunu|carrozza / vettura|coche / vagón
ohjaamo|cabina di guida|cabina de conducción
varikko|deposito|depósito / cocheras
kiitos avusta|grazie per l'aiuto|gracias por la ayuda
voimmeko aloittaa?|possiamo cominciare?|¿podemos empezar?
tauko|pausa|pausa / descanso
sähköposti|email / mail|correo electrónico
lähetän sen sähköpostilla|glielo mando per email|se lo envío por correo
huomenna kello yhdeksän|domani alle nove|mañana a las nueve
määräaika|scadenza|plazo
valmis / tehty|fatto / finito|hecho / terminado`},

{id:"hata",ico:"🚑",name:"Hätä & terveys",d:`apua!|aiuto!|¡socorro! / ¡ayuda!
hätänumero|112 (numero di emergenza)|112
soittakaa lääkäri|chiamate un medico|llamen a un médico
soittakaa ambulanssi|chiamate un'ambulanza|llamen a una ambulancia
voin huonosti|sto male|me encuentro mal
minuun sattuu tähän|mi fa male qui|me duele aquí
päänsärky|mal di testa|dolor de cabeza
vatsakipu|mal di pancia|dolor de estómago
kuume|febbre|fiebre
lääke|medicina|medicina
särkylääke|antidolorifico|analgésico
lääkäri|medico / dottore|médico
hammaslääkäri|dentista|dentista
varas!|al ladro!|¡al ladrón!
lompakkoni varastettiin|mi hanno rubato il portafoglio|me han robado la cartera
puhelin (kännykkä)|cellulare|móvil
olen eksynyt|mi sono perso|me he perdido
vaarallinen|pericoloso|peligroso
varo!|attenzione!|¡cuidado!`},

{id:"small",ico:"💬",name:"Small talk",d:`mistä olette kotoisin?|di dov'è?|¿de dónde es?
olen täällä viikon|sono qui per una settimana|estoy aquí una semana
ensimmäistä kertaa Italiassa|è la prima volta in Italia|es la primera vez en Italia
pidän Italiasta|mi piace l'Italia|me gusta Italia
tosi kaunista|bellissimo|precioso
ruoka on erinomaista|il cibo è ottimo|la comida es buenísima
millainen sää on?|che tempo fa?|¿qué tiempo hace?
sataa|piove|llueve
aurinko paistaa|c'è il sole|hace sol
on kylmä / kuuma (sää)|fa freddo / fa caldo|hace frío / calor
Suomessa on nyt pimeää|in Finlandia adesso è buio|en Finlandia ahora está oscuro
minulla on kaksi lasta|ho due figli|tengo dos hijos
perhe|famiglia|familia
vaimo / puoliso|moglie / compagna|esposa / pareja
lapset|bambini / figli|niños / hijos
Suomi|Finlandia|Finlandia
suomen kieli|finlandese|finlandés
mitä teette työksenne?|che lavoro fa?|¿a qué se dedica?
olen insinööri|sono ingegnere|soy ingeniero
hyvää matkaa|buon viaggio|buen viaje
hyvää viikonloppua|buon fine settimana|buen fin de semana
kiva! / mahtavaa!|che bello! / fantastico!|¡qué bien! / ¡genial!
oikeasti?|davvero?|¿de verdad?
ei hätää|tranquillo|tranquilo
olen samaa mieltä|sono d'accordo|estoy de acuerdo`},

{id:"es",ico:"🇪🇸",name:"Espanjasta italiaan",d:`voi|burro|⚠ ES burro = aasi
kuuma|caldo|⚠ ES caldo = liemi
nousta kyytiin / ylös|salire|⚠ ES salir = lähteä
katsoa|guardare|⚠ ES guardar = säilyttää
leveä|largo|⚠ ES largo = pitkä
pitkä|lungo|ES largo
huone|camera|⚠ ES cámara = kamera
heti|subito|⚠ ES súbito = äkillinen
valmis / haloo (puhelimessa)|pronto|⚠ ES pronto = pian
pian / aikaisin|presto|ES pronto / temprano
kauppa|negozio|⚠ ES negocio = liiketoiminta
jalka|gamba|⚠ ES gamba = katkarapu
hiiri|topo|⚠ ES topo = myyrä
lasi (juoma-)|bicchiere|⚠ ES vaso = lasi, IT vaso = ruukku
pehmeä|morbido|⚠ ei sama kuin ES morboso
nainen|donna|ES mujer (doña = rouva)
poika / tyttö|ragazzo / ragazza|chico / chica
nyt|adesso|ahora
myös|anche|también
mutta|ma|pero
missä|dove|dónde
siis / no niin|allora|entonces / pues
paljon / erittäin|molto|mucho / muy
on olemassa / täällä on|c'è / ci sono|hay
pidän (yhdestä / monesta)|mi piace / mi piacciono|me gusta / me gustan
olla (sekä ser että estar)|essere (+ stare: come stai?)|ser / estar
minä olen|io sono|yo soy / estoy
he ovat (sama muoto kuin minä olen!)|loro sono|ellos son
olen syönyt / söin|ho mangiato|he comido / comí
olen mennyt / menin|sono andato|he ido / fui
monikko -o → -i|libro → libri|libro → libros
monikko -a → -e|casa → case|casa → casas`}
];

window.GUIDE = `
<h2>🗣️ Ääntäminen</h2>
<ul>
<li><b>c + e/i</b> = "tš": <i>cena</i> (tšena), <i>ciao</i> (tšau)</li>
<li><b>ch</b> = k: <i>chiesa</i> (kiesa), <i>che</i> (ke)</li>
<li><b>g + e/i</b> = "dž": <i>gelato</i> (dželato), <i>giorno</i> (džorno)</li>
<li><b>gh</b> = g: <i>spaghetti</i></li>
<li><b>gli</b> ≈ "lj": <i>famiglia</i> (familja), <i>biglietto</i> (biljetto)</li>
<li><b>gn</b> = "nj" (kuten espanjan ñ): <i>gnocchi</i>, <i>bagno</i> (banjo)</li>
<li><b>sc + e/i</b> = "š": <i>scendere</i> (šendere); <b>sch</b> = sk</li>
<li><b>z</b> = ts / dz: <i>pizza</i> (pitsa), <i>zero</i> (dzero)</li>
<li><b>h</b> on aina äänetön: <i>ho</i> = "o", <i>hanno</i> = "anno"</li>
<li><b>Tuplakonsonantit pitkinä</b> kuten suomessa – suomalaiselle helppoa! <i>nonno</i> (isoisä) ≠ <i>nono</i> (yhdeksäs), <i>penne</i> ≠ <i>pene</i> 😅</li>
<li>Paino yleensä toiseksi viimeisellä tavulla. Aksentti näyttää painon lopussa: <i>città, caffè, lunedì</i>.</li>
</ul>

<h2>🔤 Artikkelit (ES el / la)</h2>
<table class="art">
<tr><th></th><th>yksikkö</th><th>monikko</th><th>ES</th></tr>
<tr><td>maskuliini</td><td><b>il</b> treno</td><td><b>i</b> treni</td><td>el / los</td></tr>
<tr><td>m. + s+kons., z, gn, ps</td><td><b>lo</b> zaino</td><td><b>gli</b> zaini</td><td>el / los</td></tr>
<tr><td>m. + vokaali</td><td><b>l'</b>albergo</td><td><b>gli</b> alberghi</td><td>el / los</td></tr>
<tr><td>feminiini</td><td><b>la</b> camera</td><td><b>le</b> camere</td><td>la / las</td></tr>
<tr><td>f. + vokaali</td><td><b>l'</b>acqua</td><td><b>le</b> acque</td><td>el agua / las</td></tr>
</table>
<ul>
<li><b>Epämääräinen</b> (ES un/una): <i>un</i> caffè, <i>uno</i> zaino, <i>una</i> birra, <i>un'</i>ora</li>
<li><b>Sulautumat</b> (vrt. ES al, del): a+il = <i>al</i> bar, a+la = <i>alla</i> stazione, di+il = <i>del</i> treno, in+il = <i>nel</i> centro, da+il = <i>dal</i> medico, su+il = <i>sul</i> tavolo</li>
<li><b>Nyrkkisääntö:</b> il/i ja la/le riittävät melkein aina – väärälläkin artikkelilla ymmärretään.</li>
</ul>

<h2>📐 Kielioppi pikana</h2>
<ul>
<li><b>Monikko:</b> -o → -i, -a → -e, -e → -i (notte → notti)</li>
<li><b>essere</b> (olla): sono, sei, è, siamo, siete, sono</li>
<li><b>avere</b> (omistaa): ho, hai, ha, abbiamo, avete, hanno</li>
<li><b>Kieltö:</b> non + verbi → <i>non capisco</i></li>
<li><b>Kohtelias "Te"</b> = Lei + 3. persoona: <i>Lei parla inglese?</i> (vrt. ES usted)</li>
<li><b>Kysymys</b> = sama sanajärjestys, nouseva intonaatio: <i>Parla inglese?</i></li>
<li><b>Haluaisin = vorrei</b> – kohteliain tapa tilata/pyytää mitä tahansa.</li>
<li><b>Mennyt aika</b> puheessa: avere/essere + partisiippi: <i>ho mangiato</i>, <i>sono arrivato</i> (liikeverbit essere-apuverbillä).</li>
<li><b>Verbipäätteet</b> (io/tu/lui): parl<b>o</b>, parl<b>i</b>, parl<b>a</b> – io-muoto melkein aina -o.</li>
</ul>

<h2>🇪🇸➡️🇮🇹 Espanjasta on hyötyä</h2>
<ul>
<li>Arviolta valtaosa perussanastosta on tunnistettavaa: <i>tren/treno, noche/notte, leche/latte, hacer/fare</i>.</li>
<li>Usein ES <b>-ción</b> → IT <b>-zione</b>: estación → stazione, reserva/reservación → prenotazione.</li>
<li>ES <b>ue / ie</b> → IT <b>o / e</b>: puerta → porta, tiempo → tempo, nueve → nove.</li>
<li>ES <b>pl / cl / fl</b> → IT <b>pi / chi / fi</b>: plaza → piazza, llave → chiave, lleno → pieno.</li>
<li>Italialaiset ymmärtävät espanjaa usein kohtuullisen hyvin – hätätilassa puhu hitaasti espanjaa.</li>
<li>Tarkista "Espanjasta italiaan" -kategorian ⚠-sanat (burro, salire, guardare, caldo…).</li>
</ul>

<h2>🧭 Kulttuurivinkit</h2>
<ul>
<li><b>Bar</b> = kahvila. Kahvi tiskillä (<i>al banco</i>) on halvempi kuin pöydässä. Joissain paikoissa maksetaan ensin kassalle ja kuitti (<i>scontrino</i>) viedään tiskille.</li>
<li><b>Un caffè</b> = espresso. Cappuccino on aamujuoma; ruoan jälkeen otetaan espresso.</li>
<li><b>Regionale-junaliput</b>: leimaa (<i>convalidare</i>) automaatissa ennen nousua tai sakko. Frecciarossa/Italo-lipuissa on paikka, ei leimausta. Appit: Trenitalia, Italo.</li>
<li><b>Sciopero</b> = lakko – Italiassa yleisiä, usein ilmoitettu etukäteen, tarkista.</li>
<li><b>Bussiliput</b> usein tabaccheriasta (T-kyltti), lehtikioskista tai appista – ei aina kuljettajalta.</li>
<li><b>Coperto</b> (kattamismaksu, 1–4 €) on normaali. Tippi ei pakollinen, pyöristys kiva.</li>
<li><b>Tervehdi</b> aina tullessa kauppaan/baariin: <i>buongiorno</i>, iltapäivästä <i>buonasera</i>.</li>
<li><b>Lounas</b> n. 12.30–14.30, <b>illallinen</b> harvoin ennen 19.30.</li>
<li><b>ZTL</b>-alueet keskustoissa: vuokra-autolla sakko. Taksit saavat ajaa.</li>
<li>Hätänumero <b>112</b>.</li>
</ul>
`;

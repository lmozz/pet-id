const curiosity = [
    '¡Cuando estoy súper feliz, no solo ladro, también chillo así como un juguetito! ¡Es la emoción!',
    '¡Me gusta tanto rascar las puertas cuando estoy contenta que ya dejé mis uñitas marcadas! ¡Y a veces las paredes también... ups!',
    '¡Si escucho "¡vamos!", mis orejas se levantan rapidísimo! ¡Significa aventura afuera!',
    'Cuando dicen "baño", mis orejas se van para atrás... ¡no me gusta mucho el agua, ¿qué le vamos a hacer?!',
    '¡Si alguien dice "gato", me pongo en modo alerta! ¡Esos bichos peludos son interesantes!',
    'Cuando me veo en ese espejo brillante, solo levanto las orejas un ratito y luego sigo con mis cosas. ¡Hay mucho que explorar!',
    'Una vez que me asustan jugando, ¡ya nada me da miedo! ¡Soy valiente!',
    'Aunque me gusta perseguir gatos y pájaros, ¡nunca les hago nada cuando los alcanzo! ¡Solo quiero jugar, creo!',
    'Si tengo hambre y mis humanos están comiendo, ¡pongo mis patotas en la mesa a ver si cae algo! ¡A veces funciona!',
    '¡Y si están descongelando carne, tengo un olfato increíble! ¡Si no están atentos, ñam!',
    'Cuando era chiquita, ¡le mordí el cable de la computadora a mi humana! ¡Ups, tuvo que comprar otro!',
    '¡Cuando llega mi humano, corro rapidísimo a tomar agua (no sé por qué!) y luego ¡salto encima de él para saludarlo! ¡Me emociono mucho!',
    '¡Soy fuerte! A veces, cuando paseo con mi otra humana, ¡la arrastro un poquito sin querer! ¡Ella no es tan grande como yo!',
    '¡Amo mi mantita! ¡Aunque también me gusta morderla y dejarla llena de agujeros! ¡Es divertida!',
    '¡Cuando mi humano canta, yo también canto con él! ¡Aúllo a todo pulmón! ¡Es nuestra canción!',
    '¡Me encanta tomar el sol cuando hace calor! ¡Es como un spa perruno!',
    'Cuando el sol pega fuerte, ¡corro a la sombra! ¡No soy tonta!',
    'Recuerdo cuando era bebé y dormía en el pecho de mi humano... ¡qué calentito era!',
    'Mis ojitos son un poco chistosos, ¡dicen que veo doble a veces! ¡Es mi encanto especial!',
    '¡Para jugar, a veces salto encima de mis humanos sin avisar! ¡Es mi manera de decir "¡a jugar!"!',
    'Si alguien le ladra a mi hermanito Ponki cuando estamos afuera, ¡yo lo defiendo! ¡Él es mi responsabilidad!',
    'No me caen muy bien otras perritas... ¡prefiero los machos! ¡No sé por qué!',
    '¡Me encanta ir en el carro de copiloto! ¡Siento el viento en mi pelaje! ¡Soy una aventurera!',
    'Para dormir, si hace frío me gusta el sofá, pero si hace calor ¡abajo de la cama es lo mejor! ¡Fresquito!',
    '¡Aunque rompa mis juguetes, cada pedacito me recuerda lo divertido que fue jugar con ellos!'
];
const learnMore = () => {
    const randomIndex = Math.floor(Math.random() * curiosity.length);
    const response = curiosity[randomIndex];
    let timing = 5000;
    let timerInterval;
    Swal.fire({
        title: 'Mi curiosidad es...',
        html: response,
        timer: timing,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector('b');
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.clear();
        }
    });
    setTimeout(() => {
        console.clear();
    }, timing);
};
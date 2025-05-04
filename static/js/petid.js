let info = null;
(() => {
    document.addEventListener('contextmenu', e => {
        e.preventDefault();
    });
    document.addEventListener('keydown', e => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            return false;
        }
    });
    document.addEventListener('dragstart', e => {
        e.preventDefault();
    });
})();
const interactive = () => {
    setTimeout(() => {
        document.getElementsByTagName('body')[0].removeAttribute('style');
    }, 1000);
    new Swiper('.slider', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
    });
    new Swiper(".target", {
        effect: "cards",
        grabCursor: true,
    });
    new Swiper(".parallax", {
        speed: 600,
        parallax: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    ScrollReveal({ reset: true });
    ScrollReveal().reveal('.scroll-animation', {
        delay: 0,
        distance: '200px',
        duration: 1000,
        origin: 'bottom',
        rotate: {
            x: 40,
            y: 0,
            z: 0,
        },
    });
};
const learnMore = () => {
    const randomIndex = Math.floor(Math.random() * info.curiosity.length);
    const response = info.curiosity[randomIndex];
    let timing = info.alert.time;
    let timerInterval;
    Swal.fire({
        title: info.alert.text,
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
const write = json => {
    info = {
        curiosity: json.card.curiosity,
        alert: {
            time: json.card.time,
            text: json.card.alert,
        }
    }
    document.getElementsByName('theme-color')[0].setAttribute('content', json.meta.color);
    document.getElementsByTagName('title')[0].innerHTML = "PetId - " + json.meta.name;
    document.documentElement.style.setProperty('--back', json.theme.back);
    document.documentElement.style.setProperty('--back-opacity', json.theme.back_opacity);
    document.documentElement.style.setProperty('--over', json.theme.over);
    document.documentElement.style.setProperty('--border', json.theme.border);
    document.documentElement.style.setProperty('--shadow', json.theme.shadow);
    document.documentElement.style.setProperty('--text', json.theme.text);
    document.documentElement.style.setProperty('--hover', json.theme.hover);
    document.getElementsByTagName('body')[0].innerHTML = `
        <div class='swiper slider scroll-animation'>
            <div class='swiper-wrapper'>
                ${json.slider.map(_ => `
                    <div class='swiper-slide' style='background-image: url(./source/img/${_.img});'>
                        <div><img src='./source/img/${_.img}' /></div>asd
                    </div>
                `).join('')}
            </div>
            <div class='swiper-pagination'></div>
            <div class='swiper-button-prev'></div>
            <div class='swiper-button-next'></div>
            <div class='swiper-scrollbar'></div>
        </div>
        <br />
        <br />
        <div class='card'>
            <div class='title scroll-animation'>${json.card.title}</div>
            <div class='separator scroll-animation'></div>
            <div class='text scroll-animation'>
                ${json.card.text}
                <br />
                <br />
                <div class='center'>
                    <button onclick='learnMore()'>${json.card.button}</button>
                </div>
            </div>
        </div>
        <br />
        <br />
        <div class='swiper-container-target-father'>
            ${json.target.map(_ => `
                <div class='swiper-container-target-section scroll-animation'>
                    <div class='title'>${_.title}</div>
                    <div class='swiper-container-target'>
                        <div class='swiper target'>
                            <div class='swiper-wrapper'>${_.items.map(__ => `
                                <div class='swiper-slide'>
                                    <div>${__.text}</div>
                                </div>
                            `).join('')}</div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <br />
        <br />
        <div class='title-page scroll-animation'>${json.parallax.title}</div>
        <div class='swiper parallax scroll-animation'>
            <div class='parallax-bg' style='background-image: url(./source/img/${json.parallax.img});' data-swiper-parallax='-23%'></div>
            <div class='swiper-wrapper'>${json.parallax.items.map(_ => `
                <div class='swiper-slide'>
                    <div class='title' data-swiper-parallax='-300'>${_.title}</div>
                    <br />
                    <br />
                    <div class='subtitle' data-swiper-parallax='-200'>${_.subtitle}</div>
                    <br />
                    <div class='text' data-swiper-parallax='-100'>
                        <p>${_.text}</p>
                    </div>
                </div>
            `).join('')}</div>
            <div class='swiper-button-next'></div>
            <div class='swiper-button-prev'></div>
            <div class='swiper-pagination'></div>
        </div>
        <br />
        <br />
        <footer>
            <div class='title scroll-animation'>${json.foot.title}</div>
            <br />
            <div class='text scroll-animation'>
                ${json.foot.help.replace('{{PHONE-NUMBER}}', `<strong>${json.foot.phone}</strong>`)}
            </div>
            <br />
            <br />
            <div class='contact'>
                <a href='tel:+503${json.foot.phone}' title='Teléfono' target='_blank' class='scroll-animation'>
                    <img src='./../../static/img/phone.png' />
                </a>
                <a href='https://wa.me/+503${json.foot.phone}' title='WhatsApp' target='_blank' class='scroll-animation'>
                    <img src='./../../static/img/whatsapp.png' />
                </a>
            </div>
        </footer>
    `;
    interactive();
}
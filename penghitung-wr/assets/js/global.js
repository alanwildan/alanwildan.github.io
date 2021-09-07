function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const takapedia = `<a href="https://msha.ke/takapedia/" target="_blank">takapedia</a>`;
    const IgTaka = `<a href="https://www.instagram.com/taka_pedia/" target="_blank">IgTakapedis</a>`;
    const whatsapp = `<a href="https://api.whatsapp.com/send?phone=6285793432434" target="_blank">WhatsApp</a>`;
    const instagram = `<a href="https://www.instagram.com/shitpost.id_._/" target="_blank">Instagram</a>`

    const msg1 = `<p class="animation mb-0 text-truncate">JOKI, TOP UP & GIFT SKIN ML di ${takapedia} ya</p>`;
    const msg3 = `<p class="animation mb-0 text-truncate">Takapedia dijamin amanah dan terpercaya ${IgTaka}</p>`;
    const msg4 = `<p class="animation mb-0 text-truncate">Follow ${instagram}</p>`;
    const msg5 = `<p class="animation mb-0 text-truncate">Contact ${whatsapp}</p>`;

    let arrayEl = [msg1, msg3, msg4, msg5];
    let arrayMax = 4;
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayMax) {
            array = 0;
        }
    }, 4000);
}

const R = document.body.dataset.root || '',
    PG = document.body.dataset.page;

const U = (id, w = 900) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=90`;

const IMG = {
    hero: '1608571423902-eed4a5ad8108',
    pow: '1615485290382-441e4d049cb5',
    well: '1600185365483-26d7a4cc7519',
    skin: '1556228578-8c89e6adf883',
    oil: '1602928321679-560bb453f190',
    leaf: '1515586000433-45406d8e6662',
    herb: '1530968033775-2c92736b131e',
    life: '1540555700478-4be289fbecef'
};

const P = [
    {
        id: 1,
        n: 'Herbal Wellness Powder',
        c: 'Herbal Powders',
        d: 'A daily herbal powder blend presented for everyday wellness rituals.',
        p: 349,
        m: 449,
        b: 'Bestseller',
        i: IMG.pow,
        s: 'In Stock',
        pop: 9,
        nw: 3
    },
    {
        id: 2,
        n: 'Ashwagandha Capsules',
        c: 'Wellness',
        d: 'Ashwagandha root capsules, inspired by a traditional Ayurvedic herb.',
        p: 399,
        m: 549,
        b: 'Popular',
        i: IMG.well,
        s: 'In Stock',
        pop: 10,
        nw: 5
    },
    {
        id: 3,
        n: 'Aloe Vera Skin Gel',
        c: 'Skincare',
        d: 'A light, cooling aloe gel made for a simple daily skin ritual.',
        p: 299,
        m: 399,
        b: 'New',
        i: IMG.skin,
        s: 'In Stock',
        pop: 7,
        nw: 8
    },
    {
        id: 4,
        n: 'Bhringraj Hair Oil',
        c: 'Oils',
        d: 'A traditional-style herbal hair oil in an amber glass bottle.',
        p: 449,
        m: 649,
        b: 'Signature',
        i: IMG.oil,
        s: 'In Stock',
        pop: 8,
        nw: 4
    },
    {
        id: 5,
        n: 'Neem Herbal Powder',
        c: 'Herbal Powders',
        d: 'Neem leaf powder inspired by classic Indian household wellness.',
        p: 249,
        m: 349,
        b: 'Classic',
        i: IMG.leaf,
        s: 'In Stock',
        pop: 6,
        nw: 2
    },
    {
        id: 6,
        n: 'Herbal Face Wash',
        c: 'Skincare',
        d: 'A gentle botanical-inspired cleanser for morning and evening routines.',
        p: 279,
        m: 349,
        b: 'New',
        i: IMG.hero,
        s: 'In Stock',
        pop: 6,
        nw: 7
    },
    {
        id: 7,
        n: 'Herbal Skin Cream',
        c: 'Skincare',
        d: 'A soft herbal cream presented in a premium matte jar.',
        p: 549,
        m: 699,
        b: 'Limited',
        i: IMG.life,
        s: 'Low Stock',
        pop: 5,
        nw: 6
    },
    {
        id: 8,
        n: 'Ayurvedic Herbal Tea',
        c: 'Wellness',
        d: 'A calming loose-leaf herbal tea blend for slow evenings.',
        p: 399,
        m: 499,
        b: 'Favourite',
        i: IMG.herb,
        s: 'In Stock',
        pop: 7,
        nw: 1
    }
];

['jar', 'amber', 'pump', 'dropper', 'pouch', 'tube', 'jar', 'tin']
    .forEach((k, i) => {
        P[i].k = k;
        P[i].col = i == 0 ? '#183C2B' : '#899B7A';
    });

const ING = [
    [
        'Ashwagandha',
        'ing-1.jpg',
        'A root herb widely referenced in traditional Ayurvedic texts and everyday Indian wellness customs.'
    ],
    [
        'Neem',
        'ing-2.jpg',
        'A familiar tree across India, its leaves have long featured in traditional household practices.'
    ],
    [
        'Aloe Vera',
        'ing-3.jpg',
        'A succulent known for its cooling gel, often used in simple skincare routines.'
    ],
    [
        'Tulsi',
        'ing-4.jpg',
        'Also called holy basil, a sacred plant in many Indian homes and a staple of herbal teas.'
    ],
    [
        'Amla',
        'ing-5.jpg',
        'Indian gooseberry, a celebrated fruit in Ayurvedic tradition and in herbal preparations.'
    ],
    [
        'Turmeric',
        'ing-6.jpg',
        'A golden rhizome central to Indian kitchens and traditional wellness culture.'
    ]
];

const JR = [
    [
        'The Art of Everyday Rituals',
        'ing-4.jpg',
        'Small, repeatable moments, a warm cup of herbal tea, an unhurried skincare step, are how many people bring Ayurvedic thinking into daily life. This is demo editorial content.'
    ],
    [
        'Understanding Botanical Ingredients',
        'ing-1.jpg',
        'From roots to leaves and fruit, botanicals have been part of Indian traditions for centuries. We explore where common ingredients come from. Demo editorial content.'
    ],
    [
        'Rediscovering Traditional Ayurveda',
        'ing-2.jpg',
        'Ayurveda is a traditional Indian system of knowledge that emphasises balance and routine. This article is a placeholder for future writing.'
    ]
];

const POL = {
    Shipping: 'Sample policy text. Complimentary shipping on orders above ₹999 (demo). Replace with your real shipping policy.',
    Privacy: 'Sample policy text. This demo site stores only your cart and wishlist in your own browser. Replace with your real privacy policy.',
    Terms: 'Sample terms text for demonstration only. No real orders or payments are processed on this showcase site.'
};

const $ = (s, e = document) => e.querySelector(s);
const $$ = (s, e = document) => [...e.querySelectorAll(s)];

const ls = (k, d) => {
    try {
        return JSON.parse(localStorage.getItem(k)) || d;
    } catch (e) {
        return d;
    }
};

let cart = ls('mj_cart', {});
let wish = ls('mj_wish', []);

const inr = n => '₹' + n.toLocaleString('en-IN');
const get = id => P.find(p => p.id == id);
const pl = id => `${R}pages/product.html?id=${id}`;

const save = () => {
    try {
        localStorage.setItem('mj_cart', JSON.stringify(cart));
        localStorage.setItem('mj_wish', JSON.stringify(wish));
    } catch (e) {}

    upd();
};

function toast(t) {
    const e = $('#toast');

    e.textContent = t;
    e.classList.add('on');

    clearTimeout(toast.t);

    toast.t = setTimeout(
        () => e.classList.remove('on'),
        2200
    );
}

const ic = d =>
    `<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;

const SVG = {
    s: ic('<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>'),
    u: ic('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>'),
    h: ic('<path d="M12 21s-8-5-8-11a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 10c0 6-8 11-8 11z"/>'),
    b: ic('<path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8a3 3 0 016 0"/>')
};

const lbl = '<span class="lbl">MRITYUNJAY<br>AYURVEDA</span>';

function card(p) {
    return `
        <article class="card rv">
            <div class="ph">
                <a href="${pl(p.id)}">${pk(p)}</a>

                <span class="badge">${p.b}</span>

                <button
                    class="wl ${wish.includes(p.id) ? 'on' : ''}"
                    data-w="${p.id}"
                    aria-label="Wishlist"
                >
                    ${wish.includes(p.id) ? '♥' : '♡'}
                </button>

                <button class="qv" data-q="${p.id}">
                    Quick View
                </button>
            </div>

            <small>${p.c}</small>

            <h3>
                <a href="${pl(p.id)}">${p.n}</a>
            </h3>

            <p class="pr">
                ${inr(p.p)}
                <s>${inr(p.m)}</s>
                <span class="stk">${p.s}</span>
            </p>

            <button class="btn" data-a="${p.id}">
                Add to Bag
            </button>
        </article>
    `;
}

function detail(p, full) {
    const g = [
        R + 'assets/images/ing-2.jpg',
        R + 'assets/images/ing-4.jpg'
    ];

    return `
        <div class="pd">

            <div class="gal">
                <div class="main">
                    <div id="mi">${pk(p)}</div>
                </div>

                ${
                    full
                        ? `
                            <div class="th">
                                <div
                                    class="tp on"
                                    data-t="pk"
                                    data-pid="${p.id}"
                                >
                                    ${pk(p)}
                                </div>

                                ${g.map(x => `
                                    <img data-t="${x}" src="${x}" alt="">
                                `).join('')}
                            </div>
                        `
                        : ''
                }
            </div>

            <div>
                <span class="demo">
                    Demonstration product · Demo price
                </span>

                <small class="eyebrow">${p.c}</small>

                <h1>${p.n}</h1>

                <p class="pr">
                    ${inr(p.p)}
                    <s>${inr(p.m)}</s>
                </p>

                <p style="margin:12px 0">${p.d}</p>

                <p class="stk">${p.s}</p>

                <div class="acts">
                    <div class="q">
                        <button data-qd>−</button>
                        <span id="qn">1</span>
                        <button data-qu>+</button>
                    </div>

                    <button
                        class="btn"
                        data-a="${p.id}"
                        data-qty
                    >
                        Add to Bag
                    </button>

                    <button
                        class="btn o"
                        data-buy="${p.id}"
                        style="margin-left:8px"
                    >
                        Buy Now
                    </button>
                </div>

                ${
                    full
                        ? `
                            <details open>
                                <summary>Ingredients</summary>
                                <p>Ingredient list placeholder. Add verified ingredients here.</p>
                            </details>

                            <details>
                                <summary>Quantity</summary>
                                <p>Pack size placeholder. Editable.</p>
                            </details>

                            <details>
                                <summary>Usage information</summary>
                                <p>Usage directions placeholder. Add approved guidance here.</p>
                            </details>
                        `
                        : `
                            <a class="btn o" href="${pl(p.id)}">
                                View Full Details
                            </a>
                        `
                }

                <p class="dis">
                    Disclaimer: this is a demonstration product on a brand showcase.
                    No verified formulation, medical claim, certification or licence is implied.
                </p>
            </div>
        </div>
    `;
}

function modal(h) {
    const m = $('#modal');

    m.innerHTML = `
        <div class="mbox">
            <button class="x" data-close aria-label="Close">×</button>
            ${h}
        </div>
    `;

    m.classList.add('on');
}

function upd() {
    const n = Object.values(cart).reduce((a, b) => a + b, 0);

    $$('.cc').forEach(e => {
        e.textContent = n;
        e.style.display = n ? 'grid' : 'none';
    });

    $$('.wc').forEach(e => {
        e.textContent = wish.length;
        e.style.display = wish.length ? 'grid' : 'none';
    });

    const ids = Object.keys(cart);
    let t = 0;

    $('#dl').innerHTML = ids.length
        ? ids.map(id => {
            const p = get(id);
            const q = cart[id];

            t += p.p * q;

            return `
                <div class="ci">
                    <span class="tn">${pk(p)}</span>

                    <div>
                        <h4>${p.n}</h4>

                        <div class="q">
                            <button data-dec="${id}">−</button>
                            <span>${q}</span>
                            <button data-inc="${id}">+</button>
                        </div>
                    </div>

                    <div>
                        <b>${inr(p.p * q)}</b>
                        <br>
                        <button class="rm" data-rm="${id}">
                            Remove
                        </button>
                    </div>
                </div>
            `;
        }).join('')
        : '<p class="empty">Your bag is empty.</p>';

    $('#sub').textContent = inr(t);

    $('#fs').innerHTML =
        (
            t >= 999
                ? 'You have unlocked complimentary shipping'
                : 'Add ' + inr(999 - t) + ' more for complimentary shipping'
        ) +
        '<i><b style="width:' + Math.min(100, t / 9.99) + '%"></b></i>';

    $('#co').disabled = !ids.length;

    $$('.wl').forEach(b => {
        const o = wish.includes(+b.dataset.w);

        b.classList.toggle('on', o);
        b.textContent = o ? '♥' : '♡';
    });
}

function add(id, q = 1) {
    cart[id] = (cart[id] || 0) + q;

    save();

    toast(get(id).n + ' added to bag');
}

function drawer(o) {
    $('#drawer').classList.toggle('on', o);
    $('#ov').classList.toggle('on', o);
}

function checkout() {
    drawer(false);

    const ids = Object.keys(cart);
    let t = 0;

    const rows = ids.map(id => {
        const p = get(id);

        t += p.p * cart[id];

        return `
            <p style="display:flex;justify-content:space-between;margin-bottom:6px">
                <span>${p.n} × ${cart[id]}</span>
                <b>${inr(p.p * cart[id])}</b>
            </p>
        `;
    }).join('');

    const sh = t >= 999 ? 0 : 79;

    modal(`
        <h2 style="font-size:2rem">Checkout Preview</h2>

        ${rows || '<p>Your bag is empty.</p>'}

        <hr style="margin:14px 0;border:0;border-top:1px solid #e7e0cf">

        <p style="display:flex;justify-content:space-between">
            Subtotal
            <b>${inr(t)}</b>
        </p>

        <p style="display:flex;justify-content:space-between">
            Shipping (demo)
            <b>${sh ? inr(sh) : 'Complimentary'}</b>
        </p>

        <p style="display:flex;justify-content:space-between;font-size:1.2rem;margin:8px 0 16px">
            Total
            <b>${inr(t + sh)}</b>
        </p>

        <p class="dis">
            This is a preview only. Prices are demo prices;
            no payment or real order processing is enabled.
        </p>

        <br>

        <button class="btn" data-close>
            Continue Browsing
        </button>
    `);
}

function shell() {
    const a = n => PG == n ? 'class="on"' : '';

    document.body.insertAdjacentHTML(
        'afterbegin',
        `
            <div class="ann">
                Complimentary Shipping on Orders Above ₹999
            </div>

            <header>
                <div class="wrap nav">

                    <a class="logo" href="${R}index.html">
                        <img
                            src="${R}assets/images/logo.jpeg"
                            alt="Mrityunjay Ayurveda logo"
                        >

                        <b>
                            MRITYUNJAY
                            <small>AYURVEDA</small>
                        </b>
                    </a>

                    <ul class="menu" id="menu">
                        <li>
                            <a ${a('home')} href="${R}index.html">Home</a>
                        </li>

                        <li>
                            <a ${a('shop')} href="${R}pages/shop.html">Shop</a>

                            <div class="dd">
                                ${
                                    ['Wellness', 'Skincare', 'Oils', 'Herbal Powders']
                                        .map(c => `
                                            <a href="${R}pages/shop.html?cat=${encodeURIComponent(c)}">
                                                ${c}
                                            </a>
                                        `).join('')
                                }
                            </div>
                        </li>

                        <li>
                            <a ${a('about')} href="${R}pages/about.html">
                                Our Story
                            </a>
                        </li>

                        <li>
                            <a href="${R}index.html#ingredients">Ingredients</a>
                        </li>

                        <li>
                            <a href="${R}index.html#journal">Journal</a>
                        </li>

                        <li>
                            <a ${a('contact')} href="${R}pages/contact.html">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div class="icons">
                        <button class="ib" data-search aria-label="Search">
                            ${SVG.s}
                        </button>

                        <button class="ib" data-acct aria-label="Account">
                            ${SVG.u}
                        </button>

                        <button class="ib" data-wishv aria-label="Wishlist">
                            ${SVG.h}
                            <span class="cnt wc"></span>
                        </button>

                        <button class="ib" data-cart aria-label="Bag">
                            ${SVG.b}
                            <span class="cnt cc"></span>
                        </button>

                        <button class="ib burger" id="bg" aria-label="Menu">
                            ☰
                        </button>
                    </div>

                </div>
            </header>
        `
    );

    document.body.insertAdjacentHTML(
        'beforeend',
        `
            <footer>
                <div class="wrap">

                    <div>
                        <a class="logo" href="${R}index.html">
                            <img src="${R}assets/images/logo.jpeg" alt="">

                            <b>
                                MRITYUNJAY
                                <small>AYURVEDA</small>
                            </b>
                        </a>

                        <p class="ft">
                            Ancient Wisdom. Natural Wellness.
                        </p>

                        <p class="fd">
                            A modern Ayurvedic wellness brand inspired by
                            traditional Indian knowledge, botanical ingredients
                            and thoughtful everyday rituals.
                        </p>
                    </div>

                    <div>
                        <h4>Shop</h4>
                        <ul>
                            <li><a href="${R}pages/shop.html">All Products</a></li>
                            <li><a href="${R}pages/shop.html?cat=Wellness">Wellness</a></li>
                            <li><a href="${R}pages/shop.html?cat=Skincare">Skincare</a></li>
                            <li><a href="${R}pages/shop.html?cat=Oils">Oils</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="${R}pages/about.html">About Us</a></li>
                            <li><a href="${R}pages/contact.html">Contact</a></li>
                            <li><a href="#" data-pol="Shipping">Shipping Policy</a></li>
                            <li><a href="#" data-pol="Privacy">Privacy Policy</a></li>
                            <li><a href="#" data-pol="Terms">Terms &amp; Conditions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Follow</h4>
                        <ul>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener"
                                    href="https://www.instagram.com/mrityunjayproducts?dlrf=MXJwaGhwcmVuNHN0OQ=="
                                >
                                    Instagram
                                </a>
                            </li>

                            <li>
                                <a target="_blank" rel="noopener" href="https://facebook.com">
                                    Facebook
                                </a>
                            </li>

                            <li>
                                <a target="_blank" rel="noopener" href="https://youtube.com">
                                    YouTube
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div class="wrap copy">
                    <span>
                        © 2026 MRITYUNJAY AYURVEDA. All rights reserved.
                    </span>
                </div>
            </footer>

            <div class="ov" id="ov"></div>

            <aside id="drawer">
                <div class="dh">
                    <h3>Your Bag</h3>
                    <button class="x" data-dc>×</button>
                </div>

                <div class="fs" id="fs"></div>
                <div class="dl" id="dl"></div>

                <div class="df">
                    <p>
                        <span>Subtotal (demo)</span>
                        <span id="sub"></span>
                    </p>

                    <button class="btn" id="co">
                        Checkout Preview
                    </button>
                </div>
            </aside>

            <div id="sp">
                <div class="wrap">
                    <input
                        id="si"
                        placeholder="Search products…"
                        autocomplete="off"
                    >
                    <div id="sr"></div>
                </div>
            </div>

            <div id="modal"></div>
            <div id="toast"></div>
        `
    );

    upd();
}

document.addEventListener('click', e => {
    const t = e.target.closest('button,a,.jc,.th>*');

    if (!t) return;

    const d = t.dataset;

    if (d.a) {
        let q = 1;

        if (t.hasAttribute('data-qty')) {
            q = +$('#qn').textContent;
        }

        add(d.a, q);
    }

    else if (d.w) {
        const id = +d.w;

        wish = wish.includes(id)
            ? wish.filter(x => x != id)
            : [...wish, id];

        save();

        toast(
            wish.includes(id)
                ? 'Added to wishlist'
                : 'Removed from wishlist'
        );
    }

    else if (d.q) {
        const p = get(d.q);
        modal(detail(p, false));
    }

    else if (d.buy) {
        add(
            d.buy,
            +($('#qn') || { textContent: 1 }).textContent
        );

        checkout();
    }

    else if ('qu' in d || 'qd' in d) {
        const n = $('#qn');

        n.textContent = Math.max(
            1,
            +n.textContent + ('qu' in d ? 1 : -1)
        );
    }

    else if (d.inc) {
        cart[d.inc]++;
        save();
    }

    else if (d.dec) {
        cart[d.dec] > 1
            ? cart[d.dec]--
            : delete cart[d.dec];

        save();
    }

    else if (d.rm) {
        delete cart[d.rm];
        save();
    }

    else if ('cart' in d) {
        drawer(true);
    }

    else if ('dc' in d) {
        drawer(false);
    }

    else if (t.id == 'co') {
        checkout();
    }

    else if ('search' in d) {
        $('#sp').classList.add('on');
        $('#ov').classList.add('on');
        $('#si').focus();
    }

    else if ('wishv' in d) {
        const l = wish.map(get);

        modal(`
            <h2 style="font-size:2rem">Your Wishlist</h2>

            ${
                l.length
                    ? l.map(p => `
                        <p style="margin:10px 0">
                            <a href="${pl(p.id)}">
                                <b>${p.n}</b>
                            </a>

                            · ${inr(p.p)}

                            <button class="rm" data-w="${p.id}">
                                Remove
                            </button>

                            <button class="rm" data-a="${p.id}">
                                Add to bag
                            </button>
                        </p>
                    `).join('')
                    : '<p>No saved items yet. Tap the heart on any product.</p>'
            }
        `);
    }

    else if ('acct' in d) {
        modal(`
            <h2 style="font-size:2rem">Account</h2>
            <p>
                Sign-in is not enabled in this showcase.
                Your bag and wishlist are saved in this browser.
            </p>
        `);
    }

    else if (d.pol) {
        e.preventDefault();

        modal(`
            <h2 style="font-size:2rem">${d.pol} Policy</h2>
            <p>${POL[d.pol]}</p>
        `);
    }

    else if (d.j !== undefined) {
        const j = JR[d.j];

        modal(`
            <img
                src="${R}assets/images/${j[1]}"
                alt=""
                style="margin-bottom:18px;width:100%;max-height:320px;object-fit:cover"
            >

            <h2 style="font-size:2rem">${j[0]}</h2>
            <p>${j[2]}</p>
        `);
    }

    else if (t.dataset.t) {
        $('#mi').innerHTML =
            d.t == 'pk'
                ? pk(get(d.pid))
                : `<img src="${d.t}" alt="">`;

        $$('.th>*').forEach(i => {
            i.classList.toggle('on', i == t);
        });
    }

    else if (t.id == 'bg') {
        $('#menu').classList.toggle('on');
    }

    if (e.target.id == 'ov') {
        drawer(false);
        $('#sp').classList.remove('on');
        $('#ov').classList.remove('on');
    }

    if ('close' in d || e.target.id == 'modal') {
        $('#modal').classList.remove('on');
    }
});

document.addEventListener('input', e => {
    if (e.target.id != 'si') return;

    const q = e.target.value.toLowerCase().trim();

    $('#sr').innerHTML = q
        ? (
            P.filter(p =>
                (p.n + p.c + p.d).toLowerCase().includes(q)
            )
                .map(p => `
                    <a href="${pl(p.id)}">
                        <span class="tn">${pk(p)}</span>

                        <span>
                            ${p.n}
                            <br>
                            <small>${p.c} · ${inr(p.p)}</small>
                        </span>
                    </a>
                `)
                .join('')

            || '<p style="padding:12px 0">No products found.</p>'
        )
        : '';
});

document.addEventListener('keydown', e => {
    if (e.key == 'Escape') {
        $('#modal').classList.remove('on');
        drawer(false);
        $('#sp').classList.remove('on');
        $('#ov').classList.remove('on');
    }
});

function reveal() {
    const o = new IntersectionObserver(
        es => es.forEach(x => {
            if (x.isIntersecting) {
                x.target.classList.add('in');
                o.unobserve(x.target);
            }
        }),
        { threshold: .1 }
    );

    $$('.rv:not(.in)').forEach(e => o.observe(e));
}

function shop() {
    const q = new URLSearchParams(location.search);

    let S = {
        q: '',
        c: q.get('cat') || 'All',
        pr: 'all',
        so: 'pop'
    };

    const cats = [
        'All',
        'Wellness',
        'Skincare',
        'Oils',
        'Herbal Powders'
    ];

    $('#chips').innerHTML = cats.map(c => `
        <button class="chip" data-c="${c}">
            ${c}
        </button>
    `).join('');

    const run = () => {
        $$('.chip').forEach(c => {
            c.classList.toggle('on', c.dataset.c == S.c);
        });

        let l = P.filter(p =>
            (S.c == 'All' || p.c == S.c) &&
            (p.n + p.c).toLowerCase().includes(S.q) &&
            (
                S.pr == 'all' ||
                (
                    S.pr == 'lo'
                        ? p.p < 300
                        : S.pr == 'mid'
                            ? p.p >= 300 && p.p <= 450
                            : p.p > 450
                )
            )
        );

        l.sort((a, b) =>
            S.so == 'pa'
                ? a.p - b.p
                : S.so == 'pd'
                    ? b.p - a.p
                    : S.so == 'new'
                        ? b.nw - a.nw
                        : b.pop - a.pop
        );

        $('#sg').innerHTML = l.length
            ? l.map(card).join('')
            : '<p class="empty" style="grid-column:1/-1">No products match your filters.</p>';

        reveal();
    };

    $('#chips').onclick = e => {
        if (e.target.dataset.c) {
            S.c = e.target.dataset.c;
            run();
        }
    };

    $('#sq').oninput = e => {
        S.q = e.target.value.toLowerCase();
        run();
    };

    $('#pf').onchange = e => {
        S.pr = e.target.value;
        run();
    };

    $('#so').onchange = e => {
        S.so = e.target.value;
        run();
    };

    run();
}

function home() {
    $$('[data-pk]').forEach(e => {
        e.innerHTML = pk(get(e.dataset.pk));
    });

    $('#fg').innerHTML = P.map(card).join('');

    $('#ig').innerHTML = ING.map(i => `
        <div class="ing rv">
            <img
                loading="lazy"
                src="${R}assets/images/${i[1]}"
                alt="${i[0]}"
            >

            <div>
                <h3>${i[0]}</h3>
                <p>${i[2]}</p>
            </div>
        </div>
    `).join('');

    $('#jg').innerHTML = JR.map((j, k) => `
        <div class="jc rv" data-j="${k}">
            <div class="im">
                <img
                    loading="lazy"
                    src="${R}assets/images/${j[1]}"
                    alt=""
                >
            </div>

            <span>Journal</span>
            <h3>${j[0]}</h3>
        </div>
    `).join('');

    $('#nl').onsubmit = e => {
        e.preventDefault();

        toast('Thank you! (demo, nothing was sent)');

        e.target.reset();
    };
}

function prod() {
    const id = new URLSearchParams(location.search).get('id') || 1;
    const p = get(id) || P[0];

    document.title = p.n + ' | MRITYUNJAY AYURVEDA';

    $('#pd').innerHTML = detail(p, true);

    $('#rel').innerHTML = P
        .filter(x => x.id != p.id)
        .sort((a, b) => (b.c == p.c) - (a.c == p.c))
        .slice(0, 4)
        .map(card)
        .join('');
}

function contact() {
    $('#cf').onsubmit = e => {
        e.preventDefault();

        toast('Message received (demo, not actually sent)');

        e.target.reset();
    };
}

shell();

({ home, shop, prod, contact })[PG]?.();

reveal();
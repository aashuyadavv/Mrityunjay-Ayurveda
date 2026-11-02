/* =========================================
   STUDIO-STYLE PRODUCT RENDERS
   Inline SVG – Consistent MRITYUNJAY AYURVEDA Packaging
========================================= */

let _u = 0;

function pkSvg(p) {
    const u = 'g' + (++_u);
    const k = p.k;
    const nm = p.n.toUpperCase();
    const S = `url(#${u}s)`;
    const G = '#c4a766';

    const B = (t, g, f) =>
        `<${t} ${g} fill="${f}"/><${t} ${g} fill="${S}"/>`;

    const lf = (x, y, r, s, c) => `
        <g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">
            <path
                d="M0 0C25-34 75-34 100 0C75 34 25 34 0 0Z"
                fill="${c}"
            />
            <path
                d="M4 0H96"
                stroke="#fff"
                stroke-opacity=".28"
            />
        </g>
    `;

    const lab = (w, h, cy, inv) => {
        const x = 200 - w / 2;
        const y = cy - h / 2;

        const bg = inv ? '#183C2B' : '#f7f3e9';
        const a = inv ? '#f7f3e9' : '#183C2B';

        return `
            <rect
                x="${x}"
                y="${y}"
                width="${w}"
                height="${h}"
                rx="2"
                fill="${bg}"
                stroke="${G}"
                stroke-width=".9"
            />

            <rect
                x="${x + 4}"
                y="${y + 4}"
                width="${w - 8}"
                height="${h - 8}"
                fill="none"
                stroke="${G}"
                stroke-width=".4"
            />

            <path
                d="M200 ${y + 13}q-6-6-4-12q4 3 4 6q0-3 4-6q2 6-4 12z"
                fill="${G}"
            />

            <text
                x="200"
                y="${cy + 3}"
                text-anchor="middle"
                font-family="Playfair Display,serif"
                font-weight="600"
                font-size="${w < 100 ? 10 : 12}"
                letter-spacing="2.2"
                fill="${a}"
            >
                MRITYUNJAY
            </text>

            <text
                x="200"
                y="${cy + 15}"
                text-anchor="middle"
                font-family="DM Sans,sans-serif"
                font-size="6.4"
                letter-spacing="4"
                fill="${G}"
            >
                AYURVEDA
            </text>

            <path
                d="M180 ${cy + 22}h40"
                stroke="${G}"
                stroke-width=".6"
            />

            <text
                x="200"
                y="${y + h - 8}"
                text-anchor="middle"
                font-family="DM Sans,sans-serif"
                font-size="5"
                letter-spacing=".8"
                fill="${a}"
            >
                ${nm}
            </text>
        `;
    };

    let o = '';

    /* Jar Packaging */
    if (k == 'jar') {
        o =
            B(
                'rect',
                'x="104" y="210" width="192" height="156" rx="16"',
                p.col
            ) +
            B(
                'rect',
                'x="100" y="166" width="200" height="48" rx="7"',
                G
            ) +
            lab(150, 96, 292);
    }

    /* Amber Bottle */
    if (k == 'amber') {
        o =
            B(
                'path',
                'd="M138 244Q138 206 176 196V176H224V196Q262 206 262 244V348Q262 366 244 366H156Q138 366 138 348Z"',
                '#9a5418'
            ) +
            B(
                'rect',
                'x="171" y="130" width="58" height="48" rx="5"',
                '#1d2a22'
            ) +
            `<rect x="171" y="168" width="58" height="5" fill="${G}"/>` +
            lab(110, 88, 300);
    }

    /* Dropper Bottle */
    if (k == 'dropper') {
        o =
            B(
                'path',
                'd="M146 240Q146 212 186 204V178H214V204Q254 212 254 240V350Q254 366 238 366H162Q146 366 146 350Z"',
                '#8c4b14'
            ) +
            B(
                'rect',
                'x="178" y="156" width="44" height="26" rx="3"',
                G
            ) +
            B(
                'path',
                'd="M184 158V112Q184 86 200 86Q216 86 216 112V158Z"',
                '#16221b'
            ) +
            lab(98, 92, 302);
    }

    /* Pump Bottle */
    if (k == 'pump') {
        o =
            B(
                'path',
                'd="M134 244Q134 214 186 206V186H214V206Q266 214 266 244V348Q266 366 248 366H152Q134 366 134 348Z"',
                '#93b38c'
            ) +
            B(
                'rect',
                'x="193" y="150" width="14" height="38" rx="3"',
                '#e9e0c8'
            ) +
            B(
                'rect',
                'x="164" y="128" width="68" height="24" rx="7"',
                '#e9e0c8'
            ) +
            B(
                'rect',
                'x="226" y="134" width="26" height="9" rx="4"',
                '#e9e0c8'
            ) +
            lab(104, 90, 302);
    }

    /* Tube Packaging */
    if (k == 'tube') {
        o =
            B(
                'path',
                'd="M146 356L140 172Q140 158 154 158H246Q260 158 260 172L254 356Z"',
                '#efe6d0'
            ) +
            B(
                'rect',
                'x="140" y="126" width="120" height="34" rx="3"',
                '#e2d8bf'
            ) +
            '<path d="M146 134h108M146 142h108M146 150h108" stroke="#000" stroke-opacity=".12"/>' +
            B(
                'rect',
                'x="158" y="356" width="84" height="20" rx="4"',
                '#183C2B'
            ) +
            lab(104, 104, 258, 1);
    }

    /* Tin Packaging */
    if (k == 'tin') {
        o =
            B(
                'rect',
                'x="116" y="190" width="168" height="178" rx="10"',
                '#efe6d0'
            ) +
            B(
                'rect',
                'x="112" y="166" width="176" height="32" rx="7"',
                G
            ) +
            lab(124, 100, 284, 1);
    }

    /* Pouch Packaging */
    if (k == 'pouch') {
        o =
            B(
                'path',
                'd="M122 368L112 150Q112 138 126 138H274Q288 138 288 150L278 368Q200 376 122 368Z"',
                '#294A35'
            ) +
            '<path d="M112 166H288" stroke="#fff" stroke-opacity=".3"/>' +
            '<rect x="112" y="138" width="176" height="14" fill="#fff" opacity=".12"/>' +
            lab(128, 108, 266);
    }

    /* Final SVG Render */
    return `
        <svg
            viewBox="0 0 400 500"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-label="${p.n}"
        >

            <defs>

                <radialGradient
                    id="${u}b"
                    cx=".3"
                    cy=".15"
                    r="1.1"
                >
                    <stop offset="0" stop-color="#fffaf0"/>
                    <stop offset="1" stop-color="#e6dbc2"/>
                </radialGradient>

                <linearGradient id="${u}s">
                    <stop offset="0" stop-opacity=".3"/>
                    <stop offset=".2" stop-color="#fff" stop-opacity=".38"/>
                    <stop offset=".42" stop-color="#fff" stop-opacity="0"/>
                    <stop offset=".85" stop-opacity=".14"/>
                    <stop offset="1" stop-opacity=".4"/>
                </linearGradient>

                <linearGradient
                    id="${u}t"
                    x2="0"
                    y2="1"
                >
                    <stop offset="0" stop-color="#e5dcc8"/>
                    <stop offset="1" stop-color="#c9bda4"/>
                </linearGradient>

                <filter id="${u}f">
                    <feGaussianBlur stdDeviation="8"/>
                </filter>

            </defs>

            <rect
                width="400"
                height="500"
                fill="url(#${u}b)"
            />

            <path
                d="M0 0H190L40 500H0Z"
                fill="#fff"
                opacity=".25"
            />

            ${lf(300, 262, -105, 1.15, '#4c7a57')}
            ${lf(318, 250, -80, .9, '#2f5a40')}

            <path
                d="M0 372Q200 350 400 372V500H0Z"
                fill="url(#${u}t)"
            />

            <ellipse
                cx="220"
                cy="376"
                rx="125"
                ry="11"
                fill="#2a2418"
                opacity=".38"
                filter="url(#${u}f)"
            />

            <g transform="translate(200 372) scale(1.16) translate(-200 -372)">
                ${o}
            </g>

            ${lf(46, 372, -38, .85, '#3f6b4a')}
            ${lf(70, 386, -78, .7, '#5d8461')}
            ${lf(352, 380, 212, .75, '#3a6347')}

            <circle cx="330" cy="408" r="5" fill="#b99a5b"/>
            <circle cx="342" cy="414" r="4" fill="#a8864a"/>

        </svg>
    `;
}


/* =========================================
   PRODUCT IMAGE
========================================= */

function pk(p) {
    return `
        <img
            class="pimg"
            src="${(document.body.dataset.root || '')}assets/images/product-0${p.id}.jpg"
            alt="${p.n}"
            loading="lazy"
        >
    `;
}
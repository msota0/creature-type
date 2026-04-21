"""
Creature SVG shapes — direct port of frontend ResultArt.tsx.
Keep in sync with ResultArt.tsx if you ever change the creature artwork.
"""

CREATURE_ART = {
    "owl": """
        <circle cx="150" cy="160" r="72" fill="rgba(215,199,162,0.18)" />
        <ellipse cx="150" cy="185" rx="65" ry="78" fill="#7b633d" />
        <circle cx="120" cy="145" r="32" fill="#d7c7a2" />
        <circle cx="180" cy="145" r="32" fill="#d7c7a2" />
        <circle cx="120" cy="145" r="16" fill="#1a1721" />
        <circle cx="180" cy="145" r="16" fill="#1a1721" />
        <polygon points="150,162 138,182 162,182" fill="#e8b15e" />
        <path d="M102 103 L125 70 L138 112" fill="#7b633d" />
        <path d="M198 103 L175 70 L162 112" fill="#7b633d" />
        <path d="M112 255 Q150 228 188 255" stroke="#d7c7a2" stroke-width="4"
              fill="none" stroke-linecap="round" />
    """,
    "raccoon": """
        <circle cx="150" cy="160" r="76" fill="rgba(200,192,199,0.18)" />
        <ellipse cx="150" cy="180" rx="68" ry="74" fill="#716b75" />
        <circle cx="150" cy="145" r="54" fill="#c8c0c7" />
        <ellipse cx="118" cy="143" rx="26" ry="18" fill="#57515a" transform="rotate(-12 118 143)" />
        <ellipse cx="182" cy="143" rx="26" ry="18" fill="#57515a" transform="rotate(12 182 143)" />
        <circle cx="120" cy="145" r="10" fill="#111014" />
        <circle cx="180" cy="145" r="10" fill="#111014" />
        <ellipse cx="150" cy="170" rx="12" ry="8" fill="#111014" />
        <path d="M108 106 L124 76 L139 112" fill="#716b75" />
        <path d="M192 106 L176 76 L161 112" fill="#716b75" />
        <path d="M120 230 C170 220 205 240 214 274" stroke="#8b868d" stroke-width="10"
              fill="none" stroke-linecap="round" />
    """,
    "fox": """
        <circle cx="150" cy="160" r="72" fill="rgba(244,192,139,0.16)" />
        <path d="M150 88 L220 188 L150 248 L80 188 Z" fill="#c96b32" />
        <path d="M150 115 L198 188 L150 225 L102 188 Z" fill="#f4c08b" />
        <path d="M97 118 L113 64 L140 122" fill="#c96b32" />
        <path d="M203 118 L187 64 L160 122" fill="#c96b32" />
        <path d="M112 106 L121 82 L136 114" fill="#f9dcc0" />
        <path d="M188 106 L179 82 L164 114" fill="#f9dcc0" />
        <circle cx="126" cy="170" r="9" fill="#201b19" />
        <circle cx="174" cy="170" r="9" fill="#201b19" />
        <path d="M145 186 L155 186 L150 194 Z" fill="#201b19" />
    """,
    "cat": """
        <circle cx="150" cy="160" r="76" fill="rgba(216,178,200,0.16)" />
        <circle cx="150" cy="162" r="62" fill="#aa77a0" />
        <path d="M102 118 L118 70 L138 126" fill="#7d4e73" />
        <path d="M198 118 L182 70 L162 126" fill="#7d4e73" />
        <circle cx="126" cy="158" r="10" fill="#221928" />
        <circle cx="174" cy="158" r="10" fill="#221928" />
        <ellipse cx="150" cy="182" rx="11" ry="8" fill="#221928" />
        <path d="M150 190 Q141 200 132 200" stroke="#221928" stroke-width="3"
              fill="none" stroke-linecap="round" />
        <path d="M150 190 Q159 200 168 200" stroke="#221928" stroke-width="3"
              fill="none" stroke-linecap="round" />
        <path d="M101 178 H68" stroke="#e8d3e3" stroke-width="3" stroke-linecap="round" />
        <path d="M101 188 H68" stroke="#e8d3e3" stroke-width="3" stroke-linecap="round" />
        <path d="M199 178 H232" stroke="#e8d3e3" stroke-width="3" stroke-linecap="round" />
        <path d="M199 188 H232" stroke="#e8d3e3" stroke-width="3" stroke-linecap="round" />
    """,
    "rabbit": """
        <circle cx="150" cy="168" r="72" fill="rgba(230,220,184,0.16)" />
        <ellipse cx="126" cy="88" rx="22" ry="52" fill="#c1b184" transform="rotate(-10 126 88)" />
        <ellipse cx="174" cy="88" rx="22" ry="52" fill="#c1b184" transform="rotate(10 174 88)" />
        <ellipse cx="126" cy="88" rx="10" ry="34" fill="#f0decd" transform="rotate(-10 126 88)" />
        <ellipse cx="174" cy="88" rx="10" ry="34" fill="#f0decd" transform="rotate(10 174 88)" />
        <circle cx="150" cy="170" r="62" fill="#c1b184" />
        <circle cx="126" cy="162" r="10" fill="#211b16" />
        <circle cx="174" cy="162" r="10" fill="#211b16" />
        <ellipse cx="150" cy="184" rx="12" ry="9" fill="#211b16" />
        <rect x="140" y="194" width="8" height="18" rx="4" fill="#fff9ef" />
        <rect x="152" y="194" width="8" height="18" rx="4" fill="#fff9ef" />
    """,
}


# Creature metadata — mirrors creatures.ts
CREATURES_META = {
    "owl": {
        "name": "Book Owl",
        "title": "The elegant scholar of the dimly lit corner",
        "blurb": "You are thoughtful, observant, and quietly intense. You like depth, atmosphere, and the kind of study session that feels mildly sacred.",
        "colors": ("#d7c7a2", "#8a6d46"),
        "badge": "Ancient-reader energy",
    },
    "raccoon": {
        "name": "Deadline Raccoon",
        "title": "The scrappy miracle worker of the eleventh hour",
        "blurb": "You are chaotic, resilient, and fueled by a concerning amount of last-minute conviction. Against all odds, you somehow get it done.",
        "colors": ("#c8c0c7", "#5a5560"),
        "badge": "Ferally competent",
    },
    "fox": {
        "name": "Silent Fox",
        "title": "The polished strategist of the hidden desk",
        "blurb": "You are efficient, self-contained, and not here for unnecessary interaction. You move with intention and prefer clarity over chaos.",
        "colors": ("#f4c08b", "#a04c22"),
        "badge": "Quietly lethal focus",
    },
    "cat": {
        "name": "Archive Cat",
        "title": "The curious wanderer who makes the library their own",
        "blurb": "You don't just sit — you settle in. You like space, time, and the freedom to wander between ideas.",
        "colors": ("#d8b2c8", "#7d4e73"),
        "badge": "Softly curious energy",
    },
    "rabbit": {
        "name": "Research Rabbit",
        "title": "The focused thinker where ideas start to connect",
        "blurb": "You thrive when everything clicks into place. You move quickly, but with purpose.",
        "colors": ("#e6dcb8", "#8b7650"),
        "badge": "Precision meets curiosity",
    },
}
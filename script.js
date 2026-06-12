const majorArcana = [
  {
    name: "The Fool",
    symbol: "0",
    keywords: ["beginning", "trust", "risk"],
    meaning: "You are at the edge of something new. This card invites curiosity, courage, and a willingness to learn as you go.",
    prompt: "What would become possible if you took the next step without needing every answer first?"
  },
  {
    name: "The Magician",
    symbol: "I",
    keywords: ["skill", "focus", "action"],
    meaning: "You already have more tools than you think. Direct your attention clearly and turn intention into action.",
    prompt: "Which resource, talent, or contact can you use today?"
  },
  {
    name: "The High Priestess",
    symbol: "II",
    keywords: ["intuition", "mystery", "inner knowing"],
    meaning: "Not everything is ready to be forced into the open. Quiet observation and instinct may reveal the next truth.",
    prompt: "What do you know quietly, before you explain it to anyone?"
  },
  {
    name: "The Empress",
    symbol: "III",
    keywords: ["growth", "care", "creation"],
    meaning: "Something needs patience, nourishment, and a softer kind of strength. Give your idea or relationship room to grow.",
    prompt: "Where would care work better than pressure?"
  },
  {
    name: "The Emperor",
    symbol: "IV",
    keywords: ["structure", "authority", "stability"],
    meaning: "Clear boundaries and practical structure can protect what matters. Make the plan visible and dependable.",
    prompt: "What rule or routine would make this situation steadier?"
  },
  {
    name: "The Hierophant",
    symbol: "V",
    keywords: ["tradition", "learning", "guidance"],
    meaning: "There may be wisdom in established methods, mentors, or shared values. You do not have to invent every answer alone.",
    prompt: "Whose experience could help you make a wiser choice?"
  },
  {
    name: "The Lovers",
    symbol: "VI",
    keywords: ["choice", "alignment", "connection"],
    meaning: "A meaningful decision asks you to act from your real values. Choose the path that lets you stay whole.",
    prompt: "Which option feels most aligned with the person you want to be?"
  },
  {
    name: "The Chariot",
    symbol: "VII",
    keywords: ["willpower", "direction", "momentum"],
    meaning: "Progress comes through focus and self-command. Hold the reins, choose a direction, and keep moving.",
    prompt: "Where do you need to stop drifting and decide?"
  },
  {
    name: "Strength",
    symbol: "VIII",
    keywords: ["patience", "courage", "compassion"],
    meaning: "This is quiet bravery: staying kind, steady, and honest under pressure. Force is not the only form of power.",
    prompt: "How can you be firm without becoming harsh?"
  },
  {
    name: "The Hermit",
    symbol: "IX",
    keywords: ["reflection", "solitude", "wisdom"],
    meaning: "Step back from the noise. A period of reflection can help you hear your own guidance more clearly.",
    prompt: "What answer appears when you stop asking everyone else?"
  },
  {
    name: "Wheel of Fortune",
    symbol: "X",
    keywords: ["change", "cycles", "turning point"],
    meaning: "The situation is moving. Adaptability matters now, especially where old patterns are ending or repeating.",
    prompt: "What cycle are you ready to interrupt or welcome?"
  },
  {
    name: "Justice",
    symbol: "XI",
    keywords: ["truth", "fairness", "accountability"],
    meaning: "Look at the facts plainly. Honest choices and clear consequences will bring the most balanced result.",
    prompt: "What would be fair if everyone involved were treated with respect?"
  },
  {
    name: "The Hanged Man",
    symbol: "XII",
    keywords: ["pause", "surrender", "new view"],
    meaning: "A delay may be asking you to see differently. Stop pushing for a moment and let perspective shift.",
    prompt: "What changes if you look at this from the opposite angle?"
  },
  {
    name: "Death",
    symbol: "XIII",
    keywords: ["ending", "release", "transformation"],
    meaning: "Something has reached its natural end. Letting go creates space for a cleaner, truer beginning.",
    prompt: "What are you keeping alive only because endings are uncomfortable?"
  },
  {
    name: "Temperance",
    symbol: "XIV",
    keywords: ["balance", "healing", "integration"],
    meaning: "Blend extremes into something workable. Slow, steady adjustment can solve what force cannot.",
    prompt: "Where can you choose moderation without losing momentum?"
  },
  {
    name: "The Devil",
    symbol: "XV",
    keywords: ["attachment", "shadow", "pattern"],
    meaning: "A habit, fear, or desire may be taking more power than it deserves. Naming the pattern loosens it.",
    prompt: "What has been controlling your choice more than you want to admit?"
  },
  {
    name: "The Tower",
    symbol: "XVI",
    keywords: ["disruption", "truth", "release"],
    meaning: "A shaky structure may be breaking so something honest can stand. Uncomfortable truth can be liberation.",
    prompt: "What truth would change everything if you stopped avoiding it?"
  },
  {
    name: "The Star",
    symbol: "XVII",
    keywords: ["hope", "renewal", "faith"],
    meaning: "After strain, the Star brings calm repair. Let yourself believe in recovery and take one clean breath forward.",
    prompt: "What small sign of hope deserves more attention?"
  },
  {
    name: "The Moon",
    symbol: "XVIII",
    keywords: ["uncertainty", "dreams", "illusion"],
    meaning: "Feelings may be strong while facts are unclear. Move carefully, and do not mistake fear for intuition.",
    prompt: "What do you need to verify before deciding?"
  },
  {
    name: "The Sun",
    symbol: "XIX",
    keywords: ["joy", "clarity", "success"],
    meaning: "Clarity and warmth are available. Let the simple truth be simple, and allow yourself to enjoy progress.",
    prompt: "Where can you stop minimizing what is going well?"
  },
  {
    name: "Judgement",
    symbol: "XX",
    keywords: ["calling", "awakening", "review"],
    meaning: "You are being asked to rise into a more honest version of yourself. Review the past, then answer the call.",
    prompt: "What are you ready to stop repeating?"
  },
  {
    name: "The World",
    symbol: "XXI",
    keywords: ["completion", "wholeness", "arrival"],
    meaning: "A cycle is completing. Recognize what you have learned before stepping into the next chapter.",
    prompt: "What deserves to be celebrated before you move on?"
  }
];

const suitMeanings = {
  Cups: {
    symbol: "C",
    theme: "emotions and relationships",
    keywords: ["feeling", "connection", "intuition"]
  },
  Wands: {
    symbol: "W",
    theme: "energy, creativity, and drive",
    keywords: ["spark", "motion", "confidence"]
  },
  Swords: {
    symbol: "S",
    theme: "thoughts, truth, and decisions",
    keywords: ["clarity", "choice", "communication"]
  },
  Pentacles: {
    symbol: "P",
    theme: "work, money, body, and daily life",
    keywords: ["stability", "resources", "practice"]
  }
};

const rankMeanings = [
  {
    rank: "Ace",
    symbol: "A",
    keywords: ["seed", "opening", "potential"],
    meaning: "A fresh beginning is available. Treat it as a seed that needs attention before it becomes visible progress.",
    prompt: "What new possibility deserves your first serious step?"
  },
  {
    rank: "Two",
    symbol: "2",
    keywords: ["choice", "balance", "partnership"],
    meaning: "Two paths, needs, or people are asking to be held together with care. Balance matters more than speed.",
    prompt: "What needs to be compared honestly before you choose?"
  },
  {
    rank: "Three",
    symbol: "3",
    keywords: ["growth", "support", "expression"],
    meaning: "Something is beginning to take shape through collaboration, expression, or early momentum.",
    prompt: "Who or what can help this grow beyond your private idea?"
  },
  {
    rank: "Four",
    symbol: "4",
    keywords: ["foundation", "pause", "security"],
    meaning: "Stability is the lesson. Rest, structure, and a reliable base will help more than rushing.",
    prompt: "What foundation needs attention before the next move?"
  },
  {
    rank: "Five",
    symbol: "5",
    keywords: ["conflict", "strain", "change"],
    meaning: "Friction is revealing where something no longer works. Do not ignore the discomfort; learn from it.",
    prompt: "What is this tension trying to show you?"
  },
  {
    rank: "Six",
    symbol: "6",
    keywords: ["repair", "harmony", "support"],
    meaning: "A calmer pattern can return through generosity, perspective, or a willingness to receive help.",
    prompt: "Where can you restore balance with one kind action?"
  },
  {
    rank: "Seven",
    symbol: "7",
    keywords: ["assessment", "challenge", "faith"],
    meaning: "You may need to defend your progress or reassess your strategy. Stay honest about what is working.",
    prompt: "What deserves persistence, and what needs a new approach?"
  },
  {
    rank: "Eight",
    symbol: "8",
    keywords: ["movement", "practice", "focus"],
    meaning: "Progress comes through repeated effort and practical focus. Keep the energy moving in a chosen direction.",
    prompt: "What small repeated action would change the outcome?"
  },
  {
    rank: "Nine",
    symbol: "9",
    keywords: ["nearly there", "resilience", "wisdom"],
    meaning: "You are close to an important realization or result. Protect your energy and trust what experience has taught you.",
    prompt: "What have you already learned the hard way?"
  },
  {
    rank: "Ten",
    symbol: "10",
    keywords: ["completion", "weight", "turning point"],
    meaning: "A cycle is reaching its full weight. Completion may require release, gratitude, or a clearer boundary.",
    prompt: "What is finished enough to stop carrying?"
  },
  {
    rank: "Page",
    symbol: "Pg",
    keywords: ["student", "message", "curiosity"],
    meaning: "Beginner's mind is useful now. Ask questions, experiment, and treat new information as an invitation.",
    prompt: "What would you try if you allowed yourself to be new at it?"
  },
  {
    rank: "Knight",
    symbol: "Kn",
    keywords: ["pursuit", "movement", "devotion"],
    meaning: "Momentum is building. Choose the direction carefully, because your energy will amplify whatever you chase.",
    prompt: "What are you pursuing, and is it still worth the pace?"
  },
  {
    rank: "Queen",
    symbol: "Q",
    keywords: ["maturity", "care", "inner authority"],
    meaning: "Lead from emotional intelligence and quiet confidence. Your presence can shape the atmosphere around you.",
    prompt: "How can you respond from maturity instead of reaction?"
  },
  {
    rank: "King",
    symbol: "K",
    keywords: ["mastery", "leadership", "responsibility"],
    meaning: "This card asks for steady leadership. Own your choices and use your influence with integrity.",
    prompt: "Where are you being asked to lead more clearly?"
  }
];

const minorArcana = Object.entries(suitMeanings).flatMap(([suit, suitInfo]) =>
  rankMeanings.map((rankInfo) => ({
    name: `${rankInfo.rank} of ${suit}`,
    suit,
    rank: rankInfo.rank,
    symbol: `${rankInfo.symbol}${suitInfo.symbol}`,
    keywords: [...rankInfo.keywords.slice(0, 2), suitInfo.keywords[0]],
    meaning: `${rankInfo.meaning} In the suit of ${suit}, this points toward ${suitInfo.theme}.`,
    prompt: rankInfo.prompt
  }))
);

const tarotDeck = [...majorArcana, ...minorArcana];

const positions = {
  1: ["Card of the moment"],
  3: ["Past influence", "Present energy", "Guidance"]
};

const visibleCardCount = 21;

const grid = document.querySelector("#cards-grid");
const summary = document.querySelector("#reading-summary");
const deckStatus = document.querySelector("#deck-status");
const wingDeck = document.querySelector("#wing-deck");
const resetButton = document.querySelector("#reset-button");
const questionInput = document.querySelector("#question");
const spreadInput = document.querySelector("#spread");
let visibleDeck = [];
let selectedCards = [];

function drawCards(count) {
  const shuffled = [...tarotDeck];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % (index + 1);
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled.slice(0, count);
}

function shuffleDeck() {
  visibleDeck = drawCards(visibleCardCount);
  selectedCards = [];
  renderWingDeck();
  updateDeckStatus();
  renderEmptyReading();
}

function renderWingDeck() {
  const center = (visibleDeck.length - 1) / 2;

  wingDeck.innerHTML = visibleDeck
    .map((card, index) => {
      const distance = index - center;
      const offset = Math.round(distance * 14);
      const angle = Math.round(distance * 4.2);
      const rise = Math.round(Math.abs(distance) * 7);

      return `
        <button
          class="pick-card"
          type="button"
          style="--offset: ${offset}; --angle: ${angle}; --rise: ${rise}; z-index: ${index + 1};"
          data-card-index="${index}"
          aria-label="Choose card ${index + 1}"
        ></button>
      `;
    })
    .join("");
}

function updateDeckStatus() {
  const spread = Number(spreadInput.value);
  const remaining = spread - selectedCards.length;

  if (remaining <= 0) {
    deckStatus.textContent = "Reading ready";
    return;
  }

  deckStatus.textContent = `Pick ${remaining} ${remaining === 1 ? "card" : "cards"}`;
}

function chooseCard(cardButton) {
  const spread = Number(spreadInput.value);

  if (selectedCards.length >= spread || cardButton.classList.contains("is-selected")) {
    return;
  }

  const cardIndex = Number(cardButton.dataset.cardIndex);
  selectedCards.push(visibleDeck[cardIndex]);
  cardButton.classList.add("is-selected");
  cardButton.setAttribute("aria-pressed", "true");

  if (selectedCards.length === spread) {
    wingDeck.querySelectorAll(".pick-card:not(.is-selected)").forEach((button) => {
      button.disabled = true;
    });
  }

  renderReading(selectedCards, questionInput.value, spread);
  updateDeckStatus();
}

function artworkDataUri(card) {
  const config = getArtworkConfig(card);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 520" role="img">
      <defs>
        <radialGradient id="aura" cx="50%" cy="38%" r="55%">
          <stop offset="0%" stop-color="${config.glow}" stop-opacity="0.74"/>
          <stop offset="58%" stop-color="${config.mid}" stop-opacity="0.48"/>
          <stop offset="100%" stop-color="#090712" stop-opacity="1"/>
        </radialGradient>
        <linearGradient id="royal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff0bc" stop-opacity="0.95"/>
          <stop offset="48%" stop-color="${config.gold}" stop-opacity="0.92"/>
          <stop offset="100%" stop-color="#8f5f1e" stop-opacity="0.92"/>
        </linearGradient>
        <filter id="soft">
          <feGaussianBlur stdDeviation="3"/>
        </filter>
      </defs>
      <rect width="360" height="520" rx="26" fill="#090712"/>
      <rect x="12" y="12" width="336" height="496" rx="22" fill="url(#aura)" stroke="${config.gold}" stroke-opacity="0.62" stroke-width="2"/>
      <circle cx="180" cy="190" r="112" fill="none" stroke="${config.gold}" stroke-opacity="0.26" stroke-width="2"/>
      <circle cx="180" cy="190" r="74" fill="none" stroke="#fff8e8" stroke-opacity="0.2" stroke-width="1"/>
      ${starField()}
      ${royalCrown(config)}
      ${config.motif}
      <path d="M82 424 C130 392 230 392 278 424" fill="none" stroke="${config.gold}" stroke-width="2" stroke-opacity="0.48"/>
      <text x="180" y="458" text-anchor="middle" fill="#fff8e8" font-family="Georgia, serif" font-size="25">${escapeSvg(card.symbol)}</text>
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function getArtworkConfig(card) {
  const base = {
    gold: "#efcd84",
    glow: "#f3d58a",
    mid: "#4c315f"
  };

  if (card.suit) {
    const suitConfig = {
      Cups: {
        ...base,
        glow: "#8ed6ff",
        mid: "#173a5c",
        motif: cupMotif("#efcd84")
      },
      Wands: {
        ...base,
        glow: "#ffb05c",
        mid: "#5a2818",
        motif: wandMotif("#efcd84")
      },
      Swords: {
        ...base,
        glow: "#c9d6ff",
        mid: "#232b5f",
        motif: swordMotif("#efcd84")
      },
      Pentacles: {
        ...base,
        glow: "#b6f0b0",
        mid: "#23452f",
        motif: pentacleMotif("#efcd84")
      }
    };

    return suitConfig[card.suit];
  }

  const majorMotifs = {
    "The Fool": moonPathMotif("#efcd84"),
    "The Magician": wandMotif("#efcd84"),
    "The High Priestess": moonPathMotif("#efcd84"),
    "The Empress": crownRoseMotif("#efcd84"),
    "The Emperor": throneMotif("#efcd84"),
    "The Hierophant": keyMotif("#efcd84"),
    "The Lovers": twinStarMotif("#efcd84"),
    "The Chariot": chariotMotif("#efcd84"),
    Strength: lionSunMotif("#efcd84"),
    "The Hermit": lanternMotif("#efcd84"),
    "Wheel of Fortune": wheelMotif("#efcd84"),
    Justice: swordMotif("#efcd84"),
    "The Hanged Man": haloMotif("#efcd84"),
    Death: eclipseMotif("#efcd84"),
    Temperance: cupMotif("#efcd84"),
    "The Devil": chainMotif("#efcd84"),
    "The Tower": towerMotif("#efcd84"),
    "The Star": starMotif("#efcd84"),
    "The Moon": moonPathMotif("#efcd84"),
    "The Sun": sunMotif("#efcd84"),
    Judgement: trumpetMotif("#efcd84"),
    "The World": worldMotif("#efcd84")
  };

  return {
    ...base,
    motif: majorMotifs[card.name] || starMotif("#efcd84")
  };
}

function starField() {
  return `
    <g fill="#fff8e8" opacity="0.72">
      <circle cx="72" cy="96" r="2"/><circle cx="286" cy="82" r="1.8"/>
      <circle cx="306" cy="186" r="1.6"/><circle cx="54" cy="244" r="1.4"/>
      <circle cx="78" cy="358" r="1.8"/><circle cx="292" cy="364" r="1.3"/>
      <path d="M180 56 l5 13 13 5 -13 5 -5 13 -5 -13 -13 -5 13 -5z"/>
      <path d="M304 282 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z"/>
    </g>
  `;
}

function royalCrown(color) {
  return `
    <path d="M128 114 L148 82 L180 112 L212 82 L232 114 L228 132 H132 Z" fill="url(#royal)" opacity="0.9"/>
    <circle cx="148" cy="82" r="6" fill="${color.gold}"/>
    <circle cx="212" cy="82" r="6" fill="${color.gold}"/>
    <circle cx="180" cy="112" r="5" fill="#fff8e8"/>
  `;
}

function cupMotif(color) {
  return `
    <g fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M132 178 H228 C224 244 204 276 180 276 C156 276 136 244 132 178 Z"/>
      <path d="M228 202 C270 202 266 252 226 246"/>
      <path d="M180 276 V322"/>
      <path d="M140 322 H220"/>
    </g>
  `;
}

function wandMotif(color) {
  return `
    <g stroke="${color}" stroke-width="9" stroke-linecap="round">
      <path d="M128 318 L232 168"/>
      <path d="M220 156 l11 28 29 8 -27 13 2 30 -20 -23 -28 10 16 -26 -18 -24z" fill="${color}" stroke-width="2"/>
    </g>
  `;
}

function swordMotif(color) {
  return `
    <g fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M180 136 V330"/>
      <path d="M152 292 H208"/>
      <path d="M180 136 L158 184 M180 136 L202 184"/>
      <path d="M166 338 H194"/>
    </g>
  `;
}

function pentacleMotif(color) {
  return `
    <g fill="none" stroke="${color}" stroke-width="7" stroke-linejoin="round">
      <circle cx="180" cy="236" r="74"/>
      <path d="M180 164 L202 282 L112 210 H248 L158 282 Z"/>
    </g>
  `;
}

function starMotif(color) {
  return `<path d="M180 136 L202 210 L278 210 L216 254 L240 330 L180 284 L120 330 L144 254 L82 210 L158 210 Z" fill="${color}" opacity="0.92"/>`;
}

function sunMotif(color) {
  return `
    <g fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round">
      <circle cx="180" cy="238" r="56" fill="${color}" fill-opacity="0.18"/>
      <path d="M180 144 V116 M180 360 V332 M274 238 H302 M58 238 H86 M246 172 L266 152 M94 324 L114 304 M114 172 L94 152 M266 324 L246 304"/>
    </g>
  `;
}

function moonPathMotif(color) {
  return `
    <path d="M206 140 C154 158 132 222 160 268 C178 298 212 314 246 306 C214 348 146 334 116 284 C82 226 112 154 174 132 C184 128 196 128 206 140 Z" fill="${color}" opacity="0.88"/>
    <path d="M116 344 C152 314 208 314 244 344" fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round"/>
  `;
}

function crownRoseMotif(color) {
  return `
    <circle cx="180" cy="238" r="58" fill="${color}" fill-opacity="0.18" stroke="${color}" stroke-width="6"/>
    <path d="M180 184 C230 210 224 274 180 292 C136 274 130 210 180 184 Z" fill="${color}" opacity="0.82"/>
    <path d="M180 292 C166 320 146 330 118 326" fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round"/>
  `;
}

function throneMotif(color) {
  return `
    <g fill="none" stroke="${color}" stroke-width="8" stroke-linejoin="round">
      <path d="M126 322 V174 H234 V322"/>
      <path d="M112 322 H248"/>
      <path d="M144 174 L180 136 L216 174"/>
    </g>
  `;
}

function keyMotif(color) {
  return `
    <g fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="180" cy="188" r="36"/>
      <path d="M180 224 V330"/>
      <path d="M180 288 H222"/>
      <path d="M180 318 H210"/>
    </g>
  `;
}

function twinStarMotif(color) {
  return `
    <path d="M132 172 L146 212 L188 212 L154 236 L168 278 L132 252 L96 278 L110 236 L76 212 L118 212 Z" fill="${color}" opacity="0.86"/>
    <path d="M228 172 L242 212 L284 212 L250 236 L264 278 L228 252 L192 278 L206 236 L172 212 L214 212 Z" fill="${color}" opacity="0.86"/>
    <path d="M128 326 C156 300 204 300 232 326" fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round"/>
  `;
}

function chariotMotif(color) {
  return `
    <g fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M110 210 H250 L230 292 H130 Z"/>
      <circle cx="138" cy="316" r="18"/>
      <circle cx="222" cy="316" r="18"/>
      <path d="M148 210 L180 160 L212 210"/>
    </g>
  `;
}

function lionSunMotif(color) {
  return `
    <circle cx="180" cy="232" r="72" fill="${color}" fill-opacity="0.18" stroke="${color}" stroke-width="7"/>
    <path d="M136 236 C146 184 214 184 224 236 C212 292 148 292 136 236 Z" fill="${color}" opacity="0.75"/>
    <circle cx="158" cy="230" r="5" fill="#090712"/><circle cx="202" cy="230" r="5" fill="#090712"/>
  `;
}

function lanternMotif(color) {
  return `
    <g fill="none" stroke="${color}" stroke-width="8" stroke-linejoin="round">
      <path d="M148 176 H212 L226 286 H134 Z"/>
      <path d="M166 176 C166 146 194 146 194 176"/>
      <circle cx="180" cy="236" r="28" fill="${color}" fill-opacity="0.22"/>
      <path d="M180 286 V336"/>
    </g>
  `;
}

function wheelMotif(color) {
  return `
    <g fill="none" stroke="${color}" stroke-width="7">
      <circle cx="180" cy="236" r="78"/>
      <circle cx="180" cy="236" r="22"/>
      <path d="M180 158 V314 M102 236 H258 M126 182 L234 290 M234 182 L126 290"/>
    </g>
  `;
}

function haloMotif(color) {
  return `
    <circle cx="180" cy="184" r="48" fill="none" stroke="${color}" stroke-width="7"/>
    <path d="M180 236 V330 M140 276 H220" stroke="${color}" stroke-width="8" stroke-linecap="round"/>
  `;
}

function eclipseMotif(color) {
  return `
    <circle cx="180" cy="236" r="82" fill="${color}" opacity="0.26"/>
    <circle cx="206" cy="214" r="82" fill="#090712" opacity="0.92"/>
    <path d="M110 338 C146 310 214 310 250 338" fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round"/>
  `;
}

function chainMotif(color) {
  return `
    <g fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round">
      <path d="M118 208 C146 178 172 204 144 236"/>
      <path d="M216 236 C188 204 214 178 242 208"/>
      <path d="M144 236 C166 260 194 260 216 236"/>
      <path d="M128 320 H232"/>
    </g>
  `;
}

function towerMotif(color) {
  return `
    <g fill="none" stroke="${color}" stroke-width="8" stroke-linejoin="round">
      <path d="M144 332 L160 178 H220 L236 332 Z"/>
      <path d="M150 178 L180 138 L210 178"/>
      <path d="M204 130 L184 190 H222 L168 274"/>
    </g>
  `;
}

function trumpetMotif(color) {
  return `
    <g fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M118 226 L220 168 V286 Z"/>
      <path d="M118 226 L92 246"/>
      <path d="M222 180 C252 198 252 256 222 274"/>
      <path d="M136 326 H224"/>
    </g>
  `;
}

function worldMotif(color) {
  return `
    <circle cx="180" cy="236" r="78" fill="none" stroke="${color}" stroke-width="7"/>
    <path d="M102 236 H258 M180 158 C150 188 150 284 180 314 C210 284 210 188 180 158" fill="none" stroke="${color}" stroke-width="5"/>
    <path d="M122 342 C150 318 210 318 238 342" fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round"/>
  `;
}

function cardTemplate(card, position) {
  const tags = card.keywords.map((keyword) => `<span class="tag">${keyword}</span>`).join("");
  const shortMeaning = card.meaning.split(".")[0] + ".";

  return `
    <article class="tarot-card">
      <div class="card-face">
        <div class="card-position">${position}</div>
        <img class="card-art" src="${artworkDataUri(card)}" alt="${card.name} celestial artwork" />
        <div class="card-title">${card.name}</div>
      </div>
      <div class="tag-row">${tags}</div>
      <p class="meaning">${shortMeaning}</p>
    </article>
  `;
}

function renderReading(cards, question, spread) {
  const trimmedQuestion = question.trim();
  const questionText = trimmedQuestion
    ? `"${escapeHtml(trimmedQuestion)}"`
    : "Open reading";

  summary.innerHTML = `
    <h2>${spread === 3 ? "Three cards" : "One card"}</h2>
    <p>${questionText}</p>
  `;

  grid.innerHTML = cards
    .map((card, index) => cardTemplate(card, positions[spread][index]))
    .join("");
}

function renderEmptyReading() {
  grid.innerHTML = "";
  summary.innerHTML = `
    <h2>Awaiting choice</h2>
    <p>Pick what calls.</p>
  `;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return entities[character];
  });
}

function escapeSvg(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    return entities[character];
  });
}

wingDeck.addEventListener("click", (event) => {
  const cardButton = event.target.closest(".pick-card");

  if (!cardButton) {
    return;
  }

  chooseCard(cardButton);
});

spreadInput.addEventListener("change", () => {
  selectedCards = [];
  renderWingDeck();
  updateDeckStatus();
  renderEmptyReading();
});

resetButton.addEventListener("click", () => {
  questionInput.value = "";
  spreadInput.value = "1";
  shuffleDeck();
});

shuffleDeck();

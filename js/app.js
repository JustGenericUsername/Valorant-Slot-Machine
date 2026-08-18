const agentSelect = document.getElementById("agent");
const agentSearch = document.getElementById("agentSearch");
const agentDropdownArrow = document.getElementById("agentDropdownArrow");
const agentDropdownMenu = document.getElementById("agentDropdownMenu");
const agentDropdownIcon = document.getElementById("agentDropdownIcon");
const clearAgentBtn = document.getElementById("clearAgent");
const agentDropdownLabel = document.getElementById("agentDropdownLabel");
const agentRandomizerList = document.getElementById("agentRandomizerList");
const selectAllAgentsBtn = document.getElementById("selectAllAgents");
const clearAllAgentsBtn = document.getElementById("clearAllAgents");
const agentRandomizerPanel = document.getElementById("agentRandomizerPanel");
const randomizeAgentBtn = document.getElementById("randomizeAgent");
const agentRollIcon = document.getElementById("agentRollIcon");
const agentRollName = document.getElementById("agentRollName");
const agentRollStatus = document.getElementById("agentRollStatus");
const creditsInput = document.getElementById("credits");
const spinBtn = document.getElementById("spin");
const message = document.getElementById("message");
const spinAudio = document.getElementById("spinAudio");
const agentSpinAudio = document.getElementById("agentSpinAudio");

const els = {
  weapon:document.getElementById("weaponWindow"),
  utility:document.getElementById("utilityWindow"),
  shield:document.getElementById("shieldWindow"),
  sumWeapon:document.getElementById("sumWeapon"),
  sumUtility:document.getElementById("sumUtility"),
  sumShield:document.getElementById("sumShield"),
  sumAgent:document.getElementById("sumAgent"),
  sumStart:document.getElementById("sumStart"),
  sumSpent:document.getElementById("sumSpent"),
  sumLeft:document.getElementById("sumLeft")
};

let currentVisible = {
  weapon: weapons[0],
  utility: null,
  shield: shields[0]
};

let lastRandomAgent = null;
let randomAgentReady = false;
let randomAgentSpinning = false;

function sanitizeAgentName(name){
  return String(name).replace(/[^A-Za-z0-9]/g,"");
}

function agentIcon(name){
  return `Agents/${encodeURIComponent(sanitizeAgentName(name))}_icon.png`;
}

function getUtilityPool(agentName){
  return (agents[agentName] || agents[Object.keys(agents)[0]]).filter(item => item.bind !== "0");
}

function updateDropdownButton(name){
  agentSearch.value = name;
  agentSearch.setAttribute("aria-expanded", "false");

  agentDropdownIcon.src = agentIcon(name);
  agentDropdownIcon.alt = name;
  agentDropdownIcon.onerror = function(){ this.style.display = 'none'; };
  agentDropdownIcon.style.display = 'block';
  clearAgentBtn.style.display = "block";
}

function closeAgentDropdown(){
  agentDropdownMenu.classList.remove("open");
  agentSearch.setAttribute("aria-expanded", "false");
}

function updateSpinAvailability(){
  const hasAgent = Boolean(agentSelect.value);

  spinBtn.disabled = !hasAgent;

  if(hasAgent){
    spinBtn.title = "";
  }else{
    spinBtn.title = "Select an agent before spinning";
  }
}

buildAgentOptions();
buildAgentRandomizer();

function buildAgentRandomizer(){

  agentRandomizerList.innerHTML = "";

  const roleOrder = [
    "Controller",
    "Duelist",
    "Sentinel",
    "Initiator"
  ];

  const agentRoles = {

    Controller: [
      "Astra",
      "Brimstone",
      "Clove",
      "Harbor",
      "Omen",
      "Viper"
    ],

    Duelist: [
      "Iso",
      "Jett",
      "Neon",
      "Phoenix",
      "Raze",
      "Reyna",
      "Waylay",
      "Yoru"
    ],

    Sentinel: [
      "Chamber",
      "Cypher",
      "Deadlock",
      "Killjoy",
      "Sage"
    ],

    Initiator: [
      "Breach",
      "Fade",
      "Gekko",
      "KAY/O",
      "Skye",
      "Sova"
    ]

  };

  roleOrder.forEach(role => {

    const roleAgents = agentRoles[role]
      .filter(name =>
        Object.prototype.hasOwnProperty.call(agents, name)
      );

    if(!roleAgents.length) return;

    // One row per role
    const roleRow = document.createElement("div");
    roleRow.className = "agent-role-row";

    // Role name on the left
    const roleTitle = document.createElement("div");
    roleTitle.className = "agent-role-title";
    roleTitle.textContent = role.toUpperCase();

    roleRow.appendChild(roleTitle);

    // Agents to the right
    const agentsContainer = document.createElement("div");
    agentsContainer.className = "agent-role-agents";

    roleAgents.forEach(name => {

      const label = document.createElement("label");
      label.className = "agent-check";

      label.innerHTML = `
        <input
          type="checkbox"
          value="${name}"
          checked
        />

        <img
          src="${agentIcon(name)}"
          alt="${name}"
          onerror="this.style.display='none'"
        />

        <span>${name}</span>
      `;

      agentsContainer.appendChild(label);

    });

    roleRow.appendChild(agentsContainer);
    agentRandomizerList.appendChild(roleRow);

  });
}

function getIncludedAgents(){
  return Array.from(agentRandomizerList.querySelectorAll('input[type="checkbox"]:checked'))
    .map(input => input.value)
    .filter(name => Object.prototype.hasOwnProperty.call(agents, name));
}

function updateRandomAgentPanel(){
  randomizeAgentBtn.disabled = randomAgentSpinning;

  if(lastRandomAgent && randomAgentReady){
    agentRollIcon.src = agentIcon(lastRandomAgent);
    agentRollIcon.alt = lastRandomAgent;
    agentRollIcon.style.display = "block";
    agentRollIcon.onerror = function(){ this.style.display = "none"; };
    agentRollName.textContent = lastRandomAgent;
    agentRollStatus.textContent = "AGENT SELECTED — DROPDOWN UPDATED ABOVE";
  }else if(!randomAgentSpinning){
    agentRollIcon.style.display = "none";
    agentRollName.textContent = "READY TO RANDOMIZE";
    agentRollStatus.textContent = "THIS ROLL CHANGES THE AGENT DROPDOWN ABOVE";
  }
}

function randomizeAgent(){
  if(randomAgentSpinning) return;

  const included = getIncludedAgents();
  if(!included.length){
    message.textContent = "Select at least one agent for the randomizer.";
    return;
  }

  randomAgentSpinning = true;
  randomAgentReady = false;
  randomizeAgentBtn.disabled = true;
  spinBtn.disabled = true;
  agentSearch.disabled = true;
  clearAgentBtn.disabled = true;
  creditsInput.disabled = true;
  message.textContent = "ROLLING AGENT...";
  agentRollStatus.textContent = "CHOOSING FROM YOUR UNLOCKED AGENTS";

  const finalAgent = included[Math.floor(Math.random() * included.length)];
  const sequence = [];
  for(let i=0;i<14;i++) sequence.push(included[Math.floor(Math.random()*included.length)]);
  sequence.push(finalAgent);

  // AGENT RANDOMIZER SPIN LENGTH: change 3000 to the number of milliseconds you want.
  // 3000 = roughly 3 seconds.
  const duration = 4280;
  const start = performance.now();

  // Play the separate agent-randomizer audio.
  if(agentSpinAudio){
    agentSpinAudio.currentTime = 0;
    agentSpinAudio.volume = 0.5;
    agentSpinAudio.loop = false;
    agentSpinAudio.play().catch(() => {});
  }
  const tickCount = sequence.length;
  let lastTick = -1;

  function frame(now){
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const index = Math.min(tickCount - 1, Math.floor(eased * tickCount));

    if(index !== lastTick){
      lastTick = index;
      const name = sequence[index];
      agentRollIcon.src = agentIcon(name);
      agentRollIcon.alt = name;
      agentRollIcon.style.display = "block";
      agentRollIcon.onerror = function(){ this.style.display = "none"; };
      agentRollName.textContent = name;
    }

    if(t < 1){
      requestAnimationFrame(frame);
    }else{
      if(agentSpinAudio){
        agentSpinAudio.pause();
        agentSpinAudio.currentTime = 0;
        agentSpinAudio.loop = false;
      }

      lastRandomAgent = finalAgent;
      randomAgentReady = true;
      randomAgentSpinning = false;

      // The agent randomizer is independent of the buy wheels.
      // Its only permanent result is updating the normal agent dropdown.
      setSelectedAgent(finalAgent, true);

      agentSearch.disabled = false;
      clearAgentBtn.disabled = false;
      creditsInput.disabled = false;
      updateSpinAvailability();
      updateRandomAgentPanel();

      message.innerHTML = `<span class="good">AGENT SELECTED</span> <span>•</span> <span class="agent-summary"><img src="${agentIcon(finalAgent)}" alt="${finalAgent}" class="agent-icon" onerror="this.style.display='none'" /><strong>${finalAgent}</strong></span> <span>•</span> <span>READY TO SPIN BUY</span>`;
    }
  }

  requestAnimationFrame(frame);
}

function getPreviewAgent(){
  return agentSelect.value || Object.keys(agents)[0];
}

function buildAgentOptions(filter = ""){
  agentSelect.innerHTML = "";
  agentDropdownMenu.innerHTML = "";

  const query = String(filter).trim().toLowerCase();

  Object.keys(agents).forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    agentSelect.appendChild(opt);

    if(query && !name.toLowerCase().includes(query)) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "agent-option";
    button.dataset.agent = name;
    button.setAttribute("role", "option");
    button.innerHTML = `<img src="${agentIcon(name)}" alt="${name}" onerror="this.style.display='none'" /><span>${name}</span>`;
    agentDropdownMenu.appendChild(button);
  });

  Array.from(agentDropdownMenu.querySelectorAll(".agent-option")).forEach(item => {
    item.classList.toggle("active", item.dataset.agent === agentSelect.value);
  });
}

function setSelectedAgent(name, fromRandomizer = false){
  agentSelect.value = name;

  if(fromRandomizer){
    lastRandomAgent = name;
    randomAgentReady = true;
  }else{
    lastRandomAgent = null;
    randomAgentReady = false;
  }

  updateDropdownButton(name);
  renderAllWindows();
  updateStart();
  updateRandomAgentPanel();

  const iconHtml = `<img src="${agentIcon(name)}" alt="${name}" class="agent-icon" onerror="this.style.display='none'" />`;
  els.sumAgent.innerHTML = `<span class="agent-summary">${iconHtml}<span>${name}</span></span>`;

  Array.from(agentDropdownMenu.querySelectorAll(".agent-option")).forEach(item => {
    item.classList.toggle("active", item.dataset.agent === name);
  });
  updateSpinAvailability();
}

function toggleAgentDropdown(){
  const open = agentDropdownMenu.classList.toggle("open");
  agentSearch.setAttribute("aria-expanded", open ? "true" : "false");
  if(open){
    buildAgentOptions("");
  }
}

function closeAgentDropdown(){
  agentDropdownMenu.classList.remove("open");
  agentSearch.setAttribute("aria-expanded", "false");
}

function clearSelectedAgent(){
  agentSelect.value = "";

  agentSearch.value = "";
  agentSearch.placeholder = "Search agent...";

  agentDropdownIcon.src = "";
  agentDropdownIcon.alt = "";
  agentDropdownIcon.style.display = "none";

  clearAgentBtn.style.display = "none";

  closeAgentDropdown();

  // Update the UI to show that no agent is selected
  updateRandomAgentPanel();

  // Refresh the wheels
  renderAllWindows();

  // Disable spinning until an agent is selected
  updateSpinAvailability();
}

buildAgentOptions();
buildAgentRandomizer();
agentSelect.value = "";
agentSearch.value = "";
agentSearch.placeholder = "Search agent...";
agentDropdownIcon.style.display = "none";
clearAgentBtn.style.display = "none";
updateSpinAvailability();

agentSearch.addEventListener("focus", () => {
  buildAgentOptions(agentSearch.value);
  agentDropdownMenu.classList.add("open");
  agentSearch.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => agentSearch.select());
});

agentSearch.addEventListener("input", () => {
  const query = agentSearch.value.trim().toLowerCase();
  buildAgentOptions(query);
  agentDropdownMenu.classList.add("open");
  agentSearch.setAttribute("aria-expanded", "true");

  const exact = Object.keys(agents).find(name => name.toLowerCase() === query);
  if(exact){
    setSelectedAgent(exact);
    agentSearch.setSelectionRange(agentSearch.value.length, agentSearch.value.length);
  }
});

agentSearch.addEventListener("keydown", (event) => {
  const options = Array.from(agentDropdownMenu.querySelectorAll(".agent-option"));
  if(event.key === "Escape"){
    closeAgentDropdown();
    updateDropdownButton(agentSelect.value);
    return;
  }
  if(event.key === "Enter"){
    event.preventDefault();
    const first = options[0];
    if(first){
      setSelectedAgent(first.dataset.agent);
      closeAgentDropdown();
    }
  }
  if(event.key === "ArrowDown" && options.length){
    event.preventDefault();
    options[0].focus();
  }
});

agentDropdownArrow.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleAgentDropdown();
});

agentDropdownMenu.addEventListener("click", (event) => {
  const option = event.target.closest(".agent-option");
  if (!option) return;
  setSelectedAgent(option.dataset.agent);
  closeAgentDropdown();
  agentSearch.blur();
});

document.addEventListener("click", (event) => {
  if(!event.target.closest(".agent-select-wrapper")) closeAgentDropdown();
});

agentSelect.addEventListener("change", () => setSelectedAgent(agentSelect.value));

clearAgentBtn.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  clearSelectedAgent();
});

agentRandomizerList.addEventListener("change", () => {
  const included = getIncludedAgents();

  if(lastRandomAgent && !included.includes(lastRandomAgent)){
    randomAgentReady = false;
    lastRandomAgent = null;
    updateRandomAgentPanel();
  }
});

randomizeAgentBtn.addEventListener("click", randomizeAgent);

selectAllAgentsBtn.addEventListener("click", () => {
  agentRandomizerList.querySelectorAll('input[type="checkbox"]').forEach(input => input.checked = true);
  updateRandomAgentPanel();
});

clearAllAgentsBtn.addEventListener("click", () => {
  agentRandomizerList.querySelectorAll('input[type="checkbox"]').forEach(input => input.checked = false);
  updateRandomAgentPanel();
});

function money(n){ return n.toLocaleString("en-US"); }


function creditHtml(amount){
  return `<span class="credit-badge"><img src="Icon/Credits_icon.png" alt="Credits" class="credit-icon" />${money(amount)}</span>`;
}

function svgIcon(type, name){
  const safe = String(name).replace(/[^a-z0-9]/gi,"").toLowerCase();
  if(type==="weapon"){
    const long = /operator|marshal|outlaw|ares|odin|bulldog|guardian|phantom|vandal/.test(safe);
    const shotgun = /shorty|bucky|judge/.test(safe);
    const pistol = /classic|frenzy|ghost|sheriff/.test(safe);
    const barrel = long ? 31 : shotgun ? 25 : pistol ? 20 : 24;
    return `<svg viewBox="0 0 120 60" aria-hidden="true">
      <path d="M8 27h${barrel}l8-8h18l8 5h28l8-7h13l5 6-7 7H72l-10 9H43l-4-7H23l-7 5H8z" fill="currentColor" opacity=".92"/>
      <path d="M48 34l8 2-5 15H40zM83 28l10 3-7 15H75z" fill="currentColor" opacity=".75"/>
      <circle cx="21" cy="30" r="3" fill="#071018"/><path d="M70 20h12" stroke="#071018" stroke-width="2"/>
    </svg>`;
  }
  if(type==="shield"){
    return `<svg viewBox="0 0 80 80" aria-hidden="true">
      <path d="M40 7l27 10v20c0 18-11 29-27 37C24 66 13 55 13 37V17z" fill="none" stroke="currentColor" stroke-width="5"/>
      <path d="M40 19l15 6v12c0 10-5 17-15 23-10-6-15-13-15-23V25z" fill="currentColor" opacity=".18"/>
      <path d="M40 24v31M25 39h30" stroke="currentColor" stroke-width="4" opacity=".7"/>
    </svg>`;
  }
  const symbols = {
    "paint shells":"✺","blast pack":"▣","boom bot":"◉","cloudburst":"☁","updraft":"↟",
    "tailwind":"➜","shock bolt":"ϟ","recon bolt":"⌁","owl drone":"◉","shrouded step":"✦",
    "paranoia":"◈","dark cover":"●","barrier orb":"▥","slow orb":"❄","healing orb":"✚",
    "dizzy":"◉","mosh pit":"✹","wingman":"◒","nothing":"◌"
  };
  const sym = symbols[safe.replace(/([a-z])([a-z])/g,"$1$2")] || "✦";
  return `<svg viewBox="0 0 80 80" aria-hidden="true">
    <circle cx="40" cy="40" r="29" fill="none" stroke="currentColor" stroke-width="3" opacity=".55"/>
    <circle cx="40" cy="40" r="20" fill="currentColor" opacity=".12"/>
    <text x="40" y="51" text-anchor="middle" font-size="28" font-family="Arial" fill="currentColor">${sym}</text>
  </svg>`;
}

function weaponImage(name){
  return `Guns/${encodeURIComponent(name)}.png`;
}

function shieldImage(name){
  const map = {
    "light shields": "Light_Armor.png",
    "heavy shields": "Heavy_Armor.png",
    "regen shield": "Regen_Shield.png"
  };
  const file = map[String(name).trim().toLowerCase()] || `${encodeURIComponent(String(name).trim().replace(/\s+/g, "_"))}.png`;
  return `Shields/${file}`;
}

function utilityImageCandidates(name){
  const raw = String(name).trim();
  const variants = [
    `${raw}.png`,
    `${raw.replace(/\//g, "_")}.png`,
    `${raw.replace(/\s+/g, "_").replace(/\//g, "_")}.png`,
    `${raw.replace(/[^A-Za-z0-9]/g, "")}.png`,
    `${raw.replace(/\s+/g, "_").replace(/\//g, "_")}_icon.png`,
    `${raw.replace(/[^A-Za-z0-9]/g, "")}_icon.png`
  ];
  const unique = [...new Set(variants)];
  const folders = ["Abilities", "Ability Icons", "Utility"];
  return folders.flatMap(folder => unique.map(file => `${folder}/${encodeURIComponent(file)}`));
}

function setUtilityImageFallback(img, candidates, index = 0){
  if(index >= candidates.length){
    img.style.display = "none";
    return;
  }
  img.dataset.fallbackIndex = String(index);
  img.src = candidates[index];
}

function utilityImageError(img){
  const candidates = JSON.parse(img.dataset.candidates || "[]");
  const next = Number(img.dataset.fallbackIndex || 0) + 1;
  setUtilityImageFallback(img, candidates, next);
}

function renderCard(item, type, extraClass=""){
  const detail = item.type ? `<div class="item-detail">TYPE / ${item.type}</div>` : "";
  const bind = item.bind ? `<div class="item-bind">BIND / ${item.bind}</div>` : "";
  let image = "";

  if(item.name !== "Nothing"){
    if(type === "weapon"){
      image = `<img src="${weaponImage(item.name)}" alt="${item.name}" class="item-image weapon-image" onerror="this.remove()" />`;
    }else if(type === "shield"){
      image = `<img src="${shieldImage(item.name)}" alt="${item.name}" class="item-image shield-image" onerror="this.remove()" />`;
    }else if(type === "utility"){
    image = `<img src="${item.icon}" alt="${item.name}" class="item-image utility-image" onerror="this.remove()" />`;
  }
  }

  const meta = item.name === "Nothing" ? "DEFAULT" : `COST / ${creditHtml(item.price)}`;

  return `<div class="reel-card ${extraClass}">
    <div class="item-copy">
      ${image}
      <div class="item-name">${item.name}</div>
      <div class="item-meta">${meta}</div>
      ${detail}${bind}
    </div>
  </div>`;
}

function renderFinal(el, item, type){
  el.innerHTML = `<div class="reel">${renderCard(item,type,"current")}</div>`;
}

function renderStaticReel(el, pool, type){
  const reel = document.createElement("div");
  reel.className = "reel";

  const startInfo = currentStartCard(type, pool);
  const beforeCount = 6;
  const afterCount = 8;
  const cards = [];

  // Always keep real cards above the visible starting card.
  for(let i = 0; i < beforeCount; i++){
    cards.push(random(pool));
  }

  const currentIndex = cards.length;
  cards.push(startInfo.item);

  for(let i = 0; i < afterCount; i++){
    cards.push(random(pool));
  }

  reel.innerHTML = cards.map(item => renderCard(item, type)).join("");
  el.innerHTML = "";
  el.appendChild(reel);

  const firstCard = reel.querySelector(".reel-card");
  if(firstCard){
    const cardH = firstCard.clientHeight;
    const gap = parseFloat(getComputedStyle(reel).gap) || 0;
    const centerOffset = (el.clientHeight - cardH) / 2;
    const startY = -(currentIndex * (cardH + gap) - centerOffset);
    reel.style.transform = `translate3d(0, ${startY}px, 0)`;
  }
}

function currentStartCard(type, pool){
  const current = currentVisible[type];
  const item = current && pool.find(x => x.name === current.name);

  return {
    item: item || pool[0] || {name:"Nothing",price:0,icon:"◌"}
  };
}
function renderAllWindows(){
  renderStaticReel(els.weapon, weapons, "weapon");
  renderStaticReel(els.utility, getUtilityPool(getPreviewAgent()), "utility");
  renderStaticReel(els.shield, shields, "shield");
}

function shuffle(arr){
  const copy = [...arr];
  for(let i = copy.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function chooseResult(budget, agentName){
  const utilPool = getUtilityPool(agentName);

  const weaponPool = affordablePool(weapons, budget);
  const utilityPool = affordablePool(utilPool, budget);
  const shieldPool = affordablePool(shields, budget);

  const candidates = [];

  // Generate many possible valid combinations
  for(let i = 0; i < 300; i++){

    const weapon = weightedRandom(weaponPool, "weapon", budget);
    const utility = weightedRandom(utilityPool, "utility", budget);
    const shield = weightedRandom(shieldPool, "shield", budget);

    const total =
      weapon.price +
      utility.price +
      shield.price;

    // Only keep combinations that fit the budget
    if(total <= budget){
      candidates.push({
        w: weapon,
        u: utility,
        s: shield,
        total: total
      });
    }
  }

  // Fallback if no valid combination was generated
  if(!candidates.length){
    const weapon = weightedRandom(weaponPool, "weapon", budget);
    const utility = weightedRandom(utilityPool, "utility", budget);
    const shield = weightedRandom(shieldPool, "shield", budget);

    return {
      w: weapon,
      u: utility,
      s: shield,
      total:
        weapon.price +
        utility.price +
        shield.price
    };
  }

  /*
    Controls how much the system favors
    higher-value purchases.

    0.25 = very random
    0.50 = balanced
    0.75 = more expensive
    1.00 = strongly favors maxing credits
  */
  const POWER = 0.5;
  

  const weightedCandidates = candidates.map(result => {

    const percentage =
      budget > 0
        ? result.total / budget
        : 0;

    return {
      result: result,

      weight: Math.pow(
        percentage + 0.10,
        POWER
      )
    };
  });

  const totalWeight =
    weightedCandidates.reduce(
      (sum, item) => sum + item.weight,
      0
    );

  let random =
    Math.random() * totalWeight;

  for(const candidate of weightedCandidates){

    random -= candidate.weight;

    if(random <= 0){
      return candidate.result;
    }
  }

  return candidates[candidates.length - 1];
}

function buildReel(el, pool, final, type){
  const reel = document.createElement("div");
  reel.className = "reel";

  const startInfo = currentStartCard(type, pool);
  const beforeCount = 7;
  const travelCount = 18;
  const afterCount = 10;
  const cards = [];

  for(let i = 0; i < beforeCount; i++) cards.push(random(pool));

  const startIndex = cards.length;
  cards.push(startInfo.item);

  for(let i = 0; i < travelCount; i++) cards.push(random(pool));

  const finalIndex = cards.length;
  cards.push(final);

  for(let i = 0; i < afterCount; i++) cards.push(random(pool));

  reel.innerHTML = cards.map(item => renderCard(item, type)).join("");
  el.innerHTML = "";
  el.appendChild(reel);

  const firstCard = reel.querySelector(".reel-card");
  let startY = 0;
  let targetY = 0;

  if(firstCard){
    const cardH = firstCard.getBoundingClientRect().height;
    const gap = parseFloat(getComputedStyle(reel).gap) || 0;
    const step = cardH + gap;
    const centerOffset = (el.clientHeight - cardH) / 2;
    startY = -(startIndex * step - centerOffset);
    targetY = -(finalIndex * step - centerOffset);
    reel.style.transform = `translate3d(0, ${startY}px, 0)`;
  }

  return { reel, finalIndex, startIndex, startY, targetY, startItem:startInfo.item };
}
function random(arr){
  if(!arr || !arr.length) return {name:"Nothing", price:0, icon:"◌"};
  return arr[Math.floor(Math.random()*arr.length)];
}

function isFullUtil(item){
  return String(item?.name || "")
    .replace(/[^a-z]/gi, "")
    .toLowerCase() === "fullutil";
}

// ============================================================
// FULL UTILITY WEIGHT SETTINGS
// ============================================================
//
// These numbers control how much MORE likely "Full Util" is
// compared to its normal weighting.
//
// Bigger number = Full Util appears MORE often
// Smaller number = Full Util appears LESS often
//
// IMPORTANT:
// These are WEIGHTS, not exact percentages.
//
// Example:
// 2 = roughly twice the weighting
// 4 = roughly four times the weighting
// 6 = roughly six times the weighting
//
// ============================================================


// 🔧 CHANGE THESE NUMBERS TO TUNE FULL UTIL
// ------------------------------------------------------------

// LOW CREDITS
// Used when the player has LESS than 2,500 credits.
const FULL_UTIL_LOW = 2;


// MEDIUM CREDITS
// Used when the player has 2,500 - 3,499 credits.
const FULL_UTIL_MEDIUM = 3;


// GOOD BUY
// Used when the player has 3,500 - 4,499 credits.
const FULL_UTIL_GOOD = 4;


// HIGH BUY
// Used when the player has 4,500 - 4,999 credits.
const FULL_UTIL_HIGH = 5;


// FULL BUY
// Used when the player has 5,000+ credits.
//
// ⭐ THIS IS THE MAIN ONE TO CHANGE
// if you want Full Util to be much more common on
// very high-credit buys.
const FULL_UTIL_MAX = 8;


// ============================================================
// CREDIT THRESHOLDS
// ============================================================
//
// You can also change WHEN each weighting kicks in.
//
// Example:
//
// 2500 = low → medium
// 3500 = medium → good
// 4500 = good → high
// 5000 = high → max
//
// ============================================================

const FULL_UTIL_THRESHOLD_1 = 2500;
const FULL_UTIL_THRESHOLD_2 = 3500;
const FULL_UTIL_THRESHOLD_3 = 4500;
const FULL_UTIL_THRESHOLD_4 = 5000;


// ============================================================
// WEIGHTED RANDOM FUNCTION
// ============================================================

function weightedRandom(arr, type = "", budget = 0){

  // If there are no items available,
  // return an empty item.
  if(!arr || !arr.length){

    return {
      name: "Nothing",
      price: 0,
      icon: "◌"
    };

  }


  // ==========================================================
  // CREATE WEIGHTS FOR EVERY ITEM
  // ==========================================================

  const weights = arr.map(item => {

    // --------------------------------------------------------
    // NORMAL ITEM WEIGHT
    // --------------------------------------------------------
    //
    // Expensive items naturally get a higher weighting.
    //
    // You DON'T normally need to change this.
    //
    let weight = Math.pow(
      item.price + 50,
      0.75
    );


    // ========================================================
    // FULL UTIL SPECIAL WEIGHTING
    // ========================================================

    if(type === "utility" && isFullUtil(item)){

      let fullUtilityWeight;


      // ------------------------------------------------------
      // LOW CREDIT BUY
      // ------------------------------------------------------

      if(budget < FULL_UTIL_THRESHOLD_1){

        fullUtilityWeight = FULL_UTIL_LOW;

      }


      // ------------------------------------------------------
      // MEDIUM CREDIT BUY
      // ------------------------------------------------------

      else if(budget < FULL_UTIL_THRESHOLD_2){

        fullUtilityWeight = FULL_UTIL_MEDIUM;

      }


      // ------------------------------------------------------
      // GOOD CREDIT BUY
      // ------------------------------------------------------

      else if(budget < FULL_UTIL_THRESHOLD_3){

        fullUtilityWeight = FULL_UTIL_GOOD;

      }


      // ------------------------------------------------------
      // HIGH CREDIT BUY
      // ------------------------------------------------------

      else if(budget < FULL_UTIL_THRESHOLD_4){

        fullUtilityWeight = FULL_UTIL_HIGH;

      }


      // ------------------------------------------------------
      // 5,000+ CREDIT BUY
      // ------------------------------------------------------

      else{

        fullUtilityWeight = FULL_UTIL_MAX;

      }


      // Apply the Full Util bonus.
      weight *= fullUtilityWeight;

    }


    return weight;

  });


  // ==========================================================
  // PICK RANDOM ITEM USING THE WEIGHTS
  // ==========================================================

  const total = weights.reduce(
    (sum, weight) => sum + weight,
    0
  );

  let r = Math.random() * total;


  for(let i = 0; i < arr.length; i++){

    r -= weights[i];

    if(r < 0){

      return arr[i];

    }

  }


  // Fallback
  return arr[arr.length - 1];

}

function affordablePool(pool, budget){
  return pool.filter(x=>x.price<=budget);
}

function updateStart(){
  const c=Math.max(0,Number(creditsInput.value)||0);
  els.sumStart.innerHTML=creditHtml(c);
}

creditsInput.addEventListener("input", () => {
  let value = Number(creditsInput.value);

  if (value > 9000) {
    value = 9000;
    creditsInput.value = 9000;
  }

  if (value < 0) {
    value = 0;
    creditsInput.value = 0;
  }

  updateStart();
});

updateStart();

function delay(ms){return new Promise(r=>setTimeout(r,ms));}

function randomDelay(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animateReel(obj, duration, delayMs = 0){
  return new Promise(resolve => {
    const start = () => {
      const startY = obj.startY;
      const targetY = obj.targetY;
      const startTime = performance.now();

      obj.reel.style.transition = "none";
      obj.reel.style.transform = `translate3d(0, ${startY}px, 0)`;

      // Smoothly accelerate into the spin, then slow down naturally.
      // The old easing only travelled 8% of the reel during the first 12%
      // of the animation, which made the wheel appear to do a tiny spin
      // before suddenly taking off.
      function ease(t){
        // Ease-out cubic: starts moving immediately and continuously,
        // then gradually slows as it approaches the winning card.
        return 1 - Math.pow(1 - t, 3);
      }

      function frame(now){
        const t = Math.min(1, (now - startTime) / duration);
        const y = startY + (targetY - startY) * ease(t);
        obj.reel.style.transform = `translate3d(0, ${y}px, 0)`;
        if(t < 1){
          requestAnimationFrame(frame);
        }else{
          obj.reel.style.transform = `translate3d(0, ${targetY}px, 0)`;
          resolve();
        }
      }
      requestAnimationFrame(frame);
    };
    delayMs > 0 ? setTimeout(start, delayMs) : start();
  });
}

async function spin(){
  // Safety check: never allow a buy spin without an agent.
  if(!agentSelect.value){
    message.textContent = "SELECT AN AGENT FIRST";
    updateSpinAvailability();
    return;
  }

  const startCredits=Math.max(0,Number(creditsInput.value)||0);

  spinBtn.disabled=true;
  agentSearch.disabled=true;
  creditsInput.disabled=true;
  message.textContent="ROLLING...";

  // Play the spin audio from the same folder as the HTML file.
  if(spinAudio){
    spinAudio.currentTime = 0;
    spinAudio.volume = 1.0;
    spinAudio.loop = true;
    spinAudio.play().catch(() => {});
  }

  const spinAgent = agentSelect.value;

  const final=chooseResult(startCredits, spinAgent);
  const utils=agents[spinAgent];

  const wp=affordablePool(weapons,startCredits);
  const up=affordablePool(utils,startCredits);
  const sp=affordablePool(shields,startCredits);

  // Build a real stack of cards for each wheel. The winning item is placed
  // deep inside the stack so the wheel has plenty of visible movement.
  const wr=buildReel(els.weapon,wp,final.w,"weapon");
  const ur=buildReel(els.utility,up,final.u,"utility");
  const sr=buildReel(els.shield,sp,final.s,"shield");

  // Start each wheel from the current visible position and spin together.
  [wr,ur,sr].forEach(obj=>{
    obj.reel.style.transition="none";
  });

  const weaponDuration = 5800 + randomDelay(0, 250);
  const utilityDuration = 5800 + randomDelay(100, 350);
  const shieldDuration = 5800 + randomDelay(200, 450);

  await Promise.all([
    animateReel(wr, weaponDuration, 0),
    animateReel(ur, utilityDuration, 0),
    animateReel(sr, shieldDuration, 0)
  ]);

  // Let spin-music.mp3 continue playing naturally instead of cutting it off
  // the instant the wheels finish. Starting a new spin resets it at the top.
  if(spinAudio){
    spinAudio.loop = false;
  }

  await delay(360);

  // Highlight the winning cards.
  [wr,ur,sr].forEach(obj=>{
    const cards=obj.reel.querySelectorAll(".reel-card");
    cards.forEach(c=>{ c.classList.remove("current"); c.classList.remove("pop"); c.classList.remove("win-glow"); });
    if(cards[obj.finalIndex]){
      const card = cards[obj.finalIndex];
      card.classList.add("current");
      card.classList.add("pop");
      card.classList.add("win-glow");
    }
  });

  await delay(120);

  els.sumWeapon.textContent=final.w.name;
  els.sumUtility.textContent=final.u.name;
  els.sumShield.innerHTML = final.s.name === "Nothing"
    ? final.s.name
    : `<span class="agent-summary"><img src="${shieldImage(final.s.name)}" alt="${final.s.name}" class="item-image shield-image summary-item-icon" onerror="this.style.display='none'" /><span>${final.s.name}</span></span>`;
  els.sumSpent.innerHTML=creditHtml(final.total);
  els.sumLeft.innerHTML=creditHtml(startCredits-final.total);

  els.sumLeft.className = startCredits-final.total>=0 ? "good" : "bad";
  currentVisible = {
    weapon: final.w,
    utility: final.u,
    shield: final.s
  };
  const chosenAgentIcon = `<img src="${agentIcon(spinAgent)}" alt="${spinAgent}" class="agent-icon" onerror="this.style.display='none'" />`;
  els.sumAgent.innerHTML = `<span class="agent-summary">${chosenAgentIcon}<span>${spinAgent}</span></span>`;
  message.innerHTML = `<span class="good">BUY LOCKED</span> <span>•</span> <span class="agent-summary">${chosenAgentIcon}<strong>${spinAgent}</strong></span> <span>•</span> <strong>${money(final.total)} spent</strong>`;

  document.querySelectorAll(".window").forEach(x=>x.classList.add("shake"));
  setTimeout(()=>document.querySelectorAll(".window").forEach(x=>x.classList.remove("shake")),400);

  updateSpinAvailability();
  agentSearch.disabled=false;
  clearAgentBtn.disabled=false;
  creditsInput.disabled=false;
}

spinBtn.addEventListener("click",spin);

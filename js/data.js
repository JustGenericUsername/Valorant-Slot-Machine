/*
  EDITABLE DATA
  The prices are kept here intentionally so this is a completely standalone file.
*/
const weapons = [
  {name:"Classic", price:0, icon:"◎", type:"Pistol"},
  {name:"Shorty", price:300, icon:"▰", type:"Shotgun"},
  {name:"Frenzy", price:450, icon:"▰", type:"Pistol"},
  {name:"Ghost", price:500, icon:"◈", type:"Pistol"},
  {name:"Sheriff", price:800, icon:"◆", type:"Pistol"},
  {name:"Bandit", price:600, icon:"▰", type:"Pistol"},
  {name:"Stinger", price:1100, icon:"▰", type:"SMG"},
  {name:"Spectre", price:1600, icon:"▰", type:"SMG"},
  {name:"Bucky", price:850, icon:"▰", type:"Shotgun"},
  {name:"Judge", price:1850, icon:"▰", type:"Shotgun"},
  {name:"Bulldog", price:2050, icon:"▰", type:"Rifle"},
  {name:"Guardian", price:2250, icon:"▰", type:"Rifle"},
  {name:"Phantom", price:2900, icon:"▰", type:"Rifle"},
  {name:"Vandal", price:2900, icon:"▰", type:"Rifle"},
  {name:"Marshal", price:950, icon:"▰", type:"Sniper"},
  {name:"Outlaw", price:2400, icon:"▰", type:"Sniper"},
  {name:"Operator", price:4700, icon:"▰", type:"Sniper"},
  {name:"Ares", price:1600, icon:"▰", type:"LMG"},
  {name:"Odin", price:3200, icon:"▰", type:"LMG"}
];

const shields = [
  {name:"Nothing", price:0, icon:"◌", type:"None"},
  {name:"Light Shields", price:400, icon:"◒", type:"Armor"},
  {name:"Regen Shield", price:650, icon:"⟳", type:"Armor"},
  {name:"Heavy Shields", price:1000, icon:"◉", type:"Armor"}
];

const agents = {
  Astra: [
    {name:"Stars (x2)", price:150,bind:"X", icon:"Abilities/Stars.png"},
    {name:"Stars (x3)", price:300,bind:"X", icon:"Abilities/Stars.png"},
    {name:"Stars (x4)", price:450,bind:"X", icon:"Abilities/Stars.png"},
    {name:"Stars (x5)", price:600,bind:"X", icon:"Abilities/Stars.png"}
  ],
  Breach: [
    {name:"Aftershock", price:200, bind:"C", icon:"Abilities/Aftershock.png"},
    {name:"Flashpoint", price:250, bind:"Q", icon:"Abilities/Flashpoint.png"},
    {name:"Flashpoint (x2)", price:500, bind:"Q", icon:"Abilities/Flashpoint.png"},
    {name:"Full Util", price:700, bind:"X", icon:"Abilities/BreachUlt.png"}
  ],
  Brimstone: [
    {name:"Incendiary", price:250, bind:"Q", icon:"Abilities/Incendiary.png"},
    {name:"Sky Smoke", price:0, bind:"E", icon:"Abilities/Sky_Smoke.png"},
    {name:"Sky Smoke (x2)", price:100, bind:"E", icon:"Abilities/Sky_Smoke.png"},
    {name:"Sky Smoke (x3)", price:200, bind:"E", icon:"Abilities/Sky_Smoke.png"},
    {name:"Stim Beacon", price:200, bind:"C", icon:"Abilities/Stim_Beacon.png"},
    {name:"Full Util", price:650, bind:"X", icon:"Abilities/BrimstoneUlt.png"}
  ],
  Chamber: [
    {name:"Trademark", price:200, bind:"C", icon:"Abilities/Trademark.png"},
    {name:"Headhunter (x4)", price:400, bind:"Q", icon:"Abilities/Headhunter.png"},
    {name:"Headhunter (FULL)", price:800, bind:"Q", icon:"Abilities/Headhunter.png"},
    {name:"Full Util", price:1000, bind:"X", icon:"Abilities/ChamberUlt.png"}
    
  ],
  Clove: [
    {name:"Meddle", price:250, bind:"Q", icon:"Abilities/Meddle.png"},
    {name:"Ruse", price:150, bind:"E", icon:"Abilities/Ruse.png"},
    {name:"Pick-Me-Up", price:200, bind:"C", icon:"Abilities/Pick-me-up.png"},
    {name:"Full Util", price:600, bind:"X", icon:"Abilities/CloveUlt.png"}
  ],
  Cypher: [
    {name:"Trapwire", price:200, bind:"C", icon:"Abilities/Trapwire.png"},
    {name:"Trapwire (x2)", price:400, bind:"C", icon:"Abilities/Trapwire.png"},
    {name:"Cyber Cage", price:100, bind:"Q", icon:"Abilities/Cyber_Cage.png"},
    {name:"Cyber Cage (x2)", price:200, bind:"Q", icon:"Abilities/Cyber_Cage.png"},
    {name:"Full Util", price:600, bind:"X", icon:"Abilities/CypherUlt.png"}
  ],
  Deadlock: [
    {name:"Sonic Sensor", price:200, bind:"Q", icon:"Abilities/Sonic_Sensor.png"},
    {name:"Sonic Sensor (x2)", price:400, bind:"Q", icon:"Abilities/Sonic_Sensor.png"},
    {name:"Barrier Mesh", price:300, bind:"C", icon:"Abilities/Barrier_Mesh.png"},
    {name:"Full Util", price:700, bind:"X", icon:"Abilities/DeadlockUlt.png"}
  ],
  Fade: [
    {name:"Prowler", price:250, bind:"C", icon:"Abilities/Prowler.png"},
    {name:"Prowler (x2)", price:500, bind:"C", icon:"Abilities/Prowler.png"},
    {name:"Seize", price:200, bind:"Q", icon:"Abilities/Seize.png"},
    {name:"Full Util", price:700, bind:"X", icon:"Abilities/FadeUlt.png"}
  ],
  Gekko: [
    {name:"Full Util", price:550, bind:"X", icon:"Abilities/GekkoUlt.png"},
    {name:"Mosh Pit", price:250, bind:"C", icon:"Abilities/Mosh_Pit.png"},
    {name:"Wingman", price:300, bind:"Q", icon:"Abilities/Wingman.png"}
  ],
  Harbor: [
    {name:"Storm Surge", price:200, bind:"C", icon:"Abilities/Storm_Surge.png"},
    {name:"Full Util", price:500, bind:"X", icon:"Abilities/HarborUlt.png"},
    {name:"High Tide", price:300, bind:"Q", icon:"Abilities/High_Tide.png"}
  ],
  Iso: [
    {name:"Contingency", price:200, bind:"C", icon:"Abilities/Contingency.png"},
    {name:"Undercut", price:300, bind:"Q", icon:"Abilities/Undercut.png"},
    {name:"Full Util", price:500, bind:"X", icon:"Abilities/IsoUlt.png"}
  ],
  Jett: [
    {name:"Cloudburst", price:200, bind:"C", icon:"Abilities/Cloudburst.png"},
    {name:"Cloudburst (x2)", price:400, bind:"C", icon:"Abilities/Cloudburst.png"},
    {name:"Updraft", price:150, bind:"Q", icon:"Abilities/Updraft.png"},
    {name:"Full Util", price:550, bind:"X", icon:"Abilities/JettUlt.png"}
  ],
  "KAY/O": [
    {name:"FRAG/ment", price:200, bind:"C", icon:"Abilities/FRAG-ment.png"},
    {name:"FLASH/drive", price:250, bind:"Q", icon:"Abilities/FLASH-drive.png"},
    {name:"FLASH/drive (x2)", price:500, bind:"Q", icon:"Abilities/FLASH-drive.png"},
    {name:"FULL/util", price:700, bind:"X", icon:"Abilities/KayoUlt.png"}
  ],
  Killjoy: [
    {name:"Alarmbot", price:200, bind:"Q", icon:"Abilities/Alarmbot.png"},
    {name:"Full Util", price:600, bind:"X", icon:"Abilities/KilljoyUlt.png"},
    {name:"Nanoswarm", price:200, bind:"C", icon:"Abilities/Nanoswarm.png"},
    {name:"Nanoswarm (x2)", price:400, bind:"C", icon:"Abilities/Nanoswarm.png"}
  ],
  Miks: [
    {name:"M-Pulse", price:250, bind:"C", icon:"Abilities/M-Pulse.png"},
    {name:"M-Pulse (x2)", price:500, bind:"C", icon:"Abilities/M-Pulse.png"},
    {name:"Harmonize", price:200, bind:"Q", icon:"Abilities/Harmonize.png"},
    {name:"Full Util", price:700, bind:"X", icon:"Abilities/MiksUlt.png"}
  ],
  Neon: [
    {name:"Fast Lane", price:300, bind:"C", icon:"Abilities/Fast_Lane.png"},
    {name:"Relay Bolt", price:200, bind:"Q", icon:"Abilities/Relay_Bolt.png"},
    {name:"Full Util", price:500, bind:"X", icon:"Abilities/NeonUlt.png"}
  ],
  Omen: [
    {name:"Shrouded Step", price:100, bind:"C", icon:"Abilities/Shrouded_Step.png"},
    {name:"Shrouded Step (x2)", price:200, bind:"C", icon:"Abilities/Shrouded_Step.png"},
    {name:"Paranoia", price:250, bind:"Q", icon:"Abilities/Paranoia.png"},
    {name:"Dark Cover", price:150,  bind:"E", icon:"Abilities/Dark_Cover.png"},
    {name:"Full Util", price:600,  bind:"X", icon:"Abilities/OmenUlt.png"}
  ],
  Phoenix: [
    {name:"Blaze", price:150, bind:"C", icon:"Abilities/Blaze.png"},
    {name:"Curveball", price:250, bind:"E", icon:"Abilities/Curveball.png"},
    {name:"Hot Hands", price:200, bind:"Q", icon:"Abilities/Hot_Hands.png"},
    {name:"Full Util", price:600, bind:"X", icon:"Abilities/PhoenixUlt.png"}
  ],
  Raze: [
    {name:"Full Util", price:700, bind:"X", icon:"Abilities/RazeUlt.png"},
    {name:"Blast Pack", price:200, bind:"Q", icon:"Abilities/Blast_Pack.png"},
    {name:"Blast Pack (x2)", price:400, bind:"Q", icon:"Abilities/Blast_Pack.png"},
    {name:"Boom Bot", price:300, bind:"C", icon:"Abilities/Boom_Bot.png"}
  ],
  Reyna: [
    {name:"Dismiss/Devour", price:200, bind:"E/Q", icon:"Abilities/Dismiss.png"},
    {name:"Leer", price:250, bind:"C", icon:"Abilities/Leer.png"},
    {name:"Leer (x2)", price:500, bind:"C", icon:"Abilities/Leer.png"},
    {name:"Full Util", price:700, bind:"C", icon:"Abilities/ReynaUlt.png"}
    
  ],
  Sage: [
    {name:"Barrier Orb", price:300, bind:"C", icon:"Abilities/Barrier_Orb.png"},
    {name:"Slow Orb", price:200, bind:"Q", icon:"Abilities/Slow_Orb.png"},
    {name:"Slow Orb (x2)", price:400, bind:"Q", icon:"Abilities/Slow_Orb.png"},
    {name:"Full Util", price:700, bind:"X", icon:"Abilities/SageUlt.png"}
  ],
  Skye: [
    {name:"Trailblazer", price:300, bind:"Q", icon:"Abilities/Trailblazer.png"},
    {name:"Guiding Light", price:250, bind:"E", icon:"Abilities/Guiding_Light.png"},
    {name:"Regrowth", price:150, bind:"C", icon:"Abilities/Regrowth.png"},
    {name:"Full Util", price:700, bind:"X", icon:"Abilities/SkyeUlt.png"}
  ],
  Sova: [
    {name:"Shock Bolt", price:150, bind:"Q", icon:"Abilities/Shock_Bolt.png"},
    {name:"Shock Bolt (x2)", price:300, bind:"Q", icon:"Abilities/Shock_Bolt.png"},
    {name:"Full Util", price:700, bind:"X", icon:"Abilities/SovaUlt.png"},
    {name:"Owl Drone", price:400, bind:"C", icon:"Abilities/Dark_Cover.png"}
  ],
  Tejo: [
    {name:"Stealth Drone", price:400, bind:"C", icon:"Abilities/Stealth_Drone.png"},
    {name:"Special Delivery", price:200, bind:"Q", icon:"Abilities/Special_Delivery.png"},
    {name:"Full Util", price:600, bind:"X", icon:"Abilities/TejoUlt.png"}
  ],
  Veto: [
    {name:"Crosscut", price:200, bind:"C", icon:"Abilities/Crosscut.png"},
    {name:"Crosscut (x2)", price:400, bind:"C", icon:"Abilities/Crosscut.png"},
    {name:"Chokehold", price:100, bind:"Q", icon:"Abilities/Chokehold.png"},
    {name:"Full Util", price:500, bind:"X", icon:"Abilities/VetoUlt.png"}
  ],
  Viper: [
    {name:"Snake Bite", price:300, bind:"E", icon:"Abilities/Snake_Bite.png"},
    {name:"Poison Cloud", price:200, bind:"Q", icon:"Abilities/Poison_Cloud.png"},
    {name:"Full Util", price:500, bind:"X", icon:"Abilities/ViperUlt.png"}
  ],
  Vyse: [
    {name:"Razorvine", price:150, bind:"C", icon:"Abilities/Razorvine.png"},
    {name:"Razorvine (x2)", price:300, bind:"C", icon:"Abilities/Razorvine.png"},
    {name:"Shear", price:200, bind:"Q", icon:"Abilities/Shear.png"},
    {name:"Full Util", price:500, bind:"X", icon:"Abilities/VyseUlt.png"}
  ],
  Waylay: [
    {name:"Saturate", price:300, bind:"C", icon:"Abilities/Saturate.png"},
    {name:"Lightspeed", price:300, bind:"Q", icon:"Abilities/Lightspeed.png"},
    {name:"Full Util", price:600, bind:"X", icon:"Abilities/WaylayUlt.png"}
  ],
  Yoru: [
    {name:"Fakeout", price:200, bind:"C", icon:"Abilities/Fakeout.png"},
    {name:"Gatecrash", price:150, bind:"E", icon:"Abilities/Gatecrash.png"},
    {name:"Blindside", price:250, bind:"Q", icon:"Abilities/Blindside.png"},
    {name:"Full Util", price:600, bind:"Q", icon:"Abilities/YoruUlt.png"}
  ]
};

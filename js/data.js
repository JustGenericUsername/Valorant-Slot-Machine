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
    {name:"Full Util", price:600,bind:"X", icon:"Abilities/Stars.png"}
  ],
  Breach: [
    {name:"Aftershock", price:200, bind:"C", icon:"Abilities/Aftershock.png"},
    {name:"Flashpoint", price:250, bind:"Q", icon:"Abilities/Flashpoint.png"},
    {name:"Flashpoint (x2)", price:500, bind:"Q", icon:"Abilities/Flashpoint.png"},
    {name:"Full Util", price:700, bind:"X", icon:"Abilities/BreachUlt.png"}
  ],
  Brimstone: [
    {name:"Incendiary", price:250, bind:"Q", icon:"Abilities/Incendiary.png"},
    {name:"Sky Smoke", price:100, bind:"E", icon:"Abilities/Sky_Smoke.png"},
    {name:"Sky Smoke (x2)", price:200, bind:"E", icon:"Abilities/Sky_Smoke.png"},
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


// ============================================================
// CROSSHAIR RANDOMIZER
// ============================================================
//
// Add your own Valorant crosshair codes here.
//
// Each crosshair needs:
//
//   name: The name you want displayed
//   code: The actual Valorant crosshair code
//
// You can add as many as you want.
//
// ============================================================

const crosshairs = [

    // --------------------------------------------------------
    // EXAMPLE CROSSHAIR
    // Replace these examples with your own.
    // --------------------------------------------------------

    {
        name: "BIG BLACK CROSSHAIR (BBC)",
        code: "0;c;1;s;1;P;c;8;u;000000FF;t;6;o;1;d;1;b;1;z;6;f;0;m;1;0t;7;0l;20;0v;20;0o;20;0a;1;0f;0;1t;10;1l;10;1v;10;1g;1;1o;8;1a;1;1m;0;1f;0;S;b;1;c;8;t;000000FF;s;4;o;1"
    },

    {
        name: "5 Dots",
        code: "0;p;0;s;1;P;u;FFDD00FF;o;1;d;1;z;3;f;0;m;1;0t;3;0l;0;0v;3;0g;1;0o;20;0a;1;0f;0;1t;3;1l;0;1v;3;1g;1;1o;40;1a;1;1m;0;1f;0;A;o;1;d;1;z;3;0t;3;0l;3;0v;0;0g;1;0o;20;0a;1;0f;0;1t;3;1l;3;1v;0;1g;1;1o;40;1a;1;1m;0;1f;0;S;c;0;t;000000FF;s;0.628;o;1"
    },

    {
        name: "Brown Windmill",
        code: "0;p;0;s;1;P;c;8;u;2E1503FF;o;1;d;1;b;1;z;6;a;0.339;f;0;0t;10;0l;20;0v;20;0o;11;0a;1;1t;9;1l;10;1v;10;1g;1;1o;40;1a;1;1m;0;1f;0;A;c;8;u;FA86C4FF;t;3;o;0.33;d;1;b;1;a;0.147;0t;0;0l;20;0o;0;0a;1;0m;1;0s;0.338;0e;0.763;1l;4;1v;10;1o;14;1a;1;1m;0;1f;0;S;b;1;c;8;t;2E1503FF;s;4;o;1"
    },

    {  
        name: "Flappy Bird",
        code: "0;P;c;1;t;3;o;1;f;0;0t;6;0l;20;0v;20;0o;13;0a;1;0f;0;1t;9;1l;4;1v;4;1o;9;1a;1;1m;0;1f;0"
    },

    {  
        name: "Church Crosses",
        code: "0;P;h;0;d;1;z;3;f;0;0t;3;0l;14;0o;6;0a;1;0f;0;1t;9;1l;3;1o;12;1a;1;1m;0;1f;0"
    },

    {  
        name: "Steve",
        code: "0;P;c;5;t;2;o;1;0t;6;0l;4;0v;3;0g;1;0o;0;0a;1;0f;0;1t;6;1v;6;1g;1;1o;5;1a;1;1m;0;1f;0"
    },

    { 
        name: "Chest",
        code: "0;P;c;8;b;1;t;4;o;0.65;z;4;a;0.55;0t;10;0l;6;0v;6;0o;0;0a;0.75;0s;0.4;0e;2;1t;3;1l;4;1v;4;1o;34;1a;0.4;1s;2.6;1e;1.4;u;8A5E14;d;1;h;1;0g;0;1g;0;0f;0;1f;0;0m;0;1m;1;0b;1;1b;0;m;0"
    },

    {  
        name: "4 Crosshairs",
        code: "0;P;c;8;b;1;t;1;o;0.5;z;2;a;1;0t;8;0l;2;0v;2;0o;20;0a;1;0s;1;0e;1;1t;2;1l;8;1v;8;1o;17;1a;1;1s;1;1e;1;u;BBFF00;d;0;h;0;0g;0;1g;0;0f;0;1f;0;0m;0;1m;0;0b;1;1b;1;m;1;1;NaN;f;0"
    },

    {  
        name: "Glasses",
        code: "0;P;c;8;b;1;t;2;o;1;z;2;a;0.45;0t;10;0l;14;0v;0;0o;5;0a;0.3;0s;1.7;0e;1.3;1t;1;1l;6;1v;0;1o;18;1a;0;1s;0.5;1e;1.1;u;FFFFFFFF;d;1;h;1;0g;1;1g;1;0f;0;1f;0;0m;0;1m;0;0b;1;1b;1;m;0"
    },

    {  
        name: "Goofy Face",
        code: "0;P;c;8;b;1;t;4;o;1;z;5;a;0.556;0t;10;0l;20;0v;0;0o;13;0a;1;0s;1;0e;1;1t;1;1l;1;1v;0;1o;14;1a;1;1s;0.064;1e;0.375;u;FFFFFF;d;1;h;1;0g;1;1g;1;0f;0;1f;1;0m;0;1m;1;0b;1;1b;1;m;0;1;NaN"
    },

    {  
        name: "Block Blast",
        code: "0;P;c;8;b;1;t;2;o;1;z;2;a;1;0t;10;0l;0;0v;4;0o;3;0a;1;0s;1;0e;1;1t;10;1l;0;1v;4;1o;13;1a;1;1s;1;1e;1;u;D0021B;d;0;h;1;0g;1;1g;1;0f;0;1f;0;0m;0;1m;1;0b;1;1b;1;m;0"
    },

    {  
        name: "Magnificent",
        code: "0;P;c;8;b;1;t;6;o;1;z;6;a;1;0t;10;0l;6;0v;6;0o;13;0a;1;0s;3;0e;3;1t;2;1l;10;1v;10;1o;32;1a;1;1s;3;1e;3;u;FA8072FF;d;1;h;1;0g;0;1g;0;0f;1;1f;1;0m;1;1m;1;0b;1;1b;1;m;0"
    }

];


// ============================================================
// HOW TO ADD MORE
// ============================================================
//
// Just copy one of the blocks above:
//
// {
//     name: "YOUR CROSSHAIR NAME",
//     code: "YOUR CROSSHAIR CODE"
// },
//
// Make sure every item except the LAST one has a comma.
//
// Example:
//
// const crosshairs = [
//
//     {
//         name: "Crosshair 1",
//         code: "YOUR CODE HERE"
//     },
//
//     {
//         name: "Crosshair 2",
//         code: "YOUR CODE HERE"
//     }
//
// ];
//
// ============================================================

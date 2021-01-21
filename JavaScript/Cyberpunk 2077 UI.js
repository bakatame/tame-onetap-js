/********************************************
*
*             Cyberpunk 2077 UI
*           Create by Robonyantame
*           Create Date:2020/12/21
*                 18:02:35
*
//-----------------------------------------\\
*
*                  Thanks:
*         tilestra <- Account banning
*        BetterUI and Better Colors API
*
********************************************/

//==========================================================================================================\\
//Menu
//------------------------------
//Add New Table
UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "Cyberpunk");

UI.AddSliderInt(["Visuals", "Cyberpunk", "Cyberpunk"], ">>-  Cyberpunk 2077 UI  -<<", 0, 0);
UI.AddSliderInt(["Visuals", "Cyberpunk", "Cyberpunk"], ">>-  Create by Robonyantame  -<<", 0, 0);

UI.AddMultiDropdown(["Visuals", "Cyberpunk", "Cyberpunk"],"Enable UI",["Health_Armor","Weapon"]);

//Health and Armor Render Coordinates
UI.AddSliderInt(["Visuals", "Cyberpunk", "Cyberpunk"], "Health_Armor_X", 0, Render.GetScreenSize()[0]);
UI.AddSliderInt(["Visuals", "Cyberpunk", "Cyberpunk"], "Health_Armor_Y", 0, Render.GetScreenSize()[1]);

//Weapon Render Coordinates
UI.AddSliderInt(["Visuals", "Cyberpunk", "Cyberpunk"], "Weapon_X", 0, Render.GetScreenSize()[0]);
UI.AddSliderInt(["Visuals", "Cyberpunk", "Cyberpunk"], "Weapon_Y", 0, Render.GetScreenSize()[1]);

//FuCk YoU :)
UI.SetEnabled(["Config", "Cheat", "General", "RAGE QUIT"], 0)
//==========================================================================================================\\

//==========================================================================================================\\
//API and Library
//------------------------------

//weapon icon
function get_icon(a) {
    var letter = ""
    switch (a) {
        case "desert eagle":
            letter = "A"
            break
        case "dual berettas":
            letter = "B"
            break
        case "five seven":
            letter = "E"
            break
        case "glock 18":
            letter = "C"
            break
        case "ak 47":
            letter = "W"
            break
        case "aug":
            letter = "U"
            break
        case "awp":
            letter = "Z"
            break
        case "famas":
            letter = "R"
            break
        case "m249":
            letter = "g"
            break
        case "g3sg1":
            letter = "X"
            break
        case "galil ar":
            letter = "Q"
            break
        case "m4a4":
            letter = "S"
            break
        case "m4a1 s":
            letter = "T"
            break
        case "mac 10":
            letter = "K"
            break
        case "p2000":
            letter = "E"
            break
        case "mp5 sd":
            letter = "N"
            break
        case "ump 45":
            letter = "L"
            break
        case "xm1014":
            letter = "b"
            break
        case "pp bizon":
            letter = "M"
            break
        case "mag 7":
            letter = "d"
            break
        case "negev":
            letter = "f"
            break
        case "sawed off":
            letter = "c"
            break
        case "tec 9":
            letter = "H"
            break
        case "zeus x27":
            letter = "h"
            break
        case "p250":
            letter = "F"
            break
        case "mp7":
            letter = "N"
            break
        case "mp9":
            letter = "O"
            break
        case "nova":
            letter = "e"
            break
        case "p90":
            letter = "P"
            break
        case "scar 20":
            letter = "Y"
            break
        case "sg 553":
            letter = "V"
            break
        case "ssg 08":
            letter = "a"
            break
        case "knife":
            letter = "1"
            break
        case "flashbang":
            letter = "i"
            break
        case "high explosive grenade":
            letter = "j"
            break
        case "smoke grenade":
            letter = "k"
            break
        case "molotov":
            letter = "l"
            break
        case "decoy grenade":
            letter = "m"
            break
        case "incendiary grenade":
            letter = "n"
            break
        case "c4 explosive":
            letter = "o"
            break
        case "usp s":
            letter = "G"
            break
        case "cz75 auto":
            letter = "I"
            break
        case "r8 revolver":
            letter = "J"
            break

        case "bayonet":
            letter = "1"
            break
        case "flip knife":
            letter = "2"
            break
        case "gut knife":
            letter = "3"
            break
        case "karambit":
            letter = "4"
            break
        case "m9 bayonet":
            letter = "5"
            break
        case "huntsman knife":
            letter = "6"
            break
        case "bowie knife":
            letter = "7"
            break
        case "butterfly knife":
            letter = "8"
            break
        case "shadow daggers":
            letter = "9"
            break
        case "falchion knife":
            letter = "0"
            break
        case "ursus knife":case "navaja knife":case "stiletto knife":case "skeleton knife":case "nomad knife":case "survival knife":case "paracord knife":case "classic knife":case "talon knife":
            letter = "1"
            break
        default:
            letter = ""
            break
    }
    return letter
}

// I am learning how to use functions and return
// So the code will look bad
// Sorry! :3
function def_font(size){
    var font = Render.AddFont('bahnschrift.ttf',size,800);
    return font;
}

function Weapon_font(size){
    var font = Render.AddFont('astriumwep.ttf',size,800);
    return font;
}

function Visibility(variable,Visibility){
    if(Visibility == true){
        Visibility = 1
    }
    if(Visibility == false){
        Visibility = 0
    }

    var enable = UI.SetEnabled(["Visuals", "Cyberpunk", "Cyberpunk", variable], Visibility);
    return enable;
}

//BetterUI and Better Colors API
//Dragging properties Variable.
var area = {};

area.new = function(x, y, w, h)
{
    const area_info_t = {
        x: x,
        y: y,
        x2: x + w,
        y2: y + h
    };

    return area_info_t;
}

area.in_bounds = function(area, point)
{
    return point.x > area.x && point.x < area.x2 && point.y > area.y && point.y < area.y2;
}

var point = {};

point.new = function(x, y)
{
    const point_info_t = {
        x: x,
        y: y
    };

    return point_info_t;
}

//==========================================================================================================\\

//==========================================================================================================\\
//Render Function
//------------------------------

//Health and Armor
function Health_Armor(){

    //------------------------------
    //Variable
    //------------------------------
    var me = Entity.GetLocalPlayer();
    var health = Entity.GetProp(me,"CBasePlayer", "m_iHealth");
    var armor = Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayerResource", "m_iArmor");
    var Armor_text = "" + armor;
    var Health_text = "" + health;
    var x = UI.GetValue(["Visuals", "Cyberpunk", "Cyberpunk", "Health_Armor_X"]);
    var y = UI.GetValue(["Visuals", "Cyberpunk", "Cyberpunk", "Health_Armor_Y"]);
    //------------------------------
    //Render
    //------------------------------

    if(health == "m_iHealth" || armor == "m_iArmor"){
        Health_text = "0";
        Armor_text = "0";
    }

    if(iAlpha > 1){
        iAlpha--;
    }

    if(getExp > Levelexp){
        getExp = 0;
        Level ++;
        Levelexp = Levelexp + 2;
    }

    //Shadows
    Render.FilledRect( x+40, y+12, 223, 10, [ 155, 51, 47, 102 ]);
    if(health <=100){
    Render.FilledRect( x+40, y+12, (health * 2.23), 10, [ 234, 89, 82, 102 ]);
    }else{
    Render.FilledRect( x+40, y+12, 223, 10, [ 234, 89, 82, 102 ]);
    } 
    Render.FilledRect( x+40, y+6, 223, 3, [ 47, 81, 79, 102 ]);
    Render.FilledRect( x+40, y+6, (armor * 2.23), 3, [ 139, 200, 191, 102 ]);
    Render.String( x+280, y+13, 0, Health_text, [222, 79, 70, 102], def_font(25));
    if(health <=1000){
    Render.String( x+320, y+9, 0, Armor_text, [139, 200, 191, 102], def_font(19));
    }else{
    Render.String( x+330, y+9, 0, Armor_text, [139, 200, 191, 102], def_font(19));
    }
    Render.FilledRect(x+6, y+6, 2, 21,   [59, 153, 163, 102]);
    Render.FilledRect(x+32, y+6, 2, 27,   [59, 153, 163, 102]);
    Render.FilledRect(x+6, y+6, 27, 2,   [59, 153, 163, 102]);
    Render.FilledRect(x+16, y+33, 18, 2,   [59, 153, 163, 102]);
    Render.Line( x+6, y+26, x+15, y+34, [59, 153, 163, 102]);
    Render.Line( x+7, y+26, x+16, y+34, [59, 153, 163, 102]);


    //Display Health
    Render.FilledRect( x+34, y+6, 223, 10, [ 155, 51, 47, 255 ]); //Health Background Color

    if(health <=100){
    Render.FilledRect( x+34, y+6, (health * 2.23), 10, [ 234, 89, 82, 255 ]);
    }else{
    Render.FilledRect( x+34, y+6, 223, 10, [ 234, 89, 82, 255 ]);
    } 

    //Display Armor
    Render.FilledRect( x+34, y, 223, 3, [ 47, 81, 79, 255 ]); //Armor Background Color
    Render.FilledRect( x+34, y, (armor * 2.23), 3, [ 139, 200, 191, 255 ]); //Armor Color

    //Display Remaining Health and Armor
    Render.String( x+274, y+7, 0, Health_text, [222, 79, 70, 255], def_font(25));//Remaining Health

    if(health <=1000){
    Render.String( x+314, y+3, 0, Armor_text, [139, 200, 191, 255], def_font(19));
    }else{
    Render.String( x+324, y+3, 0, Armor_text, [139, 200, 191, 255], def_font(19));
    }

    //Level Framework
    Render.FilledRect(x, y, 2, 21,   [59, 153, 163, 255]);//Left
    Render.FilledRect(x+26, y, 2, 27,   [59, 153, 163, 255]);//Right
    Render.FilledRect(x, y, 27, 2,   [59, 153, 163, 255]);//Top
    Render.FilledRect(x+10, y+27, 18, 2,   [59, 153, 163, 255]);//Bottom
    Render.Line( x, y+20, x+9, y+28, [59, 153, 163, 255]);//Angled
    Render.Line( x+1, y+20, x+10, y+28, [59, 153, 163, 255]);//Angledx2

    //Display Level
    Render.String( x+14, y+5, 1, ""+Level, [139, 200, 191, 255], def_font(17));
    Render.String( x+34 , y+21, 0, 'You Kill Player! Get 1 Exp! ', [139, 200, 191, iAlpha], def_font(17)); 

    //BetterUI and Better Colors API
    //Create dragging properties.
    const window_area = area.new(x, y, 200, 32);
    const mouse_pos = point.new(Input.GetCursorPosition()[0], Input.GetCursorPosition()[1]);
    if (Input.IsKeyPressed(1) && UI.IsMenuOpen())
    {
        if (area.in_bounds(window_area, mouse_pos))
        {
            UI.SetValue(["Visuals", "Cyberpunk", "Cyberpunk", "Health_Armor_X"], mouse_pos.x - 100);
            UI.SetValue(["Visuals", "Cyberpunk", "Cyberpunk", "Health_Armor_Y"], mouse_pos.y - 10);
        }
    }

    //Check Localplayer
    if (!Entity.IsValid(Entity.GetLocalPlayer())) return;

}

//Health and Armor Visibility
UI.SetValue(["Visuals", "Cyberpunk", "Cyberpunk", "Health_Armor_X"], 656);
UI.SetValue(["Visuals", "Cyberpunk", "Cyberpunk", "Health_Armor_Y"], 81);
Visibility("Health_Armor_X",false);
Visibility("Health_Armor_Y",false);

//Weapon
function Weapon(){

    //------------------------------
    //Variable
    //------------------------------
    var me = Entity.GetLocalPlayer();
    var weapon = Entity.GetWeapon(me);
    var weapon_name = Entity.GetName(weapon);

    var ammo = Entity.GetProp(weapon,"CBaseCombatWeapon" ,"m_iClip1");
    var ammo_reserve = Entity.GetProp(weapon, "CBaseCombatWeapon", "m_iPrimaryReserveAmmoCount");
    var x = UI.GetValue(["Visuals", "Cyberpunk", "Cyberpunk", "Weapon_X"]);
    var y = UI.GetValue(["Visuals", "Cyberpunk", "Cyberpunk", "Weapon_Y"]);
    //------------------------------
    //Render
    //------------------------------
    if(ammo < 0){
        ammo = 0
    }
    //Shadows
    Render.String( x+29+6, y-6, 1, (""+00+ammo), [85, 226, 236, 102], def_font(33));
    Render.String( x+88+6, y-6, 1, (""+00+ammo_reserve), [240, 91, 82, 102], def_font(29));
    Render.String( x+126+6, y-2-6, 0, get_icon(weapon_name), [240, 91, 82, 102], Weapon_font(65));
    Render.String( x+150+6, y-16-6, 0, weapon_name, [240, 91, 82, 102], def_font(16));

    //Ammo
    Render.String( x+29, y, 1, (""+00+ammo), [85, 226, 236, 255], def_font(33));
    Render.String( x+88, y, 1, (""+00+ammo_reserve), [240, 91, 82, 255], def_font(29));

    //weapon
    Render.String( x+126, y-2, 0, get_icon(weapon_name), [240, 91, 82, 255], Weapon_font(65));
    Render.String( x+150, y-16, 0, weapon_name, [240, 91, 82, 255], def_font(16));

    //BetterUI and Better Colors API
    //Create dragging properties.
    const window_area = area.new(x, y, 200, 32);
    const mouse_pos = point.new(Input.GetCursorPosition()[0], Input.GetCursorPosition()[1]);
    if (Input.IsKeyPressed(1) && UI.IsMenuOpen())
    {
        if (area.in_bounds(window_area, mouse_pos))
        {
            UI.SetValue(["Visuals", "Cyberpunk", "Cyberpunk", "Weapon_X"], mouse_pos.x - 100);
            UI.SetValue(["Visuals", "Cyberpunk", "Cyberpunk", "Weapon_Y"], mouse_pos.y - 10);
        }
    }

    //Check Localplayer
    if (!Entity.IsValid(Entity.GetLocalPlayer())) return;

}

//Weapon Visibility
UI.SetValue(["Visuals", "Cyberpunk", "Cyberpunk", "Weapon_X"], 43);
UI.SetValue(["Visuals", "Cyberpunk", "Cyberpunk", "Weapon_Y"], 816);
Visibility("Weapon_X",false);
Visibility("Weapon_Y",false);

//==========================================================================================================\\

//==========================================================================================================\\
//Misc Function
//------------------------------

function onDraw(){
    //Display Health and Armor
    var me = Entity.GetLocalPlayer();
    var health = Entity.GetProp(me,"CBasePlayer", "m_iHealth");
    if(UI.GetValue(["Visuals", "Cyberpunk", "Cyberpunk","Enable UI"]) & (1 << 0)){
        Health_Armor();
    }
    if(UI.GetValue(["Visuals", "Cyberpunk", "Cyberpunk","Enable UI"]) & (1 << 1) && health > 1){
        Weapon()
    }
}

//Close js
function onUnload(){

    Cheat.ExecuteCommand("cl_draw_only_deathnotices 0");
    Cheat.ExecuteCommand("cl_drawhud_force_radar 0");

}
//==========================================================================================================\\

//==========================================================================================================\\
//here is tilestra's Function and Variable
//https://onetap.su/members/tilestra.54952/
//Sorry,I Copy your hub js
//------------------------------

var iAlpha = 0, iExp = 0, getExp = 0, Level = 1, Levelexp = 3, iKills = 0, Level2 = 0;

//Out match is ended
function EVENT_MATCH_END()
{
    RESET();
    //Next map
    iExp = 0, getExp = 0,Level = 1;
}

//Setup to default everything at player spawn
function EVENT_PLAYER_SPAWN()
{
    PlayerIndex = Event.GetInt("userid"); 
    iPlayerIndex = Entity.GetEntityFromUserID(PlayerIndex);
    
    //Reset for us
    if(Entity.GetLocalPlayer() == iPlayerIndex)    RESET();
}

//Setup to default everything at round start
function EVENT_ROUND_START()
{
    RESET();
    
}

function RESET()
{
    iAlpha = 0;
} 

//------------------------------

function EVENT_DEATH()
{
    //Get them
    iVictim = Event.GetInt("userid"); 
    iVictim_index = Entity.GetEntityFromUserID(iVictim);
    iAttacker = Event.GetInt("attacker"); 
    iAttacker_index = Entity.GetEntityFromUserID(iAttacker);
  
    if(Entity.GetLocalPlayer() == iVictim_index && Entity.GetLocalPlayer() !== iAttacker_index)    return; 
  
    //A kill count only for us + info
    if(Entity.GetLocalPlayer() == iAttacker_index)
    {
        //Simulating Exp
        iExp = getExp;
        //Frame count and transparency
        iAlpha = 255;
        //Reset if MAX (or remove if u want)
        getExp++;
    }
} 

//==========================================================================================================\\
//Callback
//------------------------------
Cheat.RegisterCallback("Draw", "onDraw")
Cheat.RegisterCallback("Unload", "onUnload");

//here is tilestra's Callback
//https://onetap.su/members/tilestra.54952/
//------------------------------
Global.RegisterCallback("player_death", "EVENT_DEATH");
Global.RegisterCallback("round_start", "EVENT_ROUND_START");
Global.RegisterCallback("player_spawned", "EVENT_PLAYER_SPAWN");
Global.RegisterCallback("cs_intermission", "EVENT_MATCH_END");
Global.RegisterCallback("cs_win_panel_match", "EVENT_MATCH_END");
//==========================================================================================================\\

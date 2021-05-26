/********************************************
*
*               RPG indicators
*           Create by Robonyantame
*           Create Date:2020/12/21
*                 18:02:35
*
//==========================================\\
* 
*                Good Lucy :3
*
********************************************/

//==========================================================================================================\\
//Menu
//------------------------------
//Add New Table
UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "RPG indicators");

//csgohvh.com
//welcome :3
UI.AddSliderInt(["Visuals", "RPG indicators", "RPG indicators"], ">>-  RPG indicators -<<", 0, 0);
UI.AddSliderInt(["Visuals", "RPG indicators", "RPG indicators"], ">>-  Create by Robonyantame  -<<", 0, 0);
UI.AddSliderInt(["Visuals", "RPG indicators", "RPG indicators"], ">>-  https://hvhcsgo.com  -<<", -1, 0);

//Disable Draw csgo ui, Enable my bad UI
UI.AddCheckbox(["Visuals", "RPG indicators", "RPG indicators"], "Enable Indicator");

//Enable Coordinates
UI.AddCheckbox(["Visuals", "RPG indicators", "RPG indicators"], "Enable Coordinates");

//Set Indicator Coordinates
UI.AddSliderInt(["Visuals", "RPG indicators", "RPG indicators"], "Indicator_X", 0, Render.GetScreenSize()[0]);
UI.AddSliderInt(["Visuals", "RPG indicators", "RPG indicators"], "Indicator_Y", 0, Render.GetScreenSize()[1]);

//FuCk YoU :)
UI.SetEnabled(["Config", "Cheat", "General", "RAGE QUIT"], 0);
//==========================================================================================================\\

//==========================================================================================================\\
//API and Library
//------------------------------

//Thanks Circular Desync Indicators :3
//Sorry I don't know who the Coder is
function render_arc(x, y, radius, radius_inner, start_angle, end_angle, segments, color) {
    segments = 360 / segments;

    for (var i = start_angle; i < start_angle + end_angle; i = i + segments) {

        var rad = i * Math.PI / 180;
        var rad2 = (i + segments) * Math.PI / 180;

        var rad_cos = Math.cos(rad);
        var rad_sin = Math.sin(rad);

        var rad2_cos = Math.cos(rad2);
        var rad2_sin = Math.sin(rad2);

        var x1_inner = x + rad_cos * radius_inner;
        var y1_inner = y + rad_sin * radius_inner;

        var x1_outer = x + rad_cos * radius;
        var y1_outer = y + rad_sin * radius;

        var x2_inner = x + rad2_cos * radius_inner;
        var y2_inner = y + rad2_sin * radius_inner;

        var x2_outer = x + rad2_cos * radius;
        var y2_outer = y + rad2_sin * radius;

        Render.Polygon([
                [x1_outer, y1_outer],
                [x2_outer, y2_outer],
                [x1_inner, y1_inner]
            ],
            color
        );

        Render.Polygon([
                [x1_inner, y1_inner],
                [x2_outer, y2_outer],
                [x2_inner, y2_inner]
            ],
            color
        );
    }
}

//Thanks BetterUI and Better Colors API :3
//Sorry I don't know who the Coder is
//Dragging properties Variable.
var area = {
    new: function(x, y, w, h) {
        const area_info_t = {
            x: x,
            y: y,
            x2: x + w,
            y2: y + h
        };

        return area_info_t;
    },
    in_bounds: function(area, point) {
        return point.x > area.x && point.x < area.x2 && point.y > area.y && point.y < area.y2;
    }
};

var point = {
    new: function(x, y) {
        const point_info_t = {
            x: x,
            y: y
        };

        return point_info_t;
    },
};

//==========================================================================================================\\

//==========================================================================================================\\
//Function
//------------------------------
function RPG_Draw() {

    if (!Entity.IsAlive(Entity.GetLocalPlayer())) { return; }
    //------------------------------
    //Variable
    //------------------------------

    var font = Render.GetFont("verdana.ttf", 10, true);

    var enable = UI.GetValue(["Visuals", "RPG indicators", "RPG indicators", "Enable Indicator"])
    var Coordinates_enable = UI.GetValue(["Visuals", "RPG indicators", "RPG indicators", "Enable Coordinates"]);

    var x = UI.GetValue(["Visuals", "RPG indicators", "RPG indicators", "Indicator_X"]);
    var y = UI.GetValue(["Visuals", "RPG indicators", "RPG indicators", "Indicator_Y"]);

    var me = Entity.GetLocalPlayer();
    var health = Entity.GetProp(me, "CBasePlayer", "m_iHealth");
    var armor = Entity.GetProp(me, "CCSPlayerResource", "m_iArmor");
    var money = Entity.GetProp(me, "CCSPlayer", "m_iAccount");
    var player_name = Cheat.GetUsername();

    if (RPG_iAlpha > 1) {
        RPG_iAlpha--;
    }

    if (RPG_getExp > RPG_Levelexp) {
        RPG_getExp = 0;
        RPG_Level++;
        RPG_Levelexp = RPG_Levelexp + 30;
    }
    if (health == "m_iHealth" || money == "m_iAccount") {
        text.Health_text = "0hp";
        text.Money_text = "0hp";
    }

    //Sherwood Dungeon Level
    //https://sherwooddungeon.fandom.com/wiki/Level_Ranking_System
    switch (RPG_Level) {
        case 0:
        case 1:
            RPG_Level_name = 'Novice'
            break;
        case 2:
            RPG_Level_name = 'Apprentice'
            break;
        case 3:
            RPG_Level_name = 'Journeyman'
            break;
        case 4:
            RPG_Level_name = 'Pathfinder'
            break;
        case 5:
            RPG_Level_name = 'Squire'
            break;
        case 6:
            RPG_Level_name = 'Adventurer'
            break;
        case 7:
            RPG_Level_name = 'Scout'
            break;
        case 8:
            RPG_Level_name = 'Guardian'
            break;
        case 9:
            RPG_Level_name = 'Fighter'
            break;
        case 10:
            RPG_Level_name = 'Brawler'
            break;
    }

    var text = {
        RPG_Level_name: "Level",
        Health_text: health + "hp",
        Money_text: " | $" + money,
        Level_text: player_name + " | Level " + RPG_Level + " (+" + RPG_Level2 + "xp)",
    };

    const Level_w = Render.TextSize(text.Level_text, font)[0];
    const Money_w = Render.TextSize(text.Money_text, font)[0];
    const Levelname_w = Render.TextSize(RPG_Level_name, font)[0];

    //Avatar Path
    var Avatar = Render.AddTexture("ot/img/Avatar.png");

    if (Coordinates_enable) {
        UI.SetEnabled(["Visuals", "RPG indicators", "RPG indicators", "Indicator_X"], 1);
        UI.SetEnabled(["Visuals", "RPG indicators", "RPG indicators", "Indicator_Y"], 1);
    } else {
        UI.SetEnabled(["Visuals", "RPG indicators", "RPG indicators", "Indicator_X"], 0);
        UI.SetEnabled(["Visuals", "RPG indicators", "RPG indicators", "Indicator_Y"], 0);
    }
    //------------------------------
    //Render
    //------------------------------
    if (enable) {

        // Health
        Render.GradientRect(x + 6, y - 6, 41, 28, 1, [45, 45, 45, 255], [45, 45, 45, 255]);
        Render.GradientRect(x - 14, y - 6, 20, 28, 1, [45, 45, 45, 0], [45, 45, 45, 255]);
        Render.String(x + 23, y, 1, text.Health_text, [250 - health * 2.5, 5 + health * 2.5, 0, 255], font);

        // Username + Level
        Render.GradientRect(x + 150, y - 20, Level_w + 25, 22, 1, [45, 45, 45, 255], [45, 45, 45, 255]);
        Render.GradientRect(x + 150 + Level_w + 25, y - 20, 20, 22, 1, [45, 45, 45, 255], [45, 45, 45, 10]);
        Render.String(x + 165, y - 17, 0, text.Level_text, [255, 255, 255, 255], font);

        Render.GradientRect(x + 150, y + 8, Money_w + Levelname_w + 25, 22, 1, [45, 45, 45, 255], [45, 45, 45, 255]);
        Render.GradientRect(x + 150 + Levelname_w + Money_w + 25, y + 8, 20, 22, 1, [45, 45, 45, 255], [45, 45, 45, 10]);
        Render.String(x + 165, y + 11, 0, RPG_Level_name, [250, 166, 24, 255], font);
        Render.String(x + 165 + Levelname_w, y + 11, 0, text.Money_text, [255, 255, 255, 255], font);

        Render.TexturedRect(x + 62, y - 33, 79, 79, Avatar);
        Render.FilledCircle(x + 101, y + 45, 15, [60, 169, 247, 200]);
        render_arc(x + 101, y + 7, 57, 39, 270, 360, 50, [45, 45, 45, 255])
        if (health > 100) {
            render_arc(x + 101, y + 7, 57, 56, -7, 332, 50, [0, 255, 0, 255])
        } else {
            render_arc(x + 101, y + 7, 57, 56, -7, (health * 3.32), 50, [250 - health * 2.5, 5 + health * 2.5, 0, 255])
        }
        render_arc(x + 101, y + 7, 42, 41, 90, (armor * 3.53), 50, [60, 169, 247, 255])
        Render.String(x + 101, y + 32, 1, RPG_Level.toString(), [255, 255, 255, 255], font)

        UI.SetEnabled(["Visuals", "RPG indicators", "RPG indicators", "Enable Coordinates"], 1);

    } else {

        UI.SetEnabled(["Visuals", "RPG indicators", "RPG indicators", "Enable Coordinates"], 0);

    }

    //------------------------------
    //BetterUI and Better Colors API
    //------------------------------
    //Create dragging properties.
    const window_area = area.new(x, y, 200, 32);
    const mouse_pos = point.new(Input.GetCursorPosition()[0], Input.GetCursorPosition()[1]);
    if (Input.IsKeyPressed(1) && UI.IsMenuOpen()) {
        if (area.in_bounds(window_area, mouse_pos)) {
            UI.SetValue(["Visuals", "RPG indicators", "RPG indicators", "Indicator_X"], mouse_pos.x - 100);
            UI.SetValue(["Visuals", "RPG indicators", "RPG indicators", "Indicator_Y"], mouse_pos.y - 10);
        }
    }
}

//==========================================================================================================\\

//==========================================================================================================\\
//here is tilestra's Function and Variable
//https://onetap.su/members/tilestra.54952/
//Sorry,I Copy your hub js
//------------------------------

var RPG_iAlpha = 0,
    RPG_iExp = 0,
    RPG_getExp = 0,
    RPG_Level = 1,
    RPG_Levelexp = 30,
    RPG_iKills = 0,
    RPG_Level2 = 0,
    RPG_Level_name = 'hi, There is nothing interesting here. <3';

//Out match is ended
function RPG_EVENT_MATCH_END() {
    RPG_RESET();
}

//Setup to default everything at player spawn
function RPG_EVENT_PLAYER_SPAWN() {
    RPG_PlayerIndex = Event.GetInt("userid");
    RPG_iPlayerIndex = Entity.GetEntityFromUserID(RPG_PlayerIndex);

    //Reset for us
    if (Entity.GetLocalPlayer() == RPG_iPlayerIndex) RPG_RESET();
}

//Setup to default everything at round start
function RPG_EVENT_ROUND_START() {
    RPG_RESET();

}

function RPG_RESET() {
    RPG_iAlpha = 0;
}

//------------------------------

function RPG_EVENT_DEATH() {
    //Get them
    RPG_iVictim = Event.GetInt("userid");
    RPG_iVictim_index = Entity.GetEntityFromUserID(RPG_iVictim);
    RPG_iAttacker = Event.GetInt("attacker");
    RPG_iAttacker_index = Entity.GetEntityFromUserID(RPG_iAttacker);

    if (Entity.GetLocalPlayer() == RPG_iVictim_index && Entity.GetLocalPlayer() !== RPG_iAttacker_index) return;

    if (Entity.GetLocalPlayer() == RPG_iVictim_index && Entity.GetLocalPlayer() == RPG_iAttacker_index) {
        //Simulating Exp
        RPG_iExp = RPG_getExp;
        //Frame count and transparency
        RPG_iAlpha = 255;
        //Reset if MAX (or remove if u want)
        RPG_getExp = RPG_getExp - 10;
        RPG_Level2 = RPG_Level2 - 10;
    }
    //A kill count only for us + info
    if (Entity.GetLocalPlayer() == RPG_iAttacker_index && Entity.GetLocalPlayer() != RPG_iVictim_index) {
        //Simulating Exp
        RPG_iExp = RPG_getExp;
        //Frame count and transparency
        RPG_iAlpha = 255;
        //Reset if MAX (or remove if u want)
        RPG_getExp = RPG_getExp + 20;
        RPG_Level2 = RPG_Level2 + 20;
    }
}
//==========================================================================================================\\

//==========================================================================================================\\
//Callback
//------------------------------
Cheat.RegisterCallback("Draw", "RPG_Draw")

//here is tilestra's Callback
//https://onetap.su/members/tilestra.54952/
//------------------------------
Global.RegisterCallback("player_death", "RPG_EVENT_DEATH");
Global.RegisterCallback("round_start", "RPG_EVENT_ROUND_START");
Global.RegisterCallback("player_spawned", "RPG_EVENT_PLAYER_SPAWN");
Global.RegisterCallback("cs_intermission", "RPG_EVENT_MATCH_END");
Global.RegisterCallback("cs_win_panel_match", "RPG_EVENT_MATCH_END");
//==========================================================================================================\\

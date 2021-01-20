/********************************************
*
*               RPG indicators
*           Create by Robonyantame
*           Create Date:2020/12/21
*                 18:02:35
*
********************************************/

//==========================================================================================================\\
//Menu
//------------------------------
//Add New Table
UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "RPG indicators");

UI.AddSliderInt(["Visuals", "RPG indicators", "RPG indicators"], ">>-  RPG indicators -<<", 0, 0);
UI.AddSliderInt(["Visuals", "RPG indicators", "RPG indicators"], ">>-  Create by Robonyantame  -<<", 0, 0);

//Enable my bad Indicator
UI.AddCheckbox(["Visuals", "RPG indicators", "RPG indicators"],"Enable Indicator"); 

//Enable Coordinates
UI.AddSliderInt(["Visuals", "RPG indicators", "RPG indicators"], "", -1, 0);
UI.AddCheckbox(["Visuals", "RPG indicators", "RPG indicators"],"Enable Coordinates");

//Set Indicator Coordinates
UI.AddSliderInt(["Visuals", "RPG indicators", "RPG indicators"], "Indicator_X", 0, Render.GetScreenSize()[0]);
UI.AddSliderInt(["Visuals", "RPG indicators", "RPG indicators"], "Indicator_Y", 0, Render.GetScreenSize()[1]);

//FuCk YoU :)
UI.SetEnabled(["Config", "Cheat", "General", "RAGE QUIT"], 0)
//==========================================================================================================\\

//==========================================================================================================\\
//API and Library
//------------------------------
function render_arc(x, y, radius, radius_inner, start_angle, end_angle, segments, color)
{
    segments = 360 / segments;

    for (var i = start_angle; i < start_angle + end_angle; i = i + segments)
    {

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

        Render.Polygon( [
            [ x1_outer, y1_outer ],
            [ x2_outer, y2_outer ],
            [ x1_inner, y1_inner ] ],
            color
        );

        Render.Polygon( [
            [ x1_inner, y1_inner ],
            [ x2_outer, y2_outer ],
            [ x2_inner, y2_inner ] ],
            color
        );
    }
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
//Function
//------------------------------
function Draw(){

    //------------------------------
    //Variable
    //------------------------------
    var enable = UI.GetValue(["Visuals", "RPG indicators", "RPG indicators", "Enable Indicator"])
    var Coordinates_enable = UI.GetValue(["Visuals", "RPG indicators", "RPG indicators","Enable Coordinates"]);

    var x = UI.GetValue(["Visuals", "RPG indicators", "RPG indicators", "Indicator_X"]);
    var y = UI.GetValue(["Visuals", "RPG indicators", "RPG indicators", "Indicator_Y"]);

    var me = Entity.GetLocalPlayer();
    var health = Entity.GetProp(me,"CBasePlayer", "m_iHealth");
    var armor = Entity.GetProp(me, "CCSPlayerResource", "m_iArmor");
    var money = Entity.GetProp(me, "CCSPlayer", "m_iAccount");
    
    var Avatar = Render.AddTexture("ot/img/666.jpg");

    var Health_text = "" + health;
    var Money_text = "" + money;
    
    var font = font2 = Render.AddFont( "verdana.ttf", 10, 900);
    
    //------------------------------
    //Judgment
    //------------------------------
    if(iAlpha > 1){
        iAlpha--;
    }

    if(getExp > Levelexp){
        getExp = 0;
        Level++;
        Levelexp = Levelexp + 30;
    }
    if(health == "m_iHealth" || money == "m_iAccount"){
        Health_text = "0";
        Money_text = "0";
    }
    if(Level < 3){
        Level_name = 'Noob'
    }else if(Level < 5){
        Level_name = 'No Bad'
    }else if(Level < 7){
        Level_name = 'Nice'
    }else{
        Level_name = 'God'
    }

    if(Coordinates_enable){
        UI.SetEnabled(["Visuals", "RPG indicators", "RPG indicators", "Indicator_X"], 1);
        UI.SetEnabled(["Visuals", "RPG indicators", "RPG indicators", "Indicator_Y"], 1);
     }else{
       UI.SetEnabled(["Visuals", "RPG indicators", "RPG indicators", "Indicator_X"], 0);
       UI.SetEnabled(["Visuals", "RPG indicators", "RPG indicators", "Indicator_Y"], 0);
  }
    //------------------------------
    //Render
    //------------------------------
    if(enable){
    Render.GradientRect( x+6, y-6, 41, 28, 1, [ 45, 45, 45, 255], [ 45, 45, 45, 255]);
    Render.GradientRect( x-14, y-6, 20, 28, 1, [ 45, 45, 45, 0], [ 45, 45, 45, 255]);
    Render.String( x+23, y, 1, Health_text+"hp", [250 - health * 2.5, 5 + health * 2.5, 0, 255], font );
    Render.GradientRect( x+151, y-20, 157, 20, 1, [ 45, 45, 45, 255], [ 45, 45, 45, 255]);
    Render.GradientRect( x+308, y-20, 20, 20, 1, [45, 45, 45, 255 ], [ 45, 45, 45, 0]);
    Render.String( x+165, y-17, 0, "unknown | Lever "+Level+" (+"+Level2+"xp)", [255,255,255,255], font2 );
    Render.GradientRect( x+154, y+8, 120, 20, 1, [ 45, 45, 45, 255], [ 45, 45, 45, 255]);
    Render.GradientRect( x+274, y+8, 20, 20, 1, [45, 45, 45, 255 ], [ 45, 45, 45, 0]);
    Render.String( x+165, y+10, 0, ""+Level_name, [222, 158, 12,255], font2 );
    Render.String( x+182, y+10, 0, "       | $"+Money_text, [255,255,255,255], font2 );

    Render.TexturedRect( x+62, y-33, 79, 79, Avatar);
    Render.FilledCircle(x+101, y+45, 15, [60, 169, 247,200] );
    render_arc(x+101, y+7, 57, 39, 270, 360, 50, [45, 45, 45, 255])
    render_arc(x+101, y+7, 57, 56, -7, (health * 3.32), 50, [250 - health * 2.5, 5 + health * 2.5, 0, 255])
    render_arc(x+101, y+7, 42, 41, 90, (armor * 3.53), 50, [60, 169, 247,255])
    Render.String( x+101, y+32, 1, ""+Level, [255,255,255,255], font2 )

    UI.SetEnabled(["Visuals", "RPG indicators", "RPG indicators", ""], 1);
    UI.SetEnabled(["Visuals", "RPG indicators", "RPG indicators","Enable Coordinates"], 1);

}else{

    UI.SetEnabled(["Visuals", "RPG indicators", "RPG indicators", ""], 0);
    UI.SetEnabled(["Visuals", "RPG indicators", "RPG indicators","Enable Coordinates"], 0);

}

    //------------------------------
    //BetterUI and Better Colors API
    //------------------------------
    //Create dragging properties.
    const window_area = area.new(x, y, 200, 32);
    const mouse_pos = point.new(Input.GetCursorPosition()[0], Input.GetCursorPosition()[1]);
    if (Input.IsKeyPressed(1) && UI.IsMenuOpen())
    {
        if (area.in_bounds(window_area, mouse_pos))
        {
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

var iAlpha = 0, iExp = 0, getExp = 0, Level = 1, Levelexp = 30, iKills = 0, Level2 = 0 ,Level_name = 'noob';

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
        getExp = getExp +20;
        Level2 = Level2 + 20;
    }
} 
//==========================================================================================================\\

//==========================================================================================================\\
//Callback
//------------------------------
Cheat.RegisterCallback("Draw", "Draw")

//here is tilestra's Callback
//https://onetap.su/members/tilestra.54952/
//------------------------------
Global.RegisterCallback("player_death", "EVENT_DEATH");
Global.RegisterCallback("round_start", "EVENT_ROUND_START");
Global.RegisterCallback("player_spawned", "EVENT_PLAYER_SPAWN");
Global.RegisterCallback("cs_intermission", "EVENT_MATCH_END");
Global.RegisterCallback("cs_win_panel_match", "EVENT_MATCH_END");
//==========================================================================================================\\

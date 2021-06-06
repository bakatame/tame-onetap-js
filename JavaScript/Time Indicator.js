/********************************************
*
*               Time Indicator
*           Create by Robonyantame
*           Create Date:2020/12/21
*                 18:02:35
*
********************************************/

//==========================================================================================================\\
//Menu
//------------------------------
//Add New Table
UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "Time Indicator");

//hvhbbs.com
//welcome :3
UI.AddSliderInt(["Visuals", "Time Indicator", "Time Indicator"], ">>-  Time Indicator  -<<", 0, 0);
UI.AddSliderInt(["Visuals", "Time Indicator", "Time Indicator"], ">>-  Create by Robonyantame  -<<", 0, 0);

//Enable my bad UI
UI.AddCheckbox(["Visuals", "Time Indicator", "Time Indicator"],"Enable Indicator"); 

//Custom Color
UI.AddCheckbox(["Visuals", "Time Indicator", "Time Indicator"],"Custom Color");
UI.AddColorPicker(["Visuals", "Time Indicator", "Time Indicator"],"Hours Color");
UI.AddColorPicker(["Visuals", "Time Indicator", "Time Indicator"],"Minutes Color");
UI.AddColorPicker(["Visuals", "Time Indicator", "Time Indicator"],"Seconds Color");
UI.AddColorPicker(["Visuals", "Time Indicator", "Time Indicator"],"Watchmark Font Color");
UI.AddColorPicker(["Visuals", "Time Indicator", "Time Indicator"],"Time Font Color");
UI.AddColorPicker(["Visuals", "Time Indicator", "Time Indicator"],"Background Circle Color");

//Custom Text
UI.AddCheckbox(["Visuals", "Time Indicator", "Time Indicator"],"Enable Custom Text");
UI.AddTextbox(["Visuals", "Time Indicator", "Time Indicator"],"Custom Text")

//Enable Coordinates
UI.AddSliderInt(["Visuals", "Time Indicator", "Time Indicator"], "", -1, 0);
UI.AddCheckbox(["Visuals", "Time Indicator", "Time Indicator"],"Enable Coordinates");

//Indicator Coordinates
UI.AddSliderInt(["Visuals", "Time Indicator", "Time Indicator"], "Indicator_X", 0, Render.GetScreenSize()[0]);
UI.AddSliderInt(["Visuals", "Time Indicator", "Time Indicator"], "Indicator_Y", 0, Render.GetScreenSize()[1]);

//FuCk YoU :)
UI.SetEnabled(["Config", "Cheat", "General", "RAGE QUIT"], 0)
//==========================================================================================================\\
var time_last_update = 0;
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

//==========================================================================================================\\

//==========================================================================================================\\
//Default Color
//------------------------------
UI.SetColor(["Visuals", "Time Indicator", "Time Indicator","Hours Color"],[166,172,234,255]);
UI.SetColor(["Visuals", "Time Indicator", "Time Indicator","Minutes Color"],[237,251,250,255]);
UI.SetColor(["Visuals", "Time Indicator", "Time Indicator","Seconds Color"],[247,156,250,255]);
UI.SetColor(["Visuals", "Time Indicator", "Time Indicator","Watchmark Font Color"],[255,255,255,255]);
UI.SetColor(["Visuals", "Time Indicator", "Time Indicator","Time Font Color"],[255,255,255,255]);
UI.SetColor(["Visuals", "Time Indicator", "Time Indicator","Background Circle Color"],[20,20,20,140]);

//==========================================================================================================\\

//==========================================================================================================\\
//API and Library
//------------------------------
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
    var x = UI.GetValue(["Visuals", "Time Indicator", "Time Indicator", "Indicator_X"]);
    var y = UI.GetValue(["Visuals", "Time Indicator", "Time Indicator", "Indicator_Y"]);
    var Get_Hours_Color = UI.GetColor(["Visuals", "Time Indicator", "Time Indicator","Hours Color"]);
    var Get_Minutes_Color = UI.GetColor(["Visuals", "Time Indicator", "Time Indicator","Minutes Color"]);
    var Get_Seconds_Color = UI.GetColor(["Visuals", "Time Indicator", "Time Indicator","Seconds Color"]);
    var Get_Watchmark_Font_Color = UI.GetColor(["Visuals", "Time Indicator", "Time Indicator","Watchmark Font Color"]);
    var Get_Time_Font_Color = UI.GetColor(["Visuals", "Time Indicator", "Time Indicator","Time Font Color"]);
    var Indicator_enable = UI.GetValue(["Visuals", "Time Indicator", "Time Indicator","Enable Indicator"]);
    var Custom_Text_enable = UI.GetValue(["Visuals", "Time Indicator", "Time Indicator","Enable Custom Text"]);
    var Custom_Text = UI.GetString(["Visuals", "Time Indicator", "Time Indicator","Custom Text"]);
    var Get_Background_Circle = UI.GetColor(["Visuals", "Time Indicator", "Time Indicator","Background Circle Color"]);
    var Color_enable = UI.GetValue(["Visuals", "Time Indicator", "Time Indicator","Custom Color"]);
    var Coordinates_enable = UI.GetValue(["Visuals", "Time Indicator", "Time Indicator","Enable Coordinates"]);

    var Font = Render.GetFont("verdana.ttf", 10, true);

    var curTime = Globals.Curtime();
    time_last_update = curTime;
    var curDate = new Date();
    
    var hours = curDate.getHours() * 15;
    if ( hours.length == 1 ) hours = 0 + hours;
    var minutes = curDate.getMinutes() * 6;
    if ( minutes.length == 1 ) minutes = 0 + minutes;
    var seconds = curDate.getSeconds() * 6;
    if ( seconds == 1 ) seconds = 0 + seconds;
 
    var hours_text = curDate.getHours() + "";
    if ( hours_text.length == 1 ) hours_text = "0" + hours_text;
    var minutes_text = curDate.getMinutes() + "";
    if ( minutes_text.length == 1 ) minutes_text = "0" + minutes_text;
    var seconds_text = curDate.getSeconds()+"";
    if ( seconds_text.length == 1 ) seconds_text = "0" + seconds_text;

    var time_tag = hours_text + ":" + minutes_text + ":" + seconds_text;

    //------------------------------
    //Render / Visibility
    //------------------------------
    
    if(!Color_enable){
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Hours Color"],0);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Minutes Color"],0);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Seconds Color"],0);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Watchmark Font Color"],0);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Time Font Color"],0);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Background Circle Color"],0);
    }else{
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Hours Color"],1);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Minutes Color"],1);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Seconds Color"],1);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Watchmark Font Color"],1);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Time Font Color"],1);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Background Circle Color"],1);
    }

    if(Indicator_enable){
        Render.FilledCircle(x, y, 60, Get_Background_Circle );
        render_arc(x, y, 60, 55, 270, hours, 50, Get_Hours_Color)
        render_arc(x, y, 55, 50, 270, minutes, 50, Get_Minutes_Color)
        render_arc(x, y, 50, 45, 270, seconds, 50, Get_Seconds_Color)
        
        if(Custom_Text_enable){
            Render.String(x + 1, y - 12, 1, Custom_Text, Get_Watchmark_Font_Color, Font);
            UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Custom Text"],1);
        }else{
             Render.String(x + 1, y - 12, 1, "WatchMake", Get_Watchmark_Font_Color, Font);
             UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Custom Text"],0);
        }

        Render.String(x + 1, y + 3, 1, "" + time_tag, Get_Time_Font_Color, Font);

        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Custom Color"], 1);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Enable Custom Text"], 1);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator", ""], 1);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Enable Coordinates"], 1);
    

    }else{

        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Custom Color"], 0);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Enable Custom Text"], 0);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Custom Text"],0);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator", ""], 0);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator","Enable Coordinates"], 0);

    }

    if(Coordinates_enable){
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator", "Indicator_X"], 1);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator", "Indicator_Y"], 1);
    }else{
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator", "Indicator_X"], 0);
        UI.SetEnabled(["Visuals", "Time Indicator", "Time Indicator", "Indicator_Y"], 0);
    }
    //BetterUI and Better Colors API
    //Create dragging properties.
    const window_area = area.new(x, y, 200, 32);
    const mouse_pos = point.new(Input.GetCursorPosition()[0], Input.GetCursorPosition()[1]);
    if (Input.IsKeyPressed(1) && UI.IsMenuOpen())
    {
        if (area.in_bounds(window_area, mouse_pos))
        {
            UI.SetValue(["Visuals", "Time Indicator", "Time Indicator", "Indicator_X"], mouse_pos.x - 30);
            UI.SetValue(["Visuals", "Time Indicator", "Time Indicator", "Indicator_Y"], mouse_pos.y - 10);
        }
    }
}
//==========================================================================================================\\

//==========================================================================================================\\
//Callback
//------------------------------
Cheat.RegisterCallback("Draw", "Draw")
//==========================================================================================================\\

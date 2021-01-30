/********************************************
*
*          BkBClub Loader Indicator
*       Create Date:2021/1/3 21:34:33
*
//-----------------------------------------\\
*
*                  Thanks:
*                  BkBClub 
*        BetterUI and Better Colors API
*
********************************************/

//==========================================================================================================\\
//Menu
//------------------------------
//Add New Table
UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "BkBClub");

//csgohvh.com
//welcome :3
UI.AddSliderInt(["Visuals", "BkBClub", "BkBClub"], ">>-  BkBClub Loader Indicator  -<<", 0, 0);
UI.AddSliderInt(["Visuals", "BkBClub", "BkBClub"], ">>-  Create by Robonyantame  -<<", 0, 0);

//Disable Indicator
UI.AddCheckbox(["Visuals", "BkBClub", "BkBClub"],"Enable Indicator"); 

//Set Indicator Coordinates
UI.AddSliderInt(["Visuals", "BkBClub", "BkBClub"], "Indicator_X", 0, Render.GetScreenSize()[0]);
UI.AddSliderInt(["Visuals", "BkBClub", "BkBClub"], "Indicator_Y", 0, Render.GetScreenSize()[1]);

//FuCk YoU RAGE QUIT :)
UI.SetEnabled(["Config", "Cheat", "General", "RAGE QUIT"], 0)
//==========================================================================================================\\

//==========================================================================================================\\
//Render Function
//------------------------------
function Draw (){

    //------------------------------
    //Variable
    //------------------------------
    var enable = UI.GetValue(["Visuals", "BkBClub", "BkBClub", "Enable Indicator"])
    var Text_Color = [255,240,0,255];
    /* var Def_A = 8 + Math.sin(Math.abs(-Math.PI + Globals.Realtime() * 0.6 / 1 % (Math.PI * 2))) * 12 */
    var Def_Color = [194,102,255,255];
    var Circle_Color =  [182, 236, 34,255];
    var Font = Render.GetFont("verdana.ttf", 10, true);
    var x = UI.GetValue(["Visuals", "BkBClub", "BkBClub", "Indicator_X"]);
    var y = UI.GetValue(["Visuals", "BkBClub", "BkBClub", "Indicator_Y"]);

    //------------------------------
    //Render
    //------------------------------
    if(enable){
    UI.SetEnabled(["Visuals", "BkBClub", "BkBClub", "Indicator_X"], 1)
    UI.SetEnabled(["Visuals", "BkBClub", "BkBClub", "Indicator_Y"], 1)
    
    Render.GradientRect( x, y, 50, 22, 1, [194,102,255,100], [25, 25, 25, 5]);
    Render.GradientRect( x, y, 290, 22, 1, [194,102,255, 15], [194,102,255, 15]);
    Render.GradientRect( x+274, y, 15, 22, 1, [25, 25, 25, 5], [194,102,255,55]);

    Render.GradientRect( x, y-2, 150, 2, 1, [194,102,255,55], [10, 10, 10, 10]);
    Render.GradientRect( x, y+22, 150, 2, 1, [194,102,255,55], [10, 10, 10, 10]);

    Render.GradientRect( x+139, y-2, 150, 2, 1, [10, 10, 10, 10], [194,102,255,55]);
    Render.GradientRect( x+139, y+22, 150, 2, 1, [10, 10, 10, 10], [194,102,255,55]);

    Render.String( x+38+6, y+3, 1, "[CFG BY Mario]",Text_Color, Font);
    Render.String( x+108+6, y+3, 1, "PRIVATE",Def_Color, Font);
    Render.String( x+140+6, y+3, 0, "| Mario JS    | Status: ",Text_Color, Font);
    Render.FilledCircle( x+266, y+3+8, 5, Circle_Color );

    }else{
        UI.SetEnabled(["Visuals", "BkBClub", "BkBClub", "Indicator_X"], 0)
        UI.SetEnabled(["Visuals", "BkBClub", "BkBClub", "Indicator_Y"], 0)
    }
}
//==========================================================================================================\\

//==========================================================================================================\\
//Callback
//------------------------------
Cheat.RegisterCallback("Draw", "Draw")
//==========================================================================================================\\

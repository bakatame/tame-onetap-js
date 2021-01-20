/*
*
* Title: Customizable accent
* Author: april#0001
* Description: Brings back the ability to use custom accent on the watermark and keybind window.
*
*/

//region api

// Localizing all of the functions in snake_case because why not.
const global_print = Global.Print, global_print_chat = Global.PrintChat, global_print_color = Global.PrintColor, global_register_callback = Global.RegisterCallback, global_execute_command = Global.ExecuteCommand, global_frame_stage = Global.FrameStage, global_tickcount = Global.Tickcount, global_tickrate = Global.Tickrate, global_tick_interval = Global.TickInterval, global_curtime = Global.Curtime, global_realtime = Global.Realtime, global_frametime = Global.Frametime, global_latency = Global.Latency, global_get_view_angles = Global.GetViewAngles, global_set_view_angles = Global.SetViewAngles, global_get_map_name = Global.GetMapName, global_is_key_pressed = Global.IsKeyPressed, global_get_screen_size = Global.GetScreenSize, global_get_cursor_position = Global.GetCursorPosition, global_play_sound = Global.PlaySound, global_play_microphone = Global.PlayMicrophone, global_stop_microphone = Global.StopMicrophone, global_get_username = Global.GetUsername, global_set_clan_tag = Global.SetClanTag, globals_tickcount = Globals.Tickcount, globals_tickrate = Globals.Tickrate, globals_tick_interval = Globals.TickInterval, globals_curtime = Globals.Curtime, globals_realtime = Globals.Realtime, globals_frametime = Globals.Frametime, sound_play = Sound.Play, sound_play_microphone = Sound.PlayMicrophone, sound_stop_microphone = Sound.StopMicrophone, cheat_get_username = Cheat.GetUsername, cheat_register_callback = cheat_register_callback = new Proxy(Cheat.RegisterCallback, { apply: function(_, _, args) { switch(args[0]) { case 'paint': Cheat.RegisterCallback('Draw', args[1]); break; case 'create_move': Cheat.RegisterCallback('CreateMove', args[1]); break; case 'fsn': Cheat.RegisterCallback('FrameStageNotify', args[1]); break; default: Cheat.RegisterCallback(args[0], args[1]); break; } } }), cheat_execute_command = Cheat.ExecuteCommand, cheat_frame_stage = Cheat.FrameStage, cheat_print = Cheat.Print, cheat_print_chat = Cheat.PrintChat, cheat_print_color = Cheat.PrintColor, local_latency = Local.Latency, local_get_view_angles = Local.GetViewAngles, local_set_view_angles = Local.SetViewAngles, local_set_clan_tag = Local.SetClanTag, local_get_real_yaw = Local.GetRealYaw, local_get_fake_yaw = Local.GetFakeYaw, local_get_spread = Local.GetSpread, local_get_inaccuracy = Local.GetInaccuracy, world_get_map_name = World.GetMapName, world_get_server_string = World.GetServerString, input_get_cursor_position = Input.GetCursorPosition, input_is_key_pressed = Input.IsKeyPressed, render_string = Render.String, render_text_size = Render.TextSize, render_line = Render.Line, render_rect = Render.Rect, render_filled_rect = Render.FilledRect, render_gradient_rect = Render.GradientRect, render_circle = Render.Circle, render_filled_circle = Render.FilledCircle, render_polygon = Render.Polygon, render_world_to_screen = Render.WorldToScreen, render_add_font = Render.AddFont, render_find_font = Render.FindFont, render_string_custom = Render.StringCustom, render_textured_rect = Render.TexturedRect, render_add_texture = Render.AddTexture, render_text_size_custom = Render.TextSizeCustom, render_get_screen_size = Render.GetScreenSize, ui_get_value = UI.GetValue, ui_set_value = UI.SetValue, ui_add_checkbox = UI.AddCheckbox, ui_add_slider_int = UI.AddSliderInt, ui_add_slider_float = UI.AddSliderFloat, ui_add_hotkey = UI.AddHotkey, ui_add_label = UI.AddLabel, ui_add_dropdown = UI.AddDropdown, ui_add_multi_dropdown = UI.AddMultiDropdown, ui_add_color_picker = UI.AddColorPicker, ui_add_textbox = UI.AddTextbox, ui_set_enabled = UI.SetEnabled, ui_get_string = UI.GetString, ui_get_color = UI.GetColor, ui_set_color = UI.SetColor, ui_is_hotkey_active = UI.IsHotkeyActive, ui_toggle_hotkey = UI.ToggleHotkey, ui_is_menu_open = UI.IsMenuOpen, convar_get_int = Convar.GetInt, convar_set_int = Convar.SetInt, convar_get_float = Convar.GetFloat, convar_set_float = Convar.SetFloat, convar_get_string = Convar.GetString, convar_set_string = Convar.SetString, event_get_int = Event.GetInt, event_get_float = Event.GetFloat, event_get_string = Event.GetString, entity_get_entities = Entity.GetEntities, entity_get_entities_by_class_i_d = Entity.GetEntitiesByClassID, entity_get_players = Entity.GetPlayers, entity_get_enemies = Entity.GetEnemies, entity_get_teammates = Entity.GetTeammates, entity_get_local_player = Entity.GetLocalPlayer, entity_get_game_rules_proxy = Entity.GetGameRulesProxy, entity_get_entity_from_user_i_d = Entity.GetEntityFromUserID, entity_is_teammate = Entity.IsTeammate, entity_is_enemy = Entity.IsEnemy, entity_is_bot = Entity.IsBot, entity_is_local_player = Entity.IsLocalPlayer, entity_is_valid = Entity.IsValid, entity_is_alive = Entity.IsAlive, entity_is_dormant = Entity.IsDormant, entity_get_class_i_d = Entity.GetClassID, entity_get_class_name = Entity.GetClassName, entity_get_name = Entity.GetName, entity_get_weapon = Entity.GetWeapon, entity_get_weapons = Entity.GetWeapons, entity_get_render_origin = Entity.GetRenderOrigin, entity_get_prop = Entity.GetProp, entity_set_prop = Entity.SetProp, entity_get_hitbox_position = Entity.GetHitboxPosition, entity_get_eye_position = Entity.GetEyePosition, trace_line = Trace.Line, trace_bullet = Trace.Bullet, usercmd_set_movement = UserCMD.SetMovement, usercmd_get_movement = UserCMD.GetMovement, usercmd_set_angles = UserCMD.SetAngles, usercmd_force_jump = UserCMD.ForceJump, usercmd_force_crouch = UserCMD.ForceCrouch, antiaim_get_override = AntiAim.GetOverride, antiaim_set_override = AntiAim.SetOverride, antiaim_set_real_offset = AntiAim.SetRealOffset, antiaim_set_fake_offset = AntiAim.SetFakeOffset, antiaim_set_l_b_y_offset = AntiAim.SetLBYOffset, exploit_get_charge = Exploit.GetCharge, exploit_recharge = Exploit.Recharge, exploit_disable_recharge = Exploit.DisableRecharge, exploit_enable_recharge = Exploit.EnableRecharge, ragebot_override_minimum_damage = Ragebot.OverrideMinimumDamage, ragebot_override_hitchance = Ragebot.OverrideHitchance, ragebot_override_accuracy_boost = Ragebot.OverrideAccuracyBoost, ragebot_override_multipoint_scale = Ragebot.OverrideMultipointScale, ragebot_force_safety = Ragebot.ForceSafety;

//endregion

//region dependencies

/**
 * @title BetterUI
 * @version 1.0.2
 * @description A better UI system for Onetap
 */

var menu_elements_t = [];
var menu = [];
const menu_spacer = "                                                                                  ";

/**
 * Creates a new menu label
 *
 * @param label {string}
 */
menu.label = function(label)
{
    // Creates the label
    UI.AddLabel(label);
}

/**
 * Creates a new menu element
 *
 * @param func {function}
 * @param name {string}
 * @param label {string},
 * @param properties {array}
 */
menu.call = function(func, name, label, properties)
{
    // If the label isn't unique
    if (label in menu_elements_t)
        throw new Error("[Menu] The label must be unique!");

    // Get properties
    const final_name = name + menu_spacer + label;
    var final_props = [final_name];
    const element_info_t = {
        name: name,
        label: label,
        properties: properties
    };

    // If our properties aren't null, then pack them together.
    if (properties !== null)
    {
        for (var i = 0; i < properties.length; i++)
        {
            final_props.push(properties[i]);
        }
    }

    // Create our menu element and return properties
    func.apply(null, final_props);
    menu_elements_t[label] = element_info_t;
    return label;
}

/**
 * Gets the value of a menu element
 *
 * @param label {string}
 * @return {any}
 */
menu.get = function(label)
{
    // If the label doesn't exist
    if (!(label in menu_elements_t))
        throw new Error("[Menu] This element's label doesn't exist!");

    // Get properties
    const properties = menu_elements_t[label];
    const final_name = properties.name + menu_spacer + properties.label;

    // Returns the element's value
    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", final_name);
}

/**
 * Gets the value of a menu element
 *
 * @param label {string}
 * @return {any}
 */
menu.get_hotkey = function(label)
{
    // If the label doesn't exist
    if (!(label in menu_elements_t))
        throw new Error("[Menu] This element's label doesn't exist!");

    // Get properties
    const properties = menu_elements_t[label];
    const final_name = properties.name + menu_spacer + properties.label;

    // Returns the element's value
    return UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", final_name);
}

/**
 * Gets the value of a menu element
 *
 * @param label {string}
 * @return {any}
 */
menu.get_color = function(label)
{
    // If the label doesn't exist
    if (!(label in menu_elements_t))
        throw new Error("[Menu] This element's label doesn't exist!");

    // Get properties
    const properties = menu_elements_t[label];
    const final_name = properties.name + menu_spacer + properties.label;

    // Returns the element's value
    return UI.GetColor("Misc", "JAVASCRIPT", "Script items", final_name);
}

/**
 * Sets the value of a menu element
 *
 * @param label {string}
 * @param value {any}
 */
menu.set = function(label, value)
{
    // If the label doesn't exist
    if (!(label in menu_elements_t))
        throw new Error("[Menu] This element's label doesn't exist!");

    // Get properties
    const properties = menu_elements_t[label];
    const final_name = properties.name + menu_spacer + properties.label;

    // Set the element's value
    UI.SetValue("Misc", "JAVASCRIPT", "Script items", final_name, value);
}

/**
 * Sets the value of a color picker
 *
 * @param label {string}
 * @param value {any}
 */
menu.set_color = function(label, color)
{
    // If the label doesn't exist
    if (!(label in menu_elements_t))
        throw new Error("[Menu] This element's label doesn't exist!");

    // Get properties
    const properties = menu_elements_t[label];
    const final_name = properties.name + menu_spacer + properties.label;

    // Set the element's value
    UI.SetColor("Misc", "JAVASCRIPT", "Script items", final_name, color);
}

/**
 * Changes the visibility of a menu elements
 *
 * @param label {string}
 * @param visible {boolean}
 */
menu.visibility = function(label, visible)
{
    // If the label doesn't exist
    if (!(label in menu_elements_t))
        throw new Error("[Menu] This element's label doesn't exist!");

    // Get properties
    const properties = menu_elements_t[label];
    const final_name = properties.name + menu_spacer + properties.label;

    // Change the element's visibility
    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", final_name, visible);
}

/**
 * @title Better Colors
 * @version 1.2
 * @description A basic color system for javascript
 */

// Create our main color instance
var color = {
    _class: 'color'
};

/**
 * Create a new RGBA color instance
 *
 * @param r {number} <0, 255>       Red value
 * @param g {number} <0, 255>       Green value
 * @param b {number} <0, 255>       Blue value
 * @param a {number} <0, 255>       Alpha value
 * @return {Color | Array}
 */
color.new_rgba = function(r, g, b, a)
{
    // Check if our value(s) are valid
    if (!r || !g || !b || !a)
        throw new Error("[Color] Invalid color values!");

    // Return the color values
    return {
        r: r,
        g: g,
        b: b,
        a: a
    };
};


/**
 * Creates a new HEXA color instance
 *
 * @param hex {string} <0, 0xFFFFFF>        Hex value
 * @param alpha {number} <0, 255>           Alpha value
 * @return {Color | Array}
 */
color.new_hexa = function(hex, a)
{
    // Check if our value(s) are valid
    if (!hex || !a)
        throw new Error("[Color] Invalid color values!");

    // Create the initial values
    var r, g, b;

    // Check is our HEX code contains a "#"
    if (hex.length > 6)
    {
        // Parse integers
        r = parseInt(hex.substring(1, 3), 16);
        g = parseInt(hex.substring(3, 5), 16);
        b = parseInt(hex.substring(5, 7), 16);
    } else {
        // Otherwise, parse integers as well
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    }

    // Return the color values
    return {
        r: r,
        g: g,
        b: b,
        a: a,

        // Cache the hex value for further usage
        hex: hex
    };
};

/**
 * Create a new HSLA color instance from an already existing RGBA color instance
 *
 * @param r {number} <0, 255>       Red value
 * @param g {number} <0, 255>       Green value
 * @param b {number} <0, 255>       Blue value
 * @param a {number} <0, 255>       Alpha value
 * @return {Color | Array}
 */
color.rgb_to_hsl = function(self)
{
    var r = self.r, g = self.g, b = self.b, a = self.a;
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return {
        r: r * 255,
        g: g * 255,
        b: b * 255,

        h: h * 360, 
        s: s * 100, 
        l: l * 100, 
        a: a
    };
};

/**
 * Creates a new HSLA color instance
 *
 * @param h {Number} <0, 360>       Hue
 * @param s {Number} <0, 100>       Saturation
 * @param l {Number} <0, 100>       Lightness
 * @return {Color | Array}
 */
color.new_hsla = function(h, s, l, a)
{
    // Check if our value(s) are valid
    if (typeof h != "number" || typeof s != "number" || typeof l != "number" || typeof a != "number")
        throw new Error("[Color] Invalid color values!");

    // Create the initial values
    var r, g, b;

    // Fix the ratio of HSL value
    h /= 360;
    s /= 100;
    l /= 100;

    //If our saturation is 0, then, there's no colors
    if (s === 0)
    {
        // So, all colors are the same.
        r = g = b = l;

    } else {

        // Otherwise, convert the HSL values into RGB
        var hue2rgb = function(p, q, t)
        {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        // Some logic I totally don't understand
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;

        // Convert and round values
        r = Math.round(hue2rgb(p, q, h + 1/3) * 255);
        g = Math.round(hue2rgb(p, q, h) * 255);
        b = Math.round(hue2rgb(p, q, h - 1/3) * 255);
    }

    // Return the color values
    return {
        r: r,
        g: g,
        b: b,
        a: a,

        // Cache the hue, saturation and lightness for further usage
        h: h,
        s: s,
        l: l
    };
};

/**
 * Checks if a color instance is valid
 *
 * @param self {Color}      Our color instance
 * @return {boolean}
 */
color.is_valid = function(self)
{
    // Do our checks and return result
    return ((self instanceof Array) && self.r && self.g && self.b && self.a);
}

/**
 * Converts a color instance to a hexadecimal value
 *
 * @param self {Color}      Color instance
 * @return {String}
 */
color.to_hex = function(self)
{
    // Check if our value(s) are valid
    if (!color.is_valid(self))
        throw new Error("[Color] Invalid color instance!");

    // Creates our initial string
    var str = "#";

    // Add our converted color values to it
    str += self.r.toString(16);
    str += self.g.toString(16);
    str += self.b.toString(16);

    // Return hexadecimal color value
    return str;
};


/**
 * Unpack a color instance into 4 numbers
 *
 * @param self {Color}      Color instance
 * @return {Array}
 */
color.unpack = function(self)
{
    // Check if our value(s) are valid
    //if (!color.is_valid(self))
        //throw new Error("[Color] Invalid color instance!");

    // Unpack values
    return [
        self.r,
        self.g,
        self.b,
        self.a
    ];
};


/**
 * Creates a new RGBA color instance based from another already existent color instance
 *
 * @param base {Color}
 * @param r {Number} <0, 255>       The RED value offset
 * @param g {Number} <0, 255>       The GREEN value offset
 * @param b {Number} <0, 255>       The BLUE value offset
 * @param a {Number} <0, 255>       The ALPHA value offset\
 * @return {Color | Array}
 */
color.new_offset = function(base, r, g, b, a)
{
    // Check if our value(s) are valid
    if (!color.is_valid(self) || (!r && !g && !b && !a))
        throw new Error("[Color] Invalid color instance and/or values!");

    return {
        r: base.r + r,
        g: base.g + g,
        b: base.b + b,
        a: base.a + a,

        offset: {
            r: r,
            g: g,
            b: b,
            a: a
        }
    };
};

/**
 * Check if a color instance is undefined, or equal to 0
 *
 * @param self {Color}
 * @param tolerance {Number} <0, 255>       The maximum tolerance
 * @return {boolean}
 */
color.is_zero = function(self, tolerance)
{
    // Check if our value(s) are valid
    if (!color.is_valid(self))
        throw new Error("[Color] Invalid color instance!")

    // If we didn't specify a tolerance amount, then set it to 0
    tolerance = tolerance || 0;

    // Do our checks and return result
    return ((self.r < tolerance) && (self.g < tolerance) && (self.b < tolerance) && (self.a < tolerance));
}


/**
 * Checks if a color instance is transparent
 *
 * @param self {Color}
 * @param tolerance {Number} <0, 255>       The maximum tolerance
 * @return {boolean}
 */
color.is_transparent = function(self, tolerance)
{
    // Check if our value(s) are valid
    if (!color.is_valid(self))
        throw new Error("[Color] Invalid color instance!")

    // If we didn't specify a tolerance amount, then set it to 0
    tolerance = tolerance || 0;

    // Do our checks and return result
    return ((self.a < tolerance))
}

color.shift_hue = function(self, amount)
{
    // Check if our value(s) are valid
    if (!amount || !self.h || !self.s || !self.l)
        throw new Error("[Color] Invalid color instance and/or shift amount!")

    // Shift the amount
    amount += self.h;

    // Cycle for the hue
    amount = amount % 360;

    // Return the new color instance
    return color.new_hsla(amount, self.s, self.l, self.a);
}

color.shift_lum = function(self, amount)
{
    // Check if our value(s) are valid
    if (!amount || typeof self.h == "null" || typeof self.s == "null" || typeof self.l == "null")
        throw new Error("[Color] Invalid color instance and/or shift amount!")

    // Shift the amount
    amount += self.l;

    // Clamp the luminosity
    amount = Math.min(amount, 100);

    // Return the new color instance
    return color.new_hsla(self.h, self.s, amount, self.a);
}

var point = {
    _class: 'point'
};

point.new = function(x, y)
{
    const point_info_t = {
        x: x,
        y: y
    };

    return point_info_t;
}

var area = {
    _class: 'area'
};

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

/**
 * @brief Draws an shadowed text
 * @author Signal
 *
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} a
 * @param  {String} text
 * @param  {Array} color
 * @param  {Any} font
 * @return {void}
 */

//endregion

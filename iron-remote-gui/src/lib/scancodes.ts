﻿import UAParser from 'ua-parser-js';
import type {OS} from '../enums/OS';

/*
    Scancode found on: https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values
 */

export let ScanCodeToCode = {
    windows: {
        blink: {
            "0x0001": "Escape",
            "0x0002": "Digit1",
            "0x0003": "Digit2",
            "0x0004": "Digit3",
            "0x0005": "Digit4",
            "0x0006": "Digit5",
            "0x0007": "Digit6",
            "0x0008": "Digit7",
            "0x0009": "Digit8",
            "0x000A": "Digit9",
            "0x000B": "Digit0",
            "0x000C": "Minus",
            "0x000D": "Equal",
            "0x000E": "Backspace",
            "0x000F": "Tab",
            "0x0010": "KeyQ",
            "0x0011": "KeyW",
            "0x0012": "KeyE",
            "0x0013": "KeyR",
            "0x0014": "KeyT",
            "0x0015": "KeyY",
            "0x0016": "KeyU",
            "0x0017": "KeyI",
            "0x0018": "KeyO",
            "0x0019": "KeyP",
            "0x001A": "BracketLeft",
            "0x001B": "BracketRight",
            "0x001C": "Enter",
            "0x001D": "ControlLeft",
            "0x001E": "KeyA",
            "0x001F": "KeyS",
            "0x0020": "KeyD",
            "0x0021": "KeyF",
            "0x0022": "KeyG",
            "0x0023": "KeyH",
            "0x0024": "KeyJ",
            "0x0025": "KeyK",
            "0x0026": "KeyL",
            "0x0027": "Semicolon",
            "0x0028": "Quote",
            "0x0029": "Backquote",
            "0x002A": "ShiftLeft",
            "0x002B": "Backslash",
            "0x002C": "KeyZ",
            "0x002D": "KeyX",
            "0x002E": "KeyC",
            "0x002F": "KeyV",
            "0x0030": "KeyB",
            "0x0031": "KeyN",
            "0x0032": "KeyM",
            "0x0033": "Comma",
            "0x0034": "Period",
            "0x0035": "Slash",
            "0x0036": "ShiftRight",
            "0x0037": "NumpadMultiply",
            "0x0038": "AltLeft",
            "0x0039": "Space",
            "0x003A": "CapsLock",
            "0x003B": "F1",
            "0x003C": "F2",
            "0x003D": "F3",
            "0x003E": "F4",
            "0x003F": "F5",
            "0x0040": "F6",
            "0x0041": "F7",
            "0x0042": "F8",
            "0x0043": "F9",
            "0x0044": "F10",
            "0x0045": "Pause",
            "0x0046": "ScrollLock",
            "0x0047": "Numpad7",
            "0x0048": "Numpad8",
            "0x0049": "Numpad9",
            "0x004A": "NumpadSubtract",
            "0x004B": "Numpad4",
            "0x004C": "Numpad5",
            "0x004D": "Numpad6",
            "0x004E": "NumpadAdd",
            "0x004F": "Numpad1",
            "0x0050": "Numpad2",
            "0x0051": "Numpad3",
            "0x0052": "Numpad0",
            "0x0053": "NumpadDecimal",
            "0x0056": "IntlBackslash",
            "0x0057": "F11",
            "0x0058": "F12",
            "0x0059": "NumpadEqual",
            "0x0064": "F13",
            "0x0065": "F14",
            "0x0066": "F15",
            "0x0067": "F16",
            "0x0068": "F17",
            "0x0069": "F18",
            "0x006A": "F19",
            "0x006B": "F20",
            "0x006C": "F21",
            "0x006D": "F22",
            "0x006E": "F23",
            "0x0070": "KanaMode",
            "0x0071": "Lang2",
            "0x0072": "Lang1",
            "0x0073": "IntlRo",
            "0x0076": "F24",
            "0x0077": "Lang4",
            "0x0078": "Lang3",
            "0x0079": "Convert",
            "0x007B": "NonConvert",
            "0x007D": "IntlYen",
            "0x007E": "NumpadComma",
            "0xE008": "Undo",
            "0xE00A": "Paste",
            "0xE010": "MediaTrackPrevious",
            "0xE017": "Cut",
            "0xE018": "Copy",
            "0xE019": "MediaTrackNext",
            "0xE01C": "NumpadEnter",
            "0xE01D": "ControlRight",
            "0xE020": "AudioVolumeMute",
            "0xE021": "LaunchApp2",
            "0xE022": "MediaPlayPause",
            "0xE024": "MediaStop",
            "0xE02C": "Eject",
            "0xE02E": "AudioVolumeDown",
            "0xE030": "AudioVolumeUp",
            "0xE032": "BrowserHome",
            "0xE035": "NumpadDivide",
            "0xE037": "PrintScreen",
            "0xE038": "AltRight",
            "0xE03B": "Help",
            "0xE045": "NumLock",
            "0xE046": "Pause",
            "0xE047": "Home",
            "0xE048": "ArrowUp",
            "0xE049": "PageUp",
            "0xE04B": "ArrowLeft",
            "0xE04D": "ArrowRight",
            "0xE04F": "End",
            "0xE050": "ArrowDown",
            "0xE051": "PageDown",
            "0xE052": "Insert",
            "0xE053": "Delete",
            "0xE05B": "MetaLeft",
            "0xE05C": "MetaRight",
            "0xE05D": "ContextMenu",
            "0xE05E": "Power",
            "0xE05F": "Sleep",
            "0xE063": "WakeUp",
            "0xE065": "BrowserSearch",
            "0xE066": "BrowserFavorites",
            "0xE067": "BrowserRefresh",
            "0xE068": "BrowserStop",
            "0xE069": "BrowserForward",
            "0xE06A": "BrowserBack",
            "0xE06B": "LaunchApp1",
            "0xE06C": "LaunchMail",
            "0xE06D": "MediaSelect",
        },
        gecko: {
            "0x0001": "Escape",
            "0x0002": "Digit1",
            "0x0003": "Digit2",
            "0x0004": "Digit3",
            "0x0005": "Digit4",
            "0x0006": "Digit5",
            "0x0007": "Digit6",
            "0x0008": "Digit7",
            "0x0009": "Digit8",
            "0x000A": "Digit9",
            "0x000B": "Digit0",
            "0x000C": "Minus",
            "0x000D": "Equal",
            "0x000E": "Backspace",
            "0x000F": "Tab",
            "0x0010": "KeyQ",
            "0x0011": "KeyW",
            "0x0012": "KeyE",
            "0x0013": "KeyR",
            "0x0014": "KeyT",
            "0x0015": "KeyY",
            "0x0016": "KeyU",
            "0x0017": "KeyI",
            "0x0018": "KeyO",
            "0x0019": "KeyP",
            "0x001A": "BracketLeft",
            "0x001B": "BracketRight",
            "0x001C": "Enter",
            "0x001D": "ControlLeft",
            "0x001E": "KeyA",
            "0x001F": "KeyS",
            "0x0020": "KeyD",
            "0x0021": "KeyF",
            "0x0022": "KeyG",
            "0x0023": "KeyH",
            "0x0024": "KeyJ",
            "0x0025": "KeyK",
            "0x0026": "KeyL",
            "0x0027": "Semicolon",
            "0x0028": "Quote",
            "0x0029": "Backquote",
            "0x002A": "ShiftLeft",
            "0x002B": "Backslash",
            "0x002C": "KeyZ",
            "0x002D": "KeyX",
            "0x002E": "KeyC",
            "0x002F": "KeyV",
            "0x0030": "KeyB",
            "0x0031": "KeyN",
            "0x0032": "KeyM",
            "0x0033": "Comma",
            "0x0034": "Period",
            "0x0035": "Slash",
            "0x0036": "ShiftRight",
            "0x0037": "NumpadMultiply",
            "0x0038": "AltLeft",
            "0x0039": "Space",
            "0x003A": "CapsLock",
            "0x003B": "F1",
            "0x003C": "F2",
            "0x003D": "F3",
            "0x003E": "F4",
            "0x003F": "F5",
            "0x0040": "F6",
            "0x0041": "F7",
            "0x0042": "F8",
            "0x0043": "F9",
            "0x0044": "F10",
            "0x0045": "Pause",
            "0x0046": "ScrollLock",
            "0x0047": "Numpad7",
            "0x0048": "Numpad8",
            "0x0049": "Numpad9",
            "0x004A": "NumpadSubtract",
            "0x004B": "Numpad4",
            "0x004C": "Numpad5",
            "0x004D": "Numpad6",
            "0x004E": "NumpadAdd",
            "0x004F": "Numpad1",
            "0x0050": "Numpad2",
            "0x0051": "Numpad3",
            "0x0052": "Numpad0",
            "0x0053": "NumpadDecimal",
            "0x0054": "PrintScreen",
            "0x0056": "IntlBackslash",
            "0x0057": "F11",
            "0x0058": "F12",
            "0x0059": "NumpadEqual",
            "0x0064": "F13",
            "0x0065": "F14",
            "0x0066": "F15",
            "0x0067": "F16",
            "0x0068": "F17",
            "0x0069": "F18",
            "0x006A": "F19",
            "0x006B": "F20",
            "0x006C": "F21",
            "0x006D": "F22",
            "0x006E": "F23",
            "0x0070": "KanaMode",
            "0x0071": "Lang2",
            "0x0072": "Lang1",
            "0x0073": "IntlRo",
            "0x0076": "F24",
            "0x0079": "Convert",
            "0x007B": "NonConvert",
            "0x007D": "IntlYen",
            "0x007E": "NumpadComma",
            "0xE010": "MediaTrackPrevious",
            "0xE019": "MediaTrackNext",
            "0xE01C": "NumpadEnter",
            "0xE01D": "ControlRight",
            "0xE020": "AudioVolumeMute",
            "0xE021": "LaunchApp2",
            "0xE022": "MediaPlayPause",
            "0xE024": "MediaStop",
            "0xE02E": "VolumeDown",
            "0xE030": "VolumeUp",
            "0xE032": "BrowserHome",
            "0xE035": "NumpadDivide",
            "0xE037": "PrintScreen",
            "0xE038": "AltRight",
            "0xE045": "NumLock",
            "0xE046": "Pause",
            "0xE047": "Home",
            "0xE048": "ArrowUp",
            "0xE049": "PageUp",
            "0xE04B": "ArrowLeft",
            "0xE04D": "ArrowRight",
            "0xE04F": "End",
            "0xE050": "ArrowDown",
            "0xE051": "PageDown",
            "0xE052": "Insert",
            "0xE053": "Delete",
            "0xE05B": "OSLeft",
            "0xE05C": "OSRight",
            "0xE05D": "ContextMenu",
            "0xE05E": "Power",
            "0xE065": "BrowserSearch",
            "0xE066": "BrowserFavorites",
            "0xE067": "BrowserRefresh",
            "0xE068": "BrowserStop",
            "0xE069": "BrowserForward",
            "0xE06A": "BrowserBack",
            "0xE06B": "LaunchApp1",
            "0xE06C": "LaunchMail",
            "0xE06D": "MediaSelect",
            "0xE0F1": "Lang2",
            "0xE0F2": "Lang1",
        }
    },
    linux: {
        gecko: {
            "0x0009": "Escape",
            "0x000A": "Digit1",
            "0x000B": "Digit2",
            "0x000C": "Digit3",
            "0x000D": "Digit4",
            "0x000E": "Digit5",
            "0x000F": "Digit6",
            "0x0010": "Digit7",
            "0x0011": "Digit8",
            "0x0012": "Digit9",
            "0x0013": "Digit0",
            "0x0014": "Minus",
            "0x0015": "Equal",
            "0x0016": "Backspace",
            "0x0017": "Tab",
            "0x0018": "KeyQ",
            "0x0019": "KeyW",
            "0x001A": "KeyE",
            "0x001B": "KeyR",
            "0x001C": "KeyT",
            "0x001D": "KeyY",
            "0x001E": "KeyU",
            "0x001F": "KeyI",
            "0x0020": "KeyO",
            "0x0021": "KeyP",
            "0x0022": "BracketLeft",
            "0x0023": "BracketRight",
            "0x0024": "Enter",
            "0x0025": "ControlLeft",
            "0x0026": "KeyA",
            "0x0027": "KeyS",
            "0x0028": "KeyD",
            "0x0029": "KeyF",
            "0x002A": "KeyG",
            "0x002B": "KeyH",
            "0x002C": "KeyJ",
            "0x002D": "KeyK",
            "0x002E": "KeyL",
            "0x002F": "Semicolon",
            "0x0030": "Quote",
            "0x0031": "Backquote",
            "0x0032": "ShiftLeft",
            "0x0033": "Backslash",
            "0x0034": "KeyZ",
            "0x0035": "KeyX",
            "0x0036": "KeyC",
            "0x0037": "KeyV",
            "0x0038": "KeyB",
            "0x0039": "KeyN",
            "0x003A": "KeyM",
            "0x003B": "Comma",
            "0x003C": "Period",
            "0x003D": "Slash",
            "0x003E": "ShiftRight",
            "0x003F": "NumpadMultiply",
            "0x0040": "AltLeft",
            "0x0041": "Space",
            "0x0042": "CapsLock",
            "0x0043": "F1",
            "0x0044": "F2",
            "0x0045": "F3",
            "0x0046": "F4",
            "0x0047": "F5",
            "0x0048": "F6",
            "0x0049": "F7",
            "0x004A": "F8",
            "0x004B": "F9",
            "0x004C": "F10",
            "0x004D": "NumLock",
            "0x004E": "ScrollLock",
            "0x004F": "Numpad7",
            "0x0050": "Numpad8",
            "0x0051": "Numpad9",
            "0x0052": "NumpadSubtract",
            "0x0053": "Numpad4",
            "0x0054": "Numpad5",
            "0x0055": "Numpad6",
            "0x0056": "NumpadAdd",
            "0x0057": "Numpad1",
            "0x0058": "Numpad2",
            "0x0059": "Numpad3",
            "0x005A": "Numpad0",
            "0x005B": "NumpadDecimal",
            "0x005E": "IntlBackslash",
            "0x005F": "F11",
            "0x0060": "F12",
            "0x0061": "IntlRo",
            "0x0064": "Convert",
            "0x0065": "KanaMode",
            "0x0066": "NonConvert",
            "0x0068": "NumpadEnter",
            "0x0069": "ControlRight",
            "0x006A": "NumpadDivide",
            "0x006B": "PrintScreen",
            "0x006C": "AltRight",
            "0x006E": "Home",
            "0x006F": "ArrowUp",
            "0x0070": "PageUp",
            "0x0071": "ArrowLeft",
            "0x0072": "ArrowRight",
            "0x0073": "End",
            "0x0074": "ArrowDown",
            "0x0075": "PageDown",
            "0x0076": "Insert",
            "0x0077": "Delete",
            "0x0079": "VolumeMute",
            "0x007A": "VolumeDown",
            "0x007B": "VolumeUp",
            "0x007D": "NumpadEqual",
            "0x007F": "Pause",
            "0x0081": "NumpadComma",
            "0x0082": "Lang1",
            "0x0083": "Lang2",
            "0x0084": "IntlYen",
            "0x0085": "OSLeft",
            "0x0086": "OSRight",
            "0x0087": "ContextMenu",
            "0x0088": "BrowserStop",
            "0x0089": "Again",
            "0x008A": "Props",
            "0x008B": "Undo",
            "0x008C": "Select",
            "0x008D": "Copy",
            "0x008E": "Open",
            "0x008F": "Paste",
            "0x0090": "Find",
            "0x0091": "Cut",
            "0x0092": "Help",
            "0x0094": "LaunchApp2",
            "0x0097": "WakeUp",
            "0x0098": "LaunchApp1",
            "0x00A3": "LaunchMail",
            "0x00A4": "BrowserFavorites",
            "0x00A5": "Unidentified",
            "0x00A6": "BrowserBack",
            "0x00A7": "BrowserForward",
            "0x00A9": "Eject",
            "0x00AB": "MediaTrackNext",
            "0x00AC": "MediaPlayPause",
            "0x00AD": "MediaTrackPrevious",
            "0x00AE": "MediaStop",
            "0x00B3": "MediaSelect",
            "0x00B4": "BrowserHome",
            "0x00B5": "BrowserRefresh",
            "0x00BF": "F13",
            "0x00C0": "F14",
            "0x00C1": "F15",
            "0x00C2": "F16",
            "0x00C3": "F17",
            "0x00C4": "F18",
            "0x00C5": "F19",
            "0x00C6": "F20",
            "0x00C7": "F21",
            "0x00C8": "F22",
            "0x00C9": "F23",
            "0x00CA": "F24",
            "0x00E1": "BrowserSearch",
        },
        blink: {
            "0x0009": "Escape",
            "0x000A": "Digit1",
            "0x000B": "Digit2",
            "0x000C": "Digit3",
            "0x000D": "Digit4",
            "0x000E": "Digit5",
            "0x000F": "Digit6",
            "0x0010": "Digit7",
            "0x0011": "Digit8",
            "0x0012": "Digit9",
            "0x0013": "Digit0",
            "0x0014": "Minus",
            "0x0015": "Equal",
            "0x0016": "Backspace",
            "0x0017": "Tab",
            "0x0018": "KeyQ",
            "0x0019": "KeyW",
            "0x001A": "KeyE",
            "0x001B": "KeyR",
            "0x001C": "KeyT",
            "0x001D": "KeyY",
            "0x001E": "KeyU",
            "0x001F": "KeyI",
            "0x0020": "KeyO",
            "0x0021": "KeyP",
            "0x0022": "BracketLeft",
            "0x0023": "BracketRight",
            "0x0024": "Enter",
            "0x0025": "ControlLeft",
            "0x0026": "KeyA",
            "0x0027": "KeyS",
            "0x0028": "KeyD",
            "0x0029": "KeyF",
            "0x002A": "KeyG",
            "0x002B": "KeyH",
            "0x002C": "KeyJ",
            "0x002D": "KeyK",
            "0x002E": "KeyL",
            "0x002F": "Semicolon",
            "0x0030": "Quote",
            "0x0031": "Backquote",
            "0x0032": "ShiftLeft",
            "0x0033": "Backslash",
            "0x0034": "KeyZ",
            "0x0035": "KeyX",
            "0x0036": "KeyC",
            "0x0037": "KeyV",
            "0x0038": "KeyB",
            "0x0039": "KeyN",
            "0x003A": "KeyM",
            "0x003B": "Comma",
            "0x003C": "Period",
            "0x003D": "Slash",
            "0x003E": "ShiftRight",
            "0x003F": "NumpadMultiply",
            "0x0040": "AltLeft",
            "0x0041": "Space",
            "0x0042": "CapsLock",
            "0x0043": "F1",
            "0x0044": "F2",
            "0x0045": "F3",
            "0x0046": "F4",
            "0x0047": "F5",
            "0x0048": "F6",
            "0x0049": "F7",
            "0x004A": "F8",
            "0x004B": "F9",
            "0x004C": "F10",
            "0x004D": "NumLock",
            "0x004E": "ScrollLock",
            "0x004F": "Numpad7",
            "0x0050": "Numpad8",
            "0x0051": "Numpad9",
            "0x0052": "NumpadSubtract",
            "0x0053": "Numpad4",
            "0x0054": "Numpad5",
            "0x0055": "Numpad6",
            "0x0056": "NumpadAdd",
            "0x0057": "Numpad1",
            "0x0058": "Numpad2",
            "0x0059": "Numpad3",
            "0x005A": "Numpad0",
            "0x005B": "NumpadDecimal",
            "0x005D": "Lang5",
            "0x005E": "IntlBackslash",
            "0x005F": "F11",
            "0x0060": "F12",
            "0x0061": "IntlRo",
            "0x0062": "Lang3",
            "0x0063": "Lang4",
            "0x0064": "Convert",
            "0x0065": "KanaMode",
            "0x0066": "NonConvert",
            "0x0068": "NumpadEnter",
            "0x0069": "ControlRight",
            "0x006A": "NumpadDivide",
            "0x006B": "PrintScreen",
            "0x006C": "AltRight",
            "0x006E": "Home",
            "0x006F": "ArrowUp",
            "0x0070": "PageUp",
            "0x0071": "ArrowLeft",
            "0x0072": "ArrowRight",
            "0x0073": "End",
            "0x0074": "ArrowDown",
            "0x0075": "PageDown",
            "0x0076": "Insert",
            "0x0077": "Delete",
            "0x0079": "AudioVolumeMute",
            "0x007A": "AudioVolumeDown",
            "0x007B": "AudioVolumeUp",
            "0x007C": "Power",
            "0x007D": "NumpadEqual",
            "0x007F": "Pause",
            "0x0081": "NumpadComma",
            "0x0082": "Lang1",
            "0x0083": "Lang2",
            "0x0084": "IntlYen",
            "0x0085": "MetaLeft",
            "0x0086": "MetaRight",
            "0x0087": "ContextMenu",
            "0x0088": "BrowserStop",
            "0x0089": "Again",
            "0x008B": "Undo",
            "0x008C": "Select",
            "0x008D": "Copy",
            "0x008E": "Open",
            "0x008F": "Paste",
            "0x0090": "Find",
            "0x0091": "Cut",
            "0x0092": "Help",
            "0x0094": "LaunchApp2",
            "0x0096": "Sleep",
            "0x0097": "WakeUp",
            "0x0098": "LaunchApp1",
            "0x00A3": "LaunchMail",
            "0x00A4": "BrowserFavorites",
            "0x00A6": "BrowserBack",
            "0x00A7": "BrowserForward",
            "0x00A9": "Eject",
            "0x00AB": "MediaTrackNext",
            "0x00AC": "MediaPlayPause",
            "0x00AD": "MediaTrackPrevious",
            "0x00AE": "MediaStop",
            "0x00B3": "MediaSelect",
            "0x00B4": "BrowserHome",
            "0x00B5": "BrowserRefresh",
            "0x00BB": "NumpadParenLeft",
            "0x00BC": "NumpadParenRight",
            "0x00BF": "F13",
            "0x00C0": "F14",
            "0x00C1": "F15",
            "0x00C2": "F16",
            "0x00C3": "F17",
            "0x00C4": "F18",
            "0x00C5": "F19",
            "0x00C6": "F20",
            "0x00C7": "F21",
            "0x00C8": "F22",
            "0x00C9": "F23",
            "0x00CA": "F24",
            "0x00E1": "BrowserSearch",
        }
    },
    android: {
        gecko: {
            "0x0001": "Escape",
            "0x0002": "Digit1",
            "0x0003": "Digit2",
            "0x0004": "Digit3",
            "0x0005": "Digit4",
            "0x0006": "Digit5",
            "0x0007": "Digit6",
            "0x0008": "Digit7",
            "0x0009": "Digit8",
            "0x000A": "Digit9",
            "0x000B": "Digit0",
            "0x000C": "Minus",
            "0x000D": "Equal",
            "0x000E": "Backspace",
            "0x000F": "Tab",
            "0x0010": "KeyQ",
            "0x0011": "KeyW",
            "0x0012": "KeyE",
            "0x0013": "KeyR",
            "0x0014": "KeyT",
            "0x0015": "KeyY",
            "0x0016": "KeyU",
            "0x0017": "KeyI",
            "0x0018": "KeyO",
            "0x0019": "KeyP",
            "0x001A": "BracketLeft",
            "0x001B": "BracketRight",
            "0x001C": "Enter",
            "0x001D": "ControlLeft",
            "0x001E": "KeyA",
            "0x001F": "KeyS",
            "0x0020": "KeyD",
            "0x0021": "KeyF",
            "0x0022": "KeyG",
            "0x0023": "KeyH",
            "0x0024": "KeyJ",
            "0x0025": "KeyK",
            "0x0026": "KeyL",
            "0x0027": "Semicolon",
            "0x0028": "Quote",
            "0x0029": "Backquote",
            "0x002A": "ShiftLeft",
            "0x002B": "Backslash",
            "0x002C": "KeyZ",
            "0x002D": "KeyX",
            "0x002E": "KeyC",
            "0x002F": "KeyV",
            "0x0030": "KeyB",
            "0x0031": "KeyN",
            "0x0032": "KeyM",
            "0x0033": "Comma",
            "0x0034": "Period",
            "0x0035": "Slash",
            "0x0036": "ShiftRight",
            "0x0037": "NumpadMultiply",
            "0x0038": "AltLeft",
            "0x0039": "Space",
            "0x003A": "CapsLock",
            "0x003B": "F1",
            "0x003C": "F2",
            "0x003D": "F3",
            "0x003E": "F4",
            "0x003F": "F5",
            "0x0040": "F6",
            "0x0041": "F7",
            "0x0042": "F8",
            "0x0043": "F9",
            "0x0044": "F10",
            "0x0045": "NumLock",
            "0x0046": "ScrollLock",
            "0x0047": "Numpad7",
            "0x0048": "Numpad8",
            "0x0049": "Numpad9",
            "0x004A": "NumpadSubtract",
            "0x004B": "Numpad4",
            "0x004C": "Numpad5",
            "0x004D": "Numpad6",
            "0x004E": "NumpadAdd",
            "0x004F": "Numpad1",
            "0x0050": "Numpad2",
            "0x0051": "Numpad3",
            "0x0052": "Numpad0",
            "0x0053": "NumpadDecimal",
            "0x0056": "IntlBackslash",
            "0x0057": "F11",
            "0x0058": "F12",
            "0x0059": "IntlRo",
            "0x005C": "Convert",
            "0x005D": "KanaMode",
            "0x005E": "NonConvert",
            "0x0060": "NumpadEnter",
            "0x0061": "ControlRight",
            "0x0062": "NumpadDivide",
            "0x0063": "PrintScreen",
            "0x0064": "AltRight",
            "0x0066": "Home",
            "0x0067": "ArrowUp",
            "0x0068": "PageUp",
            "0x0069": "ArrowLeft",
            "0x006A": "ArrowRight",
            "0x006B": "End",
            "0x006C": "ArrowDown",
            "0x006D": "PageDown",
            "0x006E": "Insert",
            "0x006F": "Delete",
            "0x0071": "VolumeMute",
            "0x0072": "VolumeDown",
            "0x0073": "VolumeUp",
            "0x0074": "Power",
            "0x0075": "NumpadEqual",
            "0x0077": "Pause",
            "0x0079": "NumpadComma",
            "0x007A": "Lang1",
            "0x007B": "Lang2",
            "0x007C": "IntlYen",
            "0x007D": "OSLeft",
            "0x007E": "OSRight",
            "0x007F": "ContextMenu",
            "0x0080": "BrowserStop",
            "0x0081": "Again",
            "0x0082": "Props",
            "0x0083": "Undo",
            "0x0084": "Select",
            "0x0085": "Copy",
            "0x0086": "Open",
            "0x0087": "Paste",
            "0x0088": "Find",
            "0x0089": "Cut",
            "0x008A": "Help",
            "0x008E": "Sleep",
            "0x008F": "WakeUp",
            "0x0090": "LaunchApp1",
            "0x009C": "BrowserFavorites",
            "0x009E": "BrowserBack",
            "0x009F": "BrowserForward",
            "0x00A1": "Eject",
            "0x00A3": "MediaTrackNext",
            "0x00A4": "MediaPlayPause",
            "0x00A5": "MediaTrackPrevious",
            "0x00A6": "MediaStop",
            "0x00AD": "BrowserRefresh",
            "0x00B7": "F13",
            "0x00B8": "F14",
            "0x00B9": "F15",
            "0x00BA": "F16",
            "0x00BB": "F17",
            "0x00BC": "F18",
            "0x00BD": "F19",
            "0x00BE": "F20",
            "0x00BF": "F21",
            "0x00C0": "F22",
            "0x00C1": "F23",
            "0x00C2": "F24",
            "0x00D9": "BrowserSearch",
            "0x01D0": "Fn",
        }
    }
}

export let CodeToScanCode = {
    windows: {
        blink: {},
        gecko: {}
    },
    linux: {
        gecko: {},
        blink: {}
    },
    android: {
        gecko: {}
    }
};

let mapList = [
    [ScanCodeToCode.windows.blink, CodeToScanCode.windows.blink],
    [ScanCodeToCode.windows.gecko, CodeToScanCode.windows.gecko],
    [ScanCodeToCode.linux.blink, CodeToScanCode.linux.blink],
    [ScanCodeToCode.linux.gecko, CodeToScanCode.linux.gecko],
    [ScanCodeToCode.android.gecko, CodeToScanCode.android.gecko]
];

mapList.forEach(maps => {
    for (let key in maps[0]) {
        if (maps[0].hasOwnProperty(key)) {
            maps[1][maps[0][key]] = key;
        }
    }
})

let parser = new UAParser();
let parsedUA = parser.getResult();
let engine = parsedUA.engine.name.toLowerCase();

export let scanCode = function (code: string, targetOs: OS) {
    let map = CodeToScanCode[targetOs][engine] || CodeToScanCode.linux.gecko;
    return map[code];
}

export let code = function (scanCode: string, targetOs: OS) {
    let map = ScanCodeToCode[targetOs][engine] || CodeToScanCode.linux.gecko;
    return map[scanCode];
}

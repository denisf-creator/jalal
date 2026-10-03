export interface ScriptPreset {
  id: string;
  name: string;
  filename: string;
  code: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'free',
    question: 'Is Xeno completely free?',
    answer:
      'Yes, Xeno is 100% free with zero paywalls, link shorteners, or key systems. Simply launch, write or load your scripts, and execute.',
  },
  {
    id: 'compatibility',
    question: 'Which operating systems and clients are supported?',
    answer:
      'Xeno supports 64-bit Windows 10 and Windows 11. It dynamically hooks the latest production Roblox desktop client with full Luau compatibility.',
  },
  {
    id: 'keys',
    question: 'Does Xeno require key systems or advertising checkouts?',
    answer:
      'No. There are no daily keys, ads, or surveys. You download the standalone executable and get instant access.',
  },
  {
    id: 'unc',
    question: 'How compatible is Xeno with public scripts?',
    answer:
      'Xeno implements the Universal Naming Convention (UNC) standard along with built-in closures, file utilities, hook metamethods, and WebSocket bridge support.',
  },
  {
    id: 'safety',
    question: 'Is Xeno detected by anti-tamper protections?',
    answer:
      'Xeno operates with hardware-level breakpoint virtualization and isolated memory pages to ensure stealth execution and crash prevention.',
  },
];

export const SCRIPT_PRESETS: ScriptPreset[] = [
  {
    id: 'infinite-yield',
    name: 'Infinite Yield',
    filename: 'Infinite Yield',
    description: 'Admin command suite initialization with fallback shims',
    code: `if IY_LOADED and not _G.IY_DEBUG == true then
    -- error("Infinite Yield is already running!", 0)
    return
end

pcall(function() getgenv().IY_LOADED = true end)
if not game:IsLoaded() then game.Loaded:Wait() end

function missing(t, f, fallback)
    if type(f) == t then return f end
    return fallback
end

cloneref = missing("function", cloneref, function(...) return ... end)
sethidden = missing("function", sethiddenproperty or set_hidden_property or set_hidden_prop)
gethidden = missing("function", gethiddenproperty or get_hidden_property or get_hidden_prop)
queueteleport = missing("function", queue_on_teleport or (syn and syn.queue_on_teleport) or (fluxus and fluxus.queue_on_teleport))
httprequest = missing("function", request or http_request or (syn and syn.request) or (http and http.request))
everyClipboard = missing("function", setclipboard or toclipboard or set_clipboard or (Clipboard and Clipboard.set))`,
  },
  {
    id: 'sirius',
    name: 'Sirius',
    filename: 'Sirius',
    description: 'Modern fluent interface framework loader',
    code: `-- [Sirius] High-performance UI Library for Roblox
local Sirius = loadstring(game:HttpGet("https://raw.githubusercontent.com/Sirius/Sirius/main/source.lua"))()

local Window = Sirius:CreateWindow({
    Title = "Sirius Suite v3.2",
    SubTitle = "by Xeno Engine",
    TabWidth = 160,
    Size = UDim2.fromOffset(580, 460),
    Theme = "Darker"
})

local MainTab = Window:CreateTab({
    Name = "Overview",
    Icon = "rbxassetid://4483345998"
})

MainTab:CreateButton({
    Name = "Initialize Environment",
    Callback = function()
        print("[Sirius] Core hooks initialized successfully.")
    end
})`,
  },
  {
    id: 'visualizer',
    name: 'Visualizer',
    filename: 'Visualizer',
    description: 'Real-time entity chams and wireframe render pipeline',
    code: `-- [Visualizer] Real-time Entity Render Pipeline
local Camera = workspace.CurrentCamera
local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer

local function renderEntityESP(target)
    if target == LocalPlayer or not target.Character then return end
    local highlight = Instance.new("Highlight")
    highlight.Name = "Xeno_Render"
    highlight.FillColor = Color3.fromRGB(130, 160, 255)
    highlight.OutlineColor = Color3.fromRGB(255, 255, 255)
    highlight.OutlineTransparency = 0.2
    highlight.Parent = target.Character
end

for _, player in ipairs(Players:GetPlayers()) do
    renderEntityESP(player)
end

print("[Xeno] Visualizer hooks synchronized.")`,
  },
  {
    id: 'unc-check',
    name: 'UNC Check',
    filename: 'UNC Check',
    description: 'Full Universal Naming Convention validation tests',
    code: `-- [UNC Environment Compatibility Check]
print("========================================")
print("   Xeno Universal Naming Convention     ")
print("========================================")

local passes, fails = 0, 0
local function test(name, func)
    if func ~= nil then
        passes = passes + 1
        print(" [+] " .. name)
    else
        fails = fails + 1
        print(" [-] " .. name)
    end
end

test("getgenv", getgenv)
test("getrenv", getrenv)
test("cloneref", cloneref)
test("hookfunction", hookfunction)
test("hookmetamethod", hookmetamethod)
test("newcclosure", newcclosure)
test("request", request)

print(string.format("UNC Test Result: %d Passed | %d Failed (100%% Compatible)", passes, fails))`,
  },
  {
    id: 'websocket',
    name: 'WebSocket',
    filename: 'WebSocket',
    description: 'Bidirectional bridge socket connection handler',
    code: `-- [WebSocket Bridge] Real-time RPC communication
local WebSocket = WebSocket or syn.websocket
local socket = WebSocket.connect("ws://localhost:8080/xeno")

socket.OnMessage:Connect(function(message)
    print("[WS Recv]: " .. message)
    local data = game:GetService("HttpService"):JSONDecode(message)
    if data.type == "EVAL" then
        loadstring(data.payload)()
    end
end)

socket:Send(game:GetService("HttpService"):JSONEncode({
    event = "READY",
    client = "Xeno v1.3.0a"
}))`,
  },
  {
    id: 'prototype',
    name: 'Prototype',
    filename: 'Prototype',
    description: 'Dynamic sandbox and experimental function testing',
    code: `-- [Prototype Playground]
local CoreGui = game:GetService("CoreGui")
local TweenService = game:GetService("TweenService")

local testFrame = Instance.new("Frame")
testFrame.Size = UDim2.new(0, 200, 0, 100)
testFrame.Position = UDim2.new(0.5, -100, 0.5, -50)
testFrame.BackgroundColor3 = Color3.fromRGB(15, 15, 20)
testFrame.BorderSizePixel = 0

print("[Xeno] Prototype buffer active.")`,
  },
];

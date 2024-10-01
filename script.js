const colors = [ 
    "AliceBlue", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DodgerBlue", "FireBrick", "ForestGreen", "Fuchsia", "Gainsboro", "Gold", "GoldenRod", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue",  "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "WhiteSmoke", "Yellow", "YellowGreen"
];
const text = "30 DAYS OF JAVASCRIPT CHALLENGE 2020 ASABENEH YETAYEH";

const letters = text.split('');
const container = document.querySelector(".container");

const title = document.createElement("h1");
title.style.display = "flex";
title.style.flexWrap = "wrap";
title.style.justifyContent = "center";
title.style.marginTop = "100px";
container.appendChild(title);

letters.forEach(letter => {
    const span = document.createElement('span');
    span.textContent = letter === " " ? "\u00A0" : letter;
    span.style.fontSize = "5rem";
    span.style.display = "inline-block";
    title.appendChild(span);
});

const letterSpans = document.querySelectorAll("span");

const randomColor = (colors) => {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

const changePage = () => {
    let backgroundColor = randomColor(colors);
    document.body.style.backgroundColor = backgroundColor;
    for (const span of letterSpans) {
        let letterColor = randomColor(colors);
        while (letterColor == backgroundColor) {
            letterColor = randomColor(colors);
        }
        span.style.color = letterColor;
    }
    setTimeout(changePage, 5000);
}
changePage();
function isVisible(element) {
    const style = window.getComputedStyle(element);

    return (
        style.display !== "none" &&
        style.visibility !== "hidden"
    );
}

function createDetection(element, reason, confidence) {
    return {
        element,
        type: "advertisement",
        reason,
        confidence
    };
}

function detectAds(root = document) {
     console.log ("[Seacrh Lens] Starting advertisement detection...");
    
     const detectedAds = [];

     const ignoredTags = [
    "SCRIPT",
    "STYLE",
    "NOSCRIPT",
    "NOFRAMES"
];

const elements = root.querySelectorAll("*");

     elements.forEach(element => {

        if (ignoredTags.includes(element.tagName)) {
    return;
}

const text = element.innerText;

if (text && text.includes("Рeклама")) {
    console.log(
        "[Search Lens] Candidate:",
        element.tagName,
        element,
        isVisible(element)
    );
}

if (
    text && 
    text.includes("Реклама") &&
    isVisible(element)
) {
    detectedAds.push(
                createDetection(
                    element,
                    ["Contains advertisement label"],
                    0.9
                )
            );
        }

     });

     return detectedAds;
}
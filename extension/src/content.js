console.log("Search Lens active");

const detectedAds = detectAds();

console.log("[Search Lens] Detection result:", detectedAds);

if (detectAds.lenght > 0) {
    console.log("[Search Lens] First detected element:", detectedAds[0].element);
} else {
    console.log("[Search Lens] No advertisements detected.");
}
document
  .getElementById("generateActivityBtn")
  .addEventListener("click", generateActivity);

async function generateActivity() {
  try {
    let response = await fetch("https://apis.scrimba.com/bored/api/activity");
    let data = await response.json();
    let activityEn = data.activity;

    // Oversett til norsk (bruker en gratis oversettelsestjeneste f.eks. Google Translate API)
    let translatedResponse = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        activityEn
      )}&langpair=en|no`
    );
    let translatedData = await translatedResponse.json();
    let activityNo = translatedData.responseData.translatedText;

    document.getElementById("activityEn").innerText = "English: " + activityEn;
    document.getElementById("activityNo").innerText =
      "Norwegian: " + activityNo;
  } catch (error) {
    console.error("Error:", error);
  }
}

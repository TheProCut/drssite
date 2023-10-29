function loginWithRoblox() {
  // Get the Roblox OAuth URL
    const robloxOAuthUrl = `https://www.roblox.com/oauth/authorize?response_type=code&client_id=5126400365229033692&scope=openid`;

  // Open the Roblox OAuth URL in a new window
  window.open(robloxOAuthUrl, "_blank");
}

// Check for the Roblox OAuth code in the URL
window.onload = function() {
  const robloxOAuthCode = window.location.search.match(/code=([^&]+)/)[1];

  if (robloxOAuthCode) {
    // Exchange the Roblox OAuth code for an access token
    fetch(`https://api.roblox.com/oauth/token?grant_type=authorization_code&code=${robloxOAuthCode}`, {
      method: "POST"
    })
    .then(response => response.json())
    .then(data => {
      // Store the Roblox access token
      localStorage.setItem("robloxAccessToken", data.access_token);

      // Show the download button
      document.getElementById("downloadButton").classList.remove("d-none");
    });
  }
};

/**
 * Initializes the legal section. If the user is logged in, it includes the necessary HTML and renders the top logo.
 * If the user is not logged in, it renders the section without login.
 *
 * @async
 * @returns {Promise<void>} - A promise that resolves when the initialization is complete.
 */
async function initLegal() {
  if (isUserLoggedIn()) {
    await includeHTML();
    userObj = await getLoggedInUser();
    renderTopLogo(userObj);
  } else {
    renderWithoutLogin();
  }
}

/**
 * Navigates the user back to the summary page.
 */
function goBack() {
  window.location.href = "summary.html";
}

/**
 * Adjusts the style of the legal notice section when the user is not logged in.
 */
function renderWithoutLogin() {
  document.querySelector(".legal-notice-section").style = "margin-left: 20px";
}

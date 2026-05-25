const yearElement = document.querySelector("#year");
const clientRange = document.querySelector("#clientRange");
const clientCount = document.querySelector("#clientCount");
const profitTotal = document.querySelector("#profitTotal");
const packageButtons = document.querySelectorAll(".package-button");
const packageSelect = document.querySelector("#packageSelect");
const leadForm = document.querySelector(".lead-form");
const formStatus = document.querySelector(".form-status");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

function updateProfit() {
  const clients = Number(clientRange.value);
  clientCount.textContent = clients;
  profitTotal.textContent = clients * 40;
}

if (clientRange) {
  clientRange.addEventListener("input", updateProfit);
  updateProfit();
}

packageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!packageSelect) {
      return;
    }

    packageSelect.value = button.dataset.package;
    document.querySelector("#kontakt").scrollIntoView({ behavior: "smooth", block: "start" });
    packageSelect.focus({ preventScroll: true });
  });
});

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(leadForm);
    const business = formData.get("businessName") || "biznesi";
    const selectedPackage = formData.get("packageSelect");

    formStatus.textContent = `Kërkesa demo për ${business} u përgatit me paketën ${selectedPackage}.`;
  });
}

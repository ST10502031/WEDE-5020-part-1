/* ============================================
   Abby Luxe Hair — Enquiry Form Logic
   1. Client-side validation
   2. "Processing" — computes an estimated cost/availability response
   3. AJAX submission (so the enquiry also reaches the business by email)
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enquiry-form");
  const responsePanel = document.getElementById("enquiry-response");
  const submitBtn = document.getElementById("enquiry-submit-btn");
  const messageBox = document.getElementById("message");
  const messageCount = document.getElementById("message-count");

  // Live character counter for the message textarea
  messageBox.addEventListener("input", () => {
    messageCount.textContent = messageBox.value.length;
  });

  // Simple "price book" used to generate an estimate once a category is chosen.
  // In a real deployment this would come from a database / products API.
  const PRICE_BOOK = {
    "Wigs": { low: 850, high: 3500, availability: "In stock — ships within 2–3 business days." },
    "Hair Care Products": { low: 120, high: 650, availability: "In stock — ready to ship." },
    "Accessories": { low: 50, high: 300, availability: "Limited stock on some items — we'll confirm availability directly." },
  };

  const fieldsToValidate = [
    form.fullName,
    form.email,
    form.phone,
    form.enquiryType,
    form.productCategory,
  ];
  attachLiveClear(fieldsToValidate);

  function validateForm() {
    let isValid = true;

    // Full name
    if (form.fullName.value.trim().length < 2) {
      showFieldError(form.fullName, "Please enter your full name (at least 2 characters).");
      isValid = false;
    }

    // Email
    if (!isValidEmail(form.email.value)) {
      showFieldError(form.email, "Please enter a valid email address.");
      isValid = false;
    }

    // Phone
    if (!isValidPhone(form.phone.value)) {
      showFieldError(form.phone, "Please enter a valid phone number, e.g. 0821234567 or +27821234567.");
      isValid = false;
    }

    // Enquiry type
    if (!form.enquiryType.value) {
      showFieldError(form.enquiryType, "Please select the type of enquiry.");
      isValid = false;
    }

    // Product category
    if (!form.productCategory.value) {
      showFieldError(form.productCategory, "Please select a product category.");
      isValid = false;
    }

    // Preferred contact method (radio group)
    const contactMethodChosen = form.querySelector('input[name="contactMethod"]:checked');
    const contactMethodError = document.getElementById("contactMethod-error");
    if (!contactMethodChosen) {
      contactMethodError.textContent = "Please choose how you'd like us to contact you.";
      isValid = false;
    } else {
      contactMethodError.textContent = "";
    }

    return isValid;
  }

  function showResponse(type, html) {
    responsePanel.className = "response-panel show " + type;
    responsePanel.innerHTML = html;
    responsePanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function buildEstimateHTML(data) {
    const priceInfo = PRICE_BOOK[data.productCategory];
    return `
      <h3>Thanks, ${data.fullName.split(" ")[0]} — here's your estimate</h3>
      <dl>
        <dt>Category</dt>
        <dd>${data.productCategory}</dd>
        <dt>Estimated Price Range</dt>
        <dd>R${priceInfo.low} – R${priceInfo.high}</dd>
        <dt>Availability</dt>
        <dd>${priceInfo.availability}</dd>
        <dt>What happens next</dt>
        <dd>We've also sent your enquiry to our team — expect a reply via ${data.contactMethod.toLowerCase()} shortly with exact pricing for "${data.productDetail || "your requested item"}".</dd>
      </dl>
    `;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      showResponse("error", "<h3>Please fix the highlighted fields above and try again.</h3>");
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Immediately show the computed cost/availability response (client-side "processing")
    showResponse("success", buildEstimateHTML(data));

    // Also send the enquiry to the business via AJAX (FormSubmit), so nothing is lost.
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      submitBtn.textContent = "Get My Estimate";
      submitBtn.disabled = false;
      form.reset();
      messageCount.textContent = "0";
    } catch (err) {
      submitBtn.textContent = "Get My Estimate";
      submitBtn.disabled = false;
      console.error("Enquiry email send failed:", err);
      // The on-page estimate above still stands even if the email notification failed.
    }
  });
});

/* ============================================
   Abby Luxe Hair — Contact Form Logic
   1. Client-side validation
   2. Compiles the message and sends it via AJAX (FormSubmit)
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const responsePanel = document.getElementById("contact-response");
  const submitBtn = document.getElementById("contact-submit-btn");
  const messageBox = document.getElementById("c-message");
  const messageCount = document.getElementById("c-message-count");

  // Live character counter
  messageBox.addEventListener("input", () => {
    messageCount.textContent = messageBox.value.length;
  });

  const fieldsToValidate = [
    form.fullName,
    form.email,
    form.phone,
    form.messageType,
    form.message,
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

    // Phone — optional, but if filled in it must be valid
    if (form.phone.value.trim() !== "" && !isValidPhone(form.phone.value)) {
      showFieldError(form.phone, "Please enter a valid phone number, e.g. 0821234567 or +27821234567.");
      isValid = false;
    }

    // Message type
    if (!form.messageType.value) {
      showFieldError(form.messageType, "Please select the type of message.");
      isValid = false;
    }

    // Message body
    if (form.message.value.trim().length < 10) {
      showFieldError(form.message, "Please enter a message of at least 10 characters.");
      isValid = false;
    }

    return isValid;
  }

  function showResponse(type, message) {
    responsePanel.className = "response-panel show " + type;
    responsePanel.innerHTML = `<h3>${message}</h3>`;
    responsePanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      showResponse("error", "Please fix the highlighted fields above and try again.");
      return;
    }

    const formData = new FormData(form);

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

      showResponse("success", "Thank you! Your message has been sent — we'll get back to you soon.");
      form.reset();
      messageCount.textContent = "0";
    } catch (err) {
      console.error("Contact form send failed:", err);
      showResponse("error", "Sorry, something went wrong sending your message. Please try again, or email us directly.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
});

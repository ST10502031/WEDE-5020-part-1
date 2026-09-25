/* ============================================
   Abby Luxe Hair — Shared form validation helpers
   Used by enquiry.js and contact.js
   ============================================ */

/**
 * A reasonably permissive South African / international phone check:
 * accepts 10-digit local numbers (e.g. 0821234567) or +27 international format.
 */
function isValidPhone(value) {
  const pattern = /^(0\d{9}|\+27\d{9})$/;
  return pattern.test(value.trim());
}

function isValidEmail(value) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(value.trim());
}

/**
 * Shows an inline error message under a field and flags it invalid.
 */
function showFieldError(inputEl, message) {
  inputEl.classList.add("invalid");
  const errorEl = document.getElementById(inputEl.id + "-error");
  if (errorEl) {
    errorEl.textContent = message;
  }
}

/**
 * Clears an inline error message for a field.
 */
function clearFieldError(inputEl) {
  inputEl.classList.remove("invalid");
  const errorEl = document.getElementById(inputEl.id + "-error");
  if (errorEl) {
    errorEl.textContent = "";
  }
}

/**
 * Wires up "clear error as the user retypes" behaviour for a set of inputs.
 */
function attachLiveClear(inputEls) {
  inputEls.forEach((el) => {
    el.addEventListener("input", () => clearFieldError(el));
    el.addEventListener("change", () => clearFieldError(el));
  });
}

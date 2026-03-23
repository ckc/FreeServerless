document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  document.getElementById("status").textContent = "Sending...";

  try {
    const res = await fetch("https://WORKER_URL/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Network error");

    document.getElementById("status").textContent = "Message sent!";
    form.reset();
  } catch (err) {
    document.getElementById("status").textContent = "Failed to send.";
  }
});

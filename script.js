fetch("https://free-serverless.ckc-2d8.workers.dev/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name,
    email,
    message
  })
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);

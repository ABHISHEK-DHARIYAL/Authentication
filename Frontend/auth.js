async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (res.ok && data.token) {
    localStorage.setItem("token", data.token);

    // ✅ REDIRECT AFTER LOGIN
    // window.location.href = "home.html";
    window.location.href = `http://localhost:5000/home?email=${encodeURIComponent(
      email
    )}`;
  } else {
    alert(data.message || "Login failed");
  }
}

function logout() {
  localStorage.removeItem("token");
  alert("Logged out successfully");
  window.location.href = "login.html";
}

async function register() {
  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    // ✅ SHOW CONFIRMATION MESSAGE
    if (res.ok) {
      alert(data.message); // "Account created successfully"
      window.location.href = "login.html";
    } else {
      alert(data.message); // error message
    }
  } catch (error) {
    alert("Cannot connect to server");
    console.error(error);
  }
}

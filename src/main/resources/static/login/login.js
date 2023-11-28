let showPassword = document.getElementById("showPassword");
let inputPassword = document.getElementById("inputPassword");

localStorage.setItem("id", null);
const storedId = localStorage.getItem("id");
console.log("Giá trị lấy từ localStorage:", storedId);

showPassword.onclick = function () {
  if (inputPassword.type == "password") {
    inputPassword.type = "text";
    showPassword.classList.add("show");
  } else {
    inputPassword.type = "password";
    showPassword.classList.remove("show");
  }
};

async function login(username, password) {
  const url = "/api/users/signin";
  const data = {
    email: username,
    password: password,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw new Error("An error occurred. Please try again later.");
  }
}

document
  .querySelector(".signIn button")
  .addEventListener("click", async function () {
    const username = document.querySelector('.group input[type="text"]').value;
    const password = document.getElementById("inputPassword").value;

    try {
      const response = await login(username, password);

      if (response && response.data.role) {
        if (response.data.role === "Role_Admin") {
          localStorage.setItem("role", response.data.role);

          localStorage.setItem("id", response.data.id);

          window.location.href = "/listUser";
        } else if (response.data.role === "Role_User") {
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("id", response.data.id);
          window.location.href = "/home";
        } else {
          alert("Invalid role. Please enter a valid role.");
        }
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  });

//Reset password
async function sendResetPasswordEmail() {
  const email = document.getElementById("forgotEmail").value;

  try {
    const apiUrl = `http://localhost:8081/api/reset-password/sendResetPasswordEmail?email=${email}`;
    const response = await fetch(apiUrl, {
      method: "POST", // Since your API might be configured to accept POST
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Đã gửi");
      closeForgotPasswordPopup();
    } else {
      const errorMessage = await response.text();
      alert("Có lỗi xảy ra: " + errorMessage);
    }
  } catch (error) {
    console.error("Có lỗi xảy ra:", error);
    alert("Có lỗi xảy ra khi gửi email đặt lại mật khẩu.");
  }
}

document
  .getElementById("forgotPasswordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    sendResetPasswordEmail();
  });

function login(event) {
  event.preventDefault(); // منع إعادة تحميل الصفحة

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // بيانات الدخول الصحيحة (يمكنك تعديلها أو ربطها بقاعدة بيانات)
  const correctUsername = "admin";
  const correctPassword = "1234";

  if (username === correctUsername && password === correctPassword) {
    alert("تم تسجيل الدخول بنجاح!");
    // يمكنك توجيه المستخدم إلى صفحة أخرى هنا مثلاً
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error-message").textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
  }
}


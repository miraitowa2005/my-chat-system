// scripts.js

// 检测DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
  // 页面加载完成后执行的代码
});

// 函数：处理用户登录
function handleLogin(username, password) {
  // 这里可以添加登录逻辑，例如验证用户名和密码
  if (username === 'admin' && password === 'password') {
    console.log('登录成功！');
    // 执行登录成功的操作，比如跳转到主页
  } else {
    console.error('用户名或密码错误！');
    // 执行登录失败的操作，比如显示错误信息
  }
}

// 函数：获取用户输入
function getUserInput() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  handleLogin(username, password);
}

// 事件监听：登录按钮点击事件
document.getElementById('loginButton').addEventListener('click', function() {
  getUserInput();
});

// 函数：显示/隐藏密码
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
}

// 事件监听：密码框旁边的显示/隐藏按钮
document.getElementById('togglePassword').addEventListener('click', togglePasswordVisibility);

// 函数：实现退出登录功能
function logout() {
  // 这里可以添加退出登录的逻辑
  console.log('用户已退出登录！');
  // 执行退出登录的操作，比如跳转到登录页面
}

// 事件监听：退出登录按钮点击事件
document.getElementById('logoutButton').addEventListener('click', logout);

// 可以继续添加其他JavaScript逻辑和功能...
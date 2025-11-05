import React, { useState } from "react";
import "./App.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const handleGoogleLogin = () => {
    alert("Sử dụng tài khoản Google để đăng nhập");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { username?: string; password?: string } = {};

    if (!username.trim()) newErrors.username = "Vui lòng nhập tên đăng nhập";
    if (!password.trim()) newErrors.password = "Vui lòng nhập mật khẩu";
    else if (password.length < 6)
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(`Đăng nhập thành công với tài khoản: ${username}`);
      // TODO: navigate("/dashboard")
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V7.5a4.5 4.5 0 00-9 0v3M6 10.5h12a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 21v-9a1.5 1.5 0 011.5-1.5z"
              />
            </svg>
          </div>

          <h2 className="login-title">Đăng nhập hệ thống</h2>

          <form onSubmit={handleSubmit}>
            {/* USERNAME */}
            <div className="form-group">
              <label htmlFor="username">Tên đăng nhập</label>
              <input
                type="text"
                id="username"
                placeholder="Nhập tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && (
                <p className="error-text">{errors.username}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="form-group password-wrapper">
              <label htmlFor="password">Mật khẩu</label>
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width="20"
                      height="20"
                    >
                      <path d="M1 1l22 22" />
                      <path d="M9.88 9.88A3 3 0 0012 15a3 3 0 002.12-5.12" />
                      <path d="M10.73 5.08A10.94 10.94 0 0112 5c7 0 11 7 11 7a19.73 19.73 0 01-2.74 3.68" />
                      <path d="M6.12 6.12A19.73 19.73 0 001 12s4 7 11 7a10.94 10.94 0 005.88-1.61" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width="20"
                      height="20"
                    >
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </div>

            <button type="submit" className="login-btn">
              Đăng nhập
            </button>
          </form>

          <div className="divider">
            <span>Hoặc</span>
          </div>

          <button className="google-btn" onClick={handleGoogleLogin}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 48 48"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.94 0 7.11 1.62 9.26 2.97l6.78-6.78C36.06 2.39 30.41 0 24 0 14.62 0 6.38 5.16 2.49 12.63l7.9 6.14C12.41 12.16 17.75 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.98 24.5c0-1.62-.15-3.18-.43-4.68H24v9.14h13.01c-.56 2.9-2.2 5.36-4.69 7.03l7.23 5.64C43.93 37.59 46.98 31.59 46.98 24.5z"
              />
              <path
                fill="#4A90E2"
                d="M9.96 28.77a14.45 14.45 0 0 1-.76-4.27c0-1.48.27-2.91.76-4.27l-7.9-6.14C.67 17.51 0 20.68 0 24c0 3.32.67 6.49 2.06 9.91l7.9-6.14z"
              />
              <path
                fill="#FBBC05"
                d="M24 48c6.41 0 12.06-2.12 16.07-5.84l-7.23-5.64c-2.02 1.37-4.61 2.2-7.46 2.2-6.25 0-11.59-3.66-14.61-8.9l-7.9 6.14C6.38 42.84 14.62 48 24 48z"
              />
            </svg>
            Đăng nhập với Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

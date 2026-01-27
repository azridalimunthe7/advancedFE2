import Navbar from "../components/navbar.jsx";
import Button from "../components/button.jsx";
import Input from "../components/input.jsx";

function Login() {
  return (
    <div className="min-h-screen bg-[#f0f8ff]">
      {/* Navbar */}
      <Navbar />

      {/* Card Container */}
      <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-md">
        {/* Title */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-1">Masuk ke Akun</h3>
          <p className="text-sm text-gray-600">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>
        </div>

        {/* Form Input */}
        <div className="relative">
          {/* Email */}
          <Input
            label="Email"
            type="email"
            placeholder="Masukkan alamat email"
            required={true}
            id="email"
          />

          {/* Password */}
          <Input
            label="Password"
            type="password"
            placeholder="Masukkan password"
            required={true}
            id="password"
          />

          {/* Eye Icon */}
          <img
            src="/img/mdi_eye-off.png"
            alt="eye-off"
            className="w-[22px] absolute right-3 top-[115px] cursor-pointer"
          />

          {/* Lupa password */}
          <p className="text-sm text-orange-500 text-right mb-4 cursor-pointer">
            Lupa Password?
          </p>

          {/* Button Masuk */}
          <div className="flex justify-center items-cente flex-col gap-4">
            <Button type="button">Masuk</Button>

            <Button type="button">Daftar</Button>
          </div>
          {/* Frame */}
          <p className="text-center text-sm text-gray-500 mb-3">
            ---- atau ----
          </p>

          {/* Button Google */}
          <div className="relative flex justify-center items-cente flex-col gap-4">
            <Button type="button">Masuk dengan Google</Button>
            <img
              src="/img/logos_google-icon.png"
              alt="google"
              className="w-[22px] absolute left-4 top-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

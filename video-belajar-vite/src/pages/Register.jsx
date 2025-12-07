import Navbar from "../components/navbar.jsx";
import Button from "../components/button.jsx";
import Input from "../components/input.jsx";

function Register() {
  return (
    <div className="min-h-screen bg-[#f0f8ff]">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTAINER */}
      <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-md">
        {/* TITLE */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold">Pendaftaran Akun</h3>
          <p className="text-gray-600">Yuk, daftarkan akunmu sekarang juga!</p>
        </div>

        {/* FORM INPUT */}
        <div className="flex flex-col gap-3">
          <Input
            label="Nama Lengkap"
            type="text"
            id="text"
            placeholder="Masukkan nama lengkap"
            required={true}
          />

          <Input
            label="Email"
            type="email"
            id="email"
            placeholder="Masukkan alamat email"
            required={true}
          />

          {/* NOMOR HP */}
          <label className="text-sm font-medium">No. HP</label>
          <div className="flex items-center gap-2">
            <img src="/img/Logo.png" alt="bendera Indonesia" className="h-6" />

            <select
              id="telepon"
              className="border rounded-lg px-2 py-2 focus:ring-2 focus:ring-blue-400"
            >
              <option value="+62">+62</option>
            </select>

            <input
              id="tel"
              type="tel"
              className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* PASSWORD */}
          <label className="text-sm font-medium">Kata Sandi</label>
          <div className="relative">
            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
              required
            />
            <img
              src="/img/mdi_eye-off.png"
              alt="eye-off"
              className="w-5 absolute right-3 top-3 cursor-pointer"
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <Input
            label="Konfirmasi Kata Sandi"
            type="password"
            id="password"
            placeholder="Masukkan kata sandi"
            required={true}
          />

          {/* LUPA PASSWORD */}
          <p className="text-right text-sm text-blue-600 cursor-pointer hover:underline">
            Lupa Password?
          </p>

          {/* BUTTONS DAFTAR */}
          <Button type="submit">Masuk</Button>

          <Button type="submit">Daftar</Button>

          <p className="text-center text-gray-500 my-2">---- atau ----</p>
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

export default Register;

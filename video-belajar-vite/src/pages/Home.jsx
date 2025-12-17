import HeroSection from "../components/heroSection";
import CategoryMenu from "../components/categoryMenu";
import VideoList from "../components/videoList";
import { useState } from "react";
import { videoData } from "../data/videoData";
import axiosClient from "../service/api.js";
import { useEffect } from "react";
function Homepage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua Kelas");
  const [videos, setVideos] = useState(videoData);

  //State Tambah Card Video(Create/Post)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    name: "",
  });

  //Function Tambah Card Video(Create/Post)
  const createCourse = async () => {
    try {
      const response = await axiosClient.post("/courses", newCourse);

      // tampilkan card baru
      setCourses([...courses, response.data]);

      // reset form
      setNewCourse({ name: "" });

      // TUTUP MODAL OTOMATIS
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  // State Pengambilan Data Dari MockAPI(Read/Get)
  const [courses, setCourses] = useState([]);

  // Function Pengambilan Data Dari MockAPI(Read/Get)
  useEffect(() => {
    getCourses();
  }, []);
  const getCourses = async () => {
    try {
      const response = await axiosClient.get("/courses");
      setCourses(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  //State Edit Card Video(Update/Put)
  // State Edit Course
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");

  //Function Edit Card Video(Update/Put)
  const updateCourse = async (id) => {
    try {
      const response = await axiosClient.put(`/courses/${id}`, {
        name: editedName,
      });

      // Update state courses tanpa reload
      const updatedCourses = courses.map((course) =>
        course.id === id ? response.data : course
      );

      setCourses(updatedCourses);

      // Reset edit mode
      setEditingId(null);
      setEditedName("");
    } catch (err) {
      console.error(err);
    }
  };

  // Function Delete Card Video(Delete/Delete)
  const deleteCourse = async (id) => {
    try {
      await axiosClient.delete(`/courses/${id}`);

      // Hapus dari state
      const filteredCourses = courses.filter((course) => course.id !== id);

      setCourses(filteredCourses);
    } catch (err) {
      console.error(err);
    }
  };

  // 1. ADD VIDEO
  const addVideo = (newVideo) => {
    setVideos([...videos, newVideo]);
  };

  // 2. DELETE VIDEO
  const deleteVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  // 3. UPDATE VIDEO
  const updateVideo = (updatedVideo) => {
    setVideos(
      videos.map((video) =>
        video.id === updatedVideo.id ? updatedVideo : video
      )
    );
  };
  return (
    <div className="font-sans text-gray-800 bg-[#f5f5dc]">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-8 shadow bg-gray-200 rounded-xl">
        <img className="w-32 md:w-40" src="/img/videobelajar.png" alt="logo" />

        <div className="flex items-center gap-4 md:gap-6">
          <span className="cursor-pointer font-semibold hidden md:block hover:text-orange-500">
            Kategori
          </span>
          <img className="w-8 md:w-10" src="/img/profile.png" alt="avatar" />
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative mt-4">
        <img
          className="w-full h-[300px] md:h-[450px] object-cover rounded-lg brightness-50"
          src="/img/office.jpg"
          alt="office"
        />

        <div className="absolute top-6 left-6 md:top-10 md:left-10 max-w-xs md:max-w-xl text-white drop-shadow-lg">
          <h1 className="text-xl md:text-3xl font-bold leading-snug mb-3">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>

          <p className="text-sm md:text-lg">
            Temukan ilmu baru melalui koleksi video pembelajaran berkualitas
            tinggi dengan latihan interaktif.
          </p>

          <button className="bg-orange-500 cursor-pointer mt-4 md:mt-6 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-lg hover:bg-orange-600">
            Temukan Video Course!
          </button>
        </div>
      </header>

      {/* TITLE */}
      <section className="text-center mt-16 px-4">
        <h3 className="text-xl md:text-2xl font-bold">
          Koleksi Video Pembelajaran Unggulan
        </h3>
        <p className="text-gray-600 mt-1">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </section>

      {/* MENU LIST */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 text-gray-700 font-medium px-4">
        {[
          "Semua kelas",
          "Pemasaran",
          "Desain",
          "Pengembangan Diri",
          "Bisnis",
        ].map((item, i) => (
          <span key={i} className="cursor-pointer hover:text-orange-500">
            {item}
          </span>
        ))}
      </div>

      {/* CARD GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-10 mt-10">
        {[
          "item.png",
          "item1.png",
          "item2.png",
          "item3.png",
          "item4.png",
          "item5.png",
          "item6.png",
          "item7.png",
          "item8.png",
        ].map((card, i) => (
          <img
            key={i}
            src={`/img/${card}`}
            alt={`card-${i}`}
            className="border rounded-lg  hover:scale-105 transituion-transform duration-200 shadow hover:shadow-lg cursor-pointer"
          />
        ))}
      </div>

      {/* Daftar Video Saya */}
      <h2 className="text-2xl font-bold mb-5 text-gray-800 px-10 mt-10">
        Daftar Video Saya:
      </h2>
      <div>
        <HeroSection />
        {/* PASSING state & function ke CategoryMenu */}
        <CategoryMenu
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div>
          <button
            className="
            mb-6 bg-orange-500 text-white px-4 py-2 rounded 
            hover:bg-orange-600 ml-10 cursor-pointer"
            onClick={addVideo}
          >
            Tambah Course Saya
          </button>
        </div>
        {/* PASSING videos & selectedCategory ke VideoList */}
        <VideoList
          videos={videos}
          selectedCategory={selectedCategory}
          deleteVideo={deleteVideo}
          updateVideo={updateVideo}
        />
      </div>

      <h2 className="text-2xl font-bold mb-5 text-gray-800 px-10 mt-20">
        Daftar Video Baru:
      </h2>
      <button
        onClick={() => setIsModalOpen(true)}
        className="
          mb-6 bg-orange-500 text-white px-4 py-2 rounded
          hover:bg-orange-600 ml-10 cursor-pointer"
      >
        Tambah Course
      </button>

      {/*Pengambilan Data Courses dari MockAPI (Read/Get) */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-10 mt-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="
        bg-white 
        rounded-lg 
        p-4 
        border 
        shadow 
        hover:shadow-lg 
        hover:scale-[1.02] 
        transition 
        cursor-pointer

        /* RESPONSIVE */
        w-full
        max-w-[300px]        /* batas maksimal card */
        mx-auto              /* center di mobile */
      "
          >
            <img
              src={course.image}
              alt={course.name}
              className="
          w-full 
          h-36 sm:h-40 md:h-44 
          object-cover 
          rounded-lg
        "
            />

            <div className="p-4">
              {editingId === course.id ? (
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  className="border p-2 rounded w-full"
                />
              ) : (
                <h2 className="text-lg font-bold">{course.name}</h2>
              )}

              <div className="flex justify-between mt-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingId(course.id);
                      setEditedName(course.name);
                    }}
                    className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm
                    hoover:bg-yellow-600 cursor-pointer"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => updateCourse(course.id)}
                    className="px-3 py-1 bg-green-600 text-white rounded text-sm
                    hover:bg-green-700 cursor-pointer"
                  >
                    Simpan
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => deleteCourse(course.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded text-sm
                    hover:bg-red-700 cursor-pointer"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*Tambah Card Video(Create/Post)*/}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            {/* TOMBOL CLOSE */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl
              hoover:bg-gray-100 cursor-pointer"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Tambah Course</h2>

            <input
              type="text"
              placeholder="Nama Tutor"
              value={newCourse.name}
              onChange={(e) =>
                setNewCourse({ ...newCourse, name: e.target.value })
              }
              className="border p-2 rounded w-full mb-3"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="
                px-4 py-2 border rounded hover:shadow-lg 
                hover:scale-[1.02] 
                transition cursor-pointer"
              >
                Batal
              </button>

              <button
                onClick={createCourse}
                className="
                px-4 py-2 bg-orange-500 text-white rounded
                cursor-pointer hover:shadow-lg 
                hover:scale-[1.02] 
                transition "
              >
                Tambah
              </button>
            </div>
          </div>
        </div>
      )}

      {/* NEWSLETTER */}
      <section className="relative mt-16 px-4">
        <img
          className="w-full h-[280px] md:h-[400px] object-cover rounded-lg brightness-50"
          src="/img/closehero.jpg"
          alt="newsletter-bg"
        />

        <div className="absolute top-6 left-6 md:top-10 md:left-10 text-white max-w-sm md:max-w-md">
          <p className="text-xs md:text-sm tracking-widest">NEWSLETTER</p>
          <h3 className="text-2xl md:text-3xl font-bold my-2 md:my-4">
            Mau Belajar Lebih Banyak?
          </h3>

          <p className="text-sm md:text-base">
            Dapatkan info terbaru dan penawaran spesial dari program hariesok.id
          </p>

          <div className="mt-4 md:mt-6 flex">
            <input
              type="email"
              className="px-3 md:px-4 py-2 md:py-3 rounded-l-lg bg-white text-black w-40 md:w-64 text-sm md:text-base"
              placeholder="Masukkan email"
            />
            <button className="bg-orange-500 text-white px-4 md:px-5 rounded-r-lg hover:bg-orange-600 cursor-pointer text-sm md:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-10 py-16 bg-gray-100 mt-16">
        <div>
          <img className="w-36" src="/img/videobelajar.png" alt="logo" />
          <p className="mt-4 text-sm">
            Gali Potensi Anda Melalui Pembelajaran Video!
          </p>
          <p className="text-sm mt-2">
            Jl. Usman Effendi No. 50 Lowokwaru, Malang
          </p>
          <p className="text-sm mt-2">+62-877-7123-1234</p>
        </div>

        <div>
          <p className="font-bold mb-3">Kategori</p>
          {[
            "Digital & Teknologi",
            "Pemasaran",
            "Manajemen Bisnis",
            "Pengembangan Diri",
            "Desain",
          ].map((v) => (
            <p key={v}>{v}</p>
          ))}
        </div>

        <div>
          <p className="font-bold mb-3">Perusahaan</p>
          {[
            "Tentang Kami",
            "FAQ",
            "Kebijakan Privasi",
            "Ketentuan Layanan",
            "Bantuan",
          ].map((v) => (
            <p key={v}>{v}</p>
          ))}
        </div>

        <div>
          <p className="font-bold mb-3">Komunitas</p>
          {["Tips Sukses", "Blog"].map((v) => (
            <p key={v}>{v}</p>
          ))}
        </div>
      </footer>

      {/* COPYRIGHT */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-6 bg-gray-200 text-center md:text-left">
        <p className="text-sm">@2025 VIDEO BELAJAR.</p>
        <img
          src="/img/internet.png"
          alt="social"
          className="w-28 mt-2 md:mt-0"
        />
      </div>
    </div>
  );
}

export default Homepage;

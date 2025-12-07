function CategoryMenu({ selectedCategory, setSelectedCategory }) {
  const categories = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];

  return (
    <div
      className="
        flex 
        flex-col sm:flex-row     /* HP = kolom, Desktop = baris */
        gap-3 sm:gap-6
        items-start sm:items-center
        justify-center
        px-4
        py-4
      "
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`
            text-sm sm:text-lg
            px-3 py-2
            w-full sm:w-auto       /* HP = full width */
            text-left sm:text-center
            rounded-lg
            whitespace-normal      /* teks panjang turun ke bawah */
            transition
            cursor-pointer
            hover:text-orange-600 font-bold bg-orange-100

            ${
              selectedCategory === cat
                ? "text-orange-600 font-bold bg-orange-100"
                : "text-gray-700 bg-gray-100"
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;

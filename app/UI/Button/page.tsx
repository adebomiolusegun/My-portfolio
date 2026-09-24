function Button() {
  return (
    <div className="mt-7 flex flex-row w-full  gap-3 sm:w-auto sm:flex-row">
      <button
        className="
                body
                w-full
                rounded-md
                bg-primary
                px-5
                py-3
                text-background
                transition-all
                duration-200
                hover:bg-primary-hover
                hover:-translate-y-0.5
                sm:w-auto
              "
      >
        View Projects
      </button>

      <button
        className="
                body
                w-full
                rounded-md
                border
                border-primary
                px-5
                py-3
                text-primary
                transition-all
                duration-200
                hover:bg-primary/10
                sm:w-auto
              "
      >
        Get in Touch
      </button>
    </div>
  );
}

export default Button;

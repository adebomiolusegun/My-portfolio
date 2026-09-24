function Button() {
  return (
    <div className="mt-7 flex flex-row w-full  gap-3 sm:w-auto sm:flex-row">
      <button
        className="
                body
                w-auto
                rounded-md
                bg-primary
                px-5
                py-3
                text-background
                transition-all
                duration-200
                hover:bg-primary-hover
                hover:-translate-y-0.5
                sm:px-5
                sm:py-3
                sm:text-base
              "
      >
        View Projects
      </button>

      <button
        className="
                body
                w-auto
                rounded-md
                border
                border-primary
                px-5
                py-3
                text-primary
                transition-all
                duration-200
                hover:bg-primary/10
                sm:px-5
                sm:py-3
                sm:text-base
              "
      >
        Get in Touch
      </button>
    </div>
  );
}

export default Button;

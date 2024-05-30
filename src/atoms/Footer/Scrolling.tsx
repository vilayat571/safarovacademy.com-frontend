const Scrolling = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className=" px-3 py-2 text-white border text-sm mt-3 block"
    >
      up
    </button>
  );
};

export default Scrolling;

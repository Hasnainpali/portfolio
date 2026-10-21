export default function BackToTop() {
  return (
    <>
      <button
        aria-label="Back to top"
        className="back-top"
        id="backTop"
        type="button"
      >
        <span aria-hidden="true">↑</span>
      </button>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span>Built by Cristan Jay Otiong &middot; &copy; {new Date().getFullYear()}</span>
          <a href="#home">back to top &uarr;</a>
        </div>
      </div>
    </footer>
  )
}
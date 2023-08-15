export default function Nav({ links }) {
  const styles = {
    navBG: {
      backgroundColor: "#2D2D2A",
    },
  };

// This will iterate through all of the links from the link prop and render
  return (
    <nav className="navbar navbar-expand-lg" id="navbarSupportedContent" style={styles.navBG}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
          </ul>
    </nav>
  );
}

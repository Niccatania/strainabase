export default function Landing() {
    return (
      <>
        <div id="sidebar">
          <h1>Strainabase</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search strain"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">Search</button>
            </form>
          </div>
          <nav>
           
              <h3>
                <a href={`/strain/1`}>Watermelon Gelato</a>
              </h3>
           
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }
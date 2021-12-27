import { useEffect, useState } from "react";
import "./App.css";
import { CardList } from "./components/CardList";
import Header from "./components/Header/Header";
import { Title } from "./components/Title";
import { data, secondData } from "./utils/data";

function App() {
  const [page, setPage] = useState(0);

  function incrementPage() {
    if (page === 2) {
      return;
    }
    setPage(page + 1);
  }

  function decrementPage() {
    if (page === 0) {
      return;
    }
    setPage(page - 1);
  }

  return (
    <div className="App">
      <Header />

      <div className="main-content">
        <div className="content-left">
          <div className="content-left-main">
            {page === 0 && (
              <div className="page-one">
                <Title title="I WANT MY SITE TO BE BUILT ON (CHOOSE FRAMEWORK)" />
                <div className="left-card-list">
                  {data &&
                    data.map((data) => (
                      <div key={data.id}>
                        <CardList
                          title={data.title}
                          description={data.description}
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}

            {page === 1 && (
              <div className="page-one">
                <Title title="I WANT TO BUILD" />
                <div className="left-card-list">
                  {secondData &&
                    secondData.map((data) => (
                      <div key={data.id}>
                        <CardList
                          title={data.title}
                          description={data.description}
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}

            {page === 2 && (
              <div className="page-three">
                <h3>DO YOU HAVE UX DESIGN READY?</h3>
                <button>Yes</button> <button>No</button>
                <div>
                  <h3>
                    HOW MANY WEBPAGES DO YOU WANT FOR YOUR PUBLIC WEBSITE?
                  </h3>
                  <button type="button" onclick="hello()">
                    Pages+
                  </button>
                  <p>
                    Add: <a id="Pages">2</a>
                  </p>
                </div>
                <div>
                  {" "}
                  <h3>ANY PAYMENT GATEWAY INTEGRATION? </h3>
                  <div class="btn-group">
                    <button>Stripe</button>
                    <button>Paypal</button>
                    <button>Both</button>
                    <button>None</button>
                  </div>
                </div>
              </div>
            )}

            <div className="content-left-footer">
              <button onClick={decrementPage}>PREVIOUS</button>
              <button onClick={incrementPage}>NEXT</button>
            </div>
          </div>
        </div>

        {/* right page */}
        <div className="content-right">
          {(page === 0 || page === 1) && (
            <div className="right-page-one">
              <p>PLEASE INPUT ALL THE FIELDS TO SHOW ESTIMATED PRICE</p>
            </div>
          )}

          {page === 2 && (
            <div className="page-three">
              <h1>Result</h1>
              <div className="btn">
                <footer>
                  <button>START YOUR PROJECT NOW</button>
                </footer>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

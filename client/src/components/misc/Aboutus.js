import React, { Component } from "react";

const AboutUs = () => (
  <div className="container">
    <div style={{ marginTop: "4rem" }} className="row">
      <div className="col-12">
        <h3>About Us</h3>
        <hr />
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Our History</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            egestas ante ligula, at consequat sapien laoreet at. Nunc fringilla
            nunc tempus, tempor nisl quis, pharetra diam. Praesent ac porttitor
            sem. Aenean vitae blandit neque, at vestibulum nibh. Ut feugiat
            varius quam. Ut vehicula ex ut blandit feugiat. Vestibulum dui
            massa, volutpat non ligula eget, commodo vestibulum dolor. Cras ante
            ex, eleifend eu orci et, aliquet congue metus. Etiam at diam ac
            tellus fermentum blandit in imperdiet urna. Pellentesque
            scelerisque, erat et ultricies dignissim, justo justo posuere arcu,
            consectetur dapibus libero ex vitae leo. Quisque lacinia venenatis
            nibh non imperdiet.
          </p>
          <p>
            Sed a arcu eu lorem posuere dictum.
            <em>Mauris sodales risus ac semper tempus.</em>,Maecenas ullamcorper
            libero sit amet turpis tincidunt commodo.
          </p>
        </div>

        <div className="col-12">
          <blockquote className="blockquote">
            <p className="mb-0">Morbi maximus mi ut nisl tempus semper.</p>
            <footer className="blockquote-footer">
              Yogi Berra,
              <cite title="Source Title">
                Nam porttitor quam id nisi commodo, sed sodales magna porta.
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>

      <div className="row row-content">
        <div className="col-12">
          <h2>Corporate Leadership</h2>
          <div class="row">
            <div class="col s5 m3">
              <div class="card">
                <div class="card-image">
                  <img src="images/eminem.jpg" />
                  <span class="card-title">Eminem</span>
                </div>
                <div class="card-content">
                  <p>
                    Marshall Bruce Mathers III, known professionally as Eminem,
                    is an American rapper, songwriter, record producer, record
                    executive, film producer, and actor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;

import React from "react";
import Porto from "../utils/PortoList";

export default () => {
  return (
    <main class="container-fluid">
      <section id="portfolio">
        <div class="container-fluid p-0">
          <div class="row no-gutters">
            {Porto.map(item => (
              <div class="col-lg-4 col-sm-6">
                <a class="portfolio-box" href={item.href}>
                  <img src={item.src} class="img-fluid" alt={item.alt} />
                  <div class="portfolio-box-caption">
                    <div class="project-name"> {item.name} </div>
                    <div class="project-category text-white-50">
                      {item.description}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> 
    </main>
  );
};

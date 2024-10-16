const htmlGenerator = ({Title, Description, Table of Contents, Installtion, Usage, License, Contributions, Tests,  Questions,}) => {
    return `
    <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <title>${name}</title>
    <link crossorigin="anonymous" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" rel="stylesheet">
  </head>
  <body>
  <nav class="navbar navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">${name}</a>
      <button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
              data-bs-target="#navbarNav" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  
  <div class="container my-4">
    <div class="row">
      <div class="col-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${jobTitle}</h6>
            <h6 class="card-subtitle mb-2 text-body-secondary">${location}</h6>
            <p class="card-text">${bio}</p>
            <a class="card-link" href="${linkedInUrl}">LinkedIn</a>
            <a class="card-link" href="${gitHubUrl}">Github</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  <script crossorigin="anonymous"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
  </html>
    `
  }
  
  module.exports = htmlGenerator;
const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ children, user }) {
  return (
<<<<<<< HEAD
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <script defer src="/js/application.js" />
        <link rel="stylesheet" href="/styles/navbar.css" />
        <link rel="stylesheet" href="/styles/styles.css" />
        <title>Voting-for-initiatives</title>
      </head>

      <body>
        <Navbar user={user} />
        {children}
      </body>

=======
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <nav className="navbar navbar-dark navbar-expand-md bg-dark py-3">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <span>Голосование за инициативы</span>
            </a>
            <button
              dataBsToggle="collapse"
              className="navbar-toggler"
              dataBsToggle="#navcol-6"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse flex-grow-0 order-md-first"
              id="navcol-6"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item" />
                <li className="nav-item" />
              </ul>
              <div className="d-md-none my-2">
                <button className="btn btn-light me-2" type="button">
                  Button
                </button>
                <button className="btn btn-primary" type="button">
                  Button
                </button>
              </div>
            </div>
            <div className="d-none d-md-block">
              <a className="btn btn-light me-2" role="button" href="#">
                Личный кабинет
              </a>
              <a className="btn btn-primary" role="button" href="#">
                Выход
              </a>
            </div>
          </div>
        </nav>
        {children}
      </body>
>>>>>>> 4fa2d772720cd8659b111e95e1bc22a10bdc5891
    </html>
  );
};

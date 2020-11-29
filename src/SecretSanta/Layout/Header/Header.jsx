import React from 'react';
// import { Link, Route } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
          <>
              {/*<nav className="navbar navbar-default" role="navigation">*/}
              {/*    <div className="navbar-header">*/}
              {/*        <button type="button" className="navbar-toggle">*/}
              {/*            <span className="sr-only">Toggle navigation</span>*/}
              {/*            <span className="icon-bar"></span>*/}
              {/*            <span className="icon-bar"></span>*/}
              {/*            <span className="icon-bar"></span>*/}
              {/*        </button>*/}
              {/*        <Link className="navbar-brand brand" to="/">Developers rules</Link>*/}
              {/*    </div>*/}

              {/*    <div className="collapse navbar-collapse">*/}
              {/*        <ul className="nav navbar-nav">*/}
              {/*            <Route exact path="/">*/}
              {/*                {({ match }) => <li className={match ? 'active' : ''}>*/}
              {/*                    <Link to="/">Home</Link>*/}
              {/*                </li>*/}
              {/*                }*/}
              {/*            </Route>*/}
              {/*            <Route path="/new">*/}
              {/*                {({ match }) => <li className={match ? 'active' : ''}>*/}
              {/*                    <Link to="/new">New</Link>*/}
              {/*                </li>*/}
              {/*                }*/}
              {/*            </Route>*/}
              {/*        </ul>*/}
              {/*    </div>*/}
              {/*</nav>*/}
          </>
        );
    }
}

export default Header;
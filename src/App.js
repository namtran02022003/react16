
import './App.css';

function App(){
    return(
        <div>
        <div className="header">
          <i style={{fontSize: '24px'}} className="fa hover-icon fa-bars " />
          <div className="text-header center">
            <h4>BEAUTIFUL RESPONSIVE WEB SITES</h4>
            <h1>BUILT WITH W3.CSS</h1>
            <div className="div-button">
              <button className="button-header">
                LEARN W3.CSS
              </button>
            </div>
          </div>
        </div>
        <div style={{marginTop: '16px'}} className="menu-float center">
          <div className="menu-float-small">
            <div className="div-border">
              <h2>Responsive</h2>
              <br />
              <i className="fa fa-desktop " style={{fontSize: '120px'}} />
              <p>Built-in responsiveness</p>
              <p>Built-in responsiveness</p>
              <p>Built-in responsiveness</p>
              <p>Built-in responsiveness</p>
            </div>
          </div>
          <div className="menu-float-small">
            <div className="div-border">
              <h2>Responsive</h2>
              <br />
              <i className="fa fa-css3 " style={{fontSize: '120px'}} />
              <p>Built-in responsiveness</p>
              <p>Built-in responsiveness</p>
              <p>Built-in responsiveness</p>
              <p>Built-in responsiveness</p>
            </div>
          </div>
          <div className="menu-float-small">
            <div className="div-border">
              <h2>Responsive</h2>
              <br />
              <i className="fa fa-diamond " style={{fontSize: '120px'}} />
              <p>Built-in responsiveness</p>
              <p>Built-in responsiveness</p>
              <p>Built-in responsiveness</p>
              <p>Built-in responsiveness</p>
            </div>
          </div>
        </div>
        <div className="div-padding">
          <hr />
          <h2 className="center">Color Classes</h2>
          <div style={{padding: 0}} className="menu-float">
            <div style={{background: 'red'}} className="menu-float-small5">
              Red
            </div>
            <div style={{background: 'blue'}} className="menu-float-small5">
              blue
            </div>
            <div style={{background: 'Grey'}} className="menu-float-small5">
              Blue Grey
            </div>
            <div style={{background: 'Yellow', color: '#000'}} className="menu-float-small5">
              Yellow
            </div>
            <div style={{background: 'Orange', color: '#000'}} className="menu-float-small5">
              Orange
            </div>
          </div>
          <hr />
          <h1 className="center">Built-In Responsiveness</h1>
          <h2 className="center">Resize the page to see the effect!</h2>
        </div>
        <div className="div-padding">
          <div className="menu-float" style={{padding: 0, border: '1px solid #ddd'}}>
            <div style={{width: '50%', background: '#2196F3', color: '#fff', padding: '20px'}} className="menu-float-small">
              <h2>w3-half</h2>
              <p>The w3-half class uses half (50%) of the screen window.</p>
              <p>On small screens (max 600 pixels) it automatically resizes to full screen width.</p>
            </div>
            <div style={{width: '50%', padding: '20px'}} className="menu-float-small">
              <h2>w3-half</h2>
            </div>
          </div>
          <div style={{border: '1px solid #ddd', padding: 0}} className="menu-float">
            <div style={{background: '#4CAF50', color: '#ffffff'}} className="menu-float-small">
              <h2>w3-third</h2>
              <p>The w3-third class uses one third (33.33%) of the screen widow.</p>
              <p>On small screens (max 600 pixels) it automatically resizes to full screen width.</p>
            </div>
            <div className="menu-float-small">
              <h2>w3-third</h2>
            </div>
            <div className="menu-float-small">
              <h2>w3-third</h2>
            </div>
          </div>
          <div style={{border: '1px solid #ddd', padding: 0}} className="menu-float">
            <div style={{width: '25%', color: '#fff', background: 'red'}} className="menu-float-small">
              <h2> w3-quarter</h2>
              <p>The w3-quarter class uses one quarter (25%) of the screen window.</p>
              <p>On small screens (max 600 pixels) it automatically resizes to full screen width.</p>
            </div>
            <div style={{width: '25%'}} className="menu-float-small">
              <h2>w3-quarter</h2>
            </div>
            <div style={{width: '25%'}} className="menu-float-small">
              <h2>w3-quarter</h2>
            </div>
            <div style={{width: '25%'}} className="menu-float-small">
              <h2>w3-quarter</h2>
            </div>
          </div>
          <h1 className="center">Containers</h1>
          <p className="center">Use containers to create headers, sections and footers.</p>
          <h1 style={{color: '#fff', background: '#607d8b', padding: '0 20px'}}>header</h1>
          <div style={{position: 'relative'}} className="div-padding">
            <span className="span-right">
              <i className="fa fa-remove" />
            </span>
            <h1>London</h1>
            <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a
              metropolitan area of over 13 million inhabitants.</p>
            <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going
              back to its founding by the Romans, who named it Londinium.</p>
            <p>By the way, you can add a close icon to all containers if you want the ability to hide them. Look to your
              right!</p>
          </div>
          <div className="div-nau">
            <div className="div-padding">
              <h2>Footer</h2>
              <h3>Footer information goes here</h3>
            </div>
          </div>
          <hr />
          <h1 className="center">Color Themes</h1>
          <p className="center">The color themes have been designed to work harmoniously with each other.</p>
        </div>
        <div className="menu-float">
          <div style={{width: '50%'}} className="menu-float-small">
            <ul className="list-ul">
              <li style={{backgroundColor: '#3f51b5', color: '#fff'}} className="list-li">
                <h2>Theme Indigo</h2>
              </li>
              <li style={{color: '#3f51b5'}} className="list-li">
                <h2>Movies 2014</h2>
              </li>
              <li className="list-li">
                <h2>Frozen</h2>
                <p>The response to the animations was ridiculous</p>
              </li>
              <li className="list-li">
                <h2>The Fault in Our Stars</h2>
                <p>Touching, gripping and genuinely well made</p>
              </li>
              <li className="list-li">
                <h2>The Avengers</h2>
                <p>A huge success for Marvel and Disney</p>
              </li>
              <li style={{backgroundColor: '#3f51b5', color: '#ffffff'}} className="list-li">
                <span style={{float: 'right'}}>next</span>
              </li>
            </ul>
          </div>
          <div style={{width: '50%'}} className="menu-float-small">
            <ul className="list-ul">
              <li style={{backgroundColor: '#000000', color: '#fff'}} className="list-li">
                <h2>Theme Indigo</h2>
              </li>
              <li style={{color: '#3f51b5'}} className="list-li">
                <h2>Movies 2014</h2>
              </li>
              <li className="list-li">
                <h2>Frozen</h2>
                <p>The response to the animations was ridiculous</p>
              </li>
              <li className="list-li">
                <h2>The Fault in Our Stars</h2>
                <p>Touching, gripping and genuinely well made</p>
              </li>
              <li className="list-li">
                <h2>The Avengers</h2>
                <p>A huge success for Marvel and Disney</p>
              </li>
              <li style={{backgroundColor: '#000000', color: '#ffffff'}} className="list-li">
                <span style={{float: 'right'}}>next</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="div-paddingW3.CSS Reference">
          <hr />
          <h2 className="center">Paper-like Cards with Shadows</h2>
        </div>
        <div className="menu-float">
          <div className="menu-float-small">
            <div className="list-ul">
              <img src="https://www.w3schools.com/w3images/car.jpg" width="100%" />
              <p style={{padding: '0 0 20px 20px'}}>w3-card</p>
            </div>
          </div>
          <div className="menu-float-small">
            <div className="list-ul">
              <img src="https://www.w3schools.com/w3images/car.jpg" width="100%" />
              <p style={{padding: '0 0 20px 20px'}}>w3-card</p>
            </div>
          </div>
          <div className="menu-float-small">
            <div className="list-ul">
              <img src="https://www.w3schools.com/w3images/car.jpg" width="100%" />
              <p style={{padding: '0 0 20px 20px'}}>w3-card</p>
            </div>
          </div>
        </div>
        <div className="div-padding">
          <hr />
          <h2 className="center">Tables</h2>
          <p className="center">Don't worry. W3.CSS takes care of your tables.</p>
          <div className="div-border2">
            <table className="style-table">
              <thead>
                <tr className="tr-black">
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jill</td>
                  <td>Smith</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>Eve</td>
                  <td>Jackson</td>
                  <td>94</td>
                </tr>
                <tr>
                  <td>Adam</td>
                  <td>Johnson</td>
                  <td>67</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
        </div>
        <div className="center">
          <h1>Forms and Lists</h1>
        </div>
        <div className="menu-float">
          <div style={{width: '50%'}} className="menu-float-small">
            <div className="list-ul">
              <div style={{padding: '15px 20px'}} className="b">
                <h2>
                  Input Form
                </h2>
                <input type="text" className="input-form" />
                <label>Name</label>
                <input type="text" className="input-form" />
                <label>email</label>
                <input type="text" className="input-form" />
                <label>Subject</label>
                <div style={{padding: 0}} className="menu-float">
                  <div style={{padding: 0, width: '50%'}} className="menu-float-small">
                    <input type="checkbox" className="input-checkbox" />
                    <label>Milk</label>
                    <br />
                    <input type="checkbox" className="input-checkbox" />
                    <label>sugar</label>
                    <br />
                    <input type="checkbox" className="input-checkbox" disabled />
                    <label>Lemon (Disabled)</label>
                  </div>
                  <div style={{padding: 0, width: '50%'}} className="menu-float-small">
                    <input type="radio" className="input-checkbox" />
                    <label>Milk</label>
                    <br />
                    <input type="radio" className="input-checkbox" />
                    <label>sugar</label>
                    <br />
                    <input type="radio" className="input-checkbox" disabled />
                    <label>Lemon (Disabled)</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{width: '50%'}} className="menu-float-small">
            <div className="list-ul">
              <div style={{padding: '15px 20px'}} className="b">
                <h2>Lists</h2>
                <p>Jill</p>
                <hr />
                <p>eve</p>
                <hr />
                <p>adam</p>
                <br />
                <form style={{border: '1px solid #ddd'}}>
                  <ul style={{margin: 0}}>
                    <li style={{color: '#fff', background: '#000'}} className="list-li">jill</li>
                    <li className="list-li f">eve</li>
                    <li className="list-li f">adam</li>
                    <li className="list-li f">Steve</li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="div-padding">
          <h2 className="center">Progress Bars</h2>
          <div className="div-big">
            <div className="div-small center">5%</div>
          </div>
          <button className="button-div-small">click me</button>
        </div>
        <hr />
        <div className="div-padding center">
          <h1>Slideshows</h1>
          <img src="https://www.w3schools.com/w3images/snow.jpg" width="60%" />
          <hr />
          <h1>Navigation</h1>
          <div style={{color: '#fff', background: '#000', padding: 0}} className="menu-float">
            <a href="#" className="a-menu">home</a>
            <a href="#" className="a-menu">link 1</a>
            <a href="#" className="a-menu">dropdown</a>
          </div>
          <hr />
          <h1>Accordions</h1>
          <div>
            <a href="#">
              <div className="menu-section">
                open section 1
              </div>
            </a>
            <a href="#">
              <div className="menu-section">
                open section 2
              </div>
            </a>
            <a href="#">
              <div className="menu-section">
                open section 3
              </div>
            </a>
          </div>
          <hr />
          <h1>Tabs</h1>
          <div className="menu-tabs">
            <div style={{color: '#fff', background: '#000', padding: 0, margin: 0}} className="menu-float">
              <a style={{background: '#666'}} href="#" className="a-menu">london</a>
              <a href="#" className="a-menu">paris</a>
              <a href="#" className="a-menu">tokyo</a>
            </div>
            <div className="div-padding">
              <h2>London</h2>
              <p>London is the capital city of England.</p>
              <p>It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million
                inhabitants.</p>
            </div>
          </div>
          <hr />
          <h1>Buttons</h1>
          <div className="menu-float">
            <button className="button-footer">button</button>
            <button className="button-footer">button</button>
            <button className="button-footer">button</button>
            <br />
            <br />
            <p>
              <a href="#" className="a-footer"><i className="fa fa-plus" /></a>
              <a href="#" className="a-footer"><i className="fa fa-plus" /></a>
              <a href="#" className="a-footer"><i className="fa fa-plus" /></a>
            </p>
            <button className="button-footer">Dropdown </button>
          </div>
        </div>
        <hr />
        <div className="center">
          <h1>Pagination</h1>
          <div className="menu-float center">
            <div className="div-inline">
              <a href="#" className="menu-a-footer">«</a>
              <a style={{background: '#000', color: '#ffffff'}} href="#" className="menu-a-footer">1</a>
              <a href="#" className="menu-a-footer">2</a>
              <a href="#" className="menu-a-footer">3</a>
              <a href="#" className="menu-a-footer">4</a>
              <a href="#" className="menu-a-footer">5</a>
              <a href="#" className="menu-a-footer">»</a>
            </div>
          </div>
        </div>
        <div className="footer">
          <h1>footer</h1>
          <h2>Powered by w3.css</h2>
          <h2>Remember to check out our <a style={{color: '#000', padding: '8px 16px', background: '#f1f1f1'}} href="#">W3.CSS
              Reference</a></h2>
        </div>
      </div>
    )
}
export default App;
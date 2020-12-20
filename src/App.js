import React, { Component } from 'react';
import './App.css';


class App extends Component {
  getStuff() {
    return <p>Aubida Naalwa</p>
  }

  getMorningGreeting() {
    return <div>Good Morning</div>;
  }

  getEveningGreeting() {
    return <div>Good Evening</div>;
  }

  
  showCompany(name, revenue) {
    return <div id='{name}'>{name} makes {revenue} every year</div>
      
    
  }

  getClassName(temperature) {
    if(temperature < 15)
      return <div id="weatherBox" class="freezing"></div>
    if(temperature >= 15 && temperature<=30)
      return <div id="weatherBox" class="fair"></div>
    if(temperature >= 30)
      return <div id="weatherBox" class="hell-scape"></div>
  
    
    }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            {this.getStuff()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {new Date().getHours() < 12 ? this.getMorningGreeting() : this.getEveningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
             { [this.getMorningGreeting(),
              this.getEveningGreeting(),
              <p>some text</p>]}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companies.map(v=>this.showCompany(v.name, v.revenue))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(10)}
            {this.getClassName(20)}
            {this.getClassName(100)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;

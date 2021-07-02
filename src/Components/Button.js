import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props)
this.state = {
    quoteIndex: 0,
    colorIndex: 0,
    btnColorIndex: 0
}
    }

handleClick() {
this.setState ({
quoteIndex: Math.floor(Math.random()*7),
colorIndex: Math.floor(Math.random()*7),
btnColorIndex: Math.floor(Math.random()*7)
})    
}

    render() {
      
        const quotes = [
            ["Act as if what you do makes a difference. It does.", "William James"],
            ["Success is not final, failure is not fatal: it is the courage to continue that counts.", "Winston Churchill"],
            ["Never bend your head. Always hold it high. Look the world straight in the eye.", "Helen Keller"],
            ["What you get by achieving your goals is not as important as what you become by achieving your goals.", "Zig Ziglar"],
            ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
            ["I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", "Jimmy Dean"],
            ["No matter what you're going through, there's a light at the end of the tunnel.", "Demi Lovato"]
        ]
        const colorArray = [
            "#FF5733",
            "#D35400",
            "#3364FF",
            "#AF7AC5",
            "#B9770E",
            "#239B56",
            "orange",
        ]
        let buttonArray = 
        ["btn btn-default btn-primary", 
        "btn btn-default btn-danger",
        "btn btn-default btn-info",
        "btn btn-default btn-secondary",
        "btn btn-default btn-success",
        "btn btn-default btn-warning",
        "btn btn-default btn-dark"]
        
        const buttonChange = buttonArray[this.state.btnColorIndex]

        return (
          <div className="div-container" style={{ color: colorArray[this.state.colorIndex] }}>
            <p className="text-center" id="text">
              <i className="fas fa-quote-left quote"></i>
              {quotes[this.state.quoteIndex][0]}
              </p>
              
            <p id="author"> - {quotes[this.state.quoteIndex][1]}</p>

            <div className="row my-container">
              <div className="col-xs-7 ">
                <a href="twitter.com/intent/tweet" target="_blank">
                  <button
                    className={buttonChange}
                    id="tweet-quote"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                </a>
                <button
                  className={buttonChange}                >
                  <i className="fab fa-tumblr"></i>
                </button>
              </div>
              <div className="col-xs-5">
                <button
                  className={buttonChange}
                  id="new-quote"
                  onClick={this.handleClick.bind(this)}
                >
                  Get Quote!
                </button>
              </div>
            </div>
          </div>
        );
    }
}


export default Button


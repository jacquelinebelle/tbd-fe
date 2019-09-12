import React, { Component } from 'react'
export class CitiesPage extends Component {

  componentDidMount () {
      const script = document.createElement("script");
      script.src = "https://teleport.org/assets/firefly/widget-snippet.min.js";
      script.async = true;
      document.body.appendChild(script);
  }

  render() {
    return (
    <div>
        <a class="teleport-widget-link" href="https://teleport.org/cities/belize-city/">Life quality score - Belize City</a><script async class="teleport-widget-script" data-url="https://teleport.org/cities/belize-city/widget/scores/?currency=USD" data-max-width="770" data-height="977" src="https://teleport.org/assets/firefly/widget-snippet.min.js"></script>
    </div>
    )
  }
}

export default CitiesPage


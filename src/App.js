import React, { Component} from 'react';
import Twitter from './Twitter';
class App extends Component {
  state = {
    loading: false,
    active: true,
  }

  componentDidMount(){
    setTimeout(() =>{
      this.setState({
        loading: true})
    },3000)
  }

  onRemove = () => {
    const {active} = this.state
     this.setState({
       active: !active
     })
  }

  render() {
    const posts = [{
      title: 'xpto',
      description: 'foo'
    },
    {
      title: 'xpto',
      description: 'foo'
    }
  ]

    return (
      <div>
        <button onClick={this.onRemove}> Remove component</button>
        {this.state.active && (
          <Twitter posts={posts} loading={this.state.loading}/>
        )}
      </div>
    )
  }
}

export default App
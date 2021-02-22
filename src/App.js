import React from 'react'
import $ from 'jquery'

export default class App extends React.Component {
    componentDidMount(){
        

        $('<h1 />').text('Hello world from jquery').appendTo($('header')).css({textAlign: 'center', color: 'red'}) 
    }
    render() {
        return (
            <React.Fragment>
                <header></header>
                <hr />
                <div className="box">
                    <h2 className="box-title">Box-title</h2>
                    <p className="box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum explicabo deserunt ratione temporibus libero, similique laudantium. Quis, repellendus distinctio.</p>

                </div>
            </React.Fragment>
        )
    }
}
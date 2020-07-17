import React from "react";
import $ from 'jquery';

class App extends React.Component{
    componentDidMount(){
        $('<h1/>')
        .text('Jquery import in webpack')
        .css({
            textAlign:'center',
            color:'blue'
        })
        .appendTo($('header'))
    }
    render(){
        return(
            <React.Fragment>
                <header></header>
                <hr/>
                <div id="root"></div>
                <div className="box">
                    <div className="box-title">Less</div>
                    <div className="box-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas totam non explicabo dolores, quae nobis.</div>
                </div>
                <footer>
                    <div className="copyright">2020 Webpack__KimMak</div>
                </footer>
            </React.Fragment>
        )
    }
}

export default App
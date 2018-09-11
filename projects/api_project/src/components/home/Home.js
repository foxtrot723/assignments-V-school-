import React from 'react'
import './home.css'
import Form from './Form'
// import Display from './Display'

class Home extends React.Component {
    render() {
        return (
            <div className = "home-page-wrap">
                <div className = "bruce-lee-container">
                    <p className = "bruce-lee-quote"><q>Be Happy, But Never Satisfied </q>
                    <br /> <span className = "bruce-lee-name">-Bruce Lee</span></p>
                </div>
                <div className = "black-top"></div>
                <img className = "source-image" alt = "" />
                <div className = "gray-divide-1"></div>
                <img className = "source-image-2" alt = "" />
                <Form />
            </div>
        )
    }
}

export default Home
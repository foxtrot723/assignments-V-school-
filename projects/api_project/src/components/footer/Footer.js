import React from 'react'
import './footer.css'

class Footer extends React.Component {

    render() {
        return (
            <div className = "footer-wrap">
                <img className = "michael"  alt = "" />
                <div>
                    <h2 className = "mike-title">A word From the President</h2>
                    <hr />
                    <p className = "mike-words">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat rerum officiis quam culpa ad tenetur corrupti inventore temporibus accusantium! Consequuntur fugiat enim placeat. Cum quidem numquam, et ullam repellat dolores itaque qui quam nulla, non adipisci. Ad sequi maiores tenetur aliquid, aliquam molestiae necessitatibus temporibus adipisci praesentium velit dolorum nesciunt quo, exercitationem.
                    </p> 
                </div>
                <a className = "mike-email">michael.olson.cmx@gmail.com</a>
                <div className = "icon-container">
                    <i className = "fab fa-facebook-square fa-2x"></i>
                    <i className = "fab fa-instagram fa-2x"></i>
                    <i className = "fab fa-linkedin fa-2x"></i>
                    <i className = "fab fa-snapchat-square fa-2x"></i>
                </div>
                <i className = "fas fa-arrow-alt-circle-up"></i>
            </div>
        )
    }
}

export default Footer

// onClick = {this.scrollUp()}
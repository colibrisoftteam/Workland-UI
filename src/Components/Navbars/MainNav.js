import React, {Component} from 'react';
import {Avatar} from "../../assets/icons/svg";
import {Link} from "react-router-dom";
import "./MainNav.css";
import {changeFlag} from '../../store/actions/actions';
import usa from "../../assets/images/usa.png";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import russia from "../../assets/images/russia.png";
//todo should add redux for flags
class MainNav extends Component {
    render() {
        const flag =  this.props.flag ? russia : usa;
        console.log(this.props.flag);
        return (
            <div className="main-nav">
                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <div style={{marginLeft: "10rem", }}>
                                <Link to={'#'}>Workland</Link>
                            </div>
                            <div  onClick={this.props.changeFlag} className="flag-container">
                                <img className="usa-flag" src={flag}  alt="USA/Russian Flags"/>
                            </div>
                            <div className="nav-profile">
                                <Link to={'/profile'} >John Doe <Avatar/></Link>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({changeFlag}, dispatch)
})

const mapStateToProps = state => ({
    flag : state.flag
})

MainNav = connect(mapStateToProps,mapDispatchToProps)(MainNav);
export default MainNav;
import React, {Component} from 'react';
import {Avatar} from "../../assets/icons/svg";
import {Link} from "react-router-dom";
import "./MainNav.css";
import {changeFlag} from '../../store/actions/actions';
import usa from "../../assets/images/usa.png";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import russia from "../../assets/images/russia.png";

class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDown: false
        }
    }

    dropDown(){
        return (
            <div className="profile-dropDown">
                <div className="dropDown-item">
                    <Link to={'/profile'}>Profile</Link>
                </div>
                <div className="dropDown-item">
                    <Link to={'/settings'}>Settings</Link>
                </div>
                <div className="dropDown-item">
                    <Link to={'/payment'}>Payment</Link>
                </div>
                <div className="dropDown-item">
                    <Link to={'help'}>Help</Link>
                </div>
                <div className="dropDown-item">
                    <Link>Exit</Link>
                </div>
            </div>
        )
    }

    render() {
        const flag =  this.props.flag ? russia : usa;
        const flagName = this.props.flag ? "RU": "USA";

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
                                <Link to={'/'}>Workland</Link>
                            </div>
                            <div  onClick={this.props.changeFlag} className="flag-container">
                                <img className="flag" src={flag}  alt="USA/Russian Flags"/>
                                <span style={{marginTop: "0px"}} className="language">{flagName}</span>
                            </div>
                            <div
                                onClick={() => {this.setState({dropDown: !this.state.dropDown})}}
                                className="nav-profile">
                                John Doe <Avatar/>
                                <div>
                                    {this.state.dropDown && this.dropDown()}
                                </div>
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
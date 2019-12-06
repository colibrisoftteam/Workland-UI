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

    dropDown = () => {
        return (
            <div className="profile-dropDown">
                <div className="dropDown-item">Profile</div>
                <div className="dropDown-item">Settings</div>
                <div className="dropDown-item">Payment</div>
                <div className="dropDown-item">Help</div>
                <div className="dropDown-item">Exit</div>
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
                                <Link to={'/profile/profile'} >John Doe <Avatar/></Link>
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
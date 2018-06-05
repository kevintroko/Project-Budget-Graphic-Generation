import React from 'react';
import  PropTypes  from 'prop-types';

class MonthBox extends React.Component {
        constructor(props, context) {
            super(props, context)

            this.state = {
                value: this.props.value || 'N/A',
            }

            this._handleClick = this._handleClick.bind(this)
        }

        componentWillReceiveProps(nextProps){
            this.setState({
                value: nextProps.value || 'N/A',
            })
        }

        render() {

            return (
                <div className="box" onClick={this._handleClick}>
                    <label>{this.state.value}</label>
                </div>
            )
        }

        _handleClick(e) {
            this.props.onClick && this.props.onClick(e)
        }
    }


    MonthBox.propTypes = {
        value: PropTypes.string,
        onClick: PropTypes.func,
    };

export default MonthBox;
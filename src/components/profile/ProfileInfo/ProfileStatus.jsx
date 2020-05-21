import React from "react";


export default class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    onEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    offEditMode = () =>  {
        this.setState({
            editMode: false
        });
        this.props.updateStatusUser(this.state.status);
    }


    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.onEditMode }>{this.props.status || "---"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={ this.onChangeStatus }  autoFocus={true} onBlur={ this.offEditMode } value={this.state.status}/>
                    </div>
                }
            </>
        )
    }
}
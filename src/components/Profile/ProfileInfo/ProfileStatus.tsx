import React, {ChangeEvent} from 'react';


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
    getStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.props.getStatus("24212")
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {

        this.setState({
            status: e.currentTarget.value
        })
    }

    // prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any
    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode}
                               value={this.state.status || "------"} type="text"/>
                    </div>
                }
            </div>
        );
    }
}

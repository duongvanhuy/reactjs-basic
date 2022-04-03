import React from 'react'
import ChildComponent from './ChildComponent'
class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'abcJob1', job: 'teacher', address: 'Hà Nội' },
            { id: 'abcJob2', job: 'student', address: 'Hà Nội' },
            { id: 'abcJob3', job: 'doctor', address: 'TP.Hồ Chí Minh' },
        ]

    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLasttName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleOnClickSubmit = (event) => {
        event.preventDefault()
        console.log('Value form: ', this.state)
    }

    render() {
        return (
            <>
                <form >
                    <label htmlFor="fname">First name:</label ><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLasttName(event)}
                    /><br /><br />
                    <input type="submit" value="Submit" onClick={(event) => this.handleOnClickSubmit(event)} />
                </form >
                <ChildComponent
                    name={'Huy'}
                    age={'21'}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent
import React from "react";

class FormComponent extends React.Component {
    state = {
        jobName: '',
        salary: '',
    }
    handleChangeJobName = (event) => {
        this.setState({
            jobName: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
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
                        value={this.state.jobName}
                        onChange={(event) => this.handleChangeJobName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    /><br /><br />
                    <input type="submit" value="Submit" onClick={(event) => this.handleOnClickSubmit(event)} />
                </form >

            </>
        )
    }

}

export default FormComponent
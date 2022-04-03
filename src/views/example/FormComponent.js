import React from "react";

class FormComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }
    handleChangeJobName = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleOnClickSubmit = (event) => {
        event.preventDefault()
        this.props.addComponent({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary,
        })
        console.log('Value form: ', this.state)
    }
    render() {

        return (
            <>
                <form >
                    <label htmlFor="fname">First name:</label ><br />
                    <input
                        type="text"
                        value={this.state.title}
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
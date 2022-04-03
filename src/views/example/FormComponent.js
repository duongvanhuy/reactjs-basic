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
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params')
            return
        }
        this.props.addComponent({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary,
        })
        console.log('Value form: ', this.state)
        this.setState({
            title: '',
            salary: '',
        })
    }
    render() {

        return (
            <>
                <form >
                    <label htmlFor="fname">Job's title:</label ><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeJobName(event)} /><br />
                    <label htmlFor="lname">Salary:</label><br />
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
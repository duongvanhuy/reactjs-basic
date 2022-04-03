import React from 'react'
import ChildComponent from './ChildComponent'
import FormComponent from './FormComponent'

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'teacher', salary: '1000' },
            { id: 'abcJob2', title: 'student', salary: '2000' },
            { id: 'abcJob3', title: 'doctor', salary: '30000' },
        ]

    }
    addComponent = (inp) => {
        this.setState({
            arrJobs: [inp, ...this.state.arrJobs]
        })
    }

    deleteComponent = (job) => {
        console.log(job.id)
        let currentJob = this.state.arrJobs
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }



    render() {
        return (
            <>
                <FormComponent
                    addComponent={this.addComponent}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteComponent={this.deleteComponent}
                />
            </>
        )
    }
}

export default MyComponent
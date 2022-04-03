import React from 'react'
import ChildComponent from './ChildComponent'
import FormComponent from './FormComponent'

class MyComponent extends React.Component {
    state = {

        arrJobs: [
            { id: 'abcJob1', job: 'teacher', address: 'Hà Nội' },
            { id: 'abcJob2', job: 'student', address: 'Hà Nội' },
            { id: 'abcJob3', job: 'doctor', address: 'TP.Hồ Chí Minh' },
        ]

    }



    render() {
        return (
            <>
                <FormComponent />
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
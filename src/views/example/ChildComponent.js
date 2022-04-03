import React from 'react'

class ChildComponent extends React.Component {
    state = {
    }



    render() {
        let { name, age, arrJobs } = this.props
        return (
            <>
                <div className='job-list'>
                    {
                        arrJobs.map((items, index) => {

                            return (
                                <div key={items.id}>
                                    {items.job} -{items.address}
                                </div>
                            )

                        })

                    }

                </div>
            </>
        )
    }
}

export default ChildComponent
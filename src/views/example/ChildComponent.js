import React from 'react'

class ChildComponent extends React.Component {
    state = {
        showJob: false,
    }

    handleOnClickShow = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleOnclickDelete = (job) => {
        this.props.deleteComponent(job)
    }

    render() {
        let { arrJobs } = this.props
        let { showJob } = this.state
        return (
            <>
                {showJob === false ?

                    <div><button onClick={() => this.handleOnClickShow()}>show</button></div>
                    :
                    <>
                        <div className='title-list'>
                            {
                                arrJobs.map((items, index) => {
                                    return (
                                        <div key={items.id}>
                                            {items.title} -{items.salary} <></> <button onClick={() => this.handleOnclickDelete(items)} >xóa</button>
                                        </div>
                                    )

                                })

                            }

                        </div>
                        <div><button onClick={() => this.handleOnClickShow()}>hide</button></div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent
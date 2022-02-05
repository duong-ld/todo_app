import Form from './form';

function AddTask({onStore}) {
    return (
        <>  
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <h2 style={{ fontWeight: 'bold' }}>New Task</h2>
                        <br />
                        <Form action={onStore} actionName={'Store'} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddTask;
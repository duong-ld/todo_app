import Form from './Form';

function NewTask({onStore}) {
    return (
        <>  
            <br />
            <div className="container border pb-3 ml-3 pt-3">
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

export default NewTask;
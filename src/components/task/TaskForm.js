import React, {Component} from 'react';

class TaskForm extends Component{

    state = {
        title: '',
        description: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.title, this.state.description);   
    }

    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Titulo</label>
                    <input 
                    type="text" 
                    onChange={this.onChange}
                    value={this.state.title}
                    name="title"
                    className="form-control" />
                </div>
                <div className="form-group">
                    <label> Observaciones</label>
                    <textarea 
                        className="form-control"
                        onChange={this.onChange}
                        value={this.state.description}
                        name="description">
                    </textarea>
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        )
    }
}

export default TaskForm;
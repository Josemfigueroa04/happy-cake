
const Form = () => {
    return (
           <div className="container">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label" >Correo:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com"/>
                    
                </div>
                
                <div className="mb-3">
                    <label for="Descripcion" className="form-label">Descripcion:</label>
                            
                </div>
                <div className="form-floating">
                    <textarea className="form-control height: 100px" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                    
                </div>
                <button type="submit" className="btn btn-danger m-2">Enviar</button>
            </form>
        </div>
    )
}

export default Form;
import React from "react";


class Informacion extends React.Component {

    render() {
        console.log(this.props.traductor);
        
        return (
            
           
                <div className={this.props.traductor}>
                <h2 className="display-4 text-center pb-3" className="white">Resultados de busqueda</h2>
                <br></br>
                <table className="table table-hover m-0" >
                    <thead>
                        <tr className="danger">
                             
                            <th scope="col">Nombre</th>
                            <th scope="col">Codigo</th>
                            <th scope="col">Numero Ingresado</th>                       
                            <th scope="col">Tipo de linea</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="white">
                             
                            <td> { this.props.country_name} </td>
                            <td> {this.props.country_code} </td>
                            <td> { this.props.number} </td>
                            <td> { this.props.line_type} </td>
                        </tr>
                    </tbody>
                    
                </table>
                </div>
            
        )
    }
}


export default Informacion;
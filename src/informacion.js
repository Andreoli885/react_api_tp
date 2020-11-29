import React from "react";

class Informacion extends React.Component {
    render() {
        return (
            <div className={this.props.traductor}>
                <h2 className="display-4 text-center pb-3" className="white">Resultados de búsqueda</h2>
                <br></br>
                <table className="table table-hover m-0" >
                    <thead>
                        <tr className="danger">

                            <th scope="col">Nombre</th>
                            <th scope="col">Código</th>
                            <th scope="col">Número ingresado</th>
                            <th scope="col">Tipo de línea</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="white">

                            <td> {this.props.country_name} </td>
                            <td> {this.props.country_code} </td>
                            <td> {this.props.number} </td>
                            <td> {this.props.line_type} </td>
                        </tr>
                    </tbody>

                </table>
            </div>

        )
    }
}

export default Informacion;
import { useAllEmployees } from "../../hooks"

const Mainview = () => {

    const allEmployees = useAllEmployees();

    console.log('Employees:', allEmployees?.data?.content);

    return (
        <main>
            <table>
                <th>Nombre completo</th>
                <th>Departamento</th>
                <th>Horario</th>
                <th>Tipo jornada</th>
                {allEmployees?.data?.content?.map((employee) => {
                    return (
                        <tr>
                            <td>{employee.full_name}</td>
                            <td>{employee.department}</td>
                            <td>{employee.shift}</td>
                            <td>{employee.contract_type}</td>
                        </tr>
                    )
                })}
                <tr>
                    <td>Fulanito Martínez Ortega</td>
                    <td>Informática</td>
                    <td>Mañana</td>
                    <td>Completa</td>
                </tr>
            </table>
        </main>
    )
}

export default Mainview
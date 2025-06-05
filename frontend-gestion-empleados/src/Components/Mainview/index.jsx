import { useAllEmployees } from "../../hooks"
import Styled from './styles'

const Mainview = () => {

    const allEmployees = useAllEmployees();

    return (
        <main>
            <h1>Empleados</h1>
            <Styled.Table>
                <th>Nombre completo</th>
                <th>Departamento</th>
                <th>Horario</th>
                <th>Tipo jornada</th>
                {allEmployees?.data?.content?.map((employee) => {
                    return (
                        <tr>
                            <Styled.Td>{employee.full_name}</Styled.Td>
                            <Styled.Td>{employee.department}</Styled.Td>
                            <Styled.Td>{employee.shift}</Styled.Td>
                            <Styled.Td>{employee.contract_type}</Styled.Td>
                        </tr>
                    )
                })}
            </Styled.Table>
        </main>
    )
}

export default Mainview
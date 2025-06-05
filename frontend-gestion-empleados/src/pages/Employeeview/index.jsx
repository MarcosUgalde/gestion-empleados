import { useId } from "../../hooks";
import { useEmployee } from "../../hooks"


const Employeeview = () => {

    const id = useId();

    const employee = useEmployee({employeeId: id});

    return (
        <main>
            <h4>{employee?.data?.content[0]?.full_name}</h4>
            <section>
                <div>
                    <p>Departamento</p>
                    <p>{employee?.data?.content[0]?.department}</p>
                </div>
                <div>
                    <p>Turno</p>
                    <p>{employee?.data?.content[0]?.shift}</p>
                </div>
                <div>
                    <p>Tipo de contrato</p>
                    <p>{employee?.data?.content[0]?.contract_type}</p>
                </div>
            </section>
        </main>
    )
}

export default Employeeview
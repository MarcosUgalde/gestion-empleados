import { useId } from "../../hooks";
import { useEmployee } from "../../hooks"
import { departments, shifts, contractType } from "../../utils";

const Employeeview = () => {

    const id = useId();

    const employee = useEmployee({employeeId: id});
    console.log(departments);
    const currentDepartment = employee?.data?.content[0]?.department;
    const currentShift = employee?.data?.content[0]?.shift;
    const currentContractType = employee?.data?.content[0]?.contract_type;

    return (
        <form>
            <h4>{employee?.data?.content[0]?.full_name}</h4>
            <section>
                <div>
                    <p>Departamento</p>
                    <select defaultValue={currentDepartment}>
                        {departments.map((dept, index) => (
                            <option key={index} value={dept}>
                                {dept}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <p>Turno</p>
                    <select defaultValue={currentShift}>
                        {shifts.map((dept, index) => (
                            <option key={index} value={dept}>
                                {dept}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <p>Tipo de contrato</p>
                    <select defaultValue={currentContractType}>
                        {contractType.map((dept, index) => (
                            <option key={index} value={dept}>
                                {dept}
                            </option>
                        ))}
                    </select>
                </div>
            </section>
            <button>Actualizar</button>
        </form>
    )
}

export default Employeeview
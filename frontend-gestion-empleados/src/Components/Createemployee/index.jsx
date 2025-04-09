import { useForm } from "react-hook-form"
import { useNewEmployee } from "../../hooks"

export const Createemployee = () => {

    const { register, handleSubmit } = useForm()
const doInsertion = useNewEmployee()
/**
const [selectedProduct, setSelectedProduct] = useState('')
const [lightOptions, setLightOptions] = useState('')
const [gasOptions, setGasOptions] = useState('')

const handleProductSelect = (selectedValue) => {
    setSelectedProduct(selectedValue);
    setLightOptions(selectedValue === 'Luz' || selectedValue === 'Dual');
    setGasOptions(selectedValue === 'Gas' || selectedValue === 'Dual');
  };
   */
    return (
        <>
            <h1>Insert a new employee</h1>
            <form onSubmit={handleSubmit(doInsertion)}>
                <label htmlFor="full_name">Full name</label>
                <input type="text" name="full_name" id="full_name" {...register('full_name', {required: true})} />
                <label htmlFor="department">Department</label>
                <select type="text" name="department" id="department" {...register('department', {required: true})}>
                    <option value="Ventas">Ventas</option>
                    <option value="Administración">Administración</option>
                    <option value="Informática">Informática</option>
                    <option value="Finanzas">Finanzas</option>
                </select>
                <label htmlFor="shift">Shift</label>
                <select type="text" name="shift" id="shift" {...register('shift', {required: true})}>
                    <option value="Mañana">Mañana</option>
                    <option value="Tarde">Tarde</option>
                </select>
                <label htmlFor="contract_type">Contract type</label>
                <select name="contract_type" id="contract_type" {...register('contract_type', {required: true})}>
                    <option value="Indefinido">Indefinido</option>
                    <option value="Temporal">Temporal</option>
                </select>
                <input type="submit" />
            </form>
        </>
    )
}

export default Createemployee
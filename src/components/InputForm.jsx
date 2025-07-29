const InputForm = (props) => {
    return (
        <div className="w-full px-4 mb-6">
            <label
                htmlFor={props.subKey}
                className="text-base font-bold text-primary"
            >
                {props.label}
            </label>
            <input
                type={props.type}
                id={props.subKey}
                className="w-full bg-slate-100 text-dark p-3 rounded-md focus:outline-none focus:ring-1 border-primary"
            />
        </div>
    )
}

export default InputForm
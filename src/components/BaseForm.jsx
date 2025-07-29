const BaseForm = (props) => {
    return (
        <div className="w-full py-5 px-3 bg-slate-300">
            <form action="" method="GET">
                {props.children}
            </form>
        </div>
    )
}

export default BaseForm

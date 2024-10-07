interface IITem {
    value: string
    title: string
    onValue: (value: string) => void
    err: string
    description: string
}

const Item = (params: IITem): JSX.Element => {

    return (
        <div className="item">
            <p className={params.value.length === 0 ? "err" : ""}>{params.title}*</p>

            <input
                type="text"
                value={params.value}
                defaultValue={params.value}
                onChange={({ target }) => params.onValue(target.value)}
            />
            <small className={params.value.length === 0 ? "err description" : "description"}>
                {params.value.length === 0 ? params.err : params.description}
            </small>
        </div>
    )
}

export default Item
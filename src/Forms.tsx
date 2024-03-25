import {useState} from "react";

type FormsProps = {
    send: (topic: string, text: string) => void
}

type  FormInputeType = {
    topic: string,
    msg: string,
}

function Forms(props: FormsProps) {
    const [form, setForm] = useState<FormInputeType>( {
        topic: "",
        msg: "",
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    function handleSubmit(event: React.FormEvent<HTMLFormElement>)  {
        event.preventDefault();
        props.send(form.topic, form.msg);
        setForm({
            ...form,
            msg: "",
        });
    }

    return <form className={"form"} onSubmit={handleSubmit}>
        <input className={"Input-form"} name={"topic"} placeholder={"topic..."} onChange={handleChange} required={true}/>
        <input className={"Input-form"} name={"msg"} placeholder={"message..."} onChange={handleChange} value={form.msg} required={true}/>

        <button className={"button"} type={"submit"}>Send</button>
    </form>
}

export default Forms;
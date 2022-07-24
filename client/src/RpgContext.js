import React from "react";
import { useNavigate } from "react-router-dom";

const RpgContext = React.createContext()

function RpgContextProvider(props) {

    const navigate = useNavigate()

    const [formData, setFormData] = React.useState({
        class: "",
        name: "",
        level: "",
        hp: "",
        attk: "",
        def: "",
    })

    const [characters, setCharacters] = React.useState([]);

    const app = {

        //home component
        home: {
            formData: formData,
            setFormData,

            handleChange(e) {
                e.preventDefault();
                const { name, value } = e.target;
                setFormData(prev => ({
                    ...prev,
                    [name]: value
                }))
            },

            submitForm(e) {
                e.preventDefault();

                fetch('/character', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify(formData)
                }).then(res => res.json())
                    .then((data) => {
                        setFormData({
                            class: "",
                            name: "",
                            level: "",
                            hp: "",
                            attk: "",
                            def: "",
                        })

                        setCharacters(prev => ([
                            ...prev,
                            data
                        ]))

                        navigate('saved');
                    })
            }
        },

        saved: {
            characters: characters,
            setCharacters
        }
    }

    React.useEffect(() => {
        fetch('/character')
            .then(res => res.json())
            .then(res => {
                setCharacters(res)
            })
    }, [])

    return (
        <RpgContext.Provider value={app}>
            {props.children}
        </RpgContext.Provider>
    )
}

export { RpgContextProvider as RpgProvider, RpgContext };
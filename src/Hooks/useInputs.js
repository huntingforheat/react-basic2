// Custom Hook
// 반복적인 input을 관리하는 코드를 훅으로
import React, { useCallback, useState } from "react";

function useInputs(initialForm) {

    const [form, setForm] = useState(initialForm)

    const onChange = useCallback(e => {
        const {name, value} = e.target;     // e.target에다가 key:value, name:value 지정
        setForm(form => ({...form, [name]: value}));
    }, [])

    const reset = useCallback(() => setForm(initialForm), [initialForm])
    return [form, onChange, reset];
}

export default useInputs;
import React, { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state, 
        [action.name]: action.value
    };
}

const Info_useReducer = () => {
    const [ state, dispatch ] = useReducer(reducer, {
        name: '',
        nickname: ''
    });

    const { name, nickname } = state;

    const onChange = e => {
        dispatch(e.target);
    };

    return (
        <div style={{ border:'solid 1px darkblue', padding:'20px', margin:'10px'}}>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>

            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info_useReducer;
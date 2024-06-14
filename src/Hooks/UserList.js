import React from 'react'

// User 컴포넌트
const User = React.memo(function User({ user, onRemove, onToggle }) {

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',  /* 마우스 커서 가져다 대면 손가락모양으로 바뀜. */
                    color: user.active ? 'green' : 'black'  /* user.active가 true면 green, false면 black 처리 */
                }}
                onClick={() => onToggle(user.id)}   /* 클릭하면 onToggle이 실행됨. */
            >{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
});

function UserList({users, onRemove, onToggle}) {

    return (
        <div>
            {users.map((user) => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))} 
        </div>
    );
}

export default React.memo(UserList);

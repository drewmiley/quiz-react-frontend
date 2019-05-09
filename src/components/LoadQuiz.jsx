import React, { useState } from 'react';

// const friendList = [
//   { id: 1, name: 'Phoebe' },
//   { id: 2, name: 'Rachel' },
//   { id: 3, name: 'Ross' },
// ];
//
// function ChatRecipientPicker() {
//   const [recipientID, setRecipientID] = useState(1);
//   const isRecipientOnline = useFriendStatus(recipientID);
//
//   return (
//     <>
//       <Circle color={isRecipientOnline ? 'green' : 'red'} />
//       <select
//         value={recipientID}
//         onChange={e => setRecipientID(Number(e.target.value))}
//       >
//         {friendList.map(friend => (
//           <option key={friend.id} value={friend.id}>
//             {friend.name}
//           </option>
//         ))}
//       </select>
//     </>
//   );
// }

export default props => {
    const [value, setValue] = useState('');

    const onChange = e => setValue(e.target.value);

    const onClick = () => props.loadQuiz(value);

    return (
        <div id="quiz-loader">
            {props.validQuizCodes.map(code =>
                <>
                    <p>{code}</p>
                    <p>CHANGE THIS INPUT TO A SELECT</p>
                </>
            )}
            <input id="code" type="text" value={value} onChange={onChange} />
            <button id="load" onClick={onClick}>Load</button>
        </div>
    );
}

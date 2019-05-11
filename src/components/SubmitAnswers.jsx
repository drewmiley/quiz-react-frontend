import React, { useState } from 'react';

import InputAction from './InputAction';

export default props => {
    return (
        <InputAction
            id="submit-answers"
            buttonText="Submit Answers"
            action={props.submitAnswers}
        />
    );
}

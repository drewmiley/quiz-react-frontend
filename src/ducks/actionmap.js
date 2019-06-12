import * as actiontypes from './actiontypes';
import * as stateupdaters from './stateupdaters';

export default {
    [actiontypes.LOAD_QUIZ]: stateupdaters.loadQuiz,
    [actiontypes.GENERATE_QUIZ]: stateupdaters.generateQuiz,
    [actiontypes.SET_ANSWER]: stateupdaters.setAnswer,
    [actiontypes.SUBMIT_ANSWERS]: stateupdaters.submitAnswers,
    [actiontypes.GET_LEADERBOARDS]: stateupdaters.getLeaderboards,
    [actiontypes.GET_VALIDQUIZCODES]: stateupdaters.getValidQuizCodes,
    [actiontypes.GET_VALIDQUIZOPTIONS]: stateupdaters.getValidQuizOptions
}

import {router} from '../index.mjs';
import {
    countComments,
    countReplies,
    createComment,
    deleteComment,
    listComments,
    listPublicComments,
    listPublicReplies,
    listReplies,
} from '../procedures/comments/crud.mjs';
import {clearVote, vote} from '../procedures/comments/voting.mjs';

export const commentRouter = router({
    count: countComments,
    list: listComments,
    listPublic: listPublicComments,

    countReplies: countReplies,
    listReplies: listReplies,
    listPublicReplies: listPublicReplies,

    create: createComment,
    delete: deleteComment,

    vote: vote,
    clearVote: clearVote,
});

import users from "../mocks/users.json";

const currentUserId = 1;

export const currentUser = users.find((user) => user.id === currentUserId);

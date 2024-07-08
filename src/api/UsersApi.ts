import { executeQuery } from "../db/db";

export class UsersApi {
  url = "api/users";

  getAllUsers = async () => {
    const query = "SELECT * FROM users;";
    return await executeQuery(query);
  };
}

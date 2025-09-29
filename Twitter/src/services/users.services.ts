import { User } from "~/models/schemas/users.schema";
import databasesService from "./databases.services";

class UsersService {
  async register(payload: {email: string, password: string}) {
    const result = await databasesService.users.insertOne(new User({...payload}))
    return result
  }
}

const usersService = new UsersService()
export default usersService
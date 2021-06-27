import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error("User does not exist!");
    }

    if (!userExists.admin) {
      throw new Error("User provided is not a admin!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };

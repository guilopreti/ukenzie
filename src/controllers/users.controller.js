import createUserService from "../services/users/createUser.service";

class UserController {
  async store(request, response) {
    const { email, name, password } = request.body;

    try {
      const user = await createUserService({ name, email, password });

      return response.status(201).json(user);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  async index(request, response) {}
}

export default UserController;

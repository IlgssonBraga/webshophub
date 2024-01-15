import { UserService } from './user.service';
import { userRepository } from './user.repository';

// Importe a interface IUser
import { IUser } from './DTOs/UserDTO';

// Mock do userRepository
jest.mock('./user.repository', () => ({
  userRepository: {
    find: jest.fn(),
  },
}));

describe('UserService', () => {
  // Limpeza do mock após cada teste
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar todos os usuários', async () => {
    // Dados de exemplo
    const mockUsers: IUser[] = [
      {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        username: 'johndoe',
        password: 'password123',
      },
      // Adicione outros usuários conforme necessário
    ];

    // Mock da função find do userRepository
    (userRepository.find as jest.Mock).mockResolvedValueOnce(mockUsers);

    // Instancie o UserService
    const userService = new UserService();

    // Chame o método findAll
    const result = await userService.findAll();

    // Verifique se o userRepository.find foi chamado corretamente
    expect(userRepository.find).toHaveBeenCalled();

    // Verifique se o resultado é o esperado
    expect(result).toEqual(mockUsers);
  });
});

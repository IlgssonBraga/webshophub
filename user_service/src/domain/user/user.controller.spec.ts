import { Request, Response } from 'express';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  it('should return users', async () => {
    // Mocking Express Request and Response objects
    const req = {} as Request;
    const res = {
      json: jest.fn(), 
    } as unknown as Response;

    // Mocking UserService
    const userServiceMock = {
      findAll: jest.fn().mockResolvedValue(['user1', 'user2']),
    } as unknown as UserService;

    const userController = new UserController(userServiceMock);

    // Calling the users method
    await userController.users(req, res);

    // Assertions
    expect(userServiceMock.findAll).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(['user1', 'user2']);
  });
});
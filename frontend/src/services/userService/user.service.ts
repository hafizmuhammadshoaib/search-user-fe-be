import { USER_ENDPOINT } from '../../constants';
import { apiClient } from '../httpClient';
import { Users } from './user.type';

export class UserService {
  public static async findUsers(search?: string): Promise<Users> {
    const searchString = search ? search : '';
    const data: Users = await apiClient({
      url: USER_ENDPOINT,
      method: 'GET',
      params: { search: searchString },
    });
    return data;
  }
}

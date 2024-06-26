import { TokenService } from '@loopback/authentication';
import { Credentials, MyUserService, User, UserRepository } from '@loopback/authentication-jwt';
import { Filter } from '@loopback/repository';
import { SchemaObject } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
export declare class NewUserRequest extends User {
    password: string;
}
export declare const CredentialsRequestBody: {
    description: string;
    required: boolean;
    content: {
        'application/json': {
            schema: SchemaObject;
        };
    };
};
export declare class UserController {
    jwtService: TokenService;
    userService: MyUserService;
    user: UserProfile;
    protected userRepository: UserRepository;
    constructor(jwtService: TokenService, userService: MyUserService, user: UserProfile, userRepository: UserRepository);
    deleteUserById(id: string): Promise<void>;
    deleteUsersById(ids: string[]): Promise<void>;
    login(credentials: Credentials): Promise<{
        id: string;
        token: string;
        username: string;
        emailVerified: boolean;
    }>;
    whoAmI(currentUserProfile: UserProfile): Promise<string>;
    signUp(newUserRequest: NewUserRequest): Promise<User>;
    find(filter?: Filter<User>): Promise<User[]>;
    findByEventId(username: string): Promise<User[]>;
}

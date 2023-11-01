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
    login(credentials: Credentials): Promise<{
        id: string;
        token: string;
        usertype: string;
        emailVerified: string;
    }>;
    whoAmI(currentUserProfile: UserProfile): Promise<string>;
    signUp(newUserRequest: NewUserRequest): Promise<User>;
    find(filter?: Filter<User>): Promise<User[]>;
    findByEventId(usertype: string): Promise<User[]>;
    checkEmailVerified(id: string): Promise<{
        emailVerified: string;
    }>;
    updateEmailVerified(id: string, updateData: {
        emailVerified: string;
    }): Promise<User>;
}

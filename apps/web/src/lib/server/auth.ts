import { Lucia } from "lucia";
import { dev } from "$app/environment";


interface Adapter {
	deleteExpiredSessions(): Promise<void>;
	deleteSession(sessionId: string): Promise<void>;
	deleteUserSessions(userId: UserId): Promise<void>;
	getSessionAndUser(
		sessionId: string
	): Promise<[session: DatabaseSession | null, user: DatabaseUser | null]>;
	getUserSessions(userId: UserId): Promise<DatabaseSession[]>;
	setSession(session: DatabaseSession): Promise<void>;
	updateSessionExpiration(sessionId: string, expiresAt: Date): Promise<void>;
}

const adapter: Adapter = {
    deleteExpiredSessions: function (): Promise<void> {
        throw new Error("Function not implemented.");
    },
    deleteSession: function (sessionId: string): Promise<void> {
        throw new Error("Function not implemented.");
    },
    deleteUserSessions: function (userId: UserId): Promise<void> {
        throw new Error("Function not implemented.");
    },
    getSessionAndUser: function (sessionId: string): Promise<[session: any, user: any]> {
        throw new Error("Function not implemented.");
    },
    getUserSessions: function (userId: UserId): Promise<DatabaseSession[]> {
        throw new Error("Function not implemented.");
    },
    setSession: function (session: DatabaseSession): Promise<void> {
        throw new Error("Function not implemented.");
    },
    updateSessionExpiration: function (sessionId: string, expiresAt: Date): Promise<void> {
        throw new Error("Function not implemented.");
    }
}


export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	},
	getUserAttributes: (attributes) => {
		return {
			// attributes has the type of DatabaseUserAttributes
			username: attributes.username
		};
	}
});

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	username: string;
}
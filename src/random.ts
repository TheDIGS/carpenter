export {};

/**
 * The options for creating a new user.
 */
interface UserOptions {
	name: string;
	displayName?: string;
}

/**
 * Represents a user.
 */
class User {
	/**
	 * The user's name.
	 */
	public name: string;

	/**
	 * The user's optional, changeable display name.
	 */
	public displayName: string;

	/**
	 * The user's numerical ID, unchangeable and randomly-generated on instance.
	 */
	readonly id: number;

	public constructor(options: UserOptions) {
		this.name = options.name;
		options.displayName
			? (this.displayName = options.displayName)
			: (this.displayName = null);
		this.id = Math.floor(Math.random() * 20);
	}
}

const user = new User({ name: 'thedigs' });

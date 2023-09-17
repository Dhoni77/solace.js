export default interface IUser {
    accent_color?: number | null;
    avatar: string | null;
    avatar_decoration?: string | null;
    banner?: string | null;
    bot?: boolean;
    discriminator: string;
    email?: string | null;
    flags?: number;
    global_name: string | null;
    id: string;
    locale?: string;
    mfa_enabled?: boolean;
    premium_type?: number;
    public_flags?: number;
    system?: boolean;
    username: string;
    verified?: boolean;
}

import { getUser } from "@/actions/user-action";
import { UserSchema } from "@/schema/user-schema";
import { createStore } from "zustand/vanilla";

export type LayoutState = {
    user: UserSchema.User;
    isLoading: boolean;
};

export type LayoutActions = {
    setUser: (user: UserSchema.User) => void;
    fetchUser: (url: string) => Promise<void>;
};

export type LayoutStore = LayoutState & LayoutActions;

export const defaultInitialState: LayoutState = {
    user: {
        id: "",
        name: "",
        aboutMe: "",
        avatar: "",
    },
    isLoading: false,
};

export const createLayoutStore = (
    initialState: LayoutState = defaultInitialState
) => {
    return createStore<LayoutStore>()((set) => ({
        ...initialState,
        setUser: (user: UserSchema.User) => set({ user }),
        fetchUser: async (id) => {
            set({ isLoading: true });
            try {
                const data: UserSchema.User = await getUser(id) as UserSchema.User;
                set({ user: data, isLoading: false });
            } catch (error) {
                console.error("Failed to fetch user:", error);
                set({ isLoading: false });
            }
        },
    }));
};

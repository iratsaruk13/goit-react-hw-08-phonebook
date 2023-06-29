import { authReducer } from "./Auth/sliceAuth";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(authPersistConfig, authReducer);

export const reducer = {
  contacts: contactsReducer,
  filters: filterReducer,
  auth: persistedReducer,
};
